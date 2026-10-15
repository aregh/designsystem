/**
 * Aksordion-rad med feit tittel og chevron, skild med tynne strekar — brukt for kursdetaljar.
 * @startingPoint section="Komponentar" subtitle="Utvidbare rader med chevron" viewport="560x260"
 */
export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
export interface AccordionProps {
  children: React.ReactNode;
}
