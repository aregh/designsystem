# UI-kit: Kjernemodellen.no

Recreation av kurs-landingssida på **kjernemodellen.no** (norsk/nynorsk univers).

- **Flate:** gul #FEF2AE
- **Språk:** nynorsk, første person (Are snakkar), tekst-smiley `:-)`
- **Struktur:** SiteHeader → hero (eyebrow + h1 + bullets + CTA, bokomslag til høgre) →
  testimonial-rad (3) → tosplitta innhald med sidestilt sitat → accordion → kontakt →
  NewsletterForm → SiteFooter

Komponert av design­system-primitivane (SiteHeader, Button, TestimonialCard, Quote,
Accordion, NewsletterForm, SiteFooter, TextLink) via `_ds_bundle.js`.

`index.html` er ei sjølvstendig side som mountar heile skjermen. Opne direkte i nettlesar.
