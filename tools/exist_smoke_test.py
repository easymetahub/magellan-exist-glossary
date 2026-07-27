#!/usr/bin/env python3
"""Basic smoke checks for deployed eXist-db glossary app endpoints.

This script validates the retrieval/admin-adjacent endpoints used by the UI and
RAG retrieval integration docs.
"""

from __future__ import annotations

import argparse
import base64
import json
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Dict, List, Optional, Tuple


class SmokeFailure(Exception):
    """Raised when a smoke test fails."""


def _auth_header(username: Optional[str], password: Optional[str]) -> Dict[str, str]:
    if not username:
        return {}
    token = base64.b64encode(f"{username}:{password or ''}".encode("utf-8")).decode("ascii")
    return {"Authorization": f"Basic {token}"}


def fetch_json(url: str, username: Optional[str], password: Optional[str]) -> Tuple[Any, int, float]:
    headers = {"Accept": "application/json"}
    headers.update(_auth_header(username, password))
    req = urllib.request.Request(url, headers=headers, method="GET")
    t0 = time.time()
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            body = response.read().decode("utf-8", errors="replace")
            elapsed_ms = (time.time() - t0) * 1000
            return json.loads(body), response.status, elapsed_ms
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise SmokeFailure(f"HTTP {exc.code} from {url}: {body[:300]}") from exc
    except urllib.error.URLError as exc:
        raise SmokeFailure(f"Connection error for {url}: {exc.reason}") from exc
    except json.JSONDecodeError as exc:
        raise SmokeFailure(f"Non-JSON response from {url}: {exc}") from exc


def assert_keys(obj: Dict[str, Any], keys: List[str], label: str) -> None:
    missing = [key for key in keys if key not in obj]
    if missing:
        raise SmokeFailure(f"{label} missing keys: {', '.join(missing)}")


def run_search_check(base_url: str, username: Optional[str], password: Optional[str]) -> str:
    params = urllib.parse.urlencode({"q": "aberration", "start": "1", "pagelength": "5"})
    url = f"{base_url}/modules/search.xq?{params}"
    payload, status, elapsed_ms = fetch_json(url, username, password)
    if not isinstance(payload, dict):
        raise SmokeFailure("search payload is not a JSON object")
    assert_keys(payload, ["total", "available", "facets", "results"], "search")
    if not isinstance(payload["facets"], list):
        raise SmokeFailure("search.facets is not an array")
    if not isinstance(payload["results"], list):
        raise SmokeFailure("search.results is not an array")
    return f"search.xq OK ({status}, {elapsed_ms:.1f} ms, results={len(payload['results'])})"


def _facet_counts(payload: Dict[str, Any]) -> Dict[str, Dict[str, int]]:
    """Flatten facet payload into {facet-name: {value-name: count}} for comparisons."""
    result: Dict[str, Dict[str, int]] = {}
    for facet in payload.get("facets", []):
        if not isinstance(facet, dict):
            continue
        name = facet.get("name")
        if not isinstance(name, str) or not name:
            continue
        values: Dict[str, int] = {}
        for section in ("values", "extvalues"):
            items = facet.get(section, [])
            if not isinstance(items, list):
                continue
            for item in items:
                if not isinstance(item, dict):
                    continue
                value_name = item.get("name")
                count = item.get("count")
                if isinstance(value_name, str) and isinstance(count, int):
                    values[value_name] = count
        result[name] = values
    return result


def run_pagination_facet_regression(
    base_url: str,
    username: Optional[str],
    password: Optional[str],
    q: str,
    page_length: int,
) -> str:
    """Ensure pagination and facet values remain stable across pages for the same query."""
    params_page_1 = urllib.parse.urlencode(
        {"q": q, "start": "1", "pagelength": str(page_length)}
    )
    params_page_2 = urllib.parse.urlencode(
        {"q": q, "start": str(page_length + 1), "pagelength": str(page_length)}
    )

    payload1, status1, elapsed_ms1 = fetch_json(
        f"{base_url}/modules/search.xq?{params_page_1}", username, password
    )
    payload2, status2, elapsed_ms2 = fetch_json(
        f"{base_url}/modules/search.xq?{params_page_2}", username, password
    )

    if not isinstance(payload1, dict) or not isinstance(payload2, dict):
        raise SmokeFailure("pagination regression payload is not a JSON object")

    assert_keys(payload1, ["total", "facets", "results"], "pagination page1")
    assert_keys(payload2, ["total", "facets", "results"], "pagination page2")

    total = payload1.get("total")
    if not isinstance(total, int):
        raise SmokeFailure("pagination page1.total is not an integer")
    if payload2.get("total") != total:
        raise SmokeFailure("search total differs between pages for the same query")

    results1 = payload1.get("results", [])
    results2 = payload2.get("results", [])
    if not isinstance(results1, list) or not isinstance(results2, list):
        raise SmokeFailure("pagination results payload is not an array")

    expected_first = min(page_length, total)
    if len(results1) != expected_first:
        raise SmokeFailure(
            f"page1 result count mismatch: expected {expected_first}, got {len(results1)}"
        )

    expected_second = min(page_length, max(total - page_length, 0))
    if len(results2) != expected_second:
        raise SmokeFailure(
            f"page2 result count mismatch: expected {expected_second}, got {len(results2)}"
        )

    for idx, item in enumerate(results1, start=1):
        if not isinstance(item, dict) or item.get("index") != idx:
            raise SmokeFailure("page1 indices are not sequential from start=1")

    for idx, item in enumerate(results2, start=page_length + 1):
        if not isinstance(item, dict) or item.get("index") != idx:
            raise SmokeFailure("page2 indices are not sequential from start=pagelength+1")

    facets1 = _facet_counts(payload1)
    facets2 = _facet_counts(payload2)
    if facets1 != facets2:
        raise SmokeFailure("facet counts differ across pages for the same query")

    return (
        "pagination/facets regression OK "
        f"(p1={status1},{elapsed_ms1:.1f} ms; p2={status2},{elapsed_ms2:.1f} ms; total={total})"
    )


def run_glossaries_check(base_url: str, username: Optional[str], password: Optional[str]) -> str:
    url = f"{base_url}/modules/glossaries.xq"
    payload, status, elapsed_ms = fetch_json(url, username, password)
    if not isinstance(payload, list):
        raise SmokeFailure("glossaries payload is not a JSON array")
    return f"glossaries.xq OK ({status}, {elapsed_ms:.1f} ms, glossaries={len(payload)})"


def run_whoami_check(base_url: str, username: Optional[str], password: Optional[str]) -> str:
    url = f"{base_url}/modules/who-am-i.xq"
    payload, status, elapsed_ms = fetch_json(url, username, password)
    if not isinstance(payload, dict):
        raise SmokeFailure("who-am-i payload is not a JSON object")
    assert_keys(payload, ["id", "groups"], "who-am-i")
    if not isinstance(payload["groups"], list):
        raise SmokeFailure("who-am-i.groups is not an array")
    return f"who-am-i.xq OK ({status}, {elapsed_ms:.1f} ms, user={payload.get('id')})"


def parse_args(argv: List[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Smoke test key eXist-db glossary endpoints.")
    parser.add_argument(
        "--base-url",
        default="http://localhost:8080/exist/apps/magellan-glossary",
        help="Base app URL (default: %(default)s)",
    )
    parser.add_argument("--username", help="Optional basic-auth username")
    parser.add_argument("--password", help="Optional basic-auth password")
    parser.add_argument(
        "--regression-query",
        default="",
        help="Search query used for pagination/facet regression check (default: empty/all-docs query)",
    )
    parser.add_argument(
        "--regression-page-length",
        type=int,
        default=5,
        help="Page length for pagination/facet regression check (default: %(default)s)",
    )
    return parser.parse_args(argv)


def main(argv: List[str]) -> int:
    args = parse_args(argv)
    base_url = args.base_url.rstrip("/")

    checks = [
        ("search", run_search_check),
        ("glossaries", run_glossaries_check),
        ("who-am-i", run_whoami_check),
        (
            "pagination-facets-regression",
            lambda base_url, username, password: run_pagination_facet_regression(
                base_url,
                username,
                password,
                q=args.regression_query,
                page_length=args.regression_page_length,
            ),
        ),
    ]

    if args.regression_page_length < 1:
        print("--regression-page-length must be >= 1")
        return 2

    failures: List[str] = []
    print(f"Running smoke tests against: {base_url}")

    for label, check in checks:
        try:
            print(f"- {check(base_url, args.username, args.password)}")
        except SmokeFailure as exc:
            failures.append(f"{label}: {exc}")
            print(f"- {label} FAILED: {exc}")

    if failures:
        print("\nSmoke test failures:")
        for item in failures:
            print(f"  - {item}")
        return 1

    print("\nAll smoke tests passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

