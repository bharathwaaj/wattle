# Tooltip

A short `ink` label that appears on hover or keyboard focus, after 250ms. It names what an icon-only control does. Esc hides it.

## You provide

- `label`: two or three words.
- `children`: exactly one focusable element, usually an icon-only Button. It gets `aria-describedby`.
- `side`: `top` (default) or `bottom`. `delay`: optional, in ms.

## Do and don't

- Use it to name icon-only buttons. The button still needs its own `aria-label`.
- Never put information only in a tooltip. Touch screens can't hover.
- Don't put links or buttons inside a tooltip.
