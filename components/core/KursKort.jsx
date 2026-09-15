/* Kort i kurs-oversikta: dato-etikett, tittel, tekst, CTA-lenke, valfri sirkel-badge. */
export function KursKort({ tittel, naar, tekst, ctaTekst, href, badge, sitat, style }) {
  return (
    <article style={{ display: 'grid', gridTemplateColumns: badge ? 'minmax(0,1fr) auto' : 'minmax(0,1fr)', gap: 'var(--rom-6)', alignItems: 'start', padding: 'var(--rom-7) 0', borderBottom: '1px solid var(--strek-svak)', ...style }}>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--rom-3)' }}>
        <span style={{ fontSize: 'var(--tekst-etikett)', fontWeight: 'var(--vekt-halvfeit)', letterSpacing: 'var(--sperring-etikett)', textTransform: 'uppercase' }}>{naar}</span>
        <h3 style={{ margin: 0, fontSize: 'var(--tekst-h2)', fontWeight: 'var(--vekt-ekstrafeit)', lineHeight: 'var(--linjehoegd-tittel)' }}>{tittel}</h3>
        <p style={{ margin: 0, fontSize: 'var(--tekst-broedtekst)', lineHeight: 'var(--linjehoegd-broedtekst)', maxWidth: 'var(--breidd-tekst)' }}>{tekst}</p>
        {sitat && <p style={{ margin: 0, fontStyle: 'italic', fontSize: 'var(--tekst-liten)' }}>&laquo;{sitat}&raquo;</p>}
        <a href={href} style={{ color: 'var(--lenke)', fontWeight: 'var(--vekt-ekstrafeit)', fontSize: 'var(--tekst-h3)', display: 'inline-flex', alignItems: 'center', minHeight: 'var(--trykkflate-min)' }}>{ctaTekst}</a>
      </div>
      {badge && (
        <span style={{ width: '150px', height: '150px', borderRadius: 'var(--radius-sirkel)', background: 'var(--badge-flate)', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 'var(--rom-4)', fontWeight: 'var(--vekt-ekstrafeit)', fontSize: 'var(--tekst-liten)', lineHeight: 1.3, justifySelf: 'end' }}>{badge}</span>
      )}
    </article>
  );
}
