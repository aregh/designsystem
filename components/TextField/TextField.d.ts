/** Kvitt tekstfelt med tynn svart strek og skarpe hjørne — skjema og nyheitsbrev. */
export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}
