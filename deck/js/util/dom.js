/** Tiny DOM helpers. No framework, no build step. */
export const $  = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
export const on = (target, evt, fn, opts) => target.addEventListener(evt, fn, opts);

/** Clamp n into [min, max]. */
export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/** Seconds -> MM:SS */
export const mmss = (s) =>
  String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
