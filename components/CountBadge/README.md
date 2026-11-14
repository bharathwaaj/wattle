# CountBadge

A small `ink` pill with a number, like unread messages or new submissions. The number rolls when it changes, and anything over `max` shows as "99+".

## You provide

- `count`. It hides itself at 0 unless you pass `showZero`.
- `label`: what's being counted, e.g. "unread". Screen readers hear "3 unread".
- `max`: the default is 99.

## Do and don't

- Put it right after the thing it counts.
- Don't use it for status words. Use Badge or Status for those.
