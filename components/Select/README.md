# Select

A native dropdown, styled to match Input: a `border-strong` outline, a chevron, and the same label, hint and error. Because it's native, keyboards, screen readers and phone pickers all work as expected.

## You provide

- `label`, `hint`, `error`.
- `options`: strings, or `{ value, label }` objects.
- `placeholder`: an unselectable first line, like "Choose a class".
- `value` and `onChange`, or `defaultValue`.

## Do and don't

- Use it for 6 or more options, or where space is tight. For fewer, RadioGroup shows every option at once.
- Sort options in the order people expect, like numbers ascending or alphabetical.
