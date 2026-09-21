repo: aregh/designsystem
branch: main
path: .

## Kjelderepo som systemet skal implementerast i
- aregh/kjernekaren-no (Astro v5 + Netlify) — lesen 15.09.2026, sjå brief-implementering-kjernekaren.md
- aregh/thecoremodel-com — ikkje gjennomgått
- aregh/kontekstarkitektur-no — ikkje gjennomgått

## Last sync
date: __DATE__
commit: __SHA__

### Updated in this project
- Konsistensrydding: forelda alias bytta, opacity på tekst fjerna, transition fjerna, tokens/typography.css retta
- design-system.json: maskinlesbar manifest (tokens, 15 komponentar, guidelines, malar, reglar)
- _ds_bundle.js regenerert frå components/ via scripts/bygg-bundle.sh (esbuild), window.Kjernekaren-namnerom
- SKILL.md: alle fire domene, nynorsk, peikarar til design-system.json og guidelines/
- AKTIVERING.md: oppskrift for å setje systemet som standard i Claude Design
- Pusha til Claude Design som designsystem-prosjekt 97685ef9-2b14-4af1-ba1b-37363aba55c3

## Sync history

### 2026-09-15
date: 2026-09-15T13:54:00Z
commit: 809d553 (første push, gjort manuelt)

#### Updated in this project
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
