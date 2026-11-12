// Kommentering i teksten. Sida opnar berre Claude sitt eige kommentarfelt på rett stad.
// Skriving, sending og vising skjer i Claude. Utan Claude-artifact skjer det ingenting.
(async function () {
  var c = null;
  try { c = await window.claude.use("comments"); } catch (e) {}
  if (!c) return;
  var rot = document.querySelector(".rapport");
  var hovud = rot.querySelector(".hovud");
  var utval = document.getElementById("kom-utval");
  var omraade = null;
  rot.classList.add("kan-kommentere");

  function av() { rot.classList.remove("kan-kommentere"); utval.style.display = "none"; }
  async function opne(maal) {
    try { await c.openComposer(maal); }
    catch (e) {
      var kode = e && e.code;
      if (kode === "unavailable" || kode === "not_granted" || kode === "capability_disabled" || kode === "capability_removed") av();
    }
  }

  var veljar = "p, h2, h3, ul, ol, blockquote, .tabell";
  hovud.querySelectorAll(veljar).forEach(function (el) {
    if (el.closest(".botn") || el.parentElement.closest("ul, ol, blockquote, .tabell")) return;
    el.classList.add("kom");
    var b = document.createElement("button");
    b.type = "button";
    b.className = "kom-knapp";
    b.textContent = "+";
    b.setAttribute("aria-label", "Kommenter dette avsnittet");
    b.title = "Kommenter dette avsnittet";
    b.setAttribute("data-uncommentable", "");
    b.addEventListener("click", function () { opne({ element: el }); });
    el.insertBefore(b, el.firstChild);
  });

  function sjekk() {
    var s = window.getSelection();
    if (!s || s.isCollapsed || !s.rangeCount || !hovud.contains(s.anchorNode) || !String(s).trim()) {
      utval.style.display = "none"; omraade = null; return;
    }
    omraade = s.getRangeAt(0).cloneRange();
    var r = omraade.getBoundingClientRect();
    utval.style.display = "inline-flex";
    var maks = window.scrollX + document.documentElement.clientWidth - utval.offsetWidth - 8;
    utval.style.left = Math.max(8, Math.min(r.left + window.scrollX, maks)) + "px";
    utval.style.top = (r.bottom + window.scrollY + 8) + "px";
  }
  document.addEventListener("selectionchange", function () { setTimeout(sjekk, 0); });
  utval.addEventListener("mousedown", function (e) { e.preventDefault(); });
  utval.addEventListener("click", function () {
    if (!omraade) return;
    var o = omraade; utval.style.display = "none"; opne({ range: o });
  });
})();
