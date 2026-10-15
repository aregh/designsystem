export interface BloggKortProps {
  dato: string; tittel: string; utdrag: string; href: string;
  bilete?: string; alt?: string; style?: React.CSSProperties;
}
export function BloggKort(props: BloggKortProps): JSX.Element;
