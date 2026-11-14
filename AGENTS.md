# Instructions for AI coding agents

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
