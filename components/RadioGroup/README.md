# RadioGroup

One choice from a short list, in a fieldset with a legend. The chosen option shows an `ink` ring and dot. Arrow keys move between options, as with native radios.

## You provide

- `legend`: the question, e.g. "Batch timing".
- `options`: an array of `{ value, label, hint?, disabled? }`.
- `value` and `onChange(value)`, or `defaultValue`.
- `hint`: optional, for the whole group. `inline`: lays two or three short options out in a row.

## Do and don't

- Use it for 2–5 options. For more, use Select.
- Always pre-select the most common option, unless choosing is the point.
