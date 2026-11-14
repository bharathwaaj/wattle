# Switch

An on/off setting that applies straight away. When it's on, the track fills `ink` and the `surface-200` knob slides across with a check. This matches how Checkbox and Radio show "on", and keeps `wattle` for actions. It uses `role="switch"` and `aria-checked`.

## You provide

- `label`, and optionally `hint`.
- `checked` and `onChange(on)`, or `defaultChecked`.
- `disabled`: optional.

## Do and don't

- Use it only when the change happens at once, with no Save button. Inside a form, use Checkbox.
- Label the setting, not the action: "Class reminders", not "Turn on reminders".
