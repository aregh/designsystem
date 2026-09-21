/*
 * _ds_bundle.js — GENERERT FIL. Ikkje rediger for hand.
 *
 * Bygd frå .jsx-filene i components/core/ og components/navigation/ via
 * scripts/bygg-bundle.sh (esbuild, --bundle --format=iife, JSX transformert
 * til React.createElement). Kjeldekode: rediger .jsx-filene i components/,
 * køyr så scripts/bygg-bundle.sh på nytt.
 *
 * Krev at React er lasta globalt (window.React) FØR denne fila, t.d. via
 * UMD-scriptet frå unpkg. Eksponerer kvar komponent på
 * window.Kjernekaren.<Namn> (t.d. window.Kjernekaren.Button). Ingen
 * import/export, ingen ekstra byggesteg trengst for å bruke fila —
 * berre <script src="_ds_bundle.js"></script>.
 *
 * Sist generert: 2026-09-21T18:31:24Z
 */
(() => {
  // scripts/react-global-shim.js
  var React2 = window.React;
  var react_global_shim_default = React2;
  var useState = React2.useState;
  var useEffect = React2.useEffect;
  var useRef = React2.useRef;
  var useCallback = React2.useCallback;
  var useMemo = React2.useMemo;
  var useContext = React2.useContext;
  var useReducer = React2.useReducer;
  var Fragment = React2.Fragment;
  var createElement = React2.createElement;

  // components/core/Accordion.jsx
  function AccordionItem({ title, children, defaultOpen = false }) {
    const [open, setOpen] = react_global_shim_default.useState(defaultOpen);
    return /* @__PURE__ */ react_global_shim_default.createElement("div", { style: { borderBottom: "1px solid var(--strek)", fontFamily: "var(--font-sans)" } }, /* @__PURE__ */ react_global_shim_default.createElement(
      "button",
      {
        onClick: () => setOpen(!open),
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "18px 2px",
          font: "inherit",
          textAlign: "left",
          fontWeight: "var(--vekt-ekstrafeit)",
          fontSize: "var(--tekst-broedtekst)",
          color: "var(--tekst)"
        },
        "aria-expanded": open
      },
      /* @__PURE__ */ react_global_shim_default.createElement("span", null, title),
      /* @__PURE__ */ react_global_shim_default.createElement("span", { style: { fontSize: "14px", transform: open ? "rotate(180deg)" : "none" } }, "\u25BE")
    ), open && /* @__PURE__ */ react_global_shim_default.createElement("div", { style: { padding: "0 2px 20px", fontSize: "var(--tekst-broedtekst)", lineHeight: "var(--linjehoegd-broedtekst)" } }, children));
  }
  function Accordion({ children }) {
    return /* @__PURE__ */ react_global_shim_default.createElement("div", { style: { borderTop: "1px solid var(--strek)" } }, children);
  }

  // components/core/BloggKort.jsx
  function BloggKort({ dato, tittel, utdrag, href, bilete, alt = "", style }) {
    return /* @__PURE__ */ React.createElement("article", { style: { display: "grid", gridTemplateColumns: bilete ? "repeat(auto-fit, minmax(min(280px,100%),1fr))" : "minmax(0,1fr)", gap: "var(--rom-6)", alignItems: "start", padding: "var(--rom-7) 0", borderBottom: "1px solid var(--strek)", ...style } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--rom-3)", maxWidth: "var(--breidd-tekst)" } }, /* @__PURE__ */ React.createElement("time", { style: { fontSize: "var(--tekst-etikett)", fontWeight: "var(--vekt-halvfeit)", letterSpacing: "var(--sperring-etikett)", textTransform: "uppercase" } }, dato), /* @__PURE__ */ React.createElement("h2", { style: { margin: 0, fontSize: "var(--tekst-h2)", fontWeight: "var(--vekt-ekstrafeit)", lineHeight: "var(--linjehoegd-tittel)" } }, /* @__PURE__ */ React.createElement("a", { href, style: { color: "var(--lenke)" } }, tittel)), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: "var(--tekst-broedtekst)", lineHeight: "var(--linjehoegd-broedtekst)" } }, utdrag)), bilete && /* @__PURE__ */ React.createElement("a", { href, style: { display: "block", minWidth: 0 } }, /* @__PURE__ */ React.createElement("img", { src: bilete, alt, style: { width: "100%", display: "block" } })));
  }

  // components/core/Button.jsx
  function Button({ children, href, caps = false, onClick, style }) {
    const Tag = href ? "a" : "button";
    return /* @__PURE__ */ React.createElement(
      Tag,
      {
        href,
        onClick,
        style: {
          display: "inline-block",
          background: "var(--knapp-flate)",
          color: "var(--knapp-tekst)",
          fontFamily: "var(--font-sans)",
          fontSize: caps ? "14px" : "var(--tekst-liten)",
          fontWeight: "var(--vekt-ekstrafeit)",
          letterSpacing: caps ? "0.12em" : "0.01em",
          textTransform: caps ? "uppercase" : "none",
          textDecoration: "none",
          border: "none",
          borderRadius: "var(--radius-null)",
          padding: "12px 24px",
          cursor: "pointer",
          lineHeight: 1.3,
          ...style
        }
      },
      children
    );
  }

  // components/core/CircleBadge.jsx
  function CircleBadge({ children, size = 150, color = "var(--badge-flate)", style }) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          width: size,
          height: size,
          borderRadius: "var(--radius-sirkel)",
          background: color,
          color: "var(--tekst)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--vekt-ekstrafeit)",
          fontSize: size / 8.5,
          lineHeight: 1.35,
          padding: size / 10,
          boxSizing: "border-box",
          ...style
        }
      },
      children
    );
  }

  // components/core/Innhaldsliste.jsx
  function Innhaldsliste({ tittel = "I artikkelen kan du lese om:", punkt = [], lesetid, style }) {
    return /* @__PURE__ */ React.createElement("aside", { style: { maxWidth: "var(--breidd-tekst)", padding: "var(--rom-5)", background: "var(--farge-gul)", display: "flex", flexDirection: "column", gap: "var(--rom-3)", ...style } }, lesetid && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "var(--tekst-etikett)", fontWeight: "var(--vekt-halvfeit)", letterSpacing: "var(--sperring-etikett)", textTransform: "uppercase" } }, "Lesetid ", lesetid), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: "var(--tekst-h3)", fontWeight: "var(--vekt-ekstrafeit)" } }, tittel), /* @__PURE__ */ React.createElement("ol", { style: { margin: 0, paddingLeft: "1.3em", display: "flex", flexDirection: "column", gap: "var(--rom-1)", lineHeight: "var(--linjehoegd-broedtekst)" } }, punkt.map((p) => /* @__PURE__ */ React.createElement("li", { key: p.href }, /* @__PURE__ */ React.createElement("a", { href: p.href, style: { color: "var(--lenke)" } }, p.label)))));
  }

  // components/core/KursKort.jsx
  function KursKort({ tittel, naar, tekst, ctaTekst, href, badge, sitat, style }) {
    return /* @__PURE__ */ React.createElement("article", { style: { display: "grid", gridTemplateColumns: badge ? "minmax(0,1fr) auto" : "minmax(0,1fr)", gap: "var(--rom-6)", alignItems: "start", padding: "var(--rom-7) 0", borderBottom: "1px solid var(--strek)", ...style } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--rom-3)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "var(--tekst-etikett)", fontWeight: "var(--vekt-halvfeit)", letterSpacing: "var(--sperring-etikett)", textTransform: "uppercase" } }, naar), /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: "var(--tekst-h2)", fontWeight: "var(--vekt-ekstrafeit)", lineHeight: "var(--linjehoegd-tittel)" } }, tittel), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: "var(--tekst-broedtekst)", lineHeight: "var(--linjehoegd-broedtekst)", maxWidth: "var(--breidd-tekst)" } }, tekst), sitat && /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontStyle: "italic", fontSize: "var(--tekst-liten)" } }, "\xAB", sitat, "\xBB"), /* @__PURE__ */ React.createElement("a", { href, style: { color: "var(--lenke)", fontWeight: "var(--vekt-ekstrafeit)", fontSize: "var(--tekst-h3)", display: "inline-flex", alignItems: "center", minHeight: "var(--trykkflate-min)" } }, ctaTekst)), badge && /* @__PURE__ */ React.createElement("span", { style: { width: "150px", height: "150px", borderRadius: "var(--radius-sirkel)", background: "var(--badge-flate)", display: "grid", placeItems: "center", textAlign: "center", padding: "var(--rom-4)", fontWeight: "var(--vekt-ekstrafeit)", fontSize: "var(--tekst-liten)", lineHeight: 1.3, justifySelf: "end" } }, badge));
  }

  // components/core/TextField.jsx
  function TextField({ label, placeholder, multiline = false, value, onChange, style }) {
    const shared = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--tekst-liten)",
      background: "var(--felt-flate)",
      border: "1px solid var(--strek)",
      borderRadius: "var(--radius-null)",
      padding: "10px 12px",
      width: "100%",
      boxSizing: "border-box",
      color: "var(--tekst)"
    };
    return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)", fontSize: "var(--tekst-liten)", ...style } }, label, multiline ? /* @__PURE__ */ React.createElement("textarea", { rows: 4, placeholder, value, onChange, style: shared }) : /* @__PURE__ */ React.createElement("input", { type: "text", placeholder, value, onChange, style: shared }));
  }

  // components/core/NewsletterForm.jsx
  function NewsletterForm({ heading = "Abonner p\xE5 nyheitsbrevet", blurb = "Bli den f\xF8rste til \xE5 f\xE5 oppdateringar om toppoppgaver, kjernemodellen, nye malar, fagartiklar, kurs og sprell fr\xE5 Kjernekaren :-)", style }) {
    const [sent, setSent] = react_global_shim_default.useState(false);
    return /* @__PURE__ */ react_global_shim_default.createElement("section", { style: { fontFamily: "var(--font-sans)", maxWidth: 560, ...style } }, /* @__PURE__ */ react_global_shim_default.createElement("h2", { style: { fontSize: "var(--tekst-h3)", fontWeight: "var(--vekt-ekstrafeit)", margin: "0 0 12px" } }, heading), /* @__PURE__ */ react_global_shim_default.createElement("p", { style: { margin: "0 0 20px", fontSize: "20px", lineHeight: 1.6 } }, blurb), sent ? /* @__PURE__ */ react_global_shim_default.createElement("p", { style: { fontWeight: "var(--vekt-ekstrafeit)" } }, "Takk! Vi snakkast :-)") : /* @__PURE__ */ react_global_shim_default.createElement("div", { style: { display: "flex", gap: "10px", alignItems: "flex-end", flexWrap: "wrap" } }, /* @__PURE__ */ react_global_shim_default.createElement(TextField, { placeholder: "Fornamn", style: { flex: "1 1 140px" } }), /* @__PURE__ */ react_global_shim_default.createElement(TextField, { placeholder: "Epost", style: { flex: "1 1 180px" } }), /* @__PURE__ */ react_global_shim_default.createElement(Button, { onClick: () => setSent(true) }, "Hald meg oppdatert!")));
  }

  // components/core/Paginering.jsx
  function Paginering({ sider = [], aktiv = 1, style }) {
    return /* @__PURE__ */ React.createElement("nav", { "aria-label": "Sider", style: { display: "flex", gap: "var(--rom-3)", padding: "var(--rom-7) 0", ...style } }, sider.map((s) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: s.nr,
        href: s.href,
        "aria-current": s.nr === aktiv ? "page" : void 0,
        style: { minWidth: "var(--trykkflate-min)", minHeight: "var(--trykkflate-min)", display: "grid", placeItems: "center", color: "var(--lenke)", border: "1px solid var(--strek)", textDecoration: "none", fontWeight: s.nr === aktiv ? "var(--vekt-ekstrafeit)" : "var(--vekt-normal)", background: s.nr === aktiv ? "var(--badge-flate)" : "transparent" }
      },
      s.nr
    )));
  }

  // components/core/Quote.jsx
  function Quote({ children, name, role, variant = "stor", style }) {
    if (variant === "sidestilt") {
      return /* @__PURE__ */ React.createElement("figure", { style: { margin: 0, fontFamily: "var(--font-sans)", maxWidth: 320, textAlign: "center", ...style } }, /* @__PURE__ */ React.createElement("blockquote", { style: { margin: 0, fontStyle: "italic", fontSize: "var(--tekst-broedtekst)", lineHeight: 1.55 } }, "\u201C", children, "\u201D"), name && /* @__PURE__ */ React.createElement("figcaption", { style: { marginTop: "12px", fontSize: "var(--tekst-liten)" } }, name, role ? "," : "", /* @__PURE__ */ React.createElement("br", null), role));
    }
    return /* @__PURE__ */ React.createElement("figure", { style: { margin: 0, fontFamily: "var(--font-sans)", maxWidth: 420, ...style } }, /* @__PURE__ */ React.createElement("div", { "aria-hidden": "true", style: { fontSize: "64px", fontWeight: "var(--vekt-ekstrafeit)", lineHeight: 0.5, marginBottom: "20px" } }, "\u201D"), /* @__PURE__ */ React.createElement("blockquote", { style: { margin: 0, fontWeight: "var(--vekt-ekstrafeit)", fontSize: "20px", lineHeight: 1.45, textAlign: "center" } }, "\u201C", children, "\u201D"), name && /* @__PURE__ */ React.createElement("figcaption", { style: { marginTop: "14px", fontSize: "var(--tekst-liten)", textAlign: "center", fontStyle: "italic" } }, name, role ? ", " : "", role));
  }

  // components/core/StarRating.jsx
  function StarRating({ count = 5, size = 18, style }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "2px", color: "var(--stjerne)", fontSize: size, lineHeight: 1, ...style }, "aria-label": count + " av 5 stjerner" }, Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { color: i < count ? "var(--stjerne)" : "var(--farge-graa)" } }, "\u2605")));
  }

  // components/core/TestimonialCard.jsx
  function TestimonialCard({ image, name, role, quote, stars = 5, style }) {
    return /* @__PURE__ */ React.createElement("figure", { style: { margin: 0, fontFamily: "var(--font-sans)", maxWidth: 250, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", ...style } }, image && /* @__PURE__ */ React.createElement("img", { src: image, alt: name, style: { width: 96, height: 96, borderRadius: "var(--radius-null)", objectFit: "cover", filter: "grayscale(1)" } }), /* @__PURE__ */ React.createElement("figcaption", { style: { fontWeight: "var(--vekt-ekstrafeit)", fontSize: "var(--tekst-liten)", lineHeight: 1.4 } }, name, ",", /* @__PURE__ */ React.createElement("br", null), role), /* @__PURE__ */ React.createElement(StarRating, { count: stars, size: 16, style: { justifyContent: "center" } }), /* @__PURE__ */ React.createElement("blockquote", { style: { margin: 0, fontWeight: "var(--vekt-ekstrafeit)", fontSize: "14px", lineHeight: 1.5 } }, "\u201C", quote, "\u201D"));
  }

  // components/core/TextLink.jsx
  function TextLink({ children, href = "#", onClick, style }) {
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href,
        onClick,
        style: {
          color: "var(--lenke)",
          textDecoration: "underline",
          textUnderlineOffset: "2px",
          fontFamily: "var(--font-sans)",
          ...style
        }
      },
      children
    );
  }

  // components/navigation/SiteFooter.jsx
  function SiteFooter({
    tagline = "Kjernekaren \u2013 kurs, fasilitering og uavhengig r\xE5dgjeving fr\xE5 mannen bak kjernemodellen. Sp\xF8r meg om toppoppgaver og datadriven kundeinnsikt!",
    heading = "Ta kontakt",
    lines = ["+47 908 70 026"],
    links = [
      { label: "are@kjernekaren.no", href: "mailto:are@kjernekaren.no" },
      { label: "F\xF8lg meg p\xE5 LinkedIn", href: "#" },
      { label: "Book ein kaffiprat", href: "#" }
    ],
    maxWidth = "var(--breidd-tekst)",
    style
  }) {
    return /* @__PURE__ */ React.createElement("footer", { style: { fontFamily: "var(--font-sans)", padding: "40px 24px 64px", ...style } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("hr", { style: { border: "none", borderTop: "1px solid var(--strek)", margin: "0 0 40px" } }), /* @__PURE__ */ React.createElement("p", { style: { fontStyle: "italic", fontSize: "19px", lineHeight: 1.6, margin: "0 0 36px" } }, tagline), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "var(--tekst-h3)", fontWeight: "var(--vekt-ekstrafeit)", margin: "0 0 16px" } }, heading), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px", fontSize: "19px" } }, lines.map((l) => /* @__PURE__ */ React.createElement("span", { key: l }, l)), links.map((l) => /* @__PURE__ */ React.createElement(TextLink, { key: l.label, href: l.href }, l.label)))));
  }

  // components/navigation/SiteHeader.jsx
  function SiteHeader({
    brand = "Are Halland",
    homeHref = "/",
    items = [],
    activeHref,
    maxWidth = "var(--breidd-side)",
    style
  }) {
    const [ope, setOpe] = useState(false);
    const [undermeny, setUndermeny] = useState(null);
    const lenke = (it, niva) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: it.href,
        href: it.href,
        "aria-current": it.href === activeHref ? "page" : void 0,
        style: {
          color: "var(--tekst)",
          textDecoration: it.href === activeHref ? "underline" : "none",
          textDecorationThickness: "2px",
          textUnderlineOffset: "4px",
          fontSize: niva ? "17px" : "var(--tekst-liten)",
          fontWeight: it.href === activeHref ? "var(--vekt-ekstrafeit)" : "var(--vekt-normal)",
          display: "flex",
          alignItems: "center",
          minHeight: "var(--trykkflate-min)",
          padding: niva ? "0 0 0 var(--rom-5)" : "0"
        }
      },
      it.label
    );
    return /* @__PURE__ */ React.createElement("header", { style: { fontFamily: "var(--font-sans)", ...style } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth, margin: "0 auto", padding: "var(--rom-5) var(--side-marg)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--rom-5)" } }, /* @__PURE__ */ React.createElement("a", { href: homeHref, style: { fontWeight: "var(--vekt-ekstrafeit)", fontSize: "19px", color: "var(--tekst)", textDecoration: "none" } }, brand), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        "aria-expanded": ope,
        "aria-label": ope ? "Lukk meny" : "Opne meny",
        onClick: () => setOpe(!ope),
        style: { display: "none", background: "none", border: "none", font: "inherit", fontSize: "24px", width: "var(--trykkflate-min)", height: "var(--trykkflate-min)", cursor: "pointer" },
        "data-kk-hamburger": true
      },
      ope ? "\xD7" : "\u2261"
    ), /* @__PURE__ */ React.createElement("nav", { "aria-label": "Hovudmeny", style: { display: "flex", gap: "var(--rom-5)", flexWrap: "wrap" }, "data-kk-nav": true }, items.map((it) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: it.href,
        style: { position: "relative" },
        onMouseEnter: () => setUndermeny(it.href),
        onMouseLeave: () => setUndermeny(null)
      },
      lenke(it),
      it.children && undermeny === it.href && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "100%", left: 0, background: "var(--farge-kvit)", border: "1px solid var(--strek)", padding: "var(--rom-3) var(--rom-5)", minWidth: "260px", zIndex: 20, display: "flex", flexDirection: "column" } }, it.children.map((c) => lenke(c)))
    )))), ope && /* @__PURE__ */ React.createElement("nav", { "aria-label": "Hovudmeny", style: { padding: "0 var(--side-marg) var(--rom-6)", display: "flex", flexDirection: "column", borderTop: "1px solid var(--strek)" }, "data-kk-mobilmeny": true }, items.map((it) => /* @__PURE__ */ React.createElement("div", { key: it.href, style: { display: "flex", flexDirection: "column", borderBottom: "1px solid var(--strek)" } }, lenke(it), it.children && it.children.map((c) => lenke(c, 1))))));
  }

  // scripts/bundle-entry.jsx
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
    SiteHeader
  });
})();
