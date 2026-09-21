export function Button({ children, href, caps = false, onClick, style }) {
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
        fontWeight: 'var(--vekt-ekstrafeit)',
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
