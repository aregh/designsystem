#!/usr/bin/env bash
# Regenererer _ds_bundle.js frå components/**/*.jsx.
#
# Bruk: scripts/bygg-bundle.sh
#
# Bundlar scripts/bundle-entry.jsx (som importerer alle 15 komponentane og
# heng dei på window.Kjernekaren.<Namn>) til éi frittståande IIFE-fil med
# esbuild. 'react'-importar blir aliasa til scripts/react-global-shim.js,
# som peikar til window.React — bundelen føreset difor at React (UMD) er
# lasta globalt på sida FØR denne fila, t.d.:
#   <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
#   <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
#   <script src="_ds_bundle.js"></script>
# Ingen eigne import/export, ingen utranspilert JSX i outputen.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENTRY="$ROOT_DIR/scripts/bundle-entry.jsx"
SHIM="$ROOT_DIR/scripts/react-global-shim.js"
OUT="$ROOT_DIR/_ds_bundle.js"
TMP_OUT="$(mktemp -t ds_bundle.XXXXXX.js)"

echo "Bygger $OUT frå components/**/*.jsx ..."

npx --yes esbuild "$ENTRY" \
  --bundle \
  --format=iife \
  --alias:react="$SHIM" \
  --jsx=transform \
  --jsx-factory=React.createElement \
  --jsx-fragment=React.Fragment \
  --outfile="$TMP_OUT"

BANNER="/*
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
 * berre <script src=\"_ds_bundle.js\"></script>.
 *
 * Sist generert: $(date -u +%Y-%m-%dT%H:%M:%SZ)
 */
"

{ printf '%s' "$BANNER"; cat "$TMP_OUT"; } > "$OUT"
rm -f "$TMP_OUT"

echo "Ferdig: $OUT ($(wc -l < "$OUT" | tr -d ' ') linjer)"
