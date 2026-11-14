# Button

Triggers an action. Pill-shaped, 40px tall (32px with `size="sm"`).

## Variants

- **primary**: wattle fill with `on-wattle` text. Use it for the one main action on a view, and use only one per view.
- **secondary** (default): `surface-200` with a `border-strong` outline. Use it for every other action.
- **ghost**: no fill. Use it for Cancel, toolbars and low-emphasis actions next to a primary.
- **danger**: `danger` outline and text. Use it for destructive actions, and confirm them first.

## You provide

- `children`: the label. Start with a verb and use sentence case, e.g. "Create course".
- `onClick`, and any other native button attribute. `type` defaults to `button`.
- `variant` and `size`, optionally.

## Do and don't

- Do put the primary button last in a row of actions.
- Don't use two primary buttons on one view. If two things look equally important, one of them isn't.
- Don't put an icon-only primary button where a label fits.
- Focus shows a 2px `ink` ring with a 2px offset, so never remove the outline.
