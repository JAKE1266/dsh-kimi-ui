# Contributing

Thanks for taking the time. This plugin is deliberately small; the main rule is
**don't make it depend on anything**.

## Setup

```bash
git clone https://github.com/JAKE1266/dsh-kimi-ui.git
cd dsh-kimi-ui
node scripts/build.mjs
node test/run-all.mjs
```

No `npm install`. The project has zero dependencies and the built artifact
`client/client.js` is committed, so a fresh clone is ready to install as a DSH
plugin immediately.

## The one workflow rule

`src/*.mjs` are the **source**. `client/client.js` is **generated**. After any
change to `src/`, always run:

```bash
node scripts/build.mjs && node test/run-all.mjs
```

CI rejects a PR where the committed `client/client.js` differs from a fresh
build, so never edit the generated file by hand.

## Changing colors

Everything lives in `src/tokens.mjs`:

| Want to change | Edit |
| --- | --- |
| Brand primary / gradients | `LIGHT['--dsw-alias-brand-primary']` + `DARK[...]`, plus the `--km-*` vars |
| Page / sidebar / card backgrounds | `--dsw-alias-bg-*` |
| Text and borders | `--dsw-alias-label-*` / `--dsw-alias-border-*` |
| Radii, shadows, font sizes | `STRUCTURAL` |
| Composer / pill shape, glass params | `STRUCTURE_CSS` |

**Hard requirement:** the light and dark palettes must have **identical key
sets**. `test/run-all.mjs` enforces this. If you add a token to `LIGHT`, add the
dark-mode value to `DARK` too.

### Provenance discipline

This release's colors are **derived**, not measured — see `docs/DESIGN.md` §0.
If you replace a value with one measured from Kimi's real CSS bundle, say so
explicitly in the PR and update `docs/DESIGN.md` plus the header comment in
`src/tokens.mjs`. Do not silently upgrade a derived value to look measured; the
whole point of the current labelling is that readers can tell the difference.

## Rules for selectors

1. **Never target a DSH CSS Module hash class name.** Those change on every
   upstream build. Use `:root`, `body`, or a `data-*` anchor.
2. Only use anchors listed as measured in `docs/DESIGN.md` §3.
3. Prefer a token override over an element rule: a token changes every consumer
   at once and cannot break on an upstream refactor.
4. Do not override `:focus-visible` outlines. DSH uses
   `--dsw-focus-ring-color` to implement keyboard-only rings.
5. Never guess message roles (user vs AI). `data-message-bubble` is not known to
   carry a role discriminator.

## Safety

The DSH client loader does not isolate entry factories: one throwing factory can
white-screen the whole Web shell. Therefore:

- Keep every initialization path inside `try`.
- Any missing host capability must degrade to an inert module, not throw.
- **Never `require('react')` at module top level** — use `bindReact()`.
- **Never `module.exports = {...}`** in `src/client.mjs` — it breaks the
  `exports` alias. The bundler fails the build if you do.
- `ctx.effect` must always return a teardown that removes the style tags and
  restores `<html>` attributes.

## Tests

Add a check to `test/run-all.mjs` for any new invariant. The suite must stay
dependency-free (only `node:assert`, `node:fs`, `node:path`, `node:vm`).

## Commit / PR

- Describe what changed and why in the CHANGELOG under `Unreleased`.
- Run `node test/run-all.mjs` locally; CI runs the same command.
- Screenshots of light and dark mode are very welcome for visual changes.
