# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-11-09

### Added

- Initial release: a Kimi-inspired skin for DeepSeek Harness Web.
- **205 semantic tokens** covering light and dark themes, with enforced key-set
  parity between the two palettes (`test/run-all.mjs` fails if a token is
  forgotten in dark mode).
- Dark-first palette: base `#0E1020`, layers `#15172A` / `#1A1D33` / `#22263F`,
  brand lifted to `#7B8CFF`; light theme uses `#5A5FE0` brand on cool blue-grey
  neutrals.
- Glassmorphism on menus, dialogs and composer chips
  (`backdrop-filter: blur(20px) saturate(160%)`).
- Kimi geometry: 16px bubbles, 24px composer, 24px panels, `9999px` pills.
- Structural rules over measured host `data-*` anchors only: composer focus
  ring, brand-gradient send button, glassy chips, bubble radius, code-block
  radii. No CSS Module hash class names are targeted.
- `prefers-reduced-motion` support, zero-specificity font normalization,
  keyboard-only focus ring preserved.
- **Component layer** via official `ctx.slots`:
  - `sidebar.brand.mark` / `sidebar.brand.name`: original inline-SVG crescent
    mark + the "Kimi" name, shadowing the official brand occupant with
    `priority:-1`.
  - `conversation.hero.brand.mark`: large mark on the new-conversation page.
  - `conversation.hero.options`: four quick-action pills
    (`AI 搜索 / 长文阅读 / 帮我写作 / 翻译`).
  - `settings.section`: an About page documenting capabilities and provenance.
- `insertDraft()`: quick-action pills write their prompt into the real composer
  via measured anchors, the native value setter and a bubbling `input` event,
  with a three-tier fallback for environments without a global `Event`.
- Zero runtime and build dependencies; a ~160-line bundler produces the committed
  `client/client.js`, so GitHub installs need no `prepare` step.
- Self-contained verification suite (18 checks) and GitHub Actions CI.

### Design decisions

- **Colors are derived, not measured.** Kimi's official CSS bundle could not be
  reliably retrieved (JS-rendered, anti-scraping), so this release uses values
  induced from the public interface and labels them as such everywhere —
  in `src/tokens.mjs`, `docs/DESIGN.md`, the README and the About page. The
  sibling `dsh-doubao-ui` plugin does use measured tokens; this one does not
  claim to.
- Dark mode uses `body[data-ds-dark-theme]`, verified from the source of the
  installed `dsh-doubao-ui` / `dsh-zcode-ui` plugins rather than assumed.
- Font baseline is 15px, a compromise between DSH's 14px and Kimi's larger body
  text, to avoid overflowing host sidebars and toolbars.
- The brand mark is an original crescent-and-stars drawing that alludes to the
  "moonshot" name without copying any vendor asset.

### Notes

- This plugin conflicts with other full-site skins (`dsh-doubao-ui`,
  `dsh-zcode-ui`, `dsh-wechat-ui`): all of them override the same `--dsw-*`
  tokens. Enable exactly one.
