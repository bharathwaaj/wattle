# Dialog

A modal that asks one question or holds one short task. It's built on the native `<dialog>`, so focus stays inside, Esc closes it, and the page behind becomes inert. It uses `surface-200`, a hairline, `radius-md` and `shadow-dialog` over a dimmed backdrop.

## You provide

- `open` and `onClose`.
- `title`: a question or a task, like "Leave Batch A?".
- `children`: one or two sentences about what happens next.
- `footer`: the actions, with the safe choice first and the committing one last.
- `dismissable`: set it to `false` to stop a backdrop click from closing it.

## Do and don't

- Do say the consequence in the body: what's lost, what stays.
- Prefer UndoButton or HoldButton for deletes. Use a dialog when the action needs explaining.
- Don't stack dialogs or put forms longer than 3 fields in one.
