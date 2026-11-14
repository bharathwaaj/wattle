# Badge

A small pill label for status or category, like "New", "Beginner" or "Batch A". It is not clickable.

## Tones

- **neutral** (default): `surface-100` with a `hairline` border and `ink` text. Use it for categories and tags.
- **strong**: an `ink` fill with `surface-200` text, which inverts in the dark theme. Use it for the one thing that's new or important on a card.
- **danger**: a `danger` outline and text. Use it for problems like "Overdue" or "Failed".

## You provide

- `children`: one or two words, in sentence case.
- `tone`: optional.
- `icon`: an optional 12px icon before the text, as a Lucide name.

## Do and don't

- Do put badges in a Card's `eyebrow`, or in a row under a person or item.
- Use one strong badge per card at most.
- Don't make badges wattle. Yellow is for actions and selection.
- Don't use a badge as a button or filter chip.
