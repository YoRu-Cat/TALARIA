/** Progress bar + slide counter. Pure reaction to state. */
import { $ } from '../util/dom.js';
import { subscribe } from '../core/state.js';

export function init(){
  const bar = $('#progress');
  const num = $('#counter');
  subscribe(s => {
    if (!s.total) return;
    bar.style.width = ((s.index + 1) / s.total * 100) + '%';
    num.textContent = (s.index + 1) + ' / ' + s.total;
  });
}
