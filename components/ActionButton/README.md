# ActionButton

A button that shows its own result. Click "Book" and it changes to "Booked" in place, with no toast or page change.

## Animations

- **morph** (default): the label slides away, and the button shrinks to a circle with a spinner. It then grows back as the done state with a check that pops in. Use it for commitments like Book, Enrol or Join.
- **flip**: the icon turns over like a page into the done icon. Use it for small saves like "Add to calendar" → "Added".
- **swap**: the icon and label swap in place. Use it with `resetAfter` for repeatable actions like "Copy link" → "Copied".

## You provide

- `label`, `icon`: the idle state.
- `doneLabel`, `doneIcon`: the result, such as "Booked" with a check (the default icon).
- `onAction`: the work to do. Return a Promise, and the button waits for it. If it rejects, the button goes back to idle.
- `variant`: `primary` by default. `doneVariant` defaults to secondary when the variant is primary, because a finished action is no longer the main call to action.
- `resetAfter`: optional. The number of ms to wait before going back to idle.
- `undoable`: optional. It makes the button **latch**: clicking "Booked" again goes back to "Book" and calls `onUndo`. The button reports `aria-pressed`, and `undoHint` (a tooltip) says what clicking again does.
- `size`, `className`: optional.

## Behaviour

- A loading state lasts at least 700ms for morph and 250ms otherwise, so the change can be seen.
- The result is announced in a polite live region, so screen readers hear "Booked".
- When the OS setting "reduce motion" is on, states change instantly and the spinner slows down.
- Once done, the button is `aria-disabled` unless `resetAfter` or `undoable` is set.

## Do and don't

- Use morph for one main action per screen. It's the yellow moment.
- Don't use ActionButton for destructive actions. Use HoldButton or UndoButton instead.
