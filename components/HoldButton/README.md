# HoldButton

A destructive action that needs a press and hold instead of a confirmation dialog. A `danger` outline draws itself around the pill while it's held. Let go early and nothing happens. Hold for the full time and the trash lid pops, the label changes to "Deleted", and the button fades.

## You provide

- `label`: say "hold" in it, e.g. "Hold to delete".
- `doneLabel`: e.g. "Deleted".
- `duration`: optional, in ms. The default is 1000.
- `onConfirm`: runs when the hold completes.
- `size`: optional.

## Behaviour

- It works with a mouse, touch, or keyboard. On a keyboard, hold Enter or Space.
- The outline fills linearly over `duration`. Letting go rewinds it in 200ms.
- "Deleted" is announced to screen readers.

## Do and don't

- Do use it for permanent deletes where an undo isn't possible.
- Don't use it for anything that can be undone. UndoButton is faster for people.
