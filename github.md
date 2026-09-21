repo: aregh/designsystem
branch: main
path: .

## Kjelderepo som systemet skal implementerast i
- aregh/kjernekaren-no (Astro v5 + Netlify) — lesen 15.09.2026, sjå brief-implementering-kjernekaren.md
- aregh/thecoremodel-com — ikkje gjennomgått
- aregh/kontekstarkitektur-no — ikkje gjennomgått

## Last sync
date: 2026-09-15T13:54:00Z
commit: (aregh/designsystem er ikkje oppretta enno — første push skjer manuelt)

### Updated in this project
- Implementeringsbriefen er skriven konkret mot aregh/kjernekaren-no: reelle filstiar, faktiske avvik i global.css / Header.astro / index.astro, akseptkriterium som kan grepast
- Designsystemet justert til kodebasen sine breidder (980/680) i staden for å tvinge 1100/620
- Assets namngitt og flytta frå uploads/ til assets/; referanse-skjermbilete til referanse/

## Screen map
| Fil i dette prosjektet | Bygd frå / gjeld |
|---|---|
| design.md | overordna designmal — les først |
| design-system.json | maskinlesbar manifest: tokens, komponentar, guidelines, malar, reglar |
| AKTIVERING.md | oppskrift for Are: standard designsystem i Claude Design |
| _ds_bundle.js | generert frå components/**/*.jsx via scripts/bygg-bundle.sh; window.Kjernekaren |
| brief-implementering-kjernekaren.md | aregh/kjernekaren-no: src/styles/global.css, src/components/Header.astro, src/pages/index.astro, src/data/navigation.ts |
| brief-nettstad-oppdatering.md | kjernekaren.no live (28 sider, sju malar) |
| Kjernekaren i dag - groen.dc.html | rekonstruksjon av kjernekaren.no forside/kurs/om på grøn flate |
| Flatetema - tre nettstader.dc.html | flatetema for kjernekaren / thecoremodel / kontekstarkitektur |
| Hentetekst på grøn flate.dc.html | fire alternativ for hentetekst-boks (1c valt) |
| tokens/ | kjelde for src/styles/tokens.css i nettstad-repoa |
| slides/ | presentasjonsmalar |
