/**
 * Single source of truth for deck state.
 * Anything that needs to react subscribes; anything that changes state calls commit().
 */
export const state = {
  index:    0,      // current slide (0-based)
  total:    0,      // slide count
  step:     0,      // fragments revealed on the current slide
  steps:    0,      // fragments available on the current slide
  overview: false,
  presenter:false,
  help:     false,
  theme:    'light',
};

const subscribers = new Set();

/** Register a reactor. Fires immediately, returns an unsubscribe fn. */
export function subscribe(fn){
  subscribers.add(fn);
  fn(state);
  return () => subscribers.delete(fn);
}

/** Merge a patch into state and notify everyone. */
export function commit(patch = {}){
  Object.assign(state, patch);
  subscribers.forEach(fn => fn(state));
}
