/**
 * Pointer input: click the left/right quarter of the screen to move,
 * and swipe horizontally on touch devices.
 */
import { next, prev } from './deck.js';
import { state } from './state.js';

const OVERLAY_IDS = ['overview', 'presenter', 'help', 'modwarn'];

export function init(){
  document.addEventListener('click', (e) => {
    if (state.overview || state.help) return;
    if (e.target.closest('#' + OVERLAY_IDS.join(',#'))) return;
    if (e.clientX < window.innerWidth * 0.25) prev();
    else if (e.clientX > window.innerWidth * 0.75) next();
  });

  let x0 = null;
  document.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive:true });
  document.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 55) (dx < 0 ? next() : prev());
    x0 = null;
  }, { passive:true });
}
