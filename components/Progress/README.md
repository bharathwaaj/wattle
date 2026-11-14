# Progress

A thin `earth` bar that shows how far along something is. It animates when the value changes.

## You provide

- `value`, and `max` (default 100).
- `label`: required for screen readers, e.g. "Course progress".
- `showValue`: optional. Adds the percentage after the bar.

## Do and don't

- Do write the progress in words nearby too, like "12 of 24 lessons".
- Don't use it for tasks that are still running. Use ProgressButton or a spinner.
