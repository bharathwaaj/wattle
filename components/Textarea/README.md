# Textarea

Multi-line text, styled like Input. It starts 96px tall, and people can drag it taller.

## You provide

- `label`, `hint`, `error`, `placeholder`, `rows`.
- `maxLength`: optional. It shows a "120 / 280" count, which turns `danger` and is announced once the text passes 90% of the limit.
- `value` and `onChange`, or `defaultValue`.

## Do and don't

- Do set `maxLength` when there's a real limit, and say why in the hint if it's tight.
- Use a placeholder as a prompt, not as instructions. Instructions go in the hint.
