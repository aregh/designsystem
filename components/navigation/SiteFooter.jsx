import { TextLink } from '../core/TextLink.jsx';

export function SiteFooter({
  tagline = 'Kjernekaren – kurs, fasilitering og uavhengig rådgjeving frå mannen bak kjernemodellen. Spør meg om toppoppgaver og datadriven kundeinnsikt!',
  heading = 'Ta kontakt',
  lines = ['+47 908 70 026'],
  links = [
    { label: 'are@kjernekaren.no', href: 'mailto:are@kjernekaren.no' },
    { label: 'Følg meg på LinkedIn', href: '#' },
    { label: 'Book ein kaffiprat', href: '#' },
  ],
  maxWidth = 'var(--breidd-tekst)',
  style,
}) {
  return (
    <footer style={{ fontFamily: 'var(--font-sans)', padding: '40px 24px 64px', ...style }}>
      <div style={{ maxWidth, margin: '0 auto' }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--strek)', margin: '0 0 40px' }} />
        <p style={{ fontStyle: 'italic', fontSize: '19px', lineHeight: 1.6, margin: '0 0 36px' }}>{tagline}</p>
        <h2 style={{ fontSize: 'var(--tekst-h3)', fontWeight: 'var(--vekt-ekstrafeit)', margin: '0 0 16px' }}>{heading}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '19px' }}>
          {lines.map((l) => <span key={l}>{l}</span>)}
          {links.map((l) => <TextLink key={l.label} href={l.href}>{l.label}</TextLink>)}
        </div>
      </div>
    </footer>
  );
}
