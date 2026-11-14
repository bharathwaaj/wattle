# Card

A raised `surface-200` panel with a `hairline` border and `radius-md` corners. Each card holds one thing, and there are three kinds, each with its own job.

## Three kinds of card

| Kind | Its job | How to build it |
| --- | --- | --- |
| **Content card** | Shows one item, like a course or a test, and what you can do next | `eyebrow`, `title`, body text and `footer` actions. No icon, because the title does the work. |
| **Shortcut card** | Leads to a section of the app | `as="a"` with an `href`, plus an `icon`, a `title` and a short stat. The whole card is the link, so it has no buttons inside. |
| **Choice card** | Offers one option among a few, like a plan or a batch | `as="button"` with `role="radio"`, `aria-checked` and `selected`, inside a wrapper with `role="radiogroup"`. |

Use one kind per row, and don't mix kinds in a grid.

## You provide

- `title`: set in Fraunces at heading-2 size.
- `eyebrow`: an optional uppercase overline in `ink-muted`, e.g. "Course". It can hold an icon, like the check on a selected choice card.
- `icon`: an optional icon in a 40px circle above the eyebrow, given as a Lucide name or a React node. Use it for shortcut cards.
- `children`: the body text, in `ink-muted`.
- `footer`: optional actions, usually Buttons, under a hairline. The footer is pushed to the bottom, so footers line up across a row.
- `selected`: optional. It gives the card an `ink` border.
- `as`: the element to render, `section` by default. Cards rendered as `a` or `button` get a hover border and the standard focus ring.

## Do and don't

- Do lay cards out in a grid with `space-4` or `space-6` gaps, so cards in a row share the same height.
- Do mark the selected choice in words too ("Selected" in the eyebrow), not just with the border.
- Don't put buttons inside a shortcut card. The card itself is the link.
- Don't add shadows. Wattle uses borders, not shadows.
- Don't fill cards with wattle or add a coloured left border.
- Don't nest cards inside cards.
