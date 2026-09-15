# design.md — designmal for Kjernekaren-universet

Éin kjelde for visuelle avgjerder på tvers av **kjernekaren.no**, **thecoremodel.com**,
**kontekstarkitektur.no**, presentasjonar, SoMe og trykk.

Maskinlesbare verdiar bur i `styles.css` → `tokens/`. Denne fila forklarer *kvifor*, og
avgjer det tokens ikkje kan uttrykke. Ved konflikt: tokens er sanninga, denne fila er intensjonen.

---

## 1. Grunnidé

Kjernemodellen er kjernen i det visuelle konseptet. Elementa i modellen (trekant, kvadrat,
sirkel, piler, vimpel) er brand-grafikken, og fargane deira har meining. Resten av uttrykket
er så flatt og nøytralt som mogleg, slik at modellen får vere det som ber identiteten:
flate pastellflater, svart tekst, éi skrift, ingen skuggar, ingen runde hjørne, ingen animasjon.

Tonen er første person eintal — Are sjølv snakkar. Varm, direkte, uhøgtideleg, sjølvsikker.

## 2. Farge

### Kjernemodell-fargane (har meining)
| Element | Form | Farge |
|---|---|---|
| Målgruppe | Trekant | Rosa `#FFD2E7` |
| Brukeroppgaver | Kvadrat | Grønn `#BCF17D` |
| Mål | Sirkel | Blå `#AEEBFB` |
| Veier inn | Pil høgre | Laks `#FD9F78` |
| Kjerneinnhold | Rektangel | Gul `#FFE484` |
| Veier videre | Vimpel-pil | Lilla `#E6B0F9` |

Desse skal berre brukast der fargekodinga passar. Ikkje grønt når det handlar om
forretningsmål.

### Flatetema — éin flatefarge per nettstad
| Nettstad | Klasse | Flate | Hentetekst | Badge |
|---|---|---|---|---|
| kjernekaren.no | `.tema-groenn` | `#BCF17D` | grøn på foto / gul på flata | blå `#AEEBFB` |
| thecoremodel.com | `.tema-gul` | `#FFE484` | grøn `#BCF17D` | blå `#AEEBFB` |
| kontekstarkitektur.no | `.tema-blaa` | `#AEEBFB` | grøn `#BCF17D` | gul `#FFE484` |
| bok-sider (alle) | `.tema-rosa` | `#FEC4B2` | grøn `#BCF17D` | blå `#AEEBFB` |
| innhaldstunge sider | `.tema-gul-lys` | `#FEF2AE` | grøn `#BCF17D` | blå `#AEEBFB` |

**Prinsipp:** når ein kjernemodell-farge er brukt som heil sideflate, er element-tydinga
suspendert for den flata. Fargekodinga gjeld då berre inne i sjølve modell-grafikken.

**Reglar:**
- Badgen har aldri same farge som flata.
- Hentetekst-boksen ligg normalt oppå eit foto og kan då ha same farge som flata (han har
  kontrast mot biletet) — på kjernekaren.no er han grøn, som i dag. Ligg boksen derimot
  direkte på sideflata, må han skifte: gul `#FFE484` på grøn flate.
- Maks to flatefargar per side.
- Knappen er alltid laks `#FD9F78` med svart tekst — unntatt på rosa flate, der han er svart
  med kvit tekst.
- Grå `#EAEAEA` er ikkje ein brandfarge. Berre nøytrale plassholdarar og disabla felt.
- Stjernefargen `#E8A33D` er sampla frå kursrangeringane og finst berre der.
- Tekst er svart. Kvit tekst er berre lovleg på svart flate.

## 3. Typografi

Éi skrift: **Work Sans** (Google Fonts). Alternativ ved behov: Noto Sans, Open Sans.

Kontrast kjem frå **vekt**, ikkje storleik:
- **400** all mengdetekst
- **800** alle titlar og utheva tekst
- **600** berre sperra versal-etikettar (`DIGITALT KURS 18. SEPTEMBER`)

500 og 700 finst ikkje i systemet.

| Rolle | Mobil → desktop |
|---|---|
| display | 40 → 64px |
| h1 | 32 → 44px |
| h2 | 24 → 30px |
| h3 | = brødtekst, vekt 800 |
| brødtekst | 18 → 21px |
| liten | 17px |
| etikett | 15px (absolutt minstemål) |

Setnings-casing overalt. Versalar berre i eyebrow-etikettar.

## 4. Form og element

- Skarpe hjørne. Radius 0. **Einaste unntak:** sirkel-badge og karusell-prikkar.
- Ingen skuggar, ingen gradientar, ingen omriss-knappar.
- Foto alltid firkanta, aldri runda, aldri beskore til fast høgd i flyt.
- Delelinjer: tynn heilsvart strek. Ingen halvgjennomsiktig svart — det gir ulik farge på
  kvar flate.
- Sirkel-badge er signaturelementet: farga sirkel, feit svart tekst, brukt til dato/USP.
- Ikonografi: ingen ikonbibliotek. Unicode (`∨` `+` `★` `"`) og tekst-smiley `:-)`.
  **Aldri emoji.**
- Ingen animasjon.
- **Tredjeparts-embeds** (Spotify, YouTube, påmeldingsskjema) kan ikkje stylast og er eit
  godkjent unntak: dei får behalde sine eigne fargar og runde hjørne. Ikkje bygg falske
  kopiar av dei i brandfargar — det blir feil på to måtar samtidig. Gi dei `title`,
  `loading="lazy"` og luft rundt.

## 5. Handlingshierarki

| Nivå | Uttrykk | Bruk |
|---|---|---|
| 1 | Laks-knapp, svart tekst, vekt 800, skarpe hjørne | Hovudhandling. **Maks éin per sideseksjon.** |
| 2 | Svart understreka tekstlenke, vekt 800, brødtekst-storleik | Kort, oversikter, eksterne kjøpslenker |
| 3 | Svart understreka inline-lenke, vekt 400 | I løpande tekst |

Ingen sekundærknapp, ingen ghost-knapp, ingen ikon i knappar. Trykkflate minst 48px.

Lenker er alltid svarte med underline — også i footer. Hover: tjukkare underline.

## 6. Layout og responsivitet

- Tekstkolonne `max-width: 620px`. Innhaldsbreidd 900px. Side 1100px.
- To-kolonne-oppsett: tekst `flex:1 1 440px; max-width:620px; min-width:0`, sidekolonne
  `flex:0 1 260px`. **Ikkje** `auto-fit`-grid når kolonnane har ulik vekt — det gir 50:50.
- Sidemarg `clamp(20px, 5vw, 48px)`, aldri null.
- Brekkpunkt 600 / 900 / 1200px. Hamburgermeny under 600px.
- Store luftrom mellom seksjonar: `clamp(48px, 9vw, 96px)`.
- Test 320 / 375 / 768 / 1440px. Aldri vassrett skroll.

## 7. Tilgjengelegheit

- Logoen (ordmerket «Are Halland») er alltid lenke til forsida.
- Nav-lenker er heilsvarte. Aktiv side: vekt 800 + underline + `aria-current="page"`.
  **Aldri `opacity`** — det bryt kontrastkravet.
- Ekte `<a>` / `<button>`, aldri `<span>` med klikk.
- `:focus-visible`: 3px blå outline med 2px offset. Skal ikkje overstyrast.
- Kontrast ≥ 4,5:1 (≥ 3:1 for tittelstorleik).
- Éin `<h1>` per side. `<main>`, `<nav aria-label>`, `<time datetime>`.

## 8. Presentasjonar

1280×720. Same flatetema som nettstaden det gjeld.

- **Ingen fargekoding i kulepunkt.** Punktmerke er små svarte kvadrat (16×16px). Farga
  punkt gir falsk meining og bryt kjernemodell-kodinga.
- **Underpunkt:** eitt nivå ned, innrykk 38px, punktmerke er ein liten svart strek
  (16×3px) i staden for kvadrat, og teksten går frå 32px til 26px. Aldri meir enn to nivå
  på ein slide — treng du tre, er det to slides.
- Titlar 52–110px vekt 800, punkttekst 32px vekt 400, underpunkt 26px. Aldri under 24px.
- Bilete-malar: heildekkande foto med svart tekstplate, delt flate (foto/tekst),
  tredelt bilderad. Alle bilete er utbyttbare — dra eit nytt foto rett inn i plassen.
- Forsida til Are sine presentasjonar brukar Sunnmørsalpane (Saksa, sett frå Urke).
- Malar: `slides/tittel.html`, `tittel-bilete.html`, `seksjon.html`, `punktliste.html`,
  `nokkeltall.html`, `bio.html`, `utfordring.html`, `venn.html`,
  `bilete-heildekkande.html`, `bilete-delt.html`, `bilete-tredelt.html`.

## 9. Innhald og språk

- **Nynorsk** på kjernekaren.no og kjernemodellen.no. **Bokmål** inne i modell-elementa
  («Hvem lager vi løsningen for?»). **Engelsk** på thecoremodel.com.
- Første person eintal. Lesaren er «du».
- Tone-markørar: utropsteikn («Vi snakkast!»), tekst-smiley `:-)`, retoriske spørsmål som
  mellomtitlar («Har du spørsmål om kurset?»).
- CTA-språk konkret og lågterskel: «Gå til påmelding», «Book ein kaffiprat»,
  «Hald meg oppdatert!».
- Truverde gjennom tal og namngjevne sitat med tittel og firma.
- Ingen marketing-floskler. Ingen filler.

## 10. Filer

| Fil | Innhald |
|---|---|
| `styles.css` | éi importlenke — hentar alle tokens |
| `tokens/colors.css` | palett + semantiske alias |
| `tokens/flater.css` | flatetema per nettstad |
| `tokens/typography.css` | skrift, flytande skala, vekter |
| `tokens/spacing.css` | rom-skala, breidder |
| `tokens/responsiv.css` | brekkpunkt, reset, fokus, hjelpeklassar |
| `guidelines/*.html` | spesimenkort (farge, type, former, flatetema, handlingshierarki, responsiv, sidemalar) |
| `components/core/` | Button, TextLink, CircleBadge, StarRating, Accordion, Quote, TestimonialCard, TextField, NewsletterForm, KursKort, BloggKort, Paginering, Innhaldsliste |
| `components/navigation/` | SiteHeader, SiteFooter |
| `slides/` | presentasjonsmalar |
| `brief-nettstad-oppdatering.md` | feilliste + akseptkriterium for kjernekaren.no |
| `brief-implementering-kjernekaren.md` | implementeringsbrief |

## 11. Opne spørsmål

- Skal kontekstarkitektur.no faktisk inn i systemet, eller ha eige uttrykk? (Blå variant
  finst som forslag. Konsekvens: sirkel-badgen må bli gul der, så det blå signaturelementet
  forsvinn frå den nettstaden.)
- Skal `/kurs-og-foredrag` migrerast bort frå Wix som del av oppdraget?
- Skal kjernemodellen.no og kjernekaren.no dele flatefarge, eller skiljast?
