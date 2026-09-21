import { useState } from 'react';

/* Header med klikkbar logo (alltid til forsida), undermenyar og hamburger under 600px. */
export function SiteHeader({
  brand = 'Are Halland',
  homeHref = '/',
  items = [],
  activeHref,
  maxWidth = 'var(--breidd-side)',
  style,
}) {
  const [ope, setOpe] = useState(false);
  const [undermeny, setUndermeny] = useState(null);

  const lenke = (it, niva) => (
    <a
      key={it.href}
      href={it.href}
      aria-current={it.href === activeHref ? 'page' : undefined}
      style={{
        color: 'var(--tekst)',
        textDecoration: it.href === activeHref ? 'underline' : 'none',
        textDecorationThickness: '2px',
        textUnderlineOffset: '4px',
        fontSize: niva ? '17px' : 'var(--tekst-liten)',
        fontWeight: it.href === activeHref ? 'var(--vekt-ekstrafeit)' : 'var(--vekt-normal)',
        display: 'flex',
        alignItems: 'center',
        minHeight: 'var(--trykkflate-min)',
        padding: niva ? '0 0 0 var(--rom-5)' : '0',
      }}
    >
      {it.label}
    </a>
  );

  return (
    <header style={{ fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ maxWidth, margin: '0 auto', padding: 'var(--rom-5) var(--side-marg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--rom-5)' }}>
        <a href={homeHref} style={{ fontWeight: 'var(--vekt-ekstrafeit)', fontSize: '19px', color: 'var(--tekst)', textDecoration: 'none' }}>{brand}</a>

        <button
          type="button"
          aria-expanded={ope}
          aria-label={ope ? 'Lukk meny' : 'Opne meny'}
          onClick={() => setOpe(!ope)}
          style={{ display: 'none', background: 'none', border: 'none', font: 'inherit', fontSize: '24px', width: 'var(--trykkflate-min)', height: 'var(--trykkflate-min)', cursor: 'pointer' }}
          data-kk-hamburger
        >
          {ope ? '\u00d7' : '\u2261'}
        </button>

        <nav aria-label="Hovudmeny" style={{ display: 'flex', gap: 'var(--rom-5)', flexWrap: 'wrap' }} data-kk-nav>
          {items.map((it) => (
            <div key={it.href} style={{ position: 'relative' }}
                 onMouseEnter={() => setUndermeny(it.href)}
                 onMouseLeave={() => setUndermeny(null)}>
              {lenke(it)}
              {it.children && undermeny === it.href && (
                <div style={{ position: 'absolute', top: '100%', left: 0, background: 'var(--farge-kvit)', border: '1px solid var(--strek)', padding: 'var(--rom-3) var(--rom-5)', minWidth: '260px', zIndex: 20, display: 'flex', flexDirection: 'column' }}>
                  {it.children.map((c) => lenke(c))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {ope && (
        <nav aria-label="Hovudmeny" style={{ padding: '0 var(--side-marg) var(--rom-6)', display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--strek)' }} data-kk-mobilmeny>
          {items.map((it) => (
            <div key={it.href} style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--strek)' }}>
              {lenke(it)}
              {it.children && it.children.map((c) => lenke(c, 1))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
