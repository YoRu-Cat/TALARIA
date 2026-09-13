# Talaria Deck

HTML/CSS/JS slide deck for the Talaria Technologies credit-facility request.
No build step, no dependencies.

## Running it

ES modules are blocked on `file://`, so serve the folder:

- **VS Code** — install the *Live Server* extension, right-click `index.html` → **Open with Live Server**
- or `npx serve` / `python -m http.server` from this directory

## Keys

| Key | Action |
|---|---|
| `→` `Space` | next fragment, then next slide |
| `←` | back |
| `↑` `↓` | whole slide, skipping fragments |
| `1`–`9` | jump to slide |
| `O` | overview grid |
| `S` | speaker notes + timer |
| `T` | light / dark |
| `F` | fullscreen |
| `R` | reset timer |
| `?` | keyboard help |

## Structure

```
index.html          slide markup — all content lives here
css/
  tokens.css        colors, type scale, spacing, dark theme   <- restyle here first
  base.css          reset + typography primitives
  layout.css        stage, slide box, grid helpers
  components.css    eyebrow, card, points, stat, quote, fragments
  slides.css        per-slide-type variants (title, divider, statement)
  overlays.css      progress, overview, presenter, help
  print.css         one slide per page on Ctrl/Cmd+P
js/
  main.js           bootstrap
  core/
    state.js        state object + subscribe/commit
    deck.js         slide list, navigation, fragments, stage scaling
    router.js       URL hash <-> slide index
    keyboard.js     all key bindings, declared once
    pointer.js      click zones + touch swipe
  ui/               progress, overview, presenter, theme, help
  util/dom.js       $, $$, on, clamp, mmss
assets/             images go here
```

## Editing

**Add a slide** — copy a `<section class="slide">` block in `index.html`.
Give it a `data-title` (used by the overview and presenter panel) and an
`<aside class="notes">`. Counter and progress bar update automatically.

**Reveal things one at a time** — add `class="frag"` to any element.
They appear in document order as you press `→`.

**Restyle** — change the variables in `css/tokens.css`. Dark theme values
live in the same file under `:root[data-theme="dark"]`.

**Placeholders** — `<span class="ph">[Insert X]</span>` renders in the
secondary accent so unfilled figures are easy to spot.
