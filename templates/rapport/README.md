# Rapport — lang rapport med HTML-presentasjon og drilldown

Startpunkt for ein rapport som blir lagd fram som presentasjon og lesen i sin heilskap på nett.

| Fil | Kva |
|---|---|
| `rapport.html` | Den lange rapporten: forside, samandrag, metode, funn, tilrådingar, neste steg og vedlegg, med innhaldsliste i sidekolonna |
| `rapport.css` | Stil for rapporten. Les berre token-variablar |
| `presentasjon.html` | HTML-presentasjonen: sju slidar bygde av rapportslidane i `slides/`, med `slides/rapport.css` |

## Drilldown

- Kvar slide har id `s1`, `s2` … Kvar seksjon i rapporten har fast id: `#samandrag`, `#metode`,
  `#funn`, `#funn-1` … `#funn-5`, `#tilraadingar`, `#neste-steg`, `#vedlegg` (og `#vedlegg-…` for kvart vedlegg).
- Frå slide til rapport: nivå 2-lenka `<a class="drilldown" href="rapport.html#funn-2">Les meir i rapporten</a>`, maks éi per slide.
- Frå rapport til slide: nivå 3-lenka `<a class="til-slide" href="presentasjon.html#s2">Til sliden</a>` nedst i seksjonen.
- «Les heile rapporten»-sliden har éin nivå 1-knapp og QR-kode. QR-koden blir teikna frå `data-url`; set den publiserte adressa der.
- Byter du innhald, behald id-ane eller oppdater lenkjene begge vegar.

## Bruk

- Presentasjon: piltastar, mellomrom og Page Up/Down blar, F gir fullskjerm. Utskrift gir éin slide per side (1280×720).
- Rapport: «Last ned som PDF» opnar utskrift. Utskrifta tek bort sidekolonna, opnar alle vedlegg og set sidebrot før kvar hovudseksjon.
- Flatetema: `class="… tema-groenn" data-theme="groenn"` på `<body>` (rapport) eller `.slide` (presentasjon).
- Flater: sideflata og gul innhaldsliste (kjerneinnhald) i rapporten. Kvitt QR-felt på éin slide. Svart rundt slidane i presentasjonen.
