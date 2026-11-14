# SeatMap

A grid of dots that shows how many places are taken and how many are left. Taken places are filled `earth`, free ones are `border-strong` rings, and the person's own place pops in `wattle` with an `ink` ring.

## You provide

- `total`, `taken`, and `columns` (default 10).
- `mine`: makes the last taken place the person's own.
- `label`: optional. It defaults to "36 of 40 places taken, 4 left".

## Do and don't

- Do say the number in words too, like "4 seats left".
- Keep the total under about 60. For more, use a Progress bar.
