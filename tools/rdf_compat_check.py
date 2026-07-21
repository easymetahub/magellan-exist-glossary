#!/usr/bin/env python3
"""Validate RDF/XML files against the glossary app's practical import expectations."""

from __future__ import annotations

import argparse
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

RDF_NS = "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
SKOS_NS_PRIMARY = "http://www.w3.org/2008/05/skos#"
SKOS_NS_ALT = "http://www.w3.org/2004/02/skos/core#"


def qname(namespace: str, local: str) -> str:
    return f"{{{namespace}}}{local}"


def local_name(tag: str) -> str:
    if "}" in tag:
        return tag.rsplit("}", 1)[1]
    return tag


def validate_file(path: Path) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    if path.suffix.lower() != ".rdf":
        warnings.append("filename does not end with .rdf (UI upload filter expects .rdf)")

    try:
        root = ET.parse(path).getroot()
    except ET.ParseError as exc:
        return [f"XML parse error: {exc}"], warnings

    if root.tag != qname(RDF_NS, "RDF"):
        errors.append("root element must be rdf:RDF")
        return errors, warnings

    children = list(root)
    if not children:
        errors.append("rdf:RDF has no child elements")
        return errors, warnings

    skos_concepts = [node for node in children if node.tag == qname(SKOS_NS_PRIMARY, "Concept")]

    if not skos_concepts:
        alt_concepts = [node for node in children if node.tag == qname(SKOS_NS_ALT, "Concept")]
        if alt_concepts:
            warnings.append(
                "found SKOS concepts in 2004 namespace; app indexes are tuned for 2008/05 namespace"
            )
        else:
            warnings.append("no skos:Concept entries found in rdf:RDF")

    for index, concept in enumerate(skos_concepts, start=1):
        about = concept.attrib.get(qname(RDF_NS, "about"), "").strip()
        if not about:
            errors.append(f"Concept #{index} is missing rdf:about")

        pref_labels = [c for c in list(concept) if c.tag == qname(SKOS_NS_PRIMARY, "prefLabel")]
        if not pref_labels:
            errors.append(f"Concept #{index} ({about or 'no id'}) is missing skos:prefLabel")

    # Informational check for relations expected by the UI/facets.
    relation_keys = {"definition", "altLabel", "broader", "narrower", "related", "inScheme", "scopeNote"}
    present_relations = {local_name(c.tag) for concept in skos_concepts for c in list(concept)}
    missing_common = sorted(relation_keys - present_relations)
    if missing_common:
        warnings.append("optional SKOS fields not found: " + ", ".join(missing_common))

    return errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Check if RDF/XML files are likely to work in emh-exist-glossary uploads."
    )
    parser.add_argument("rdf_files", nargs="+", help="One or more RDF files to validate")
    args = parser.parse_args()

    failed = False
    for raw_path in args.rdf_files:
        path = Path(raw_path)
        if not path.exists():
            print(f"[ERROR] {path}: file not found")
            failed = True
            continue

        errors, warnings = validate_file(path)
        print(f"\n{path}:")
        if errors:
            failed = True
            for message in errors:
                print(f"  [ERROR] {message}")
        else:
            print("  [OK] Required structure checks passed")

        for message in warnings:
            print(f"  [WARN] {message}")

    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())

