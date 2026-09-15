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
