/** Sidefot: tynn strek, kursiv tagline, "Ta kontakt" med telefon og understreka lenker. */
export interface SiteFooterProps {
  tagline?: string;
  heading?: string;
  /** Reine tekstliner (telefon) */
  lines?: string[];
  links?: { label: string; href: string }[];
  maxWidth?: string;
  style?: React.CSSProperties;
}
