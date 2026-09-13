/** Keyboard cheatsheet (?). */
import { $ } from '../util/dom.js';
import { state, commit } from '../core/state.js';

let root;
export function init(){
  root = $('#help');
  root.addEventListener('click', e => { if (e.target === root) close(); });
}
export function open(){  root.classList.add('is-open');    commit({ help:true  }); }
export function close(){ root.classList.remove('is-open'); commit({ help:false }); }
export function toggle(){ state.help ? close() : open(); }
