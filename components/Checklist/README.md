# Checklist

A short list of tick boxes. They're real checkboxes under the styling, so keyboards and screen readers work as usual. Done items are struck through in `ink-muted`.

## You provide

- `items`: an array of `{ label, done }`.
- `done` and `onChange(doneArray)` to control it, or leave both out to let it keep its own state.
- `label`: names the list for screen readers.

## Do and don't

- Do show a count nearby, like "3 of 5 done".
- Keep it to 3–7 items. Anything longer is a task list, not a checklist.
