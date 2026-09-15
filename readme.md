# Kjernekaren / Kjernemodellen — designsystem

Designsystem for universet rundt **kjernemodellen**: metoderammeverket utvikla av Are Halland
("Kjernekaren"), formidla gjennom nettsidene **kjernemodellen.no** (norsk) og
**thecoremodel.com** (engelsk), kurs, masterclasses, SoMe-flater og boka
*"Kjernemodellen – et praktisk verktøy for å lage bedre digitale tjenester"* (Kraft forlag, 2021).

## Kjelder
- Skjermbilete av kjernemodellen.no (heim, kurs, masterclass, tenester/ekspertevaluering, om meg)
- Skjermbilete av thecoremodel.com (resources, training, book)
- Utdrag frå designmanualen (typografi, farger, elementer, konsept) — sjå `uploads/`
- SoMe-malar (kursoppslag på gul flate med blå datosirkel)
- Fargepalett oppgitt av eigaren: rosa FFD2E7, grønn BCF17D, blå AEEBFB, rød FD9F78, gul FFE484, lilla E6B0F9

**Rettingar frå eigaren:** Målgruppe er **rosa trekant** (designmanualen seier feilaktig grå;
grå er berre nøytral flate / s-kv-versjonen av kjernearket).

## Konsept (frå designmanualen)
Kjernemodellen er kjernen i det visuelle konseptet. Elementa i modellen er gjort visuelt
distinkte og tilpassa bruken. Heile eller delar av kjernemodellen skal fungere og vere visuelt
gjenkjenneleg på eiga hand. Modulariseringa gjer at elementa kan fokuserast kvar for seg,
eller settast inn i større samanheng som brukarreiser.

Elementa og fargane deira:
| Element | Form | Farge |
|---|---|---|
| Målgruppe | Trekant | Rosa #FFD2E7 |
| Brukeroppgaver | Kvadrat (6 på standard kjerneark) | Grønn #BCF17D |
| Mål | Sirkel (stor for hovudmål) | Blå #AEEBFB |
| Veier inn | Pil høgre (3 på kjerneark) | Rød/oransje #FD9F78 |
| Kjerneinnhold | Stort rektangel (fleksibelt felt) | Gul #FFE484 |
| Veier videre | Vimpel-pil (3 på kjerneark) | Lilla #E6B0F9 |

Fargane skal **berre brukast der fargekodinga passar** — ikkje bruk t.d. grønfargen i
samanhengar der ein snakkar om forretningsmål.

## INNHALDS-FUNDAMENT (Content fundamentals)
- **Språk:** nynorsk på kjernekaren/kjernemodellen.no ("Eg", "frå", "tenester", "kvart århundre",
  "Vi snakkast!"), bokmål i sjølve modell-elementa ("Hvem lager vi løsningen for?"),
  engelsk på thecoremodel.com.
- **Stemme:** første person eintal — Are sjølv snakkar ("Eg har jobba med…", "Ring meg på…").
  Direkte, varm, uhøgtideleg og sjølvsikker. Lesaren er "du".
- **Tone-markørar:** utropsteikn ("Vi snakkast!", "Stop complicating – start collaborating!"),
  tekst-smiley `:-)` (aldri emoji), retoriske spørsmål som mellomtitlar
  ("Har du spørsmål om kurset?", "Klar for å kome i gang?").
- **CTA-språk:** konkret og lågterskel: "Gå til påmelding", "Book ein kaffiprat",
  "Hald meg oppdatert!", "Buy the book now".
- **Casing:** setnings-casing overalt; versalar berre i eyebrow-etikettar
  ("DIGITALT KURS 18. SEPTEMBER", "OSLO, 12.–13. mars 2026") og av og til eitt ord i tittel
  ("MASTERCLASS").
- **Truverde gjennom konkretisering:** tal ("over 1000 testpersonar", "25 års erfaring"),
  namngjevne sitat med tittel og firma, stjernerangeringar.
- **Ingen marketing-floskler**; punktlister med konkrete utbytte ("Dette får du:").

## VISUELLE FUNDAMENT
- **Flatt og skarpt:** ingen skuggar, ingen gradientar, ingen runde hjørne (unntak: sirklar).
  Reint flate pastellflater med svart tekst.
- **Sideflater (flatetema):** éin flatefarge per nettstad, resten av systemet er identisk.
  kjernekaren.no = grønn #BCF17D (`.tema-groenn`, hentetekst gul), thecoremodel.com = gul #FFE484
  (`.tema-gul`), kontekstarkitektur.no = blå #AEEBFB (`.tema-blaa`), bok-sider = rosa
  #FEC4B2 (`.tema-rosa`). Lys gul #FEF2AE (`.tema-gul-lys`) er framleis gyldig for
  innhaldstunge sider. Maks to flatefargar per side. Badge og hentetekst-boks har aldri
  same farge som flata. Når ein kjernemodell-farge er heil sideflate, er element-tydinga
  suspendert for flata — fargekodinga gjeld då berre inne i kjernemodell-grafikken.
  Sjå `tokens/flater.css` og `guidelines/flate-tema.html`.
- **Typografi:** éi skrift — **Work Sans** (open source, Google Fonts). Kontrast gjennom vekt,
  ikkje storleik: ExtraBold 800 for titlar, Regular 400 for mengdetekst. Unngå liten skrift
  ("romslig skriftstørrelse"). Alternativ: Noto Sans, Open Sans, Proxima Nova.
  Berre **to vekter** er i bruk (400/800); 600 er unntaket og berre til sperra
  versal-etikettar. `--vekt-feit` (700) er forelda alias for 800.
  **h3 har same storleik som brødtekst** — skilnaden er vekta, ikkje storleiken.
- **Lenker:** alltid svarte med underline — også i footer og brødtekst. Hover: tjukkare underline.
- **Handlingshierarki (tre nivå, éin knapp):** Nivå 1 hovudhandling = laks-knapp #FD9F78
  med svart tekst, skarpe hjørne, maks éin per sideseksjon. Nivå 2 seksjons-/korthandling
  = svart understreka tekstlenke i vekt 800 (kurskort, oversikter, eksterne kjøpslenker).
  Nivå 3 = svart understreka inline-lenke i vekt 400. Ingen sekundær- eller ghost-knapp,
  ingen ikon i knappar. På rosa flate er knappen svart med kvit tekst (laks på laks
  funkar ikkje). Sjå `guidelines/knapphierarki.html`.
- **Sirkel-badge:** blå sirkel med feit svart tekst, brukt til dato/USP
  ("Bli sertifisert fasilitator", "OSLO 19.–20. juni"). Signaturelement på SoMe-oppslag.
- **Layout:** smal tekstkolonne (~560px), tosplitta seksjonar (tekst venstre, bilete/sitat høgre),
  store luftrom mellom seksjonar, tynne svarte horisontale delelinjer.
- **Aksordion:** rader med tittel + chevron/pluss, skilde med tynne strekar.
- **Sitat:** store " -glyfar i svart, feit sitattekst, namn + tittel under; eller kursivt
  sitat i smal høgrekolonne.
- **Foto:** varme, uformelle foto av Are (kursleiar-situasjonar, portrett). Firkanta,
  aldri runda. På heltebilete: grøn tekstboks (hentetekst) lagt oppå.
- **Animasjon:** ingen — statiske sider.
- **Tredjeparts-embeds** (Spotify, YouTube, skjema) kan ikkje stylast og er eit godkjent
  unntak: dei behaldar eigne fargar og runde hjørne. Bygg aldri falske kopiar i brandfargar.
- **Mobilmeny:** under 700px kollapsar menyen til hamburger (≡ / ×) med full-breidd rader.
  Bruk **container queries** (`container-type:inline-size`) og ikkje media queries i
  designfilene — previewen skalerer sida, så media queries ser feil breidd.
- **Responsivt:** brekkpunkt 600/900/1200px, flytande type med `clamp()`, sidemarg
  `clamp(20px,5vw,48px)`, to-kolonne-seksjonar kollapsar med `auto-fit/minmax(min(320px,100%),1fr)`,
  trykkflater minst 48px, aldri vassrett skroll ved 320px. Sjå `tokens/responsiv.css`.
- **Logo:** ordmerket "Are Halland" er alltid ei lenke til forsida.
- **Ikonografi:** ingen ikonbibliotek. Unicode-teikn (chevron ∨, pluss +, stjerner ★,
  sitatteikn ") og tekst-smiley :-). Aldri emoji.

## IKONOGRAFI
Ingen ikonsystem. Brukte teikn: ▾/∨ og + i aksordion, ★ i rangeringar (gull/oransje #E8A33D),
store typografiske sitatteikn. Kjernemodell-elementa (trekant, kvadrat, sirkel, piler, vimplar)
fungerer som brand-grafikk — bygde som flate CSS-former, aldri som illustrasjonar med strek.

## Skrifter
Work Sans er lasta frå Google Fonts via `tokens/fonts.css` (ikkje lokale font-filer).
Manualen krev open source-fonter, så Google Fonts-varianten er korrekt kjelde.

## Indeks
- `design.md` — **overordna designmal** (start her)
- `styles.css` — importerer alle tokens (lenk denne éi fila)
- `tokens/` — colors.css, typography.css, spacing.css, fonts.css, flater.css, responsiv.css
- `guidelines/` — spesimen-kort (farger, typografi, former, spacing, responsiv, sidemalar)
- `components/core/` — Button, TextLink, CircleBadge, StarRating, Accordion, Quote,
  TestimonialCard, TextField, NewsletterForm, KursKort, BloggKort, Paginering, Innhaldsliste
- `components/navigation/` — SiteHeader, SiteFooter
- `assets/` — kjernemodell-grafikk (kjernemodell-elementer, core-sheet-farger,
  metode-diagrammer, element-veier-inn), bøker (bok-kjernemodellen, bok-engelsk-cover,
  bok-veske), portrett og foto (`foto-*.png`, are-portrett, forside-hero-original),
  kurs- og tenestebilete (kurs-masterclass, kurs-digitalt, teneste-ekspertevaluering),
  SoMe-malar (`some-*.png`)
- `referanse/` — skjermbilete av dagens nettstader, berre som referanse (ikkje assets)
- `brief-nettstad-oppdatering.md` — feilliste og akseptkriterium for kjernekaren.no
- `brief-implementering-kjernekaren.md` — implementeringsbrief (rekkefølge, reglar, leveranse)
- `ui_kits/kjernemodellen/` — kursside (gul flate, nynorsk)
- `ui_kits/thecoremodel/` — bokside (rosa flate, engelsk)

## Ryddingar i systemet (gjorde etter gjennomgang av kjernekaren.no)
- `--strek-svak` var `rgba(0,0,0,.45)`, som gir ulik strekfarge på kvar flate og bryt
  med "flatt og heilsvart". Er no alias for `--strek` (heilsvart).
- `--vekt-medium` (500) fjerna; `--vekt-feit` (700) peikar no på 800.
- `--tekst-h3` peikar på `--tekst-broedtekst`; kontrasten kjem frå vekt 800.
- `--farge-graa` flytta ut av kjernemodell-paletten til eigen "ikkje brandfargar"-seksjon,
  fordi grå ikkje har fargekoding og ikkje skal lesast som eit modell-element.
- `:focus-visible` er definert i `tokens/responsiv.css` (blå outline) — eit flatt, svart
  brand treng eksplisitt fokusmarkering.

## Medvitne tillegg
- `--stjerne: #E8A33D` — stjernefargen er sampla frå kursets stjernerangeringar,
  ikkje definert i manualen.
- Bakgrunnstintane #FEF2AE og #FEC4B2 er sampla frå nettsidene (ikkje i manualen).
