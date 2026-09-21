export function StarRating({ count = 5, size = 18, style }) {
  return (
    <div style={{ display: 'flex', gap: '2px', color: 'var(--stjerne)', fontSize: size, lineHeight: 1, ...style }} aria-label={count + ' av 5 stjerner'}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? 'var(--stjerne)' : 'var(--farge-graa)' }}>★</span>
      ))}
    </div>
  );
}
