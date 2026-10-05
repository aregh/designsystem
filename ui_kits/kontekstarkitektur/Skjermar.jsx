/* Heim, Metoden og Kurs for kontekstarkitektur.no — blå flate (.tema-blaa). */
const { SiteHeader, Button, Accordion, AccordionItem, NewsletterForm, TextLink, Quote, CircleBadge } = window.KjernekarenDesignsystem_8e6518;

const NAV = [
  { href: '/', label: 'Heim' },
  { href: '/metoden', label: 'Metoden' },
  { href: '/kurs', label: 'Kurs' },
  { href: '/blogg', label: 'Blogg' },
  { href: '/om', label: 'Om meg' },
];

const kaSide = { maxWidth: 936, margin: '0 auto', padding: '0 var(--side-marg)' };
const kaGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%),1fr))', gap: 56, alignItems: 'start' };
const kaBrod = { margin: 0, fontSize: 'var(--tekst-broedtekst)', lineHeight: 'var(--linjehoegd-broedtekst)' };
const kaH1 = { margin: '8px 0 6px', fontSize: 'var(--tekst-h1)', fontWeight: 'var(--vekt-ekstrafeit)', lineHeight: 1.16 };
const kaH2 = { margin: '26px 0 0', fontSize: 'var(--tekst-h2)', fontWeight: 'var(--vekt-ekstrafeit)' };
const kaEyebrow = { fontSize: 'var(--tekst-etikett)', fontWeight: 'var(--vekt-halvfeit)', letterSpacing: 'var(--sperring-etikett)', textTransform: 'uppercase' };

function TreSpoersmaal() {
  const rader = [
    ['#AEEBFB', 'Kontekst', 'kva skal KI-en alltid vite, og kva må haldast utanfor?'],
    ['#FD9F78', 'Samarbeid', 'korleis vekslar menneske og KI mellom retning, utføring og kontroll?'],
    ['#E6B0F9', 'Læring', 'kvar skal ny innsikt tilbakeførast, slik at systemet blir betre?'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}>
      {rader.map(([farge, tittel, tekst], i) => (
        <div key={tittel} style={{ display: 'flex', gap: 14, borderTop: '1px solid var(--strek)', borderBottom: i === 2 ? '1px solid var(--strek)' : 'none', padding: '14px 2px', fontSize: 'var(--tekst-broedtekst)', lineHeight: 'var(--linjehoegd-broedtekst)' }}>
          <span style={{ width: 18, height: 18, background: farge, border: farge === '#AEEBFB' ? '1px solid var(--strek)' : 'none', flex: 'none', marginTop: 6 }}></span>
          <span><b>{tittel}</b> – {tekst}</span>
        </div>
      ))}
    </div>
  );
}

function Heim({ gaaTil }) {
  return (
    <main style={{ ...kaSide, ...kaGrid }}>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={kaEyebrow}>Informasjonsarkitektur for KI-alderen</span>
        <h1 style={kaH1}>Kontekstarkitektur</h1>
        <p style={{ ...kaBrod, fontWeight: 'var(--vekt-ekstrafeit)' }}>Frå tilfeldig prompting til systematisk KI-arbeid.</p>
        <p style={kaBrod}>KI-en hugsar ikkje kva den treng for å hjelpe deg godt. Når kvar person promptar på sin måte, blir også resultata ulike. Eg kallar det kontekstamnesi – og det er eit arkitekturproblem, ikkje eit promptproblem.</p>
        <p style={kaBrod}>Kontekstarkitektur handlar om å byggje systemet rundt modellen: kva den alltid skal vite, korleis menneske og KI vekslar på arbeidet, og kvar ny innsikt blir teken vare på.</p>
        <Button onClick={() => gaaTil('/metoden')} style={{ alignSelf: 'flex-start', marginTop: 10 }}>Les om metoden</Button>
        <h2 style={kaH2}>Tre spørsmål</h2>
        <TreSpoersmaal />
      </div>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <CircleBadge size={220} color="#FFFFFF" style={{ flexDirection: 'column' }}>
          <span style={{ fontSize: 52, fontWeight: 'var(--vekt-ekstrafeit)', lineHeight: 1 }}>2000</span>
          <span style={{ fontSize: 'var(--tekst-etikett)', fontWeight: 'var(--vekt-halvfeit)', marginTop: 6 }}>timar med Claude<br />på tre år</span>
        </CircleBadge>
        <p style={{ ...kaBrod, textAlign: 'center' }}>Erfaringsgrunnlaget: praktisk KI-arbeid i reelle prosjekt, ikkje demoar.</p>
      </div>
    </main>
  );
}

function Metoden() {
  return (
    <main style={{ ...kaSide, ...kaGrid }}>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1 style={kaH1}>System slår triks</h1>
        <p style={{ ...kaBrod, fontWeight: 'var(--vekt-ekstrafeit)' }}>Kontekst slår prompts. Mennesket leier.</p>
        <p style={kaBrod}>Kontekstarkitektur er kjernemodell-tankegangen overført til KI: start der behova møtest. Kva treng menneska, og kva treng modellane? Svaret ligg i midten – og det er der du byrjar.</p>
        <h2 style={kaH2}>Riktig informasjon, rett stad, rett tid</h2>
        <ul style={{ margin: 0, paddingLeft: '1.3em', fontSize: 'var(--tekst-broedtekst)', lineHeight: 1.75 }}>
          <li><b>Kartlegg oppgåvene</b> folk faktisk brukar KI-en til</li>
          <li><b>Skriv ned konteksten</b> som må vere på plass kvar gong</li>
          <li><b>Definer arbeidsdelinga</b> mellom menneske og modell</li>
          <li><b>Bygg tilbakeføringa</b> slik at systemet lærer av bruken</li>
        </ul>
        <p style={kaBrod}>Resultatet er ikkje ein smart prompt, men ein arbeidsflyt heile teamet kan bruke – og forbetre.</p>
        <h2 style={kaH2}>Kva du får ut av det</h2>
        <ul style={{ margin: 0, paddingLeft: '1.3em', fontSize: 'var(--tekst-broedtekst)', lineHeight: 1.7 }}>
          <li>Jamnare kvalitet, uavhengig av kven som skriv prompten</li>
          <li>Mindre dobbeltarbeid og færre «kva sa vi sist?»-runder</li>
          <li>Ein tydeleg stad å leggje ny innsikt</li>
        </ul>
      </div>
      <Quote variant="sidestilt" name="Om kontekstamnesi">Som å få ein ny vikar kvar morgon.</Quote>
    </main>
  );
}

function Kurs() {
  return (
    <main style={{ ...kaSide, ...kaGrid }}>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={kaEyebrow}>Kurs og coaching</span>
        <h1 style={kaH1}>Kontekstarkitektur i praksis</h1>
        <p style={{ ...kaBrod, fontWeight: 'var(--vekt-ekstrafeit)' }}>Ein dag der teamet ditt går frå prompt-triks til eit system som held.</p>
        <ul style={{ margin: 0, paddingLeft: '1.3em', fontSize: 'var(--tekst-broedtekst)', lineHeight: 1.7 }}>
          <li>Kartlegging av oppgåvene teamet brukar KI til i dag</li>
          <li>Kontekstark for dei viktigaste arbeidsflytane</li>
          <li>Arbeidsdeling mellom menneske og modell</li>
          <li>Agentiske arbeidsflytar – kva som løner seg å automatisere</li>
        </ul>
        <Button href="#pamelding" style={{ alignSelf: 'flex-start', marginTop: 10 }}>Gå til påmelding</Button>
        <div style={{ marginTop: 18 }}>
          <Accordion>
            <AccordionItem title="Passar for">Produktteam, kommunikasjonsavdelingar og fagmiljø som allereie brukar KI, men manglar felles struktur.</AccordionItem>
            <AccordionItem title="Praktisk informasjon">Heildagskurs, digitalt eller hos dykk. Maks 14 deltakarar. Ta kontakt for internkurs.</AccordionItem>
          </Accordion>
        </div>
        <h2 style={kaH2}>Har du spørsmål om kurset?</h2>
        <p style={kaBrod}>Ring meg på 908 70 026, send epost til <TextLink href="mailto:are@kjernekaren.no">are@kjernekaren.no</TextLink> eller <TextLink href="#">book ein kaffiprat</TextLink>.</p>
        <p style={kaBrod}>Vi snakkast!</p>
        <p style={kaBrod}>Are</p>
      </div>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <img src="../../assets/are-portrett-rein.png" alt="Are Halland" style={{ width: '100%', display: 'block' }} />
        <p style={kaBrod}>Are Gjertin Urkegjerde Halland – kontekstarkitekt, kjernemodellskapar og kjernekar. 30 år med informasjonsarkitektur og strategi.</p>
      </div>
    </main>
  );
}

function Botn() {
  return (
    <div style={{ ...kaSide, marginTop: 96 }}>
      <hr style={{ border: 'none', borderTop: '1px solid var(--strek)', margin: '0 0 26px' }} />
      <div style={{ maxWidth: 'var(--breidd-tekst)' }}>
        <NewsletterForm
          heading="Abonner på nyheitsbrevet"
          blurb="Bli den første til å få oppdateringar om kontekstarkitektur, KI-arbeidsflytar, nye malar, fagartiklar og kurs :-)"
        />
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid var(--strek)', margin: '56px 0 40px' }} />
      <div style={{ maxWidth: 'var(--breidd-tekst)', display: 'flex', flexDirection: 'column', gap: 34 }}>
        <p style={{ margin: 0, fontStyle: 'italic', fontSize: 'var(--tekst-broedtekst)', lineHeight: 'var(--linjehoegd-broedtekst)' }}>Kontekstarkitektur – kurs, fasilitering og uavhengig rådgjeving frå mannen bak kjernemodellen. Spør meg om KI-arbeidsflytar og kontekst som held!</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 'var(--tekst-broedtekst)' }}>
          <h2 style={{ margin: '0 0 6px', fontSize: 'var(--tekst-h2)', fontWeight: 'var(--vekt-ekstrafeit)' }}>Ta kontakt</h2>
          <span>+47 908 70 026</span>
          <TextLink href="mailto:are@kjernekaren.no">are@kjernekaren.no</TextLink>
          <TextLink href="#">Følg meg på LinkedIn</TextLink>
          <TextLink href="#">Book ein kaffiprat</TextLink>
        </div>
      </div>
    </div>
  );
}

function KontekstarkitekturSide() {
  const [side, setSide] = React.useState('/');
  const gaaTil = (href) => setSide(href);
  return (
    <div className="tema-blaa" style={{ minHeight: '100vh', paddingBottom: 80 }}>
      <SiteHeader
        brand="Kontekstarkitektur"
        items={NAV.map((n) => ({ ...n, href: n.href }))}
        activeHref={side}
        maxWidth="936px"
        style={{ paddingBottom: 22 }}
      />
      {side === '/' && <Heim gaaTil={gaaTil} />}
      {side === '/metoden' && <Metoden />}
      {side === '/kurs' && <Kurs />}
      {!['/', '/metoden', '/kurs'].includes(side) && (
        <main style={kaSide}><p style={kaBrod}>Denne sida finst ikkje i kjeldematerialet, og er difor med vilje tom.</p></main>
      )}
      <Botn />
    </div>
  );
}

Object.assign(window, { KontekstarkitekturSide, Heim, Metoden, Kurs, Botn, NAV });
