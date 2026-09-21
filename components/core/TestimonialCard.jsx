import { StarRating } from './StarRating.jsx';

export function TestimonialCard({ image, name, role, quote, stars = 5, style }) {
  return (
    <figure style={{ margin: 0, fontFamily: 'var(--font-sans)', maxWidth: 250, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', ...style }}>
      {image && <img src={image} alt={name} style={{ width: 96, height: 96, borderRadius: 'var(--radius-null)', objectFit: 'cover', filter: 'grayscale(1)' }} />}
      <figcaption style={{ fontWeight: 'var(--vekt-ekstrafeit)', fontSize: 'var(--tekst-liten)', lineHeight: 1.4 }}>
        {name},<br />{role}
      </figcaption>
      <StarRating count={stars} size={16} style={{ justifyContent: 'center' }} />
      <blockquote style={{ margin: 0, fontWeight: 'var(--vekt-ekstrafeit)', fontSize: '14px', lineHeight: 1.5 }}>
        “{quote}”
      </blockquote>
    </figure>
  );
}
