repo: aregh/designsystem
branch: main
path: .

Kjelde-URL: https://github.com/aregh/designsystem

## Kjelderepo som systemet skal implementerast i
- aregh/kjernekaren-no (Astro v5 + Netlify) — sjå brief-implementering-kjernekaren.md
- aregh/thecoremodel-com — ikkje gjennomgått
- aregh/kontekstarkitektur-no — ikkje gjennomgått

## Last sync
date: 2026-10-05T08:40:00Z

### Updated in this project
- Nedlasting frå Claude Design (05.10.2026) synka inn: templates/, ui_kits/kontekstarkitektur/, referanse/, _ds_manifest.json, _adherence.oxlintrc.json, @kind-merknader i tokens
- `_ds_bundle.js` er no plattformgenerert (format 4); scripts/bygg-bundle.sh er ikkje lenger kjelda
- Fontar: sjølvhosta Work Sans (woff2) i fonts/ med @font-face i tokens/fonts.css (OFL)

### Tidlegare sync 2026-09-21
date: 2026-09-21T19:02:29Z

### Updated in this project
- Arbeidsfilene (`*.dc.html`) importerte frå kjelderepoet som referanse
- Nytt UI-kit: `ui_kits/kontekstarkitektur/` (blå flate) bygd frå «Kontekstarkitektur i dag - blaa.dc.html»
- Nye templates: Bloggartikkel, SoMe-oppslag (1200×628) og Presentasjon (deck-stage, 7 slide-typar)
- Tidlegare i dag: heile systemet importert (tokens, guidelines, komponentar, slides, ui_kits, assets)

## Screen map
| Fil i dette prosjektet | Bygd frå / gjeld |
|---|---|
| readme.md, design.md, design-system.json | readme.md, design.md, design-system.json i kjelderepoet |
| styles.css, tokens/ | tokens/colors.css, flater.css, fonts.css, typography.css, spacing.css, responsiv.css |
| guidelines/*.html | guidelines/ i kjelderepoet (spesimenkort) |
| components/core/, components/navigation/ | same stiar i kjelderepoet |
| slides/*.html | slides/ i kjelderepoet |
| ui_kits/kjernemodellen/index.html | ui_kits/kjernemodellen/ — kursside, gul flate, nynorsk |
| ui_kits/thecoremodel/index.html | ui_kits/thecoremodel/ — bokside, rosa flate, engelsk |
| templates/kursside/, templates/bokside/ | bygde frå dei same to ui_kits-skjermane |
| templates/bloggartikkel/ | BloggKort/Innhaldsliste/Paginering + design.md kap. 6 og 9 |
| templates/some-oppslag/ | assets/some-masterclass.png, some-digitalt-kurs.png |
| templates/presentasjon/ | slides/*.html (tittel, seksjon, punktliste, nøkkeltall, bilete, bio) |
| ui_kits/kontekstarkitektur/ | «Kontekstarkitektur i dag - blaa.dc.html» |
| *.dc.html (rot) | arbeidsfiler frå kjelderepoet, kopierte uendra |
| assets/ | assets/ i kjelderepoet (foto, bøker, kjernemodell-grafikk, SoMe-malar) |
