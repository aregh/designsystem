// Kjernekaren Designsystem — typar for window.KjernekarenDesignsystem_8e6518

// Accordion
/**
 * Aksordion-rad med feit tittel og chevron, skild med tynne strekar — brukt for kursdetaljar.
 * @startingPoint section="Komponentar" subtitle="Utvidbare rader med chevron" viewport="560x260"
 */
export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
export interface AccordionProps {
  children: React.ReactNode;
}

// BloggKort
export interface BloggKortProps {
  dato: string; tittel: string; utdrag: string; href: string;
  bilete?: string; alt?: string; style?: React.CSSProperties;
}
export function BloggKort(props: BloggKortProps): JSX.Element;

// Button
/**
 * Flat laksefarga knapp med skarpe hjørne — einaste knappestilen i brandet.
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Rendrar som <a> om sett */
  href?: string;
  /** Sperra versaltekst (engelske sider, t.d. "BUY THE BOOK NOW") */
  caps?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

// CircleBadge
/**
 * Blå sirkel med feit svart tekst — signaturelementet for dato/USP på kurssider og SoMe-oppslag.
 */
export interface CircleBadgeProps {
  children: React.ReactNode;
  /** Diameter i px (default 150) */
  size?: number;
  /** Default blå (--badge-flate). Bruk berre kjernemodell-fargane. */
  color?: string;
  style?: React.CSSProperties;
}

// Innhaldsliste
export interface InnhaldslisteProps {
  tittel?: string; punkt?: { label: string; href: string }[]; lesetid?: string; style?: React.CSSProperties;
}
export function Innhaldsliste(props: InnhaldslisteProps): JSX.Element;

// KursKort
export interface KursKortProps {
  tittel: string;
  /** Dato eller «På forespørsel» — vises som versal-etikett. */
  naar: string;
  tekst: string;
  ctaTekst: string;
  href: string;
  /** Tekst i blå sirkel-badge, t.d. «Bli sertifisert fasilitator». */
  badge?: string;
  sitat?: string;
  style?: React.CSSProperties;
}
export function KursKort(props: KursKortProps): JSX.Element;

// NewsletterForm
/** Nyheitsbrev-seksjon: tittel, blurb med :-), fornamn + epost + rød knapp. */
export interface NewsletterFormProps {
  heading?: string;
  blurb?: string;
  style?: React.CSSProperties;
}

// Paginering
export interface PagineringProps { sider?: { nr: number; href: string }[]; aktiv?: number; style?: React.CSSProperties }
export function Paginering(props: PagineringProps): JSX.Element;

// Quote
/** Sitatblokk: 'stor' (stort ”-teikn + feit sentrert tekst) eller 'sidestilt' (kursiv i smal kolonne). */
export interface QuoteProps {
  children: React.ReactNode;
  name?: string;
  role?: string;
  variant?: 'stor' | 'sidestilt';
  style?: React.CSSProperties;
}

// StarRating
/** Stjernerangering (★) brukt under kursdeltakar-sitat. */
export interface StarRatingProps {
  /** Tal fylte stjerner, 0–5 (default 5) */
  count?: number;
  /** Glyf-storleik i px */
  size?: number;
  style?: React.CSSProperties;
}

// TestimonialCard
/**
 * Kursdeltakar-kort: firkanta s/kv-portrett, namn + rolle, stjerner, kort feit sitat. Står typisk tre i breidda.
 */
export interface TestimonialCardProps {
  /** Portrett-URL (vert vist firkanta og i s/kv) */
  image?: string;
  name: string;
  role: string;
  quote: string;
  /** 0–5, default 5 */
  stars?: number;
  style?: React.CSSProperties;
}

// TextField
/** Kvitt tekstfelt med tynn svart strek og skarpe hjørne — skjema og nyheitsbrev. */
export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}

// TextLink
/** Svart understreka tekstlenke — brukt for alle lenker, også sekundærhandlingar. */
export interface TextLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

// SiteFooter
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

// SiteHeader
export interface NavItem { label: string; href: string; children?: NavItem[] }
export interface SiteHeaderProps {
  brand?: string;
  /** Logoen er alltid ei lenke til forsida. */
  homeHref?: string;
  items?: NavItem[];
  activeHref?: string;
  maxWidth?: string;
  style?: React.CSSProperties;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
