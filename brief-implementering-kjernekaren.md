# Brief: implementere designsystemet i aregh/kjernekaren-no

**Til:** agenten som skal gjere endringane i kodebasen
**Repo:** `aregh/kjernekaren-no` (privat), branch `main`, Astro v5 + Netlify
**Overordna designmal:** `design.md` i `aregh/designsystem` — les den først
**Utfyllande:** `brief-nettstad-oppdatering.md` (akseptkriterium), `guidelines/`, `components/`

Lest frå repoet 15.09.2026: `README.md`, `AI_CONTEXT.md`, `package.json`,
`src/styles/global.css`, `src/data/navigation.ts`, `src/components/Header.astro`,
`src/pages/index.astro`, filtreet under `src/`.

> **Status 15.09.2026: implementert** på greina `designsystem` i `aregh/kjernekaren-no`
> (commit `cf18cc1` punkt 1-4 og 6, commit `78689ad` heilgrøn flate). Ikkje merga til `main`.
> Are vedtok heilgrøn flate (punkt 5) same dag. Akseptkriteria i punkt 6 er verifiserte med
> bygg og Playwright på 8 sider × 320/375/768/1440px. Attståande: punkt 7.2 og 7.3.

---

## 0. Slik ligg kodebasen

```text
src/
├── styles/global.css        ← ALLE tokens og felleskomponent-klassar bur her
├── layouts/                 BaseLayout, BlogLayout, ServiceLayout
├── components/              Header, Footer, NewsletterForm, Testimonial, BlogListing
│   ├── blocks/TestimonialGrid.astro
│   └── ui/Accordion.astro
├── data/navigation.ts       hovudmeny + footermeny (med undermenyar)
├── content/                 blogg/ (21 md), kurs/ (masterclass.mdx), tenester/ (11 mdx),
│                            referanser/ (5 md), config.ts (Zod-schema)
└── pages/                   ~45 .astro-sider + [slug]-malar for blogg/kurs/tenester
```

Styling er scoped CSS per komponent + globale klassar i `global.css`. Ingen Tailwind.
**Alt farge- og typografi-arbeid skjer i `global.css`** — ikkje spre hex-verdiar ut i sidene.

## 1. Port tokens inn i global.css

Lag `src/styles/tokens.css` som ein tru kopi av `tokens/`-filene frå designsystemet
(colors, flater, typography, spacing, responsiv) og importer den øvst i `global.css`.
Behald dei eksisterande variabelnamna som **alias** så ingenting knekk:

```css
:root {
  --color-yellow: var(--bakgrunn-gul);
  --color-blue:   var(--farge-blaa);
  --color-red:    var(--farge-roed);
  --color-green:  var(--farge-groenn);
  --color-pink:   var(--farge-rosa);
  --color-purple: var(--farge-lilla);
  --color-black:  var(--farge-svart);
  --color-white:  var(--farge-kvit);
}
```

Deretter kan alias-a fasast ut side for side.

## 2. Konkrete avvik som må rettast

### P1 — farge og kontrast

| Kvar | I dag | Skal vere |
|---|---|---|
| `global.css` `--color-blue-dark: #170df2` | blå lenkefarge | **Slett.** Lenker er alltid svarte med underline |
| `global.css` `--color-gray: #757575` | sekundær tekst | Ingen grå tekst i systemet. Bruk svart. Behald variabelen **berre** til nøytrale flater/disabla felt (`--farge-graa`) |
| `global.css` `--color-dark-gray: #323232` | sitatteikn, karusellpiler | Svart |
| `Header.astro` `.nav-list > li > a { color: var(--color-gray) }` | grå menylenker | Svart. Aktiv side: vekt 800 + underline + `aria-current="page"` |
| `index.astro` `.home-hero h1::after` `border-top: 10px solid #b58e65` | brun trekant, ikkje i paletten | Laks `#FD9F78` eller fjern heilt |
| `global.css` `.prose blockquote` `border-left: 4px solid var(--color-blue)` | venstrestrek-aksent | Brandet sitt sitat: stort typografisk `&rdquo;`, feit sitattekst, namn + tittel under. Ingen venstrestrek |
| `AI_CONTEXT.md` seier `--color-yellow (#FFE484)` | motseier `global.css` (#FEF2AE) | Rett dokumentet. Sideflata er `#FEF2AE` (`.tema-gul-lys`) inntil flatevalet er avgjort — sjå punkt 5 |

### P1 — knappar

`global.css` `.btn` er i dag **svart flate, kvit tekst, 2px ramme, hover-invertering**.
Systemet har éin knapp: **laks `#FD9F78`, svart tekst, vekt 800, ingen ramme, skarpe
hjørne, ingen transition.**

```css
.btn {
  display: inline-flex; align-items: center;
  min-height: 48px; padding: 0.75rem 1.75rem;
  background: var(--knapp-flate); color: var(--knapp-tekst);
  font-weight: var(--vekt-ekstrafeit); font-size: 1.1875rem;
  border: none; border-radius: 0; text-decoration: none;
}
.btn:hover { background: var(--knapp-flate); text-decoration: underline; text-decoration-thickness: 3px; }
```

**Slett `.btn--outline`** — det finst ingen sekundær- eller ghost-knapp. Sekundærhandlingar
er svarte understreka tekstlenker i vekt 800 (nivå 2 i handlingshierarkiet).

### P1 — fontvekter

`global.css` importerer `Work+Sans:wght@400;600;700;900`. Systemet brukar **400, 600
(berre versal-etikettar) og 800**. 800 er ikkje lasta i det heile.

```css
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;800&display=swap');
```

Deretter: `h1` frå `900` → `800`, `h2/h3/h4` frå `600` → `800`, `.logo` frå `600` → `800`,
`.btn` frå `600` → `800`. Ingen `700` nokon stad.

### P1 — animasjon og fokus

Brandet har ingen animasjon. Fjern:
- `html { scroll-behavior: smooth }`
- `a { transition: opacity 0.2s }` og `a:hover { opacity: 0.7 }` → `a:hover { text-decoration-thickness: 3px }`
- `.btn { transition: all 0.2s }`
- `Header.astro`: `.mobile-toggle span { transition: all 0.3s }`, `.dropdown li a { transition: background-color 0.15s }`, `.nav-list a { transition: opacity 0.2s }`

Legg til fokusmarkering (manglar heilt i dag):
```css
:where(a, button, input, [tabindex]):focus-visible {
  outline: 3px solid var(--farge-blaa); outline-offset: 2px;
}
```

### P2 — skuggar og runde hjørne

- `Header.astro` `.dropdown { box-shadow: 0 4px 20px rgba(0,0,0,.1) }` → `border: 1px solid var(--strek)`, ingen skugge. Same for mobilmenyen.
- Mobilmenyen har `background: var(--color-white)` og `border-bottom: 1px solid #eee` → bruk sideflata og heilsvart strek.
- `index.astro` `.podcasts iframe { border-radius: 12px }` → **behald**. Tredjeparts-embed er eit godkjent unntak.

### P2 — navigasjon

- `navigation.ts`: `{ label: "Blogg", href: "/blog" }` peikar feil. Sidene ligg på `/blogg` (`src/pages/blogg.astro`, `blogg/[slug].astro`). **Rett til `/blogg`.**
- Undermenyane opnar berre på `:hover`/`:focus-within` — fungerer ikkje på berøringsskjerm i desktop-breidd. Legg til klikk/tastatur-toggle.
- Brekkpunktet for hamburger er 768px i `Header.astro`. Systemet seier 700px, men menyen har seks punkt med undermenyar — **behald 768px** og dokumenter det som avviket det er. Kravet er at menyen aldri brekk til fleire rader.
- `Header.astro` manglar `aria-current` på aktiv lenke (har berre ein `.active`-klasse).
- Logoen er allereie `<a href="/">` — **dette er i orden**, ikkje rør.

### P2 — breidder

`global.css` har `--max-width: 980px` og `--content-width: 680px`. Designsystemet sa
1100/620. **Koden vinn**: systemet er justert til 980/680. Ingen endring i `global.css`.

`.grid-sidebar` er `1fr 300px` og kollapsar ved 768px — det er i tråd med systemet
(tekst veks, sidekolonne fast). Ingen endring.

### P3 — typografi og responsivitet

- Brødtekst `p { font-size: 1.125rem }` (18px) er på minimumsgrensa. Løft til `clamp(18px, 1.4vw, 21px)` via `--tekst-broedtekst`.
- `.dropdown li a { font-size: 0.875rem }` (14px) og `.nav-list a { font-size: 1rem }` (16px) → minst 17px.
- `.prose blockquote cite { font-size: 1rem; color: var(--color-gray) }` → 17px, svart.
- Trykkflater: `.nav-list a` har `line-height: 50px` (OK), men `.dropdown li a` har `padding: 0.5rem 1.25rem` → minst 48px høgd. Same for `.slide-dots button` (8px prikkar — legg usynleg trykkflate rundt).
- Test 320 / 375 / 768 / 1440px på alle sju malane. Ingen vassrett skroll.

## 3. Forsida (`src/pages/index.astro`) — allereie nær systemet

Heltebiletet er alt bygd rett: `.home-hero` med fast høgd 580px (480px på mobil),
`<img object-fit: cover>`, og h1 som levande HTML i grøn boks. Dette er mønsteret
systemet no dokumenterer. Endringar:

- `h1 { font-size: 30px; font-weight: 600 }` → vekt **800**.
- `::after`-trekanten: `#b58e65` → `#FD9F78` eller fjern.
- `.quote-mark { font: bold 90px/1 Georgia, serif }` → Work Sans, ikkje Georgia. Systemet har éi skrift.
- `.home-reference p { font-weight: 600 }` → 800.
- Karusellpiler og prikkar: `var(--color-dark-gray)` → svart.
- Spotify-iframen har `width="875"` hardkoda — sett `width: 100%` i CSS så den ikkje sprenger på mobil.

## 4. Kodeopprydding

- `Backlog.md` har allereie desse, og dei overlappar med systemarbeidet — ta dei samtidig:
  - slett `src/pages/masterclass.astro` (duplikat av `content/kurs/masterclass.mdx`)
  - fyll eller redirect `fleksibel-sertifisering.astro`
  - migrer resten av tenestene frå hardkoda `.astro` til `.mdx`
- Kurs- og tenestekort skal genererast frå Content Collections, ikkje handskrivast per side. `kurs-og-foredrag.astro` har eit `courses`-array inline (linje ~62) — flytt til collection.
- Bruk `KursKort`, `BloggKort`, `Paginering`, `Innhaldsliste` frå designsystemet som mal når du lagar tilsvarande `.astro`-komponentar.
- Nyheitsbrev-seksjonen og footeren er alt éin komponent (`Footer.astro` + `NewsletterForm.astro`) — bra, behald.

## 5. Flatefarge — vedteke: heilgrøn

**Are vedtok 15.09.2026: heilgrøn** `#BCF17D` (`<body class="tema-groenn">`).

Slik er det gjort i koden:
- Header, footer og `.section--yellow` bruker `var(--flate-side)`, ikkje `--color-yellow`,
  så heile sida følgjer temaet. (`--color-yellow` er framleis alias for `#FEF2AE` til
  eventuelle innhaldsflater som skal vere lys gule.)
- Hentetekst-boksar **oppå foto** bruker `var(--hentetekst-flate)` (grøn).
- Hentetekst-boksar **direkte på flata** skal bruke `var(--hentetekst-paa-flate)` (gul
  `#FFE484`). Ingen slike finst per 15.09.2026, men regelen gjeld for nye sider.

## 6. Akseptkriterium

- [x] `src/styles/tokens.css` importert i `global.css`, alias på plass
- [x] Ingen hex-verdiar utanfor tokens-fila (grep etter `#` i `src/`)
- [x] Ingen `opacity` brukt til å dempe tekst eller lenker
- [x] Ingen `transition`, ingen `scroll-behavior: smooth`, ingen `box-shadow`
- [x] Work Sans lastar 400/600/800; ingen `font-weight: 700` eller `900` i `src/`
- [x] `.btn` er laks med svart tekst; `.btn--outline` sletta
- [x] `navigation.ts` peikar på `/blogg`
- [x] `aria-current="page"` på aktiv menylenke
- [x] `:focus-visible` synleg på alle interaktive element
- [x] Trykkflater ≥ 48px (Playwright-verifisert)
- [x] Ingen tekst under 17px (Playwright-verifisert; `.hero-label`/etikettar unntatt)
- [x] Ingen vassrett skroll ved 320/375/768/1440px på 8 sider (Playwright-verifisert)
- [x] `npm run build` går grønt (71 sider)
- [ ] Netlify-førehandsvisinga sjekka mot `PUBLISERING.md` (ventar på merge)

## 7. Uavklart

1. ~~**Flatefarge** (punkt 5)~~ — **avklara 15.09.2026: heilgrøn.**
2. **`/kurs-og-foredrag`**: sida finst som `.astro` i repoet, men live-versjonen ser framleis ut som Wix. Er deployen etter, eller er det ein redirect i `URL_Redirects_Export.csv` som sender trafikken til Wix?
3. **thecoremodel.com og kontekstarkitektur.no** har eigne repo (`aregh/thecoremodel-com`, `aregh/kontekstarkitektur-no`). Skal tokens-fila delast som ein npm-pakke / git submodule, eller kopierast inn i kvart repo? (kjernekaren-no har kopi i `src/styles/tokens.css` med kjeldemerking.)
4. ~~**`--color-gray`**~~ — **avklara 15.09.2026:** alias peikar no til svart; ingen grå tekst att. `--farge-graa` `#EAEAEA` er berre for nøytrale flater.

## Historikk

- **15.09.2026:** Status-blokk øvst, punkt 5 vedteke (heilgrøn), akseptkriterium kryssa av, punkt 7.1 og 7.4 avklara. `tokens/fonts.css` stramma inn til 400/600/800 + kursiv 400. **Forfattar:** Claude Fable 5.1 (Nimbalyst). **Vedtak frå Are:** «det skal være grønt», 15.09.2026.
- **15.09.2026:** Briefen skriven etter lesing av `aregh/kjernekaren-no`. **Forfattar:** Claude Design-eksport.
