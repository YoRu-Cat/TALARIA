/**
 * Keyboard map. Every binding is declared once, here.
 */
import { next, prev, first, last, go } from './deck.js';
import { state, commit } from './state.js';
import * as overview  from '../ui/overview.js';
import * as presenter from '../ui/presenter.js';
import * as theme     from '../ui/theme.js';
import * as help      from '../ui/help.js';

export function init(){
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    // Esc closes whatever overlay is open, in priority order.
    if (e.key === 'Escape'){
      if (state.help)     return help.close();
      if (state.overview) return overview.close();
      if (state.presenter)return presenter.close();
      return;
    }

    switch (e.key){
      case 'ArrowRight': case ' ': case 'PageDown': e.preventDefault(); next(); break;
      case 'ArrowLeft':  case 'PageUp':             e.preventDefault(); prev(); break;
      case 'ArrowDown':  e.preventDefault(); go(state.index + 1); break;
      case 'ArrowUp':    e.preventDefault(); go(state.index - 1); break;
      case 'Home':       first(); break;
      case 'End':        last();  break;
      case 'o': case 'O': overview.toggle();  break;
      case 's': case 'S': presenter.toggle(); break;
      case 't': case 'T': theme.toggle();     break;
      case 'r': case 'R': presenter.resetTimer(); break;
      case '?': case '/': help.toggle();      break;
      case 'f': case 'F':
        document.fullscreenElement
          ? document.exitFullscreen()
          : document.documentElement.requestFullscreen();
        break;
      default:
        // 1–9 jump straight to a slide
        if (/^[1-9]$/.test(e.key)) go(parseInt(e.key, 10) - 1);
    }
  });
}
