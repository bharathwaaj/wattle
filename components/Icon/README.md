# Icon

Draws one of the 24 starter icons inline as SVG. Icons come from Lucide v0.460.0 (ISC licence) and are drawn with a 1.5px stroke in `currentColor`.

## You provide

- `name`: the icon's name, such as `"search"` or `"trash-2"`. `Wattle.Icon.names` lists every name.
- `size`: optional, in px. The default is 24.
- `label`: give a label only when the icon stands alone and carries meaning. Without one, the icon is hidden from screen readers.
- Colour comes from the parent's CSS `color`. Use `ink` or `ink-muted`, and `danger` only for errors.

## Do and don't

- Do use the `icon` props on Button, Input and Card instead of placing an Icon inside them yourself.
- Don't colour icons `wattle`.
- Don't mix in icons from other sets. For a new icon, take it from Lucide v0.460.0, add it to the bundle, and add its file to the Icons asset group.
