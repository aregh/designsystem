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
