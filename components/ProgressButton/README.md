# ProgressButton

A button for slower work, like a submission or an upload. A darker fill sweeps across it as the work runs, with the percentage in the label. It ends on a success or an error.

## You provide

- `label`, `icon`: the idle state, e.g. "Submit worksheet".
- `runningLabel`: shown with the percentage, e.g. "Submitting 44%".
- `doneLabel`, `errorLabel`: the end states. An error turns the button `danger` and shakes it once. Clicking it again retries.
- `onAction(setProgress)`: call `setProgress(0–100)` as the work goes, and return a Promise that resolves or rejects.
- `variant`: `secondary` by default.

## Do and don't

- Do use it when the work takes more than about a second and you can report progress.
- Do write error labels that say what to do next: "Upload failed, try again".
- Don't fake progress you can't measure. Use ActionButton's spinner instead.
