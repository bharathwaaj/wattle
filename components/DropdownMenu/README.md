# DropdownMenu

A button that opens a short list of actions, such as an item's "…" overflow menu or "Sort by". The menu sits on `surface-200` with a hairline and `shadow-overlay`.

## You provide

- `items`: an array of `{ label, icon?, onSelect, danger?, disabled?, shortcut? }`, or `{ divider: true }`.
- `label`: a text trigger like "Sort by" with a chevron. Leave it out for an icon-only "…" trigger, and pass `ariaLabel` instead (the default is "More actions").
- `variant` (default `ghost`), `size`, `icon`, `align: "end"` (opens to the left).

## Behaviour

- It follows the WAI-ARIA menu button pattern. Opening it focuses the first item. Arrow Up and Down, Home and End move between items. Esc closes it and returns focus to the trigger. Tab or a click outside also closes it.

## Do and don't

- Keep it to 7 items at most. Put destructive actions last, after a divider, in `danger`.
- Don't hide the main action in a menu. If people use it often, make it a button.
