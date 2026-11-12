# Langlesing — bokkapittel og lang artikkel, med kommentering i teksten

Startpunkt for lange tekstar som skal lesast på nett og gjerne kommenterast av utvalde lesarar:
bonuskapittel til boka, essay og lange artiklar. Første bruk: bonuskapittelet
«Når assistenten svarar» (12.11.2026).

Malen byggjer på `templates/rapport/` (same som FHF-rapporten) og legg berre til det ein
løpande tekst treng.

| Fil | Kva |
|---|---|
| `langlesing.html` | Sidemalen: ordmerke, etikettar, display-tittel, byline, merknad, innhaldsliste og tekst |
| `langlesing.css` | Tillegg til `../rapport/rapport.css`: merknad (`.om`), lange sitat, tabell-luft |
| `kommentar.css` | Kommentarknappar og forklaring. Les berre token-variablar |
| `kommentar.js` | Opnar kommentarfeltet til Claude på rett avsnitt eller markert tekst |

## Reglar

- Flate: `.tema-gul-lys` (innhaldstunge sider). Den gule innhaldslista er den andre flatefargen. Ingen fleire.
- Ingen boksar i andre fargar. Merknader står mellom to svarte strekar.
- Korte sitat er hentesitat (vekt 800). Sitat over om lag 120 teikn får `class="lang"`.
- Hermeteikn skriv du i teksten («…»), ikkje i CSS.
- Éin `<h1>`. Kvar `<h2>` får sin eigen `<section class="seksjon">` med id, og står i innhaldslista.

## Kommentering

- Knappen ved eit avsnitt er eit kvitt kvadrat med svart strek og `+`, 48 px, i luftrommet mellom
  tekstkolonna og sidekolonna. Han er synleg ved peikar og tastaturfokus. Laks ved hover.
- Markerer lesaren tekst, kjem nivå 1-knappen «Kommenter» under markeringa.
- På mobil og når sidekolonna ligg over teksten, finst berre markering av tekst.
- Forklaringa (`.kom-hint`) står under innhaldslista og er skjult til kommentering faktisk verkar.
- Ingen eigne kommentarlister, ingen pins og ingen animasjon på sida. Claude viser trådane.

Kommentering verkar berre når sida er publisert som Claude-artifact med
`capabilities: {"comments": {"composer_only": true}}`. Andre stader er knappane skjulte, og sida
er ei vanleg leseside.

## Bygg frå Markdown

I `aregh/kjernekaren` ligg `Fag/Kjernemodellen/Bok2/Bonuskapittel/bygg/bygg-nettside.py`,
som lagar ei slik side frå eit kapittel i Markdown og legg tokens og fontar ved.
