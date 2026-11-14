# Input

A single-line text field with a visible label, an optional hint and an optional error message.

## You provide

- `label`: always provide one. Placeholders are examples, not labels.
- `hint`: optional helper text in `ink-muted`.
- `error`: an optional message. It turns the border `danger`, sets `aria-invalid` and is linked to the input for screen readers.
- Any native input attribute (`type`, `value`, `onChange`, `placeholder`, `disabled`…). The component handles `id` if you don't pass one.

## Do and don't

- Do write errors as a fix: "Use letters and numbers only", not "Invalid input".
- Do keep the error text, because colour alone doesn't mark the error.
- Don't put a wattle border or fill on fields. Yellow is for actions and selection, not focus.
- Focus shows a 2px `ink` ring and an `ink` border.
