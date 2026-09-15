import React from 'react';
import { TextField } from './TextField.jsx';
import { Button } from './Button.jsx';

export function NewsletterForm({ heading = 'Abonner på nyheitsbrevet', blurb = 'Bli den første til å få oppdateringar om toppoppgaver, kjernemodellen, nye malar, fagartiklar, kurs og sprell frå Kjernekaren :-)', style }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ fontFamily: 'var(--font-sans)', maxWidth: 560, ...style }}>
      <h2 style={{ fontSize: 'var(--tekst-h3)', fontWeight: 'var(--vekt-feit)', margin: '0 0 12px' }}>{heading}</h2>
      <p style={{ margin: '0 0 20px', fontSize: '20px', lineHeight: 1.6 }}>{blurb}</p>
      {sent ? (
        <p style={{ fontWeight: 'var(--vekt-feit)' }}>Takk! Vi snakkast :-)</p>
      ) : (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <TextField placeholder="Fornamn" style={{ flex: '1 1 140px' }} />
          <TextField placeholder="Epost" style={{ flex: '1 1 180px' }} />
          <Button onClick={() => setSent(true)}>Hald meg oppdatert!</Button>
        </div>
      )}
    </section>
  );
}
