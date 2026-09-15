export function TextLink({ children, href = '#', onClick, style }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: 'var(--lenke)',
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      {children}
    </a>
  );
}
