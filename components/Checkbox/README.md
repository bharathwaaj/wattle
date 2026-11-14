# Checkbox

A single on/off choice with a visible label. It's a native checkbox underneath, styled with an `ink` fill when checked.

## You provide

- `label`, and optionally `hint`.
- `checked` and `onChange`, or `defaultChecked`. Any native input attribute also works.
- `indeterminate`: for a "select all" box when only some items are chosen. It shows a dash.

## Do and don't

- Do use it for choices that take effect when a form is submitted. For settings that apply at once, use Switch.
- Do write labels as positive statements: "Email me a weekly summary", not "Don't email me".
