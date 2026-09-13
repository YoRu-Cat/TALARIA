# Deductive Prompt Architecture — Deck Script & Layout Plan

**Deck:** `deck/index.html` (10 slides) · **Company:** Talaria Technologies Inc.
**Palette:** sampled from `assets/logo.svg` — Talaria blue `#1E7BFF`, navy `#1C2333`, paper `#F7F8FA`
**Type:** Fraunces (display) / Inter (body) · minimum on-slide size 21px at 1280×720 — legible from the back of a room

---

## Slide 1 — Design the ceiling. Then remove what you don't need.

**Layout** Hero focal centre. Logo mark on the vertical axis, everything stacked and centred beneath it. Presenter and date pinned to the bottom corners.

**Visual direction** Traced SVG mark (`assets/mark.svg`) at 132px, the only object above the fold. Blue eyebrow, navy display headline, single grey subtitle line. Deliberately empty — the centre-alignment motif is stated visually before it is argued.

**Body**
- Eyebrow: TALARIA TECHNOLOGIES · AI OPERATIONS
- H1: Design the ceiling. Then remove what you don't need.
- Sub: A top-down prompt architecture for company-wide AI adoption

**Presenter notes** Open on the contrast, not the agenda. Most people build prompts upward from nothing; we build downward from a complete specification. Everything that follows is a consequence of that one reversal.

---

## Slide 2 — Two directions of travel

**Layout** Split 50/50. Two equal-height panels, left neutral, right accented and revealed on a keypress.

**Visual direction** Left panel: white, hairline border, grey label — the default. Right panel: blue-tinted fill, blue border, blue label — the argued position. Numbered four-step flow in each, step 3 bold on both sides so the eye compares the pivot point directly.

**Body**
- Left · STATUS QUO — UNDERSHOOTING → "Start vague. Build up." → Vague opening prompt → Inductive patching, turn by turn → **Context drift** → Rework and wasted turns
- Right · STRATEGIC — DEDUCTIVE → "Start complete. Cut down." → High-density master prompt → Lock the constraints → **Distil to the task** → Controlled execution

**Presenter notes** Same model, same person, opposite direction. Undershooting negotiates with the model; deductive prompting instructs it. Ask the room which one they did this morning.

---

## Slide 3 — Every correction adds a contradiction

**Layout** Hero diagram across the full width, two supporting bullets beneath.

**Visual direction** Inline SVG. A solid blue horizontal line — deductive, on target — against a grey dashed curve peeling away from it across eight turns. Labels sit in open space, never on the lines. The picture carries the argument; the bullets only name the mechanism.

**Body**
- Each patch is written against the **last output**, not the original intent.
- Constraints added late silently overwrite constraints added early.

**Presenter notes** The failure is structural, not a skill gap. By turn six nobody in the thread can say what the governing constraint is — including the model.

---

## Slide 4 — Overshoot, then subtract

**Layout** Four-column step ribbon, vertically centred, hairline rules between columns.

**Visual direction** Monospace step numerals in blue above each heading — the only monospace in the deck, marking this as the procedural slide. Columns reveal one at a time, left to right, so the method is walked rather than read.

**Body**
1. **Overshoot** — Write the master prompt: role, audience, constraints, format, tone, and what to leave out.
2. **Constrain** — Mark what must not change. These survive every derivative prompt.
3. **Distil** — Strip everything this task does not need. Subtraction is cheap; recovery is not.
4. **Execute** — One pass. Review against the master, not against the last reply.

**Presenter notes** Overshooting control is the point. It is far easier to delete a constraint you wrote deliberately than to discover one you never set.

---

## Slide 5 — One context load, three deliverables

**Layout** Split 50/50, vertically centred. Input on the left, output on the right, right side revealed on a keypress.

**Visual direction** No diagram. Two blue sub-headings over matched bullet lists, so the eye reads it as a ledger: what went in, what came out. Final bullet bold — it is the claim, not an item.

**Body**
- **The master prompt carried:** company, product and business model · audience: a risk-averse credit reader · the ask, the leverage, the concessions · tone, length, and named omissions
- **What came out:** three letter variants (concise, expanded, full-block) · three formatted Word documents · a slide deck, from the same context · **the argument was never rebuilt**

**Presenter notes** This is our own evidence, not a vendor case study. The format changed three times; the reasoning was authored once, because it was specified before the first draft existed.

---

## Slide 6 — Control without a bottleneck

**Layout** 3-column card layout, vertically centred.

**Visual direction** Equal white cards, hairline borders, large blue numerals. Identical weight across all three — none of the pillars is subordinate. Cards reveal left to right.

**Body**
- **01 Responsibility** — Standardised inputs make output governable. What the model was told is auditable after the fact.
- **02 Empowerment** — Teams inherit the context. No one needs to be a prompt engineer to get a compliant result.
- **03 Flexibility** — Departments tune parameters, not principles. The core constraints hold across every unit.

**Presenter notes** The usual trade-off is control versus speed. A master prompt removes it: the control lives in the artefact, so the team does not have to carry it.

---

## Slide 7 — What changed, measured

**Layout** Four large metric callouts in a row, each on a blue left rule. Sourcing footnote at the base.

**Visual direction** Numerals at 84px display weight — readable from anywhere in the room. Unfilled figures render in rust `[   ]%` so a blank is obviously a blank, never mistaken for a claim. Footnote in faint grey.

**Body**
- `[   ]%` Fewer revision loops per deliverable
- `[   ]%` Faster to first usable draft
- `3` Deliverable formats from one context load
- `0` Arguments rebuilt from scratch
- Footnote: Bracketed figures to be confirmed against Q3 workflow logs. The right-hand pair are observed from the credit-facility project.

**Presenter notes** Be straight about which numbers are measured and which are pending. A metric you cannot source is worse than no metric with this audience.

---

## Slide 8 — The engine sits at the centre

**Layout** Concentric radial diagram, full bleed within the content area.

**Visual direction** Solid blue core disc holding the label, two concentric rings (one solid, one dashed) and six equidistant nodes with spokes at 35% opacity. Every unit is the same distance from the core — the geometry is the argument. No bullets on this slide.

**Body** Core: PROMPT ARCHITECTURE · Nodes: Product · Engineering · Legal & Risk · Operations · Support · Marketing

**Presenter notes** Centre-aligned, not top-down in the org-chart sense. Every unit is equidistant from the core, so no team inherits a degraded copy of the standard.

---

## Slide 9 — Govern the core, not the forks

**Layout** Three-phase step ribbon, hairline rules between phases.

**Visual direction** Same ribbon component as slide 4, three columns instead of four — the visual rhyme signals "this is the method, applied to the organisation."

**Body**
- **PHASE 1 · Author** — One master prompt per work category, owned centrally and version-controlled.
- **PHASE 2 · Fork** — Units distil their own variants. Parameters are theirs; constraints are not.
- **PHASE 3 · Review** — Audit outputs against the master. Amend the core once; every fork inherits it.

**Presenter notes** Policing individual prompts does not scale. Governing one artefact that every prompt descends from does.

---

## Slide 10 — The thesis

**Layout** Statement slide. Left-aligned, vertically centred, nothing else on the surface.

**Visual direction** Display serif at 50px, two sentences, one supporting line beneath. Maximum white space — the slide should feel like a full stop.

**Body**
> Undershooting is not a skill problem. It is a direction problem.

Specify the ceiling once. Everything after that is subtraction.

**Presenter notes** Land it and stop. Do not add a summary slide — the sentence is the summary.

---

## Running the deck

Serve the folder (VS Code → Live Server), then: `→` next step · `O` overview · `S` speaker notes + timer · `T` light/dark · `F` fullscreen · `?` all keys.
Ctrl/Cmd+P exports one slide per page with every reveal expanded.
