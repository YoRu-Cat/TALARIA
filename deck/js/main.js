/**
 * Bootstrap. Order matters: engine first, then UI, then input, then route.
 *
 *   core/  — state, navigation, scaling, routing, input
 *   ui/    — everything that only reacts to state
 *   util/  — dependency-free helpers
 */
import * as deck      from './core/deck.js';
import * as router    from './core/router.js';
import * as keyboard  from './core/keyboard.js';
import * as pointer   from './core/pointer.js';

import * as theme     from './ui/theme.js';
import * as progress  from './ui/progress.js';
import * as overview  from './ui/overview.js';
import * as presenter from './ui/presenter.js';
import * as help      from './ui/help.js';

function boot(){
  theme.init();
  deck.init();

  progress.init();
  overview.init();
  presenter.init();
  help.init();

  keyboard.init();
  pointer.init();

  // Read the incoming hash BEFORE router.init(): the router's first
  // state notification rewrites the hash to the current slide.
  const start = router.initialIndex();
  router.init();
  deck.go(start);

  // print with every fragment visible
  window.addEventListener('beforeprint', deck.revealAll);

  console.info('Talaria deck ready — ' + deck.slides.length + ' slides. Press ? for keys.');
}

document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', boot)
  : boot();
