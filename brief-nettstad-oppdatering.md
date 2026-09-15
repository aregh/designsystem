# Brief: oppdatere kjernekaren.no til designmalen

**Til:** agenten som skal endre nettstaden
**Frå:** designsystem-arbeidet i dette prosjektet
**Kjelde for alle reglar:** `design.md` (overordna), `styles.css` + `tokens/`, `guidelines/`, `components/`

---

## 1. Kva som skal skje

kjernekaren.no skal følgje designmalen for kjernemodell-universet: flatt, skarpt, svart tekst på pastellflate, éi skrift (Work Sans), kontrast gjennom fontvekt. Layout og innhald skal i hovudsak liggje som det gjer — dette er ein visuell og teknisk opprydding, ikkje eit innhaldsprosjekt. Alle tekstendringar må klarerast med Are.

Bruk tokens frå `styles.css` (éi importlenke). Ikkje innfør nye fargar, skrifter eller radius-verdiar.

## 2. Nettstadkart (28 sider, sju malar)

| Mal | Sider |
|---|---|
| Forside | `/` |
| Oversikt: kurs | `/kurs-og-foredrag` |
| Oversikt: tenester | `/tenester` |
| Detalj: kurs | `/masterclass`, `/kjernemodellen-digitalt-kurs`, `/kurs-kjernemodellen`, `/ki-for-kommunikatorar`, `/kurs-og-foredrag/skriv-med-ki-for-ki`, `/effektiv-bruk-av-ai`, `/smidig-brukertesting`, `/digital-baerekraft`, `/samskriving` |
| Detalj: teneste | `/innsiktspartner`, `/ekspertevaluering`, `/testshow`, `/toppoppgaver`, `/forprosjekt-med-skyra`, `/okr`, `/kickstart`, `/kjernesprint`, `/coaching`, `/kaffiprat` |
| Boka | `/bok`, `/bok-utdrag`, `/forord-av-gerry-mcgovern` |
| Blogg | `/blogg` (+ `/page/2`, `/page/3`) og ~15 artiklar |

Sjå `guidelines/sidemalar.html` for byggjeklossane i kvar mal.

## 3. Feil som må rettast (prioritert)

### P1 — går ut over funksjon og tilgjengelegheit
1. **Logoen «Are Halland» skal vere lenke til forsida** på alle sider, med `<a href="/">`. (Sjekk òg at han ikkje er klikkbar berre som bilete utan tekstalternativ.)
2. **Nav-lenker skal vere heilsvarte.** I dag er inaktive punkt dempa med `opacity` — under kontrastkravet på 4,5:1. Marker aktiv side med ekstrafeit vekt + underline i staden.
3. **Knappar og menypunkt må vere ekte `<a>`/`<button>`**, ikkje `<span>` med klikk-handler. Gjeld heile nettstaden.
4. **Trykkflater minst 48×48px** — menypunkt, knappar, aksordionrader, sidetal.
5. **`/kurs-og-foredrag` ligg framleis på Wix** medan resten er migrert. Malen, menyen («More»-punktet) og typografien avvik frå resten. Må migrerast.
6. **Menylenka «Blogg» peikar til `/blog`** medan kanonisk URL er `/blogg`. Rett lenka.
7. **Aksordion på kurssidene har rader utan funksjon** (fem av sju på det digitale kurset). Alle rader skal opne seg, eller fjernast.

### P2 — brot på designmalen
8. **Ingen runde hjørne.** Spotify-embedet og andre innebygde element må rammast flatt (`border-radius:0`). Einaste unntak: sirkel-badge og karusell-prikkar.
9. **Foto er alltid firkanta.** Runde portrett i testimonial-radene skal vere kvadrat.
10. **Berre paletten.** Fjern fargar utanfor tokens — inkludert Spotify-blå og grå plassholdarflater. Blå = `#AEEBFB`.
11. **Vektkontrast, ikkje storleikskontrast.** Titlar `800`, brødtekst `400`. I dag er titlar `700` og mykje brødtekst feit.
12. **Ingen halvgjennomsiktig svart.** Delelinjer og tekst skal vere heilsvarte (`--strek`); `rgba(0,0,0,.45)` berre der ein tynn strek elles vert for dominerande, aldri på tekst.
13. **Flateval — avgjort:** kjernekaren.no er grøn `#BCF17D` (`.tema-groenn`), bok-sidene rosa `#FEC4B2` (`.tema-rosa`). Hentetekst-boksen på grøn flate er gul `#FFE484`. Maks to flatefargar per side.
14. **Ingen emoji.** `/kurs-og-foredrag` har 🎯 og `/bok` har 🚀 — bytt til tekst eller fjern. Tekst-smiley `:-)` er derimot riktig.
15. **Sirkel-badgen er signaturelementet** og bør brukast konsekvent på kurskorta (dato/USP), ikkje som bilete-PNG-ar som i dag (`blisert.png`, `fagdag.png`).

### P3 — typografi og responsivitet
16. **Brødtekst opp til 18–21px** (flytande), aldri under 18px. Etikettar aldri under 15px. Manualen krev romsleg skrift; i dag finst 9–15px-tekst på forsida.
17. **Full responsiv gjennomgang** etter `guidelines/responsiv.html`:
    - brekkpunkt 600 / 900 / 1200px
    - flytande type med `clamp()` frå `tokens/typography.css`
    - `box-sizing:border-box` globalt, `img{max-width:100%;height:auto}`
    - to-kolonne-seksjonar kollapsar med `auto-fit / minmax(min(320px,100%),1fr)` — ikkje media queries
    - `min-width:0` på grid/flex-barn
    - sidemarg `clamp(20px,5vw,48px)`, aldri null
    - test 320px, 375px, 768px, 1440px — **ingen vassrett skroll**
18. **Hamburgermeny under 600px** med undermenypunkta innrykka i same liste (`components/navigation/SiteHeader`). I dag er undermenyane hover-avhengige, som ikkje fungerer på berøringsskjerm.
19. **Hero-hentetekst skal vere levande tekst** i grøn boks over biletet, ikkje brent inn i bilete-fila. Gjeld forsida.

## 4. Kodeopprydding

- Erstatt gjentatt markup med komponentane i `components/`: `Button`, `TextLink`, `CircleBadge`, `StarRating`, `Accordion`, `Quote`, `TestimonialCard`, `NewsletterForm`, `SiteHeader`, `SiteFooter`, og dei nye `KursKort`, `BloggKort`, `Paginering`, `Innhaldsliste`.
- Nyheitsbrev-seksjonen og footeren er identiske på alle sider — éin partial, ikkje kopiert markup.
- Kurs-, tenest- og bloggkort skal genererast frå data (frontmatter/JSON), ikkje handskrivast per side.
- Alle bilete: eksplisitt `width`/`height` for å unngå layout-hopp, `loading="lazy"` under folden, meiningsfull `alt`.
- Spotify-embedet: last i `<iframe loading="lazy">` med eiga `title`.
- Semantikk: éin `<h1>` per side, `<nav aria-label>`, `<main>`, `<time datetime>` på bloggdatoar, `aria-current="page"` i menyen.

## 5. Akseptkriterium

- [ ] Logoen lenkjer til `/` på alle 28 sider
- [ ] Ingen vassrett skroll ved 320px på nokon side
- [ ] Alle trykkflater ≥ 48px
- [ ] Ingen tekst under 15px; brødtekst ≥ 18px
- [ ] Kontrast ≥ 4,5:1 på all tekst (≥ 3:1 for tittelstorleik)
- [ ] Ingen runde hjørne utanom sirklar
- [ ] Ingen fargar utanfor `tokens/colors.css`
- [ ] Ingen emoji
- [ ] `/kurs-og-foredrag` migrert bort frå Wix og på same mal som resten
- [ ] Tastaturnavigasjon gjennom meny og aksordion fungerer, med synleg fokusmarkering

## 6. Uavklart — spør Are før du gjer noko

1. **Er kjernekaren.no og kjernemodellen.no meint å dele visuell identitet fullt ut**, eller skal dei skiljast på flatefarge åleine?
2. **Skal `/kurs-og-foredrag` framleis vere ein Wix-side**, eller er migrering del av dette oppdraget?
4. **«More»-punktet i Wix-menyen** — kva ligg bak det, og skal det med i den nye menyen?
5. **Innsiktspartner, Testshow!, Forprosjekt med Skyra** — desse er ikkje gjennomgått i detalj her. Følgjer dei detaljsidemalen?
6. **Domenegrenser:** `kontekstarkitektur.no` er lenka frå forsida som «KI for kunnskapsarbeid». Skal han inn i same designsystem, eller stå som eige uttrykk?
