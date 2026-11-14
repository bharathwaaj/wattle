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
- `icon`: an optional icon before the label, given as a Lucide name (`"plus"`) or a React node. Its size follows the button: 18px, or 16px for `sm`.
- `iconEnd`: an optional icon after the label. Use it for direction, like `"arrow-right"` or `"chevron-down"`.
- **Icon-only**: pass `icon` with no children, and always pass `aria-label`. The button then becomes a 40px circle (32px for `sm`).

## Do and don't

- Do put the primary button last in a row of actions.
- Don't use two primary buttons on one view. If two things look equally important, one of them isn't.
- Don't put an icon-only primary button where a label fits.
- Use one icon per button at most, and only where it helps people scan, like add, download or delete. Don't add icons just to decorate.
- Focus shows a 2px `ink` ring with a 2px offset, so never remove the outline.
