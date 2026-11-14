# Tabs

Switches between views of the same thing, like a course's lessons, tests and notes. The active tab is `ink` with a 2px `ink` underline that grows in. The others are `ink-muted`.

## You provide

- `tabs`: an array of `{ id, label, content, icon?, count? }`. A `count` shows a small pill after the label.
- `label`: names the tab list for screen readers.
- `defaultTab` and `onChange(id)`: optional.

## Behaviour

- It follows the WAI-ARIA tabs pattern. Arrow Left and Right move and select, Home and End jump to the ends, and only the active tab sits in the Tab order.

## Do and don't

- Keep labels to one or two words. Use 2–6 tabs.
- Don't use tabs for steps in a process. People expect to move between tabs freely.
