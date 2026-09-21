export function TextField({ label, placeholder, multiline = false, value, onChange, style }) {
  const shared = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--tekst-liten)',
    background: 'var(--felt-flate)',
    border: '1px solid var(--strek)',
    borderRadius: 'var(--radius-null)',
    padding: '10px 12px',
    width: '100%',
    boxSizing: 'border-box',
    color: 'var(--tekst)',
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: 'var(--font-sans)', fontSize: 'var(--tekst-liten)', ...style }}>
      {label}
      {multiline
        ? <textarea rows={4} placeholder={placeholder} value={value} onChange={onChange} style={shared} />
        : <input type="text" placeholder={placeholder} value={value} onChange={onChange} style={shared} />}
    </label>
  );
}
