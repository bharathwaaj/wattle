# UndoButton

Deletes at once, then gives people a few seconds to change their mind. The button turns into "Deleted · Undo", with a line shrinking along the bottom. If the line runs out, the delete is final.

## You provide

- `label`: e.g. "Delete lesson".
- `doneLabel`: e.g. "Lesson deleted".
- `undoLabel`: optional. The default is "Undo".
- `duration`: optional, in ms. The default is 5000.
- `onDelete`: runs on click. Hide the item straight away.
- `onUndo`: runs if Undo is pressed. Restore the item.
- `onCommit`: runs when the time is up. Delete for real.

## Behaviour

- Focus moves to Undo when the delete happens, so keyboard users can undo with one key press.
- "Lesson deleted. Undo available." is announced to screen readers.

## Do and don't

- Do prefer this over a confirmation dialog whenever the delete can be held back for a few seconds.
- Don't shorten the time below 4 seconds.
