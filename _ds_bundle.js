const {useState,useEffect,useRef,useCallback,useMemo}=React;

// ---- components/core/Button.jsx
function Button({ children, href, caps = false, onClick, style }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{
        display: 'inline-block',
        background: 'var(--knapp-flate)',
        color: 'var(--knapp-tekst)',
        fontFamily: 'var(--font-sans)',
        fontSize: caps ? '14px' : 'var(--tekst-liten)',
        fontWeight: 'var(--vekt-feit)',
        letterSpacing: caps ? '0.12em' : '0.01em',
        textTransform: caps ? 'uppercase' : 'none',
        textDecoration: 'none',
        border: 'none',
        borderRadius: 'var(--radius-null)',
        padding: '12px 24px',
        cursor: 'pointer',
        lineHeight: 1.3,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// ---- components/core/TextLink.jsx
function TextLink({ children, href = '#', onClick, style }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: 'var(--lenke)',
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      {children}
    </a>
  );
}

// ---- components/core/CircleBadge.jsx
function CircleBadge({ children, size = 150, color = 'var(--badge-flate)', style }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 'var(--radius-sirkel)',
        background: color,
        color: 'var(--tekst)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--vekt-feit)',
        fontSize: size / 8.5,
        lineHeight: 1.35,
        padding: size / 10,
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ---- components/core/StarRating.jsx
function StarRating({ count = 5, size = 18, style }) {
  return (
    <div style={{ display: 'flex', gap: '2px', color: 'var(--stjerne)', fontSize: size, lineHeight: 1, ...style }} aria-label={count + ' av 5 stjerner'}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ opacity: i < count ? 1 : 0.25 }}>★</span>
      ))}
    </div>
  );
}

// ---- components/core/Accordion.jsx
function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--strek-svak)', fontFamily: 'var(--font-sans)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '18px 2px', font: 'inherit', textAlign: 'left',
          fontWeight: 'var(--vekt-feit)', fontSize: 'var(--tekst-broedtekst)', color: 'var(--tekst)',
        }}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span style={{ fontSize: '14px', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}>▾</span>
      </button>
      {open && (
        <div style={{ padding: '0 2px 20px', fontSize: 'var(--tekst-broedtekst)', lineHeight: 'var(--linjehoegd-broedtekst)' }}>
          {children}
        </div>
      )}
    </div>
  );
}

function Accordion({ children }) {
  return <div style={{ borderTop: '1px solid var(--strek-svak)' }}>{children}</div>;
}

// ---- components/core/Quote.jsx
function Quote({ children, name, role, variant = 'stor', style }) {
  if (variant === 'sidestilt') {
    return (
      <figure style={{ margin: 0, fontFamily: 'var(--font-sans)', maxWidth: 320, textAlign: 'center', ...style }}>
        <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: 'var(--tekst-broedtekst)', lineHeight: 1.55 }}>
          “{children}”
        </blockquote>
        {name && (
          <figcaption style={{ marginTop: '12px', fontSize: 'var(--tekst-liten)' }}>
            {name}{role ? ',' : ''}<br />{role}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <figure style={{ margin: 0, fontFamily: 'var(--font-sans)', maxWidth: 420, ...style }}>
      <div aria-hidden="true" style={{ fontSize: '64px', fontWeight: 'var(--vekt-ekstrafeit)', lineHeight: 0.5, marginBottom: '20px' }}>”</div>
      <blockquote style={{ margin: 0, fontWeight: 'var(--vekt-feit)', fontSize: '20px', lineHeight: 1.45, textAlign: 'center' }}>
        “{children}”
      </blockquote>
      {name && (
        <figcaption style={{ marginTop: '14px', fontSize: 'var(--tekst-liten)', textAlign: 'center', fontStyle: 'italic' }}>
          {name}{role ? ', ' : ''}{role}
        </figcaption>
      )}
    </figure>
  );
}

// ---- components/core/TestimonialCard.jsx
function TestimonialCard({ image, name, role, quote, stars = 5, style }) {
  return (
    <figure style={{ margin: 0, fontFamily: 'var(--font-sans)', maxWidth: 250, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', ...style }}>
      {image && <img src={image} alt={name} style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)' }} />}
      <figcaption style={{ fontWeight: 'var(--vekt-feit)', fontSize: 'var(--tekst-liten)', lineHeight: 1.4 }}>
        {name},<br />{role}
      </figcaption>
      <StarRating count={stars} size={16} style={{ justifyContent: 'center' }} />
      <blockquote style={{ margin: 0, fontWeight: 'var(--vekt-feit)', fontSize: '14px', lineHeight: 1.5 }}>
        “{quote}”
      </blockquote>
    </figure>
  );
}

// ---- components/core/TextField.jsx
function TextField({ label, placeholder, multiline = false, value, onChange, style }) {
  const shared = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--tekst-liten)',
    background: 'var(--felt-flate)',
    border: '1px solid rgba(0,0,0,.35)',
    borderRadius: 'var(--radius-null)',
    padding: '10px 12px',
    width: '100%',
    boxSizing: 'border-box',
    color: 'var(--tekst)',
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-sans)', fontSize: 'var(--tekst-liten)', ...style }}>
      {label}
      {multiline
        ? <textarea rows={4} placeholder={placeholder} value={value} onChange={onChange} style={shared} />
        : <input type="text" placeholder={placeholder} value={value} onChange={onChange} style={shared} />}
    </label>
  );
}

// ---- components/core/NewsletterForm.jsx
function NewsletterForm({ heading = 'Abonner på nyheitsbrevet', blurb = 'Bli den første til å få oppdateringar om toppoppgaver, kjernemodellen, nye malar, fagartiklar, kurs og sprell frå Kjernekaren :-)', style }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ fontFamily: 'var(--font-sans)', maxWidth: 560, ...style }}>
      <h2 style={{ fontSize: 'var(--tekst-h3)', fontWeight: 'var(--vekt-feit)', margin: '0 0 12px' }}>{heading}</h2>
      <p style={{ margin: '0 0 20px', fontSize: '20px', lineHeight: 1.6 }}>{blurb}</p>
      {sent ? (
        <p style={{ fontWeight: 'var(--vekt-feit)' }}>Takk! Vi snakkast :-)</p>
      ) : (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <TextField placeholder="Fornamn" style={{ flex: '1 1 140px' }} />
          <TextField placeholder="Epost" style={{ flex: '1 1 180px' }} />
          <Button onClick={() => setSent(true)}>Hald meg oppdatert!</Button>
        </div>
      )}
    </section>
  );
}

// ---- components/navigation/SiteHeader.jsx
function SiteHeader({ brand = 'Are Halland', items = ['Heim', 'Kurs', 'Tenester', 'Boka', 'Blogg', 'Om meg'], active, maxWidth = 'var(--breidd-side)', style }) {
  return (
    <header style={{ fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ maxWidth, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 24px' }}>
        <a href="#" style={{ fontWeight: 'var(--vekt-feit)', fontSize: '19px', color: 'var(--tekst)', textDecoration: 'none' }}>{brand}</a>
        <nav style={{ display: 'flex', gap: '22px' }}>
          {items.map((item) => (
            <a key={item} href="#" style={{
              color: 'var(--tekst)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: item === active ? 'var(--vekt-feit)' : 'var(--vekt-normal)',
              opacity: item === active ? 1 : 0.75,
            }}>{item}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ---- components/navigation/SiteFooter.jsx
function SiteFooter({
  tagline = 'Kjernekaren – kurs, fasilitering og uavhengig rådgjeving frå mannen bak kjernemodellen. Spør meg om toppoppgaver og datadriven kundeinnsikt!',
  heading = 'Ta kontakt',
  lines = ['+47 908 70 026'],
  links = [
    { label: 'are@kjernekaren.no', href: 'mailto:are@kjernekaren.no' },
    { label: 'Følg meg på LinkedIn', href: '#' },
    { label: 'Book ein kaffiprat', href: '#' },
  ],
  maxWidth = 'var(--breidd-tekst)',
  style,
}) {
  return (
    <footer style={{ fontFamily: 'var(--font-sans)', padding: '40px 24px 64px', ...style }}>
      <div style={{ maxWidth, margin: '0 auto' }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--strek-svak)', margin: '0 0 40px' }} />
        <p style={{ fontStyle: 'italic', fontSize: '19px', lineHeight: 1.6, margin: '0 0 36px' }}>{tagline}</p>
        <h2 style={{ fontSize: 'var(--tekst-h3)', fontWeight: 'var(--vekt-feit)', margin: '0 0 16px' }}>{heading}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '19px' }}>
          {lines.map((l) => <span key={l}>{l}</span>)}
          {links.map((l) => <TextLink key={l.label} href={l.href}>{l.label}</TextLink>)}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window,{Button,TextLink,CircleBadge,StarRating,AccordionItem,Accordion,Quote,TestimonialCard,TextField,NewsletterForm,SiteHeader,SiteFooter});
