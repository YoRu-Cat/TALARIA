/**
 * Keeps the URL hash in sync with the current slide, so a reload
 * or a shared link lands on the same place.  #7 == slide 7.
 */
import { state, subscribe } from './state.js';
import { go } from './deck.js';

let internal = false;

export function init(){
  subscribe(s => {
    const want = '#' + (s.index + 1);
    if (location.hash !== want){
      internal = true;
      history.replaceState(null, '', want);
      internal = false;
    }
  });

  window.addEventListener('hashchange', () => {
    if (internal) return;
    go(parseInt(location.hash.slice(1), 10) - 1 || 0);
  });
}

/** Slide index encoded in the current URL, or 0. */
export const initialIndex = () =>
  Math.max(0, (parseInt(location.hash.slice(1), 10) || 1) - 1);
