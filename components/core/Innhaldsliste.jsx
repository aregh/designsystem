/* «I artikkelen kan du lese om:» — ankerliste øvst i lange bloggartiklar. */
export function Innhaldsliste({ tittel = 'I artikkelen kan du lese om:', punkt = [], lesetid, style }) {
  return (
    <aside style={{ maxWidth: 'var(--breidd-tekst)', padding: 'var(--rom-5)', background: 'var(--farge-gul)', display: 'flex', flexDirection: 'column', gap: 'var(--rom-3)', ...style }}>
      {lesetid && <span style={{ fontSize: 'var(--tekst-etikett)', fontWeight: 'var(--vekt-halvfeit)', letterSpacing: 'var(--sperring-etikett)', textTransform: 'uppercase' }}>Lesetid {lesetid}</span>}
      <strong style={{ fontSize: 'var(--tekst-h3)', fontWeight: 'var(--vekt-ekstrafeit)' }}>{tittel}</strong>
      <ol style={{ margin: 0, paddingLeft: '1.3em', display: 'flex', flexDirection: 'column', gap: 'var(--rom-1)', lineHeight: 'var(--linjehoegd-broedtekst)' }}>
        {punkt.map((p) => (
          <li key={p.href}><a href={p.href} style={{ color: 'var(--lenke)' }}>{p.label}</a></li>
        ))}
      </ol>
    </aside>
  );
}
