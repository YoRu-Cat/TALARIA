# Deductive Prompt Architecture — Deck Script & Layout Plan

**Deck:** `deck/index.html` (13 slides) · **Company:** Talaria Technologies Inc.
**Palette:** sampled from `assets/logo.svg` — Talaria blue `#1E7BFF`, navy `#1C2333`, paper `#F7F8FA`
**Type:** Fraunces (display) / Inter (body) · minimum on-slide size 21px at 1280×720 — legible from the back of a room

---

## Slide 1 — Design the ceiling. Then remove what you don't need.

**Layout** Hero focal centre. Logo mark on the vertical axis, everything stacked and centred beneath it. Date centred at the base — no presenter credit, since the talk is shared between two to three speakers.

**Visual direction** Traced SVG mark (`assets/mark.svg`) at 132px, the only object above the fold. Blue eyebrow, navy display headline, single grey subtitle line. Deliberately empty — the centre-alignment motif is stated visually before it is argued.

**Body**
- Eyebrow: TALARIA TECHNOLOGIES · AI OPERATIONS
- H1: Design the ceiling. Then remove what you don't need.
- Sub: A top-down prompt architecture for company-wide AI adoption
- Foot: 13 September 2026

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

## Slide 6 — What we asked for, twice

**Layout** Two-row comparison grid. Row one holds the two prompt excerpts at equal height with their tops aligned; row two holds a one-line takeaway under each.

**Visual direction** Both excerpts sit in dark, monospaced cards so they read unmistakably as *input* rather than prose. Rust label chips; the specified elements of the final prompt picked out in Talaria blue. The right-hand card and its takeaway reveal on separate keypresses.

**Body**
- **First pass · raw context** — "We have to convince a bank to increase our credit line… we will be borrowing GPUs for testing our new mapping product, the current credit line won't allow sufficient funds transfers… We are willing to pay an extra 15%."
  → *Real information, no specification. Role, reader, format and exclusions all left to the model.*
- **Final pass · master prompt** — "Act as the CEO of Talaria Technologies Inc. Write a formal, persuasive business letter to our Commercial Bank Relationship Manager… Leave placeholders like [Insert DSCR]… Maintain a tone suitable for a risk-aware financial audience."
  → *Role, reader, ask, tone and unknowns — all fixed before a word was drafted.*

**Presenter notes** Read both aloud. The first is not a bad prompt — it carries genuine context. It simply decides nothing, and every decision it skips the model makes on your behalf.

---

## Slide 7 — Same argument, sharper instrument

**Layout** Identical two-row grid to slide 6, so the eye maps input directly onto output.

**Visual direction** Light cards with a serif face this time — these are *documents*, not instructions. The rhyme with the previous slide is deliberate: same geometry, inverted treatment.

**Body**
- **Letter one** — "Phase 2 changes our cash mechanics in one specific way… The constraint is one of velocity and timing, not solvency."
  → *Correct and compact. Built to be scanned.*
- **Final letter** — "I want to be precise about the nature of the constraint, because it would be easy to misread… Stated plainly, this is a constraint of velocity and timing, not of solvency or coverage."
  → *The same claim, now naming the misreading before the reader reaches it.*

**Presenter notes** The argument did not change between these two. Only its handling of the reader did — and that came from the brief, not from a rewrite.

---

## Slide 8 — Three axes, one direction

**Layout** Comparison table. A narrow axis column on the left, then First pass and Final pass columns, three rows divided by hairlines.

**Visual direction** No cards, no fills — hairline rules only, so the content carries itself. The Final pass column header is blue and its cells sit at full ink weight; the First pass column is one step lighter. The contrast is stated by typographic weight rather than by colour blocks.

**Body**

| | First pass | Final pass |
|---|---|---|
| **Flexibility** | The brief set the goal, not the form. The writer chose the structure. | Form fixed; flexibility moved into named placeholders the finance team owns. |
| **Design choice** | Headings and bold lead-ins, built for scanning. | Unbroken prose, full-block convention — a committee reads a letter, not a memo. |
| **Responsibility** | Leverage stated bluntly: a 15% premium, a threat to move banks. | Coercion dropped, concessions paired with safeguards, unverifiable figures left blank. |

**Presenter notes** Responsibility is the row to dwell on. Specifying the prompt did not only improve the prose — it decided what we were willing to say, and what we refused to claim without evidence.

---

## Slide 9 — Control without a bottleneck

**Layout** 3-column card layout, vertically centred.

**Visual direction** Equal white cards, hairline borders, large blue numerals. Identical weight across all three — none of the pillars is subordinate. Cards reveal left to right.

**Body**
- **01 Responsibility** — Standardised inputs make output governable. What the model was told is auditable after the fact.
- **02 Empowerment** — Teams inherit the context. No one needs to be a prompt engineer to get a compliant result.
- **03 Flexibility** — Departments tune parameters, not principles. The core constraints hold across every unit.

**Presenter notes** The usual trade-off is control versus speed. A master prompt removes it: the control lives in the artefact, so the team does not have to carry it.

---

## Slide 10 — What changed, measured

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

## Slide 11 — The engine sits at the centre

**Layout** Concentric radial diagram, full bleed within the content area.

**Visual direction** Solid blue core disc holding the label, two concentric rings (one solid, one dashed) and six equidistant nodes with spokes at 35% opacity. Every unit is the same distance from the core — the geometry is the argument. No bullets on this slide.

**Body** Core: PROMPT ARCHITECTURE · Nodes: Product · Engineering · Legal & Risk · Operations · Support · Marketing

**Presenter notes** Centre-aligned, not top-down in the org-chart sense. Every unit is equidistant from the core, so no team inherits a degraded copy of the standard.

---

## Slide 12 — Govern the core, not the forks

**Layout** Three-phase step ribbon, hairline rules between phases.

**Visual direction** Same ribbon component as slide 4, three columns instead of four — the visual rhyme signals "this is the method, applied to the organisation."

**Body**
- **PHASE 1 · Author** — One master prompt per work category, owned centrally and version-controlled.
- **PHASE 2 · Fork** — Units distil their own variants. Parameters are theirs; constraints are not.
- **PHASE 3 · Review** — Audit outputs against the master. Amend the core once; every fork inherits it.

**Presenter notes** Policing individual prompts does not scale. Governing one artefact that every prompt descends from does.

---

## Slide 13 — The thesis

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
