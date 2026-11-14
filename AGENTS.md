# Instructions for AI coding agents

This repository is **Wattle**, a design system. There are two kinds of work here:

- **Building an app with Wattle**: read "Building an app with Wattle" below.
- **Changing Wattle itself**: read "Changing Wattle" and the git rules further down.

## Building an app with Wattle

### Read these first, in this order

1. `README.md`: the brand book. It covers voice, colour rules, type, space, motion and component guidance. Its rules are requirements, not suggestions.
2. `components.json`: every component, with its group, a one-line summary, its props (TypeScript) and the path to its guide.
3. `components/<Name>/README.md`: the guide for each component you use. It says what you provide, what the component does, and the do's and don'ts.
4. `examples/starter.html`: a complete working app. Copy its structure.

`llms-full.txt` holds all of the above in one file, if you'd rather read a single document.

### Loading Wattle

Wattle is plain files with no package to install:

```html
<link rel="stylesheet" href="https://bharathwaaj.github.io/wattle/tokens.css">
<link rel="stylesheet" href="https://bharathwaaj.github.io/wattle/components/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://bharathwaaj.github.io/wattle/components/bundle.js"></script>
```

Every component is on `window.Wattle` (`const { Button, Card } = window.Wattle`). Set `data-theme="light"` or `"dark"` on `<html>`.

**In a React or Vite project:** copy `tokens.css`, `components/bundle.css` and `components/bundle.js` into the app (for example, under `src/wattle/`). Then load them in this order:

```js
import React from 'react';
import ReactDOM from 'react-dom';
window.React = React; window.ReactDOM = ReactDOM;   // the bundle reads these globals
import './wattle/tokens.css';
import './wattle/bundle.css';
await import('./wattle/bundle.js');                 // defines window.Wattle
export const { Button, Card, ActionButton /* … */ } = window.Wattle;
```

Types are in `components/index.d.ts`.

### Rules every app must follow

- **Use Wattle components before writing your own.** Check `components.json` first. Cards are built from parts like DateBlock, MetaList, Stat, Progress, Avatar and Badge. Don't hand-style those.
- **Use tokens for every colour, space, radius and shadow**: `var(--ink)`, `var(--space-4)`, `var(--radius-md)`. Never hard-code hex values or pixel spacing that a token covers.
- **One wattle-yellow action per screen.** It's the primary Button or ActionButton. Yellow is never text on a light background, never a border, and never an icon colour.
- **Checked or on states use `ink`**, not yellow. That covers Checkbox, Radio, Switch and Tag.
- **Borders, not shadows.** Cards use a hairline border. Shadows are only for things that float: Dialog, DropdownMenu, Tooltip and Toast.
- **Say it in words.** Status, counts and errors need text, not just colour: "3 seats left", "Selected", "Overdue".
- **Write the way the brand book says**: sentence case, buttons that start with a verb, short sentences.
- **Motion confirms a result.** Use ActionButton for commitments (Book → Booked), UndoButton or HoldButton for deletes, and `Wattle.toast()` for things confirmed elsewhere. Don't add animation that the components don't already have.
- **Accessibility**: give every icon-only button an `aria-label`, give every input a visible label, and keep the focus ring.
- **If Wattle has no component for something**, build it in the app from tokens. Follow the nearest component's look, and say in your summary that it isn't part of Wattle yet.

### Icons

Pass Lucide names to `icon` props, or use `<Icon name="…" />`. `components.json` → `icons` lists the available names. Don't use other icon sets.

## Changing Wattle

- The sources are `tokens.json`, `README.md`, `components/` (`bundle.js`, `bundle.css`, `index.d.ts`, plus a `README.md` and `preview.html` per component) and `assets/`.
- **After any change, run `node scripts/build.mjs`.** It regenerates `tokens.css`, `components.json`, `llms.txt` and `llms-full.txt`, so apps and agents stay in sync. Commit the generated files together with the change.
- A new component needs four things: its code in `components/bundle.js` (added to the `@ds-bundle` header list and to `window.Wattle`), styles in `bundle.css`, types in `index.d.ts`, and a `components/<Name>/` folder with `README.md` and `preview.html`. Line 1 of `preview.html` is `<!-- @dsCard group="…" height=N subtitle="…" -->`. The docs site picks it up automatically.
- `bundle.js` is one classic script with no imports. It must never contain the literal text `</script` or `<!--`.
- `index.html` is the GitHub Pages docs site. `design-system.json` is the index for the Claude design-system artifact: these files are mirrored there under `project/`.

## Git commit messages

- Include a concise subject and a human-readable body in every commit message.
- Follow Conventional Commits: type(scope): description. Omit the scope
  when it adds no useful context. Common types include feat, fix, docs,
  style, refactor, test, build, ci, perf, and chore.
- Use an imperative description (for example, "add" rather than "added"),
  with no trailing period. Aim for a subject of 50 characters or fewer;
  do not exceed 72, including the type and scope.
- Make the subject summarize the entire change. Include critical release
  or time-sensitive context when relevant.
- Refer to documentation sections by their titles, not section numbers.
- Separate the subject from the body with a blank line.
- Explain what changed and why in the body, including relevant impact or
  motivation. Attribution trailers alone do not count as a body.
- Start with the problem or missing behavior and who it affected, then
  explain the change and why it addresses that problem. Omit low-level
  implementation details unless they are not apparent from the diff.
- Include relevant verification results and limitations when useful.
  Only claim checks that actually ran; state what was not verified.
- Add useful context rather than repeating the subject or filling space.
  Summarize related changes instead of listing every minor edit.
- Use hyphen bullets for all body details, not prose paragraphs. Wrap body
  lines at 72 characters and indent continuation lines.
- Use plain text without Markdown emphasis, backticks, or code fences.
  Keep attribution and other Git trailers unbulleted in a separate footer.
- Base the message on the actual diff. Describe important dependency,
  binary asset, or encoding changes specifically rather than vaguely.
- Inspect opaque or binary changes with appropriate tools before
  describing them; do not infer their contents from filenames alone.
- For submodule updates, summarize the actual upstream changes rather
  than reporting only a pointer or commit hash.
- Reference relevant issues in the footer. Use closing references only
  when the commit fully resolves the issue; never invent issue IDs.
- Identify breaking changes with a BREAKING CHANGE: footer describing
  the impact and required migration.
- For reverts, use revert: followed by the original subject, and include
  a body bullet stating "This reverts commit <full SHA>." Explain why.
- When amending, review the existing commit and staged changes. Write the
  message for the final combined commit, not just the amendment.
- Only create or amend commits when the user explicitly asks.

## Change and pull request hygiene

- Keep each commit a single, coherent, stable change, and keep pull
  requests focused on one feature or behavior rather than unrelated work.
- Review your own diff before handing it off. Remove accidental changes,
  unused code, and unrelated files.
- Explain what a pull request changes, why it is needed, and how it was
  verified. Mention important trade-offs or rejected alternatives.
- Propose significant architecture, schema, API, or tooling changes
  before implementing them. Include deployment or migration plans when
  relevant.
- Avoid unnecessary rebases during review, since rewriting history can
  make review comments and incremental changes harder to follow.

## Code reviews

- Prioritize bugs, security, compatibility, performance, and tests that
  verify the intended behavior. Check whether the stated goals are met.
- Give specific, actionable, respectful feedback. Distinguish blocking
  correctness issues from optional suggestions and stylistic nitpicks.
- Prefer clear simplifications over clever rewrites. Reduce risk and
  unnecessary complexity rather than pursuing perfection.
- Use automated checks for enforceable style rules instead of spending
  review effort on formatting.
