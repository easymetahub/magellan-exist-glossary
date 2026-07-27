# Customization Checklist

Use this checklist when adapting this repository into a new eXist-db search application.

## 1) Define your target model

- [ ] Define the business/domain scope (what users search for).
- [ ] Define required search fields and facet fields.
- [ ] Define expected relationship navigation behavior (for example broader/narrower/related).
- [ ] Confirm your RDF/XML sources (SKOS, SKOS-XL, or both).

## 2) Prepare and validate data

- [ ] Place candidate sample files in `samples/`.
- [ ] Validate RDF/XML compatibility before upload.

```bash
cd /Users/lcahlander/IdeaProjects/emh-exist-glossary
python3 tools/rdf_compat_check.py samples/*.rdf
```

- [ ] Record known mapping exceptions (labels, language tags, relationship gaps).

## 3) Configure indexing for search/facets

- [ ] Update index settings in `src/main/resources/collection.xconf`.
- [ ] Ensure all facetable fields are indexed.
- [ ] Ensure full-text search targets the intended fields.
- [ ] Re-check indexing assumptions after loading real data volume.

## 4) Customize backend search behavior

- [ ] Update domain-specific mapping/query logic in `src/main/xquery/modules/custom/custom.xqm`.
- [ ] Verify output payload shape consumed by frontend components.
- [ ] Confirm relationship arrays and labels are returned as expected.
- [ ] Validate pagination and facet behavior through `src/main/xquery/modules/search.xq`.

## 5) Customize frontend presentation

- [ ] Update result card rendering in `src/main/lit/base/src/result-item.ts`.
- [ ] Update root app behavior in `src/main/lit/base/src/emh-accelerator-app.ts`.
- [ ] Validate search query sync and facet chip navigation behavior.
- [ ] Update copy/branding/theme assets in `src/main/resources/` and `src/main/lit/*`.

## 6) Verify admin workflows

- [ ] Test upload flow in admin UI (`src/main/lit/admin/`).
- [ ] Test glossary delete flow.
- [ ] Confirm permission behavior for guest vs admin users.
- [ ] Verify `who-am-i` and group-based UI gating.

## 7) Set package version and metadata

- [ ] Set package version in `src/main/resources/expath-pkg.xml` (`@version`).
- [ ] Confirm metadata in `src/main/resources/repo.xml`.
- [ ] Do not hardcode version in `build.gradle` (it is read from `expath-pkg.xml`).

## 8) Build and package

```bash
cd /Users/lcahlander/IdeaProjects/emh-exist-glossary
./gradlew clean buildXAR
```

- [ ] Confirm generated XAR in `build/` is `magellan-glossary-<version>.xar`.
- [ ] Confirm `<version>` matches `src/main/resources/expath-pkg.xml`.

## 9) Deploy and smoke test on eXist-db

- [ ] Upload XAR through eXist-db Package Manager.
- [ ] Verify initial search screen loads.
- [ ] Verify query search, facet filters, and pagination.
- [ ] Verify relationship navigation from result details.
- [ ] Verify admin screen visibility and actions by role.

## 10) Release readiness

- [ ] Update `CHANGELOG.md` with behavior and migration notes.
- [ ] Capture known limitations and operational notes.
- [ ] Tag release with version matching `expath-pkg.xml`.
- [ ] Archive representative sample queries and expected results.

