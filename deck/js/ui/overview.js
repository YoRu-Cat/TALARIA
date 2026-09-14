/**
 * Overview grid (O): live-cloned thumbnails of every slide; click one to jump.
 * Clones are rebuilt on open so edits to slides are always reflected.
 */
import { $, $$ } from '../util/dom.js';
import { state, commit } from '../core/state.js';
import { slides, go, revealAll } from '../core/deck.js';

let root, grid;

export function init(){
  root = $('#overview');
  grid = $('#overview .grid');
}

function build(){
  grid.innerHTML = '';
  const w = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--slide-w'));

  slides.forEach((slide, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb' + (i === state.index ? ' is-current' : '');

    const inner = slide.cloneNode(true);
    inner.classList.add('inner', 'is-active');
    inner.removeAttribute('data-dir');   // thumbnails never animate
    inner.style.display = 'flex';
    $$('.frag', inner).forEach(f => f.classList.add('is-shown'));

    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.textContent = (i + 1) + '. ' + (slide.dataset.title || '');

    thumb.append(inner, tag);
    thumb.addEventListener('click', () => { close(); go(i); });
    grid.appendChild(thumb);

    // scale the full-size clone down into the thumbnail box
    requestAnimationFrame(() => {
      inner.style.transform = 'scale(' + (thumb.clientWidth / w) + ')';
    });
  });
}

export function open(){  build(); root.classList.add('is-open');    commit({ overview:true  }); }
export function close(){ root.classList.remove('is-open');          commit({ overview:false }); }
export function toggle(){ state.overview ? close() : open(); }
