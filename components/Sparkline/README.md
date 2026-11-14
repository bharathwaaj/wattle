# Sparkline

A small `earth` line chart with an `ink` dot on the latest value. It shows the shape, not exact values.

## You provide

- `data`: an array of numbers, oldest first. It needs at least 2.
- `height`: optional. The default is 56.
- `label`: describes the trend for screen readers, e.g. "Average score over 8 weeks, from 62 to 86".

## Do and don't

- Pair it with a Stat that gives the current number.
- Don't add axes or gridlines. If people need the values, use a proper chart.
