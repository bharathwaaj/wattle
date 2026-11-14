# ReactionButton

A toggle for small, personal reactions: star, like or save. Turning it on pops the icon and bursts a ring of dots. Turning it off is quiet.

## Kinds

- **star**: fills `wattle` with an `ink` outline, and bursts `wattle` and `earth` dots.
- **heart**: fills `danger` and bursts `danger` and `taupe` dots. Use it with a `count`.
- **bookmark**: fills `ink`, and the ribbon drops in from above. It has no burst.

## You provide

- `kind`: `"star"`, `"heart"` or `"bookmark"`.
- `label`: the accessible name, like "Star", "Like" or "Save". The count is added to it automatically.
- `count`: optional. It shows a number that rolls up or down as the toggle changes.
- `defaultPressed`, `onChange(pressed)`: optional.

## Behaviour

- It uses `aria-pressed`, so screen readers say "Star, toggle button, pressed".
- When "reduce motion" is on, there's no pop or burst. The fill still changes.

## Do and don't

- Do keep reactions small and next to the thing they're about.
- Don't use them for real commitments like booking or paying. Use ActionButton for those.
- The star is the one place where wattle shows as an icon fill. It always keeps its `ink` outline, so it reads on light backgrounds.
