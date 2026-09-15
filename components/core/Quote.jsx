export function Quote({ children, name, role, variant = 'stor', style }) {
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
