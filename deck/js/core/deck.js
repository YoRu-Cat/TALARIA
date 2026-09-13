/**
 * Deck engine: owns the slide list, navigation, fragments and stage scaling.
 */
import { $, $$, clamp } from '../util/dom.js';
import { state, commit } from './state.js';

export let slides = [];
let stage;

export function init(){
  stage  = $('#stage');
  slides = $$('.slide');
  commit({ total: slides.length });
  fit();
  window.addEventListener('resize', fit);
}

/** Fragments belonging to a given slide. */
export const fragsOf = (slide) => $$('.frag', slide);

/**
 * Go to a slide.
 * @param {number} n      target index
 * @param {'start'|'end'} edge  which end of its fragment sequence to land on
 */
export function go(n, edge = 'start'){
  const index = clamp(n, 0, slides.length - 1);
  const slide = slides[index];
  const steps = fragsOf(slide).length;

  slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
  commit({ index, steps, step: edge === 'end' ? steps : 0 });
  paintFragments();
}

/** Apply the current step count to the active slide's fragments. */
function paintFragments(){
  fragsOf(slides[state.index]).forEach((el, i) =>
    el.classList.toggle('is-shown', i < state.step)
  );
}

/** Advance one fragment, or move to the next slide when they are exhausted. */
export function next(){
  if (state.step < state.steps){
    commit({ step: state.step + 1 });
    paintFragments();
  } else if (state.index < slides.length - 1){
    go(state.index + 1);
  }
}

/** Reverse of next(): retract a fragment, or fall back to the previous slide. */
export function prev(){
  if (state.step > 0){
    commit({ step: state.step - 1 });
    paintFragments();
  } else if (state.index > 0){
    go(state.index - 1, 'end');
  }
}

export const first = () => go(0);
export const last  = () => go(slides.length - 1);

/** Reveal every fragment on the current slide at once (used by print/overview). */
export function revealAll(){
  commit({ step: state.steps });
  paintFragments();
}

/**
 * Scale the fixed-size stage to fit the viewport, reserving room on the
 * right for the presenter panel when it is open.
 */
export function fit(){
  if (!stage) return;
  const cs = getComputedStyle(document.documentElement);
  const w  = parseFloat(cs.getPropertyValue('--slide-w'));
  const h  = parseFloat(cs.getPropertyValue('--slide-h'));
  const reserve = document.body.classList.contains('is-presenting')
    ? parseFloat(cs.getPropertyValue('--presenter-w'))
    : 0;

  const availW = window.innerWidth - reserve;
  const scale  = Math.min(availW / w, window.innerHeight / h) * 0.94;

  stage.style.left = (availW / 2) + 'px';
  stage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
}
