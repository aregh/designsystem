/**
 * Kursdeltakar-kort: rundt s/kv-portrett, namn + rolle, stjerner, kort feit sitat. Står typisk tre i breidda.
 * @startingPoint section="Komponentar" subtitle="Portrett + stjerner + sitat" viewport="300x320"
 */
export interface TestimonialCardProps {
  /** Portrett-URL (vert vist rundt og i s/kv) */
  image?: string;
  name: string;
  role: string;
  quote: string;
  /** 0–5, default 5 */
  stars?: number;
  style?: React.CSSProperties;
}
