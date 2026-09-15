export function CircleBadge({ children, size = 150, color = 'var(--badge-flate)', style }) {
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
