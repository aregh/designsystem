/**
 * Flat laksefarga knapp med skarpe hjørne — einaste knappestilen i brandet.
 * @startingPoint section="Komponentar" subtitle="Flat rød knapp, skarpe hjørne" viewport="360x120"
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
