/** Sitatblokk: 'stor' (stort ”-teikn + feit sentrert tekst) eller 'sidestilt' (kursiv i smal kolonne). */
export interface QuoteProps {
  children: React.ReactNode;
  name?: string;
  role?: string;
  variant?: 'stor' | 'sidestilt';
  style?: React.CSSProperties;
}
