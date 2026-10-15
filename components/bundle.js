/* @ds-bundle: {"format":4,"namespace":"KjernekarenDesignsystem_8e6518","components":[{"name":"AccordionItem","sourcePath":"components/core/Accordion.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"BloggKort","sourcePath":"components/core/BloggKort.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CircleBadge","sourcePath":"components/core/CircleBadge.jsx"},{"name":"Innhaldsliste","sourcePath":"components/core/Innhaldsliste.jsx"},{"name":"KursKort","sourcePath":"components/core/KursKort.jsx"},{"name":"NewsletterForm","sourcePath":"components/core/NewsletterForm.jsx"},{"name":"Paginering","sourcePath":"components/core/Paginering.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"TestimonialCard","sourcePath":"components/core/TestimonialCard.jsx"},{"name":"TextField","sourcePath":"components/core/TextField.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"ccd3578f049d","components/core/BloggKort.jsx":"a4993ee295ef","components/core/Button.jsx":"74001b6fdd4d","components/core/CircleBadge.jsx":"306ef1d95739","components/core/Innhaldsliste.jsx":"1f4bd1c3b616","components/core/KursKort.jsx":"e5156e300152","components/core/NewsletterForm.jsx":"68d0ecb9288b","components/core/Paginering.jsx":"72c65140526a","components/core/Quote.jsx":"d6271bfb5524","components/core/StarRating.jsx":"860645135bdb","components/core/TestimonialCard.jsx":"a7536ad16086","components/core/TextField.jsx":"35f5c01174a5","components/core/TextLink.jsx":"ea25f9e81a84","components/navigation/SiteFooter.jsx":"ac14ae3f62eb","components/navigation/SiteHeader.jsx":"c8e5413eb322","ui_kits/kontekstarkitektur/Skjermar.jsx":"a2fb334e9f99"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KjernekarenDesignsystem_8e6518 = window.KjernekarenDesignsystem_8e6518 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
function AccordionItem({
  title,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--strek)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '18px 2px',
      font: 'inherit',
      textAlign: 'left',
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: 'var(--tekst-broedtekst)',
      color: 'var(--tekst)'
    },
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 2px 20px',
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 'var(--linjehoegd-broedtekst)'
    }
  }, children));
}
function Accordion({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--strek)'
    }
  }, children);
}
Object.assign(__ds_scope, { AccordionItem, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/BloggKort.jsx
try { (() => {
/* Rad i blogglista: dato, tittel som lenke, utdrag, valfritt bilete. */
function BloggKort({
  dato,
  tittel,
  utdrag,
  href,
  bilete,
  alt = '',
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: bilete ? 'repeat(auto-fit, minmax(min(280px,100%),1fr))' : 'minmax(0,1fr)',
      gap: 'var(--rom-6)',
      alignItems: 'start',
      padding: 'var(--rom-7) 0',
      borderBottom: '1px solid var(--strek)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--rom-3)',
      maxWidth: 'var(--breidd-tekst)'
    }
  }, /*#__PURE__*/React.createElement("time", {
    style: {
      fontSize: 'var(--tekst-etikett)',
      fontWeight: 'var(--vekt-halvfeit)',
      letterSpacing: 'var(--sperring-etikett)',
      textTransform: 'uppercase'
    }
  }, dato), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--tekst-h2)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      lineHeight: 'var(--linjehoegd-tittel)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--lenke)'
    }
  }, tittel)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 'var(--linjehoegd-broedtekst)'
    }
  }, utdrag)), bilete && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: bilete,
    alt: alt,
    style: {
      width: '100%',
      display: 'block'
    }
  })));
}
Object.assign(__ds_scope, { BloggKort });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BloggKort.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  href,
  caps = false,
  onClick,
  style
}) {
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    style: {
      display: 'inline-block',
      background: 'var(--knapp-flate)',
      color: 'var(--knapp-tekst)',
      fontFamily: 'var(--font-sans)',
      fontSize: caps ? '14px' : 'var(--tekst-liten)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      letterSpacing: caps ? '0.12em' : '0.01em',
      textTransform: caps ? 'uppercase' : 'none',
      textDecoration: 'none',
      border: 'none',
      borderRadius: 'var(--radius-null)',
      padding: '12px 24px',
      cursor: 'pointer',
      lineHeight: 1.3,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CircleBadge.jsx
try { (() => {
function CircleBadge({
  children,
  size = 150,
  color = 'var(--badge-flate)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-sirkel)',
      background: color,
      color: 'var(--tekst)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: size / 8.5,
      lineHeight: 1.35,
      padding: size / 10,
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CircleBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CircleBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Innhaldsliste.jsx
try { (() => {
/* «I artikkelen kan du lese om:» — ankerliste øvst i lange bloggartiklar. */
function Innhaldsliste({
  tittel = 'I artikkelen kan du lese om:',
  punkt = [],
  lesetid,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      maxWidth: 'var(--breidd-tekst)',
      padding: 'var(--rom-5)',
      background: 'var(--farge-gul)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--rom-3)',
      ...style
    }
  }, lesetid && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--tekst-etikett)',
      fontWeight: 'var(--vekt-halvfeit)',
      letterSpacing: 'var(--sperring-etikett)',
      textTransform: 'uppercase'
    }
  }, "Lesetid ", lesetid), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--tekst-h3)',
      fontWeight: 'var(--vekt-ekstrafeit)'
    }
  }, tittel), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: '1.3em',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--rom-1)',
      lineHeight: 'var(--linjehoegd-broedtekst)'
    }
  }, punkt.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.href
  }, /*#__PURE__*/React.createElement("a", {
    href: p.href,
    style: {
      color: 'var(--lenke)'
    }
  }, p.label)))));
}
Object.assign(__ds_scope, { Innhaldsliste });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Innhaldsliste.jsx", error: String((e && e.message) || e) }); }

// components/core/KursKort.jsx
try { (() => {
/* Kort i kurs-oversikta: dato-etikett, tittel, tekst, CTA-lenke, valfri sirkel-badge. */
function KursKort({
  tittel,
  naar,
  tekst,
  ctaTekst,
  href,
  badge,
  sitat,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: badge ? 'minmax(0,1fr) auto' : 'minmax(0,1fr)',
      gap: 'var(--rom-6)',
      alignItems: 'start',
      padding: 'var(--rom-7) 0',
      borderBottom: '1px solid var(--strek)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--rom-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--tekst-etikett)',
      fontWeight: 'var(--vekt-halvfeit)',
      letterSpacing: 'var(--sperring-etikett)',
      textTransform: 'uppercase'
    }
  }, naar), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--tekst-h2)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      lineHeight: 'var(--linjehoegd-tittel)'
    }
  }, tittel), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 'var(--linjehoegd-broedtekst)',
      maxWidth: 'var(--breidd-tekst)'
    }
  }, tekst), sitat && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontStyle: 'italic',
      fontSize: 'var(--tekst-liten)'
    }
  }, "\xAB", sitat, "\xBB"), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--lenke)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: 'var(--tekst-h3)',
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: 'var(--trykkflate-min)'
    }
  }, ctaTekst)), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '150px',
      height: '150px',
      borderRadius: 'var(--radius-sirkel)',
      background: 'var(--badge-flate)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 'var(--rom-4)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: 'var(--tekst-liten)',
      lineHeight: 1.3,
      justifySelf: 'end'
    }
  }, badge));
}
Object.assign(__ds_scope, { KursKort });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KursKort.jsx", error: String((e && e.message) || e) }); }

// components/core/Paginering.jsx
try { (() => {
function Paginering({
  sider = [],
  aktiv = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Sider",
    style: {
      display: 'flex',
      gap: 'var(--rom-3)',
      padding: 'var(--rom-7) 0',
      ...style
    }
  }, sider.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.nr,
    href: s.href,
    "aria-current": s.nr === aktiv ? 'page' : undefined,
    style: {
      minWidth: 'var(--trykkflate-min)',
      minHeight: 'var(--trykkflate-min)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--lenke)',
      border: '1px solid var(--strek)',
      textDecoration: 'none',
      fontWeight: s.nr === aktiv ? 'var(--vekt-ekstrafeit)' : 'var(--vekt-normal)',
      background: s.nr === aktiv ? 'var(--badge-flate)' : 'transparent'
    }
  }, s.nr)));
}
Object.assign(__ds_scope, { Paginering });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Paginering.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
function Quote({
  children,
  name,
  role,
  variant = 'stor',
  style
}) {
  if (variant === 'sidestilt') {
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans)',
        maxWidth: 320,
        textAlign: 'center',
        ...style
      }
    }, /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontStyle: 'italic',
        fontSize: 'var(--tekst-broedtekst)',
        lineHeight: 1.55
      }
    }, "\u201C", children, "\u201D"), name && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        marginTop: '12px',
        fontSize: 'var(--tekst-liten)'
      }
    }, name, role ? ',' : '', /*#__PURE__*/React.createElement("br", null), role));
  }
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      maxWidth: 420,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontSize: '64px',
      fontWeight: 'var(--vekt-ekstrafeit)',
      lineHeight: 0.5,
      marginBottom: '20px'
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: '20px',
      lineHeight: 1.45,
      textAlign: 'center'
    }
  }, "\u201C", children, "\u201D"), name && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '14px',
      fontSize: 'var(--tekst-liten)',
      textAlign: 'center',
      fontStyle: 'italic'
    }
  }, name, role ? ', ' : '', role));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
function StarRating({
  count = 5,
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2px',
      color: 'var(--stjerne)',
      fontSize: size,
      lineHeight: 1,
      ...style
    },
    "aria-label": count + ' av 5 stjerner'
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: i < count ? 'var(--stjerne)' : 'var(--farge-graa)'
    }
  }, "\u2605")));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/core/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  image,
  name,
  role,
  quote,
  stars = 5,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      maxWidth: 250,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: 96,
      height: 96,
      borderRadius: 'var(--radius-null)',
      objectFit: 'cover',
      filter: 'grayscale(1)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: 'var(--tekst-liten)',
      lineHeight: 1.4
    }
  }, name, ",", /*#__PURE__*/React.createElement("br", null), role), /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    count: stars,
    size: 16,
    style: {
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: '14px',
      lineHeight: 1.5
    }
  }, "\u201C", quote, "\u201D"));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TextField.jsx
try { (() => {
function TextField({
  label,
  placeholder,
  multiline = false,
  value,
  onChange,
  style
}) {
  const shared = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--tekst-liten)',
    background: 'var(--felt-flate)',
    border: '1px solid var(--strek)',
    borderRadius: 'var(--radius-null)',
    padding: '10px 12px',
    width: '100%',
    boxSizing: 'border-box',
    color: 'var(--tekst)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--tekst-liten)',
      ...style
    }
  }, label, multiline ? /*#__PURE__*/React.createElement("textarea", {
    rows: 4,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: shared
  }) : /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: shared
  }));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextField.jsx", error: String((e && e.message) || e) }); }

// components/core/NewsletterForm.jsx
try { (() => {
function NewsletterForm({
  heading = 'Abonner på nyheitsbrevet',
  blurb = 'Bli den første til å få oppdateringar om toppoppgaver, kjernemodellen, nye malar, fagartiklar, kurs og sprell frå Kjernekaren :-)',
  style
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      fontFamily: 'var(--font-sans)',
      maxWidth: 560,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--tekst-h3)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      margin: '0 0 12px'
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      fontSize: '20px',
      lineHeight: 1.6
    }
  }, blurb), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 'var(--vekt-ekstrafeit)'
    }
  }, "Takk! Vi snakkast :-)") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    placeholder: "Fornamn",
    style: {
      flex: '1 1 140px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.TextField, {
    placeholder: "Epost",
    style: {
      flex: '1 1 180px'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: () => setSent(true)
  }, "Hald meg oppdatert!")));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function TextLink({
  children,
  href = '#',
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      color: 'var(--lenke)',
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  tagline = 'Kjernekaren – kurs, fasilitering og uavhengig rådgjeving frå mannen bak kjernemodellen. Spør meg om toppoppgaver og datadriven kundeinnsikt!',
  heading = 'Ta kontakt',
  lines = ['+47 908 70 026'],
  links = [{
    label: 'are@kjernekaren.no',
    href: 'mailto:are@kjernekaren.no'
  }, {
    label: 'Følg meg på LinkedIn',
    href: '#'
  }, {
    label: 'Book ein kaffiprat',
    href: '#'
  }],
  maxWidth = 'var(--breidd-tekst)',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: 'var(--font-sans)',
      padding: '40px 24px 64px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--strek)',
      margin: '0 0 40px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      fontSize: '19px',
      lineHeight: 1.6,
      margin: '0 0 36px'
    }
  }, tagline), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--tekst-h3)',
      fontWeight: 'var(--vekt-ekstrafeit)',
      margin: '0 0 16px'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontSize: '19px'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l)), links.map(l => /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    key: l.label,
    href: l.href
  }, l.label)))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useState
} = React;
/* Header med klikkbar logo (alltid til forsida), undermenyar og hamburger under 600px. */
function SiteHeader({
  brand = 'Are Halland',
  homeHref = '/',
  items = [],
  activeHref,
  maxWidth = 'var(--breidd-side)',
  style
}) {
  const [ope, setOpe] = useState(false);
  const [undermeny, setUndermeny] = useState(null);
  const lenke = (it, niva) => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    href: it.href,
    "aria-current": it.href === activeHref ? 'page' : undefined,
    style: {
      color: 'var(--tekst)',
      textDecoration: it.href === activeHref ? 'underline' : 'none',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
      fontSize: niva ? '17px' : 'var(--tekst-liten)',
      fontWeight: it.href === activeHref ? 'var(--vekt-ekstrafeit)' : 'var(--vekt-normal)',
      display: 'flex',
      alignItems: 'center',
      minHeight: 'var(--trykkflate-min)',
      padding: niva ? '0 0 0 var(--rom-5)' : '0'
    }
  }, it.label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth,
      margin: '0 auto',
      padding: 'var(--rom-5) var(--side-marg)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--rom-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    style: {
      fontWeight: 'var(--vekt-ekstrafeit)',
      fontSize: '19px',
      color: 'var(--tekst)',
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": ope,
    "aria-label": ope ? 'Lukk meny' : 'Opne meny',
    onClick: () => setOpe(!ope),
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      font: 'inherit',
      fontSize: '24px',
      width: 'var(--trykkflate-min)',
      height: 'var(--trykkflate-min)',
      cursor: 'pointer'
    },
    "data-kk-hamburger": true
  }, ope ? '\u00d7' : '\u2261'), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Hovudmeny",
    style: {
      display: 'flex',
      gap: 'var(--rom-5)',
      flexWrap: 'wrap'
    },
    "data-kk-nav": true
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.href,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setUndermeny(it.href),
    onMouseLeave: () => setUndermeny(null)
  }, lenke(it), it.children && undermeny === it.href && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      background: 'var(--farge-kvit)',
      border: '1px solid var(--strek)',
      padding: 'var(--rom-3) var(--rom-5)',
      minWidth: '260px',
      zIndex: 20,
      display: 'flex',
      flexDirection: 'column'
    }
  }, it.children.map(c => lenke(c))))))), ope && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Hovudmeny",
    style: {
      padding: '0 var(--side-marg) var(--rom-6)',
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--strek)'
    },
    "data-kk-mobilmeny": true
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid var(--strek)'
    }
  }, lenke(it), it.children && it.children.map(c => lenke(c, 1))))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kontekstarkitektur/Skjermar.jsx
try { (() => {
/* Heim, Metoden og Kurs for kontekstarkitektur.no — blå flate (.tema-blaa). */
const {
  SiteHeader,
  Button,
  Accordion,
  AccordionItem,
  NewsletterForm,
  TextLink,
  Quote,
  CircleBadge
} = window.KjernekarenDesignsystem_8e6518;
const NAV = [{
  href: '/',
  label: 'Heim'
}, {
  href: '/metoden',
  label: 'Metoden'
}, {
  href: '/kurs',
  label: 'Kurs'
}, {
  href: '/blogg',
  label: 'Blogg'
}, {
  href: '/om',
  label: 'Om meg'
}];
const kaSide = {
  maxWidth: 936,
  margin: '0 auto',
  padding: '0 var(--side-marg)'
};
const kaGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px,100%),1fr))',
  gap: 56,
  alignItems: 'start'
};
const kaBrod = {
  margin: 0,
  fontSize: 'var(--tekst-broedtekst)',
  lineHeight: 'var(--linjehoegd-broedtekst)'
};
const kaH1 = {
  margin: '8px 0 6px',
  fontSize: 'var(--tekst-h1)',
  fontWeight: 'var(--vekt-ekstrafeit)',
  lineHeight: 1.16
};
const kaH2 = {
  margin: '26px 0 0',
  fontSize: 'var(--tekst-h2)',
  fontWeight: 'var(--vekt-ekstrafeit)'
};
const kaEyebrow = {
  fontSize: 'var(--tekst-etikett)',
  fontWeight: 'var(--vekt-halvfeit)',
  letterSpacing: 'var(--sperring-etikett)',
  textTransform: 'uppercase'
};
function TreSpoersmaal() {
  const rader = [['#AEEBFB', 'Kontekst', 'kva skal KI-en alltid vite, og kva må haldast utanfor?'], ['#FD9F78', 'Samarbeid', 'korleis vekslar menneske og KI mellom retning, utføring og kontroll?'], ['#E6B0F9', 'Læring', 'kvar skal ny innsikt tilbakeførast, slik at systemet blir betre?']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 8
    }
  }, rader.map(([farge, tittel, tekst], i) => /*#__PURE__*/React.createElement("div", {
    key: tittel,
    style: {
      display: 'flex',
      gap: 14,
      borderTop: '1px solid var(--strek)',
      borderBottom: i === 2 ? '1px solid var(--strek)' : 'none',
      padding: '14px 2px',
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 'var(--linjehoegd-broedtekst)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      background: farge,
      border: farge === '#AEEBFB' ? '1px solid var(--strek)' : 'none',
      flex: 'none',
      marginTop: 6
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, tittel), " \u2013 ", tekst))));
}
function Heim({
  gaaTil
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      ...kaSide,
      ...kaGrid
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: kaEyebrow
  }, "Informasjonsarkitektur for KI-alderen"), /*#__PURE__*/React.createElement("h1", {
    style: kaH1
  }, "Kontekstarkitektur"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kaBrod,
      fontWeight: 'var(--vekt-ekstrafeit)'
    }
  }, "Fr\xE5 tilfeldig prompting til systematisk KI-arbeid."), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "KI-en hugsar ikkje kva den treng for \xE5 hjelpe deg godt. N\xE5r kvar person promptar p\xE5 sin m\xE5te, blir ogs\xE5 resultata ulike. Eg kallar det kontekstamnesi \u2013 og det er eit arkitekturproblem, ikkje eit promptproblem."), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Kontekstarkitektur handlar om \xE5 byggje systemet rundt modellen: kva den alltid skal vite, korleis menneske og KI vekslar p\xE5 arbeidet, og kvar ny innsikt blir teken vare p\xE5."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => gaaTil('/metoden'),
    style: {
      alignSelf: 'flex-start',
      marginTop: 10
    }
  }, "Les om metoden"), /*#__PURE__*/React.createElement("h2", {
    style: kaH2
  }, "Tre sp\xF8rsm\xE5l"), /*#__PURE__*/React.createElement(TreSpoersmaal, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(CircleBadge, {
    size: 220,
    color: "#FFFFFF",
    style: {
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 52,
      fontWeight: 'var(--vekt-ekstrafeit)',
      lineHeight: 1
    }
  }, "2000"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--tekst-etikett)',
      fontWeight: 'var(--vekt-halvfeit)',
      marginTop: 6
    }
  }, "timar med Claude", /*#__PURE__*/React.createElement("br", null), "p\xE5 tre \xE5r")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kaBrod,
      textAlign: 'center'
    }
  }, "Erfaringsgrunnlaget: praktisk KI-arbeid i reelle prosjekt, ikkje demoar.")));
}
function Metoden() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      ...kaSide,
      ...kaGrid
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: kaH1
  }, "System sl\xE5r triks"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kaBrod,
      fontWeight: 'var(--vekt-ekstrafeit)'
    }
  }, "Kontekst sl\xE5r prompts. Mennesket leier."), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Kontekstarkitektur er kjernemodell-tankegangen overf\xF8rt til KI: start der behova m\xF8test. Kva treng menneska, og kva treng modellane? Svaret ligg i midten \u2013 og det er der du byrjar."), /*#__PURE__*/React.createElement("h2", {
    style: kaH2
  }, "Riktig informasjon, rett stad, rett tid"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: '1.3em',
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 1.75
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Kartlegg oppg\xE5vene"), " folk faktisk brukar KI-en til"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Skriv ned konteksten"), " som m\xE5 vere p\xE5 plass kvar gong"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Definer arbeidsdelinga"), " mellom menneske og modell"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "Bygg tilbakef\xF8ringa"), " slik at systemet l\xE6rer av bruken")), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Resultatet er ikkje ein smart prompt, men ein arbeidsflyt heile teamet kan bruke \u2013 og forbetre."), /*#__PURE__*/React.createElement("h2", {
    style: kaH2
  }, "Kva du f\xE5r ut av det"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: '1.3em',
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Jamnare kvalitet, uavhengig av kven som skriv prompten"), /*#__PURE__*/React.createElement("li", null, "Mindre dobbeltarbeid og f\xE6rre \xABkva sa vi sist?\xBB-runder"), /*#__PURE__*/React.createElement("li", null, "Ein tydeleg stad \xE5 leggje ny innsikt"))), /*#__PURE__*/React.createElement(Quote, {
    variant: "sidestilt",
    name: "Om kontekstamnesi"
  }, "Som \xE5 f\xE5 ein ny vikar kvar morgon."));
}
function Kurs() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      ...kaSide,
      ...kaGrid
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: kaEyebrow
  }, "Kurs og coaching"), /*#__PURE__*/React.createElement("h1", {
    style: kaH1
  }, "Kontekstarkitektur i praksis"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...kaBrod,
      fontWeight: 'var(--vekt-ekstrafeit)'
    }
  }, "Ein dag der teamet ditt g\xE5r fr\xE5 prompt-triks til eit system som held."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: '1.3em',
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Kartlegging av oppg\xE5vene teamet brukar KI til i dag"), /*#__PURE__*/React.createElement("li", null, "Kontekstark for dei viktigaste arbeidsflytane"), /*#__PURE__*/React.createElement("li", null, "Arbeidsdeling mellom menneske og modell"), /*#__PURE__*/React.createElement("li", null, "Agentiske arbeidsflytar \u2013 kva som l\xF8ner seg \xE5 automatisere")), /*#__PURE__*/React.createElement(Button, {
    href: "#pamelding",
    style: {
      alignSelf: 'flex-start',
      marginTop: 10
    }
  }, "G\xE5 til p\xE5melding"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(AccordionItem, {
    title: "Passar for"
  }, "Produktteam, kommunikasjonsavdelingar og fagmilj\xF8 som allereie brukar KI, men manglar felles struktur."), /*#__PURE__*/React.createElement(AccordionItem, {
    title: "Praktisk informasjon"
  }, "Heildagskurs, digitalt eller hos dykk. Maks 14 deltakarar. Ta kontakt for internkurs."))), /*#__PURE__*/React.createElement("h2", {
    style: kaH2
  }, "Har du sp\xF8rsm\xE5l om kurset?"), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Ring meg p\xE5 908 70 026, send epost til ", /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:are@kjernekaren.no"
  }, "are@kjernekaren.no"), " eller ", /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "book ein kaffiprat"), "."), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Vi snakkast!"), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Are")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/are-portrett-rein.png",
    alt: "Are Halland",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Are Gjertin Urkegjerde Halland \u2013 kontekstarkitekt, kjernemodellskapar og kjernekar. 30 \xE5r med informasjonsarkitektur og strategi.")));
}
function Botn() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...kaSide,
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--strek)',
      margin: '0 0 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--breidd-tekst)'
    }
  }, /*#__PURE__*/React.createElement(NewsletterForm, {
    heading: "Abonner p\xE5 nyheitsbrevet",
    blurb: "Bli den f\xF8rste til \xE5 f\xE5 oppdateringar om kontekstarkitektur, KI-arbeidsflytar, nye malar, fagartiklar og kurs :-)"
  })), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--strek)',
      margin: '56px 0 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--breidd-tekst)',
      display: 'flex',
      flexDirection: 'column',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontStyle: 'italic',
      fontSize: 'var(--tekst-broedtekst)',
      lineHeight: 'var(--linjehoegd-broedtekst)'
    }
  }, "Kontekstarkitektur \u2013 kurs, fasilitering og uavhengig r\xE5dgjeving fr\xE5 mannen bak kjernemodellen. Sp\xF8r meg om KI-arbeidsflytar og kontekst som held!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 'var(--tekst-broedtekst)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 6px',
      fontSize: 'var(--tekst-h2)',
      fontWeight: 'var(--vekt-ekstrafeit)'
    }
  }, "Ta kontakt"), /*#__PURE__*/React.createElement("span", null, "+47 908 70 026"), /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:are@kjernekaren.no"
  }, "are@kjernekaren.no"), /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "F\xF8lg meg p\xE5 LinkedIn"), /*#__PURE__*/React.createElement(TextLink, {
    href: "#"
  }, "Book ein kaffiprat"))));
}
function KontekstarkitekturSide() {
  const [side, setSide] = React.useState('/');
  const gaaTil = href => setSide(href);
  return /*#__PURE__*/React.createElement("div", {
    className: "tema-blaa",
    style: {
      minHeight: '100vh',
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    brand: "Kontekstarkitektur",
    items: NAV.map(n => ({
      ...n,
      href: n.href
    })),
    activeHref: side,
    maxWidth: "936px",
    style: {
      paddingBottom: 22
    }
  }), side === '/' && /*#__PURE__*/React.createElement(Heim, {
    gaaTil: gaaTil
  }), side === '/metoden' && /*#__PURE__*/React.createElement(Metoden, null), side === '/kurs' && /*#__PURE__*/React.createElement(Kurs, null), !['/', '/metoden', '/kurs'].includes(side) && /*#__PURE__*/React.createElement("main", {
    style: kaSide
  }, /*#__PURE__*/React.createElement("p", {
    style: kaBrod
  }, "Denne sida finst ikkje i kjeldematerialet, og er difor med vilje tom.")), /*#__PURE__*/React.createElement(Botn, null));
}
Object.assign(window, {
  KontekstarkitekturSide,
  Heim,
  Metoden,
  Kurs,
  Botn,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kontekstarkitektur/Skjermar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.BloggKort = __ds_scope.BloggKort;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CircleBadge = __ds_scope.CircleBadge;

__ds_ns.Innhaldsliste = __ds_scope.Innhaldsliste;

__ds_ns.KursKort = __ds_scope.KursKort;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.Paginering = __ds_scope.Paginering;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
