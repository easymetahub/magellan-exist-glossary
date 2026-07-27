#!/usr/bin/env python3
"""Minimal RAG orchestrator adapter for the glossary search endpoint.

This script calls `modules/search.xq` and assembles grounded context blocks from
`results[].concept` and `results[].snippets` so you can pass the output to an
LLM prompt template.
"""

from __future__ import annotations

import argparse
import json
import sys
import urllib.parse
import urllib.request
from typing import Any, Dict, Iterable, List


def _as_list(value: Any) -> List[str]:
    if value is None:
        return []
    if isinstance(value, str):
        return [value]
    if isinstance(value, list):
        return [str(v) for v in value if v is not None]
    return [str(value)]


def _join_relation_names(items: Iterable[Dict[str, Any]]) -> str:
    names = [str(item.get("name", "")).strip() for item in items if isinstance(item, dict)]
    names = [name for name in names if name]
    return ", ".join(names)


def fetch_search(base_url: str, q: str, facets: str, page_length: int) -> Dict[str, Any]:
    params = {
        "q": q,
        "start": "1",
        "pagelength": str(page_length),
    }
    if facets:
        params["facets"] = facets

    url = f"{base_url.rstrip('/')}/modules/search.xq?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"Accept": "application/json"}, method="GET")
    with urllib.request.urlopen(req, timeout=30) as response:
        payload = response.read().decode("utf-8", errors="replace")
    data = json.loads(payload)
    if not isinstance(data, dict):
        raise ValueError("search payload is not a JSON object")
    return data


def build_context_blocks(search_payload: Dict[str, Any], max_blocks: int) -> List[Dict[str, str]]:
    results = search_payload.get("results", [])
    if not isinstance(results, list):
        return []

    blocks: List[Dict[str, str]] = []
    for row in results[:max_blocks]:
        if not isinstance(row, dict):
            continue
        concept = row.get("concept", {})
        if not isinstance(concept, dict):
            concept = {}

        term = concept.get("term")
        about = concept.get("about")
        definition = " | ".join(_as_list(concept.get("definition")))
        alt_labels = ", ".join(_as_list(concept.get("altLabel")))

        broader = _join_relation_names(concept.get("broader", [])) if isinstance(concept.get("broader"), list) else ""
        narrower = _join_relation_names(concept.get("narrower", [])) if isinstance(concept.get("narrower"), list) else ""
        related = _join_relation_names(concept.get("related", [])) if isinstance(concept.get("related"), list) else ""

        snippets = row.get("snippets", [])
        snippets_text = "\n".join([str(s) for s in snippets[:2]]) if isinstance(snippets, list) else ""

        lines = [
            f"Term: {term or ''}",
            f"About: {about or ''}",
            f"Definition: {definition}",
            f"Alt labels: {alt_labels}",
            f"Broader: {broader}",
            f"Narrower: {narrower}",
            f"Related: {related}",
        ]
        if snippets_text:
            lines.append(f"Snippets:\n{snippets_text}")

        blocks.append(
            {
                "title": f"{term or 'concept'} ({row.get('glossary', '')})",
                "text": "\n".join(lines).strip(),
                "uri": str(row.get("uri", "")),
            }
        )

    return blocks


def parse_args(argv: List[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Fetch glossary search results and build RAG-ready context blocks.")
    parser.add_argument("--base-url", default="http://localhost:8080/exist/apps/magellan-glossary", help="Base app URL")
    parser.add_argument("--query", required=True, help="Search query text")
    parser.add_argument("--facets", default="", help='Facet token string (example: Glossary:IVOAT~~Broader:%%23star)')
    parser.add_argument("--pagelength", type=int, default=5, help="Number of results to request")
    parser.add_argument("--max-blocks", type=int, default=5, help="Max context blocks to emit")
    parser.add_argument("--output", choices=["json", "prompt"], default="json", help="Output as JSON blocks or a prompt-ready text blob")
    return parser.parse_args(argv)


def main(argv: List[str]) -> int:
    args = parse_args(argv)
    try:
        payload = fetch_search(args.base_url, args.query, args.facets, args.pagelength)
    except Exception as exc:  # pragma: no cover - CLI error path
        print(f"ERROR: search request failed: {exc}", file=sys.stderr)
        return 1

    blocks = build_context_blocks(payload, args.max_blocks)

    if args.output == "json":
        print(json.dumps({"query": args.query, "contextBlocks": blocks}, indent=2, ensure_ascii=False))
    else:
        print("Use the following grounded context when answering the question:\n")
        for idx, block in enumerate(blocks, start=1):
            print(f"[{idx}] {block['title']}")
            print(block["text"])
            if block.get("uri"):
                print(f"Source: {block['uri']}")
            print()

    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))


