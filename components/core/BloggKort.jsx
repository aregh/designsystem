/* Rad i blogglista: dato, tittel som lenke, utdrag, valfritt bilete. */
export function BloggKort({ dato, tittel, utdrag, href, bilete, alt = '', style }) {
  return (
    <article style={{ display: 'grid', gridTemplateColumns: bilete ? 'repeat(auto-fit, minmax(min(280px,100%),1fr))' : 'minmax(0,1fr)', gap: 'var(--rom-6)', alignItems: 'start', padding: 'var(--rom-7) 0', borderBottom: '1px solid var(--strek-svak)', ...style }}>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 'var(--rom-3)', maxWidth: 'var(--breidd-tekst)' }}>
        <time style={{ fontSize: 'var(--tekst-etikett)', fontWeight: 'var(--vekt-halvfeit)', letterSpacing: 'var(--sperring-etikett)', textTransform: 'uppercase' }}>{dato}</time>
        <h2 style={{ margin: 0, fontSize: 'var(--tekst-h2)', fontWeight: 'var(--vekt-ekstrafeit)', lineHeight: 'var(--linjehoegd-tittel)' }}>
          <a href={href} style={{ color: 'var(--lenke)' }}>{tittel}</a>
        </h2>
        <p style={{ margin: 0, fontSize: 'var(--tekst-broedtekst)', lineHeight: 'var(--linjehoegd-broedtekst)' }}>{utdrag}</p>
      </div>
      {bilete && <a href={href} style={{ display: 'block', minWidth: 0 }}><img src={bilete} alt={alt} style={{ width: '100%', display: 'block' }} /></a>}
    </article>
  );
}
