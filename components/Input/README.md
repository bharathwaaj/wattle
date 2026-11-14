# Input

A single-line text field with a visible label, an optional hint and an optional error message.

## You provide

- `label`: always provide one. Placeholders are examples, not labels.
- `hint`: optional helper text in `ink-muted`.
- `error`: an optional message. It turns the border `danger`, sets `aria-invalid` and is linked to the input for screen readers.
- `icon`: an optional icon at the start of the field, like `"search"` or `"filter"`. It's drawn in `ink-muted` and is decorative only.
- `iconEnd`: an optional icon at the end of the field, like `"calendar"` or `"chevron-down"`.
- Any native input attribute (`type`, `value`, `onChange`, `placeholder`, `disabled`…). The component handles `id` if you don't pass one.

## Do and don't

- Do write errors as a fix: "Use letters and numbers only", not "Invalid input".
- Do keep the error text, because colour alone doesn't mark the error. The component adds a warning icon in front of it.
- Don't rely on an icon to explain the field. The label must still say what goes in it.
- Don't put a wattle border or fill on fields. Yellow is for actions and selection, not focus.
- Focus shows a 2px `ink` ring and an `ink` border.
