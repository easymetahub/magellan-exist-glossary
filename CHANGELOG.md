# Changelog

## 0.9.0-alpha.3 — 2026-07-20

### Rebranding
- Renamed package/app identifier from `emh-glossary` to `magellan-glossary` throughout:
  - `expath-pkg.xml` (abbrev), `repo.xml` (target), `build.gradle` (archive name)
  - XQuery module namespaces: `http://exist-db.org/apps/magellan-glossary/config`,
    `https://magellanmeta.ai/magellan-glossary/library/{json,custom}`
  - Lit apps: package names, Vite base paths (`/db/apps/magellan-glossary/`),
    custom element `<magellan-glossary-admin-app>`, class `MagellanGlossaryAdminApp`
  - Screenshot files renamed to `magellan-glossary-*.png`
- Titles updated from "EMH Glossary" to "Magellan AI Glossary" in HTML pages,
  `expath-pkg.xml`, `repo.xml`, and README.
- **Note:** the admin group identifier remains `emh` for backward compatibility with
  existing eXist-db installations. Admin access is granted to users in the `emh` group
  (see `src/main/xquery/modules/delete.xq` and the Lit admin app).

### Fixes
- `post-install.xql`:
  - Fixed XQuery syntax: bare `let _ :=` bindings changed to `let $_ :=` (XQuery
    requires `$` on variable names). This was causing `err:XPST0003` at install.
  - Fixed module import paths: `../modules/config.xqm` → `modules/config.xqm`
    (post-install.xql sits at the XAR root, `modules/` is a sibling).
  - Added structured logging via `console:log` for deployment diagnostics.
- `IVOAT.rdf` is now bundled under `samples/` inside the XAR and seeded on first
  deploy if the glossary is not already present.

## 0.9.0-alpha.2 — Phase 2d
- Removed legacy Polymer 3 sources and `polymer-cli` dependency.
- Lit 3 build is now part of the default `gradle buildXAR` task
  (the `-PbuildLit=true` flag has been removed).

## 0.9.0-alpha.1 — Phase 2a-c
- Ported public search app and admin app from Polymer 3 to Lit 3.
- Bumped `expath-pkg.xml` version from 0.8.1 to 0.9.0.

## Phase 1 — Build modernization
- Gradle 8.x, JDK 17 pinned.
- Replaced deprecated JCenter with Maven Central.
