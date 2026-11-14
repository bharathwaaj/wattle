# Tag

A chip for things people choose and can take away again, like subjects, batches and filters.

## Two kinds

- **Removable**: pass `onRemove`, and the chip gets an × button named "Remove Physics".
- **Toggle**: pass `selected` and `onClick`. When it's on, it fills `ink` with a check, and it uses `aria-pressed`.

## You provide

- `children`: one or two words.
- `label`: optional. The name used in "Remove …" when the children aren't plain text.

## Do and don't

- Use toggles for filters and removable tags for choices already made.
- Don't use Tag for status. Badge and Status are for that.
