// Inngangspunkt for byggeskriptet (scripts/bygg-bundle.sh).
// Importerer alle komponentane i components/ og eksponerer dei på
// window.Kjernekaren.<Namn>. Sjølve fila er byggeinput, ikkje output —
// output er den frittståande _ds_bundle.js i rotmappa.

import { Accordion, AccordionItem } from '../components/core/Accordion.jsx';
import { BloggKort } from '../components/core/BloggKort.jsx';
import { Button } from '../components/core/Button.jsx';
import { CircleBadge } from '../components/core/CircleBadge.jsx';
import { Innhaldsliste } from '../components/core/Innhaldsliste.jsx';
import { KursKort } from '../components/core/KursKort.jsx';
import { NewsletterForm } from '../components/core/NewsletterForm.jsx';
import { Paginering } from '../components/core/Paginering.jsx';
import { Quote } from '../components/core/Quote.jsx';
import { StarRating } from '../components/core/StarRating.jsx';
import { TestimonialCard } from '../components/core/TestimonialCard.jsx';
import { TextField } from '../components/core/TextField.jsx';
import { TextLink } from '../components/core/TextLink.jsx';
import { SiteFooter } from '../components/navigation/SiteFooter.jsx';
import { SiteHeader } from '../components/navigation/SiteHeader.jsx';

window.Kjernekaren = window.Kjernekaren || {};
Object.assign(window.Kjernekaren, {
  Accordion,
  AccordionItem,
  BloggKort,
  Button,
  CircleBadge,
  Innhaldsliste,
  KursKort,
  NewsletterForm,
  Paginering,
  Quote,
  StarRating,
  TestimonialCard,
  TextField,
  TextLink,
  SiteFooter,
  SiteHeader,
});
