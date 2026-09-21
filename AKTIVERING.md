# Aktivering: gjer Designsystem Kjernekaren til standard i Claude Design

Skrive til Are. Fem minutt, alt skjer i nettlesaren på claude.ai/design.

## Kva som alt er gjort (21.09.2026)

- Pakka ligg på GitHub: `aregh/designsystem`, grein `main`.
- Pakka er pusha inn i Claude Design som eit eige designsystem-prosjekt med namnet
  **Designsystem Kjernekaren** (prosjekt-id `97685ef9-2b14-4af1-ba1b-37363aba55c3`).
  Det er dette prosjektet du skal velje som standard. Det gamle prosjektet med same
  namn er eit vanleg designprosjekt og kan ikkje bli standard, same kva ein gjer.

## Steg du gjer sjølv

1. **Opne claude.ai/design** og gå til oversikta over designsystem (der du vel
   designsystem når du startar eit nytt prosjekt).

2. **Sjekk at «Designsystem Kjernekaren» ligg i lista** som designsystem, og opne det.
   Du skal sjå kort for Type, Colors, Spacing, Brand, Komponentar, Merkevare, og
   startpunkta for kjernemodellen.no og thecoremodel.com. Manglar korta, sjå steg 7.

3. **Set det som standard.** Finn innstillinga for standard designsystem for
   organisasjonen (ligg under organisasjons- eller arbeidsområde-innstillingane, ikkje
   inne i prosjektet). Vel «Designsystem Kjernekaren».

4. **Slett dei tre gamle oppføringane** som heiter berre «Design System»:
   - to av dei er heilt tomme (april 2026)
   - den tredje har berre den gamle «retningar»-mappa frå mai 2026, som er erstatta av
     dette systemet
   Slett dei frå prosjektlista i appen. Dette kan ikkje gjerast via API-et.

5. **Verifiser:** opne eit nytt, tomt prosjekt i Claude Design. Systemet skal vere valt
   automatisk, og eit enkelt oppdrag som «lag ein hero for kjernekaren.no» skal kome ut
   på grøn flate `#BCF17D`, med Work Sans 800, laksefarga knapp og radius 0.

6. **Om du vil kople GitHub-repoet i tillegg** (for at appen skal hente oppdateringar
   sjølv): gi Claude-appen tilgang til `aregh/designsystem` under koplingar, og vel
   repoet der appen tilbyr å kople eit repo til designsystemet. Dette er valfritt; det
   pusha prosjektet fungerer utan.

7. **Om systemet ikkje dukkar opp, eller korta manglar:**
   - Last sida på nytt og sjekk at du er i rett organisasjon (Kjernepar AS).
   - Be meg køyre synkroniseringa på nytt frå denne mappa; det er ein trygg operasjon
     som skriv fil for fil, ikkje ein full erstatning.
   - Om prosjektet finst, men ikkje kan veljast som standard: det er feil prosjekttype.
     Då må det opprettast på nytt som designsystem (eg gjer det) og du slettar det gamle.

## Vedlikehald

Endringar gjer du i denne mappa (eller i Claude Design). Deretter:

```
scripts/bygg-bundle.sh      # regenerer _ds_bundle.js frå components/
git commit && git push       # aregh/designsystem
```

og be meg synkronisere til Claude Design. `github.md` skal få ny `## Last sync` ved kvar push.

## Historikk

- **21.09.2026:** Oppretta. **Forfattar:** Claude Opus 5 (Nimbalyst). På bestilling frå Are.
