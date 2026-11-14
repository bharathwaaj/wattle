# Card

A raised `surface-200` panel with a `hairline` border and `radius-md` corners. Each card holds one thing, and there are three kinds, each with its own job.

## Patterns

Card is one frame. What changes from card to card is what goes inside it. The preview shows ten patterns, and each one answers a different question.

| Pattern | Answers | Built from |
| --- | --- | --- |
| **Announcement** | What do I need to know? | A `wing` icon disc, a bold line, a sentence, a timestamp and an icon-only dismiss button. Use it full width. |
| **Event** | When and where? | A date block (month in `label`, day in Fraunces) beside the title, plus time and place rows with icons. It has one primary action. |
| **Media** | What does it look like? | The `media` prop: a full-bleed image or illustration across the top, then the title. |
| **Availability** | How much is left? | A big number with its unit, and a seat map of filled `earth` dots and empty `border-strong` rings. |
| **Progress** | How far along am I? | An `earth` progress bar, "12 of 24", and a ghost button with `iconEnd` to resume. |
| **Metric** | How are we doing? | One Fraunces number, a one-line trend in words, and a sparkline in `earth`. |
| **Deadline** | How long do I have? | Countdown tiles on `wing` with cream text, the due date, and who has finished. |
| **Checklist** | What's left to do? | Tick boxes that fill with `ink` when done. The eyebrow counts what's done. |
| **Person** | Who is this? | An initials avatar on `taupe`, the name in Fraunces, the role, and tags. |
| **Empty state** | What do I do first? | `variant="empty"`: a dashed border, an icon, one sentence, and one action. |

Clickable cards come in two kinds:

- **Shortcut card**: use `as="a"` with an `href`. The whole card is the link, so put no buttons inside it.
- **Choice card**: use `as="button"` with `role="radio"`, `aria-checked` and `selected`, inside a wrapper with `role="radiogroup"`. Say "Selected" in the eyebrow as well.

## You provide

- `title`: set in Fraunces at heading-2 size.
- `eyebrow`: an optional uppercase overline in `ink-muted`, e.g. "Course". It can hold an icon, like the check on a selected choice card.
- `icon`: an optional icon in a 40px circle above the eyebrow, given as a Lucide name or a React node. Use it for shortcut cards.
- `children`: the body text, in `ink-muted`.
- `media`: an optional image or illustration, shown full-bleed across the top. Give images real alt text.
- `variant`: `"empty"` for empty states, with a dashed border, a transparent ground and centred content.
- `footer`: optional actions, usually Buttons, under a hairline. The footer is pushed to the bottom, so footers line up across a row.
- `selected`: optional. It gives the card an `ink` border.
- `as`: the element to render, `section` by default. Cards rendered as `a` or `button` get a hover border and the standard focus ring.

## Do and don't

- Do lay cards out in a grid with `space-4` or `space-6` gaps, so cards in a row share the same height.
- Do mark the selected choice in words too ("Selected" in the eyebrow), not just with the border.
- Don't put buttons inside a shortcut card. The card itself is the link.
- Keep to one primary (wattle) button across a whole screen of cards. Every other card action is secondary or ghost.
- Don't add shadows. Wattle uses borders, not shadows.
- Don't fill cards with wattle or add a coloured left border.
- Don't nest cards inside cards.
