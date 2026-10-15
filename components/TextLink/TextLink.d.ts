/** Svart understreka tekstlenke — brukt for alle lenker, også sekundærhandlingar. */
export interface TextLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
