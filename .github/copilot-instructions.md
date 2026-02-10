Project overview
- This is a small static website: HTML in root (`index.html`, `test.html`), CSS in `css/style.css`, JavaScript (currently empty) in `js/script.js`, and images in `images/`.

Primary goals for AI coding agents
- Make minimal, well-scoped edits: this repo is a learning/demo site — prefer small PRs that change one feature or page.
- Preserve simple, static structure: no build step or package manager present — avoid adding heavy dependencies unless explicitly requested.

Development workflows (what actually works here)
- Serve locally: use a simple static server. Example:
  - `python3 -m http.server 8000` (then open `http://localhost:8000`)
  - or `npx http-server . -p 8000` if the user installs `http-server`.
- Debug in browser: inspect HTML in `index.html`/`test.html`, CSS in `css/style.css`, and JS in `js/script.js` using DevTools.

Project-specific conventions and patterns
- File locations:
  - Page HTML: `index.html`, `test.html`.
  - Styles: `css/style.css` — global styles applied site-wide.
  - Scripts: `js/script.js` — single entry for site JS; currently empty.
  - Assets: `images/` for media.
- Keep markup simple: links are relative (e.g., `index.html` → `test.html`), so preserve relative paths when moving or copying files.
- If adding JS, include a single script tag placed before `</body>` and keep behavior unobtrusive (progressive enhancement).

Integration points and cautions
- No backend or build pipeline detected — do not assume Node, bundlers, or transpilation unless the user adds them.
- No tests or linters present — do not introduce a test infra without user approval.

Examples (how to change behavior safely)
- To add client-side interactivity: append `<script src="js/script.js"></script>` before `</body>` in `index.html` and implement logic in `js/script.js`.
- To preview style changes: edit `css/style.css` and refresh the served page; prefer scoped selectors to avoid global regressions.

When proposing PRs
- Keep PRs tiny: one page or one feature per PR.
- Include a short description: what changed, why, and how to test locally (serve + URL + steps).

What to ask the user when unsure
- Should I add a local dev server or keep zero-dependency setup?
- Do you want a JS entry included in `index.html` by default?
- Any specific layout or accessibility requirements for pages?

If you edit this file
- Merge any user-specified conventions into this doc — keep it short and focused on discoverable, repo-visible patterns.

End of instructions.
