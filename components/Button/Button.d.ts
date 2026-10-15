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
