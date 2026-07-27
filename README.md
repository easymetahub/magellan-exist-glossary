# eXist-db Search Template (SKOS / SKOS-XL)

This repository is a template application for building faceted search experiences on eXist-db.

It is also a working reference implementation for glossary use cases based on SKOS and SKOS-XL RDF data.

## Purpose

- Provide a reusable eXist-db search app skeleton (XQuery backend + web frontend).
- Show how to ingest and manage multiple glossaries in SKOS/SKOS-XL.
- Demonstrate configurable faceting, result rendering, and glossary relationships.
- Make domain customization straightforward without rewriting core search plumbing.

## What This Template Implements

- `Search UI`: Lit 3 frontend with debounced query search, facets, paging, and detail expansion.
- `Glossary Relations`: Related/Broader/Narrower controls that update search state.
- `Admin UI`: upload/delete glossary data and inspect loaded glossaries.
- `eXist-db APIs`: XQuery modules for search, upload, delete, auth identity, and glossary listing.
- `Packaging`: build to an installable `.xar` archive for eXist-db package manager.

## Selected Architecture

- `Backend`: XQuery modules in `src/main/xquery/modules/`
  - `search.xq`, `upload.xq`, `delete.xq`, `glossaries.xq`, `who-am-i.xq`
  - `custom/custom.xqm` for project-specific mapping/query behavior
- `Public frontend`: Lit app in `src/main/lit/base/`
  - root app: `src/main/lit/base/src/emh-accelerator-app.ts`
- `Admin frontend`: Lit app in `src/main/lit/admin/`
- `Static/resources`: `src/main/resources/`
  - package metadata: `src/main/resources/expath-pkg.xml`, `src/main/resources/repo.xml`
  - eXist collection config: `src/main/resources/collection.xconf`
- `Build`: Gradle orchestrates npm + Vite builds and XAR assembly via `build.gradle`

## Versioning and Package Sync

- The package version is defined once in `src/main/resources/expath-pkg.xml` (`@version`).
- `build.gradle` reads that value and uses it in the generated XAR filename.
- Result: `expath-pkg.xml` metadata and built XAR filename stay in sync automatically.

## Requirements

- JDK 17
- eXist-db 5+ (faceting support)
- Node.js 20+ and npm
- Gradle wrapper in repo (`./gradlew`)

## Build and Package

```bash
cd /Users/lcahlander/IdeaProjects/emh-exist-glossary
./gradlew buildXAR
```

Output:
- XAR file in `build/` named `magellan-glossary-<version>.xar`
- where `<version>` is read from `src/main/resources/expath-pkg.xml`

Clean build artifacts and frontend build directories:

```bash
cd /Users/lcahlander/IdeaProjects/emh-exist-glossary
./gradlew clean
```

## Install in eXist-db

1. Start eXist-db and open the dashboard.
2. Go to Package Manager.
3. Upload the built XAR from `build/`.
4. Open the installed app from the launcher.

## Template Customization Guide

When adapting this repo to a new domain, focus on these extension points first:

- `Search behavior and result payload`: `src/main/xquery/modules/custom/custom.xqm`
- `Collection indexing and full-text behavior`: `src/main/resources/collection.xconf`
- `Result card rendering`: `src/main/lit/base/src/result-item.ts`
- `Top-level search interactions/state`: `src/main/lit/base/src/emh-accelerator-app.ts`

Recommended customization workflow:

1. Replace sample/source data with your RDF datasets.
2. Adjust extraction/mapping logic in `custom.xqm`.
3. Tune index config in `collection.xconf` for your fields/facets.
4. Update result display components and labels.
5. Rebuild XAR and test search/facets in eXist-db.

Detailed step-by-step checklist:

- `docs/CUSTOMIZATION-CHECKLIST.md`

Architecture and request/data flow:

- `docs/ARCHITECTURE.md`

## SKOS and SKOS-XL Notes

- The admin flow supports uploading RDF glossaries.
- The app demonstrates concepts and semantic relationships used in SKOS/SKOS-XL:
  - preferred labels
  - alternative labels
  - broader / narrower / related links
- Sample files are provided in `samples/`.

Validate RDF/XML inputs before upload:

```bash
cd /Users/lcahlander/IdeaProjects/emh-exist-glossary
python3 tools/rdf_compat_check.py samples/*.rdf
```

## Authentication and Authorization

- Search is available to guest users.
- Administrative actions are gated by eXist-db user/group membership.
- Admin access is surfaced in the UI when the logged-in user belongs to the expected admin groups.

## Repository Layout

```text
src/main/xquery/modules/     XQuery endpoints and custom search logic
src/main/lit/base/           Public Lit frontend
src/main/lit/admin/          Admin Lit frontend
src/main/resources/          eXist package metadata and static resources
samples/                     Example RDF/SKOS/SKOS-XL inputs
tools/                       Utility scripts (RDF compatibility checks)
build.gradle                 Build orchestration and XAR packaging
```

## Project Positioning

This project is intentionally both:

- a `template` for eXist-db search applications, and
- an `example implementation` of SKOS/SKOS-XL glossary search/management.

You can keep the architecture and replace the domain model, or keep the glossary model and tailor behavior/UI for your organization.
