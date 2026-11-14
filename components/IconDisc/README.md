# IconDisc

A single icon in a round disc. It anchors an announcement, an empty state or a shortcut card.

## You provide

- `icon`: a Lucide name.
- `tone`: `neutral` (default) has a `surface-100` fill with a hairline border. `strong` is `wing` with a cream icon, for announcements. `danger` is an outline, for warnings.
- `size`: in px. The default is 40, and the icon is drawn at half that size.
- `label`: only when the disc stands alone and means something. Otherwise it's hidden from screen readers.

## Do and don't

- Use one disc per card at most.
- Don't use a disc as a button. If it needs to be clickable, use an icon-only Button.
