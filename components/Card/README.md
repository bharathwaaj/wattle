# Card

A raised `surface-200` panel with a `hairline` border and `radius-md` corners. It groups one item: a course, a plan, a result.

## You provide

- `title`: set in Fraunces at heading-2 size.
- `eyebrow`: an optional uppercase overline in `ink-muted`, e.g. "Course".
- `children`: the body text, in `ink-muted`.
- `footer`: optional actions, usually Buttons, under a hairline.
- `selected`: optional. It gives the card an `ink` border inside a list of choices.
- `as`: the element to render, `section` by default. Use `article` or `li` where that fits.

## Do and don't

- Do separate cards with `space-6` gaps.
- Don't add shadows. Wattle uses borders, not shadows.
- Don't fill cards with wattle or add a coloured left border. Mark a chosen card with `selected`.
- Don't nest cards inside cards.
