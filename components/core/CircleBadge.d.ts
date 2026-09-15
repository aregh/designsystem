/**
 * Blå sirkel med feit svart tekst — signaturelementet for dato/USP på kurssider og SoMe-oppslag.
 * @startingPoint section="Komponentar" subtitle="Blå sirkel med dato/USP" viewport="360x200"
 */
export interface CircleBadgeProps {
  children: React.ReactNode;
  /** Diameter i px (default 150) */
  size?: number;
  /** Default blå (--badge-flate). Bruk berre kjernemodell-fargane. */
  color?: string;
  style?: React.CSSProperties;
}
