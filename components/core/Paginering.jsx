export function Paginering({ sider = [], aktiv = 1, style }) {
  return (
    <nav aria-label="Sider" style={{ display: 'flex', gap: 'var(--rom-3)', padding: 'var(--rom-7) 0', ...style }}>
      {sider.map((s) => (
        <a key={s.nr} href={s.href} aria-current={s.nr === aktiv ? 'page' : undefined}
           style={{ minWidth: 'var(--trykkflate-min)', minHeight: 'var(--trykkflate-min)', display: 'grid', placeItems: 'center', color: 'var(--lenke)', border: '1px solid var(--strek)', textDecoration: 'none', fontWeight: s.nr === aktiv ? 'var(--vekt-ekstrafeit)' : 'var(--vekt-normal)', background: s.nr === aktiv ? 'var(--badge-flate)' : 'transparent' }}>
          {s.nr}
        </a>
      ))}
    </nav>
  );
}
