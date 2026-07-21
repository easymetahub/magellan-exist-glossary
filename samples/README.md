# Sample RDF files

This folder contains RDF/XML files you can upload from the administration UI.

## Included datasets

- `IVOAT.rdf` - astronomy vocabulary sample used by this project.
- `W3C-SKOS-Primer-Animal.rdf` - free sample adapted from the W3C SKOS Primer examples.

## Quick compatibility check

Run the local checker before upload:

```bash
python3 tools/rdf_compat_check.py samples/W3C-SKOS-Primer-Animal.rdf
```

You can validate multiple files in one command.

