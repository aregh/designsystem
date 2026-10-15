# Migration report — `Kjernekaren Designsystem`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Kjernekaren Designsystem` — a design-system project from the standalone version (authored there, namespace `KjernekarenDesignsystem_8e6518`), so it becomes a system made from the Design System type rather than a canvas.  
Result: carried file for file (the lines below name what is not), no tokens.json and no tokens.css written; 16 components (3 with a card in the project); 0 starter template(s) kept aside; 458 files in the system’s table (83.4 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).


Build notes:

- `8 extra section(s): AKTIVERING.md, brief-implementering-kjernekaren.md, brief-nettstad-oppdatering.md, design.md, github.md, ui_kits/kjernemodellen/README.md, ui_kits/kontekstarkitektur/README.md, ui_kits/thecoremodel/README.md`
- `399 files outside the layout, kept as is (listed under Claude’s context, no section of their own): Designsystem forslag.dc.html, Flatetema - tre nettstader.dc.html, Hentetekst på grøn flate.dc.html, Kjernekaren i dag - groen.dc.html, Kjernekaren redesign 1B.dc.html, Kjernemodellen i dag - gul.dc.html, Kontekstarkitektur i dag - blaa.dc.html, Slides Kontekstarkitektur.dc.html, …`

## Mapped

- README.md ← the project’s readme
- every file of the project ← itself, with its bytes unchanged; 2 are carried under another name, each listed in the README with its old name, and the rest are at their own paths under project/. project/migration-map.json lists each file, what it is and where it was. The lines below name the ones carried under another name, the few that are not byte for byte and why, and what was written new (no components/bundle.js and no components/bundle.css by the migration: a page of the project loads the bundle and the stylesheets it links, as in the standalone app)
- no tokens.json and no tokens.css are written: the system’s own files, a tokens.json or tokens.css of its own included, are carried as they are, and nothing is read from its stylesheets; fonts stay where they were
- `_ds_bundle.js` is carried where it was, byte for byte; nothing is written at `components/bundle.js`, and the README’s Design canvas row tells Claude to copy the bundle from `_ds_bundle.js`
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- `design-system.json` has a name the Design System page, the platform or the migration keeps for itself (reserved) — carried as `docs/design-system.json`
- no components/bundle.css is written by the migration: the system’s stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/flater.css`, `tokens/responsiv.css` are carried as written, at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/flater.css`, `project/tokens/responsiv.css`; a page of the project loads the stylesheets it links, as in the standalone app
- 7 template(s) came across as files under their own folders; the Design System page has no place for a template and shows none: `Bloggartikkel`, `Bokside`, `Kursside`, `MAL 2025 – kjernemodellen (nynorsk)`, `Presentasjon`, `SoMe-oppslag`, `Toppoppgåver`

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `AccordionItem` | — | — | — (listed without an example) | — |
| `Accordion` | ✓ | ✓ | a card in the project | ✓ |
| `BloggKort` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Button` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CircleBadge` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Innhaldsliste` | ✓ | ✓ | — (listed without an example) | ✓ |
| `KursKort` | ✓ | ✓ | — (listed without an example) | ✓ |
| `NewsletterForm` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Paginering` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Quote` | ✓ | ✓ | a card in the project | ✓ |
| `StarRating` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TestimonialCard` | ✓ | ✓ | a card in the project | ✓ |
| `TextField` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TextLink` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SiteFooter` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SiteHeader` | ✓ | ✓ | — (listed without an example) | ✓ |

Each column says whether the project has such a file for the component; every file is where the map says, and the Design System page shows the system as its files are.

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

The project’s files as carried, counted by what each is (455 files; the map lists every one):
- 319 × image
- 32 × kit piece
- 18 × showcase page
- 15 × component types
- 15 × component source
- 15 × component guide
- 12 × foundations page
- 10 × page
- 7 × global stylesheet
- 5 × doc
- 3 × component card
- 1 × bundle
- 1 × renamed tool file
- 1 × compiler output
- 1 × data

## Kept aside

Nothing.

## Dropped

Nothing.
