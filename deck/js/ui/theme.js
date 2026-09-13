/**
 * Light / dark theme (T). Persisted per browser; failures are ignored
 * because localStorage throws in some privacy modes.
 */
import { commit, state } from '../core/state.js';

const KEY = 'talaria-deck-theme';

export function init(){
  let saved = 'light';
  try { saved = localStorage.getItem(KEY) || 'light'; } catch {}
  apply(saved);
}

function apply(theme){
  document.documentElement.dataset.theme = theme;
  commit({ theme });
  try { localStorage.setItem(KEY, theme); } catch {}
}

export function toggle(){ apply(state.theme === 'dark' ? 'light' : 'dark'); }
