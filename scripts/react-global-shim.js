// Shim som let komponentfilene importere frå 'react' som vanleg (ESM),
// men som i den bundla fila berre peikar til den globale window.React
// (lasta via <script src="https://unpkg.com/react@.../umd/react.production.min.js">).
// Brukt av esbuild via --alias:react=./scripts/react-global-shim.js
const React = window.React;

export default React;
export const useState = React.useState;
export const useEffect = React.useEffect;
export const useRef = React.useRef;
export const useCallback = React.useCallback;
export const useMemo = React.useMemo;
export const useContext = React.useContext;
export const useReducer = React.useReducer;
export const Fragment = React.Fragment;
export const createElement = React.createElement;
