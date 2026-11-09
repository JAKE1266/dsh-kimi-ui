# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.1.0] - 2026-11-09

### Changed — colors are now measured, not derived

**This is the important change.** v1.0.0 shipped colors induced from the
interface; that guess was wrong in three ways, and the measured values differ
substantially:

| | v1.0.0 (guessed) | v1.1.0 (measured) |
| --- | --- | --- |
| Brand primary | `#5A5FE0` blue-violet | **`#1783FF`** blue (`--Colors-KMBlue`) |
| Dark brand | `#7B8CFF` | **`#1A88FF`** |
| Page background | `#FFFFFF` cold | **`#FBFAF9`** warm white (`--Bg-GroundPC`) |
| Dark base | `#0E1020` blue-black | **`#121212`** / **`#181817`** neutral-warm |
| Bubble radius | 16px | **12px** (measured) |
| Composer radius | 24px | 24px (confirmed correct) |
| Glass blur | `blur(20px) saturate(160%)` | **`blur(15px)`** (measured, most frequent) |

All tokens now trace to Kimi's shipped CSS:
`https://statics.moonshot.cn/kimi-web/assets/Bd7TiIrN.css` (328 KB, the
`:root` / `:root.dark` token table) and `5Dx4H7G1.css` (body font stack and
background).

Token count 205. `SKIN_VERSION` and the package version both move to 1.1.0.

### Added

- `--Others-LinkBlue` (`#3061a0` / dark `#6f88aa`) is used for
  `--dsw-alias-link`, matching Kimi's own link color rather than reusing the
  brand blue.
- Measured geometry throughout: input radius 24px, max width 768px,
  `0 5px 16px -4px #00000012` composer shadow, radius ladder 8/12/16/20/24px,
  `cubic-bezier(.23,1,.32,1)` easing.

### Fixed

- The GitHub Actions workflow file contained multi-byte comments that a
  PowerShell rewrite had corrupted into invalid UTF-8, which made YAML parsing
  fail and the job never be created (`total_events: 0`). Rewritten in plain
  ASCII; CI now runs.
- Component layer no longer mentions the sibling plugin by name in a code
  comment.

### Notes

- **Kimi has no official brand gradient.** Grepping all 41 CSS bundles
  (773 KB) plus 144 JS asset names and the HTML found `gradient` zero times in
  the HTML; the only blue-violet gradient on the site is the code-card
  background (`#d6f5ff→#c1ddff→#eae9ff` / dark `#1a88ff→#1c82ff→#2f20ff`).
  This plugin's `--km-gradient` composes brand blue with that deep violet and is
  labelled as derived.
- Kimi's primary buttons are **solid**, not gradient — the composer send button
  therefore uses `var(--km-primary)`.
- Conflicts with other full-site skins (`dsh-doubao-ui`, `dsh-zcode-ui`,
  `dsh-wechat-ui`): enable exactly one.

## [1.0.0] - 2026-11-09

### Added

- Initial release: a Kimi-inspired skin for DeepSeek Harness Web.
- 205 semantic tokens, light and dark, with enforced key-set parity.
- Structural rules over measured host `data-*` anchors only; no CSS Module hash
  class names.
- Component layer via official `ctx.slots`: brand marks, hero mark, four
  quick-action pills, and an About page.
- `insertDraft()`: pills write into the real composer via measured anchors, the
  native value setter and a bubbling `input` event, with fallbacks.
- Zero runtime and build dependencies; committed `client/client.js`.
- 18-check verification suite and GitHub Actions CI.

### Note

- v1.0.0's colors were **derived from visual inspection**, not measured.
  Superseded by 1.1.0; see above.
