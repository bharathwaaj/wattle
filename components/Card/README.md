# Card

A raised `surface-200` panel with a `hairline` border and `radius-md` corners. Each card holds one thing: an event, a booking, a person, a result.

## Patterns

Card is one frame. What changes from card to card is what goes inside it. The preview shows eleven patterns, and each one answers a different question. Every piece inside is a Wattle component, so build them from these parts and not from one-off CSS.

| Pattern | Answers | Built from |
| --- | --- | --- |
| **Announcement** | What do I need to know? | `IconDisc` (strong), a bold line, a sentence, a timestamp and an icon-only dismiss `Button`. Use it full width. |
| **Event** | When and where? | `DateBlock` and `MetaList` (time, host), with an `ActionButton` (flip): "Add to calendar" → "Added to calendar". |
| **Booking** | Can I join, and when? | `Badge`s in the eyebrow, a one-line pitch, a `MetaList` (day, time, places left), then Book (`ActionButton`, morph, `undoable`) and Details (ghost). Booking lowers the places-left count, and clicking Booked again cancels it. |
| **Media** | What does it look like? | The `media` prop: a full-bleed image or illustration across the top, then the title. Read, plus a bookmark `ReactionButton`. |
| **Availability** | How much is left? | `Stat` ("4 seats left") and `SeatMap`, with Reserve a seat (`ActionButton`, morph, `undoable`). The count drops and your seat pops in. |
| **Progress** | How far along am I? | `Progress`, "12 of 24", and a secondary `Button` with `effect="nudge"`, using `divider={false}`. |
| **Metric** | How are we doing? | `Stat` with a trend in words, and a `Sparkline`. |
| **Checklist** | What's left to do? | `Checklist`, with a count in the eyebrow that updates. |
| **Person** | Who is this? | `Avatar`, the name, a `Status` ("Teaching now"), and a row of `Badge`s, using `divider={false}`. |
| **Link** | Where can I see more? | `as="a"`: a title, one sentence, then an `ink` "Open …" line with an arrow, set `space-4` below the text so it doesn't read as part of the sentence. The whole card is the link. |
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
- `divider`: set it to `false` to drop the footer's hairline and separate the footer with space instead. Use this when the card is short, or when its content already ends cleanly, like a progress bar or a badge row. A card with fewer lines reads calmer.
- `selected`: optional. It gives the card an `ink` border.
- `as`: the element to render, `section` by default. Cards rendered as `a` or `button` get a hover border and the standard focus ring.

## Do and don't

- Do size each card to its content. In a dashboard, stack cards in columns rather than stretching them to match a row, because stretched cards end up with empty space inside.
- Don't start a footer with a ghost button. Its padding makes the label look indented, so use a secondary button.
- Do mark the selected choice in words too ("Selected" in the eyebrow), not just with the border.
- Don't put buttons inside a shortcut card. The card itself is the link.
- Use motion buttons where an action changes the card: Book, Reserve, Add to calendar, Save. Let the card react as well, by updating the count or filling the seat, so the result shows in the content and not only on the button.
- Keep to one primary (wattle) button across a whole screen of cards. Every other card action is secondary or ghost.
- Don't add shadows. Wattle uses borders, not shadows.
- Don't fill cards with wattle or add a coloured left border.
- Don't nest cards inside cards.
