# Wattle

**Warm earth, one sharp yellow.** Wattle is a design system based on the Yellow-wattled Lapwing (*Vanellus malabaricus*), a ground bird of dry fields in India. Its colours are mostly sandy brown and taupe, with one bright yellow patch on its face.

This system does the same thing: calm, earthy neutrals almost everywhere, with yellow kept for the one thing that matters on each screen.

## Content fundamentals

- **Plain and warm.** Write the way you'd explain something to a colleague. Use short sentences and everyday words.
- **One idea at a time.** Keep paragraphs to 1–3 sentences. Use headings and bullets to make pages easy to scan.
- **Sentence case** for every title, button and label: "Create course", not "Create Course".
- **Verbs on buttons.** "Save changes", "Add student". Avoid "OK" and "Submit".
- **Tags and overlines** use the `label` style in uppercase, and nothing else does.

## Visual foundations

### Colour

The palette comes from the bird's plumage.

| Token | Comes from | Role |
| --- | --- | --- |
| `ink` | Cap black | Text and icons |
| `wattle` | Face wattle and eye ring | The one accent: primary action, selection, highlight |
| `earth` | Upperparts brown | Large fills, illustration, first chart series |
| `taupe` | Neck and breast | Quiet fills, tags, second chart series |
| `surface-100` | Pale underparts | Page background |
| `wing` | Wing-tip brown | Deep bands, footers, tooltips |

**Rules**

- **One yellow per view.** `wattle` marks the primary action or the current selection. If two things are yellow, neither one stands out.
- **Wattle is a fill, not a line.** On light surfaces it reaches only 1.4:1 contrast, so never use it for text, thin borders or focus rings. Text on wattle is always `on-wattle`. In the dark theme, wattle *can* be used as text (11.8:1).
- **Neutrals carry the page.** Use `surface-100`, `surface-200`, `ink` and `ink-muted` for most of the interface. Keep `earth` and `taupe` for fills and illustration. Use `earth` as text only at 24px and above.
- **Borders, not shadows.** Separate raised `surface-200` from the page with a `hairline` border. Controls use `border-strong` (3:1 or better).
- **Shadows only for things that float.** Use `shadow-overlay` for dropdowns, popovers, tooltips and toasts, and `shadow-dialog` for modals and sheets. Use both together with `surface-200` and a `hairline` border. Never put a shadow on a card or an input.
- **Focus rings** are 2px `ink` with a 2px offset.
- **`danger`** is only for errors and destructive actions. Keep it small.

### Themes

- **Light**: the bird by day, with cream ground and black ink.
- **Dark**: the field at dusk, with a near-black warm ground and cream ink. Wattle, earth, taupe and wing look the same in both themes.

### Type

- **Fraunces** (display): a warm, soft serif for `display`, `heading-1` and `heading-2`.
- **Manrope** (sans): a clean, friendly sans for all UI and body text.
- Both are free on Google Fonts. Load them with weights 400–700.

### Space and shape

- **Spacing** follows `space-1` (4px), `space-2` (8px), `space-4` (16px), `space-6` (24px) and `space-10` (40px). Cards use `space-4` padding, the gap between cards is `space-6`, and sections are separated by `space-10`.
- **Radius**: `radius-sm` for inputs and tags, `radius-md` for cards, and `radius-pill` for buttons and chips. The pill shape echoes the round eye ring.

## Components

Components are React 18 components, published as `window.Wattle` from `components/bundle.js`. Load the stylesheet first (`components/bundle.css`, which also loads both fonts).

- **Button**: the primary variant is the wattle action, one per view. Use secondary, ghost and danger for everything else.
- **Input**: always give it a visible label. Errors show as text, not just colour.
- **Card**: a `surface-200` panel with a hairline border. One frame, many patterns, from events and deadlines to media, metrics and empty states. The Card guide lists them.
- **Badge**: a small pill for status or category, in neutral, strong or danger. Never wattle.
- **Status, CountBadge, Tag**: a dot and a word for state, a number pill for counts, and chips for filters and choices.
- **Building blocks**: IconDisc, DateBlock, MetaList, Progress, Checklist, Avatar, Stat, Sparkline and SeatMap. These are the parts the card patterns are made from, so reuse them and don't restyle by hand.
- **Icon**: draws any of the starter icons inline in `currentColor`. Button, Input and Card accept an `icon` prop that takes an icon name, like `icon="search"`.

### Motion

Buttons move only to confirm that something happened or to prevent a mistake.

- **ActionButton**: the button becomes its own result, like Book → Booked, Add to calendar → Added, or Copy link → Copied.
- **ProgressButton**: a fill sweeps across while slow work runs. It ends on success, or on an error with a retry.
- **HoldButton**: press and hold to delete, as the danger outline draws itself around the button.
- **UndoButton**: deletes at once, with 5 seconds to undo.
- **ReactionButton**: star, like and save toggles that pop and burst on.
- **Button `effect`**: `nudge` and `sweep` hover hints.

Keep motion between 150 and 500ms, and announce every result to screen readers. Everything goes still when the OS setting "reduce motion" is on.

Every focus state is the same: a 2px `ink` ring with a 2px offset.

## Iconography

Icons come from **Lucide** (v0.460.0, ISC licence). They're adjusted to a 1.5px stroke and sit on a 24px grid. The starter set is in the Icons asset group.

- Draw icons in `ink` or `ink-muted`, using `danger` only for error states. Never colour an icon `wattle`.
- Size an icon to the text next to it: 24px by default, 20px in dense UI.
- Outline icons only, with no filled or multi-colour icons. The full rules are in the Icons group README.

## Logo

The mark is the lapwing's **eye ring**: a `wattle` ring and dot on a cap-black disc. The wordmark is "Wattle" in Fraunces 600, converted to outlines.

- On light backgrounds, use `wattle-lockup.svg` or `wattle-mark.svg`. On dark backgrounds, use the `-dark` versions.
- Use the mark alone where space is tight, such as favicons, avatars and app icons.
- Never put the yellow ring on a light background without its disc. Never recolour or stretch the mark.

## Origin of the palette

The colours are a refined blend of two hand-estimated palettes taken from photographs of the Yellow-wattled Lapwing. One was an illustrative palette card. The other was based on a Cornell Lab *Birds of the World* photograph. Neither palette was pixel-sampled, so the yellow was adjusted (`#ECD43E`) to sit between the vivid wattle and the softer tone seen in natural light. No photographs are included in this system.
