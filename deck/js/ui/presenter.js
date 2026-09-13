/**
 * Presenter panel (S): speaker notes for the current slide, an elapsed
 * timer, and a peek at what comes next.
 */
import { $ } from '../util/dom.js';
import { mmss } from '../util/dom.js';
import { state, commit, subscribe } from '../core/state.js';
import { slides, fit } from '../core/deck.js';

let root, noteEl, nextEl, timerEl, started = Date.now(), tick;

export function init(){
  root    = $('#presenter');
  noteEl  = $('[data-note]');
  nextEl  = $('[data-next]');
  timerEl = $('[data-timer]');

  subscribe(render);
  tick = setInterval(() => {
    timerEl.textContent = mmss(Math.floor((Date.now() - started) / 1000));
  }, 1000);
}

function render(s){
  if (!slides.length || !root.classList.contains('is-open')) return;
  const cur  = slides[s.index];
  const note = cur.querySelector('.notes');
  noteEl.textContent = note ? note.textContent.trim() : 'No notes for this slide.';

  const nxt = slides[s.index + 1];
  nextEl.textContent = nxt
    ? 'Next — ' + (nxt.dataset.title || 'slide ' + (s.index + 2))
    : 'Last slide.';
}

export function resetTimer(){ started = Date.now(); timerEl.textContent = '00:00'; }
export function open(){
  root.classList.add('is-open');
  document.body.classList.add('is-presenting');
  commit({ presenter:true });
  render(state);
  fit();
}
export function close(){
  root.classList.remove('is-open');
  document.body.classList.remove('is-presenting');
  commit({ presenter:false });
  fit();
}
export function toggle(){ state.presenter ? close() : open(); }
