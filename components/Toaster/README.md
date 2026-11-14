# Toaster and toast()

Short messages that confirm something happened elsewhere on the page. They rise in at the bottom centre on an `ink` pill (cream in the dark theme) with `shadow-overlay`, then leave on their own.

## Use

1. Put `<Toaster />` once, near the root of the app.
2. Call `Wattle.toast(message, options)` from anywhere.

## Options

- `tone`: `neutral` (default), `success` (adds a check) or `danger` (adds a warning icon).
- `actionLabel` and `onAction`: one action, like Undo or Retry.
- `duration`: the default is 4 seconds, or 6 seconds when there's an action.

## Behaviour

- Toasts are announced in a polite live region. At most 3 show at once, and the oldest leaves first.

## Do and don't

- Do keep messages short and in the past tense: "Changes saved".
- Don't use a toast for errors that block the work. Show those inline, next to the problem.
- Don't toast something the button already shows. ActionButton's "Booked" needs no toast.
