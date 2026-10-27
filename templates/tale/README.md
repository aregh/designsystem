# Talarpresentasjon — Are sin eigen presentasjonsstil

Startpunkt for ein presentasjon Are held sjølv og snakkar fritt til. Slidane gir bodskapen og viser bevisa, dei forklarer ikkje. Bygd etter referansepresentasjonen for FHF 26.10.2026.

| Fil | Kva |
|---|---|
| `presentasjon.html` | Tolv eksempelslidar i rett rekkjefølgje, med `slides/tale.css` |
| `../../slides/tale-*.html` | Dei ni slidetypane kvar for seg (spesimenkort) |

## Slidetypane

| Type | Fil | Flate |
|---|---|---|
| Tittel | `tale-tittel.html` | Urke-biletet heildekkande på gul, kvit tittel |
| Om meg | `tale-om-meg.html` | Kvit, fem linjer og foto til høgre |
| Opningsspørsmål | `tale-opning.html` | Skjermbilete med boble som spør salen |
| Bodskap | `tale-bodskap.html` | Lys grøn, éi setning midtstilt. Òg overgangar, «#1 …» og «Spørsmål» |
| Sitat | `tale-sitat.html` | Lys grøn, sitatet ordrett, kjelde som rolle |
| Skjermbilete med boble | `tale-skjermbilete.html` | Skjermbiletet kant til kant, éi eller to blå bobler |
| Liste | `tale-liste.html` | Kvit, kort tittel og 4–6 korte linjer |
| Kjernemodellen | `tale-kjernemodellen.html` | Kvit, prioritere, samarbeide, fikse |
| Avslutning | `tale-avslutning.html` | Blå, takk og kontakt |

## Bruk

- Éin tanke per slide. 20–30 slidar til 15 minutt er normalt.
- Bevis er ekte skjermbilete. Er biletet ikkje 16:9, ta bort klassen `fyll`, så syner heile biletet på kvit flate.
- Boblene får `left` og `top` i px (1280 × 720), plasserte ved det dei peikar på og aldri over det funnet gjeld.
- Manglar eit skjermbilete: `<p class="plasshaldar">SKJERMBILETE: …</p>` i staden for biletet.
- Ingen talarnotat, prisar, timetal eller nemning av KI-verktøy på slidane.
- Piltastar, mellomrom og Page Up/Down blar. F gir fullskjerm. Utskrift gir éin slide per side.

Instruksen for Claude Design ligg i aregh/kjernekaren: `Innhald/Presentasjonar/Instruks-Claude-Design-presentasjon.md`.
