import React from 'react';

export function AccordionItem({ title, children, defaultOpen = false }) {
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

export function Accordion({ children }) {
  return <div style={{ borderTop: '1px solid var(--strek-svak)' }}>{children}</div>;
}
