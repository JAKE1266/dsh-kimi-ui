# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.0.0] - 2026-11-09

### Changed — 为什么是一次大版本

v1.x 严格照搬 Kimi 官方 CSS 的实测值，结果是**几乎看不出换了皮肤**：

| 维度 | 官方 DSH | Kimi v1.x | 实际观感 |
| --- | --- | --- | --- |
| 页面底 | `#fff` | `#FBFAF9` | 都是白，看不出 |
| 二级面 | `#F5F5F5` | `#F5F5F5` | **完全一样** |
| 圆角 | 12 / 16px | 12 / 16px | **完全一样** |
| 字号 | 14px | 15px | 几乎看不出 |
| 主色 | `#000` | `#1783FF` | 唯一明显差异，但只影响按钮/链接 |

用户反馈「看起来一般」是准确的 —— 那不是一套皮肤，只是「官方界面 + 蓝色按钮」。

v2.0.0 改变策略：**以 Kimi 的设计语言为准，而不是逐值照搬**。辨识度来自
渐变、大圆角、玻璃质感、侧栏分色和加强的对比，这些恰恰是 v1 为了「忠于实测」
而没用上的东西。

### Added

- **渐变体系**：`--km-gradient` / `-soft` / `-button` / `-text`，用于发送键、
  hero 标记、选中胶囊、品牌文字、引用块背景。
- **大圆角**：气泡 20px、输入卡 28px、面板 24px（官方 DSH 是 12/16px）。
- **侧栏分色**：亮色侧栏 `#F2F0ED` 暖灰 vs 主区纯白；暗色侧栏 `#0F0F0E` vs
  主区 `#171715`。这是最直观的「一眼看出换了皮肤」。
- **强玻璃质感**：`blur(20px) saturate(180%)`，用于胶囊、菜单、上下文菜单、
  全局面板。
- **加强对比**：文字层级从 `.68/.52/.42` 拉深，边框从 `.09` 提到 `.12`。
- **组件层视觉升级**：品牌文字用渐变裁切、hero 标记带光晕与 hover 抬升、
  快捷胶囊玻璃化 + hover 上浮、关于卡片 hover 阴影。
- **滚动条样式**：细、圆、半透明。
- **选中文本**品牌色、**焦点环**品牌色、**引用块**品牌左边框 + 渐变底。

### Design decisions

- 圆角放大是刻意的：Kimi 观感「圆润」，而 DSH 官方的 12/16px 偏方正。
- 侧栏分色比 Kimi 官方更明显 —— Kimi 的侧栏与主区差异很小，但在 DSH 的
  三栏布局里，不明显分色就完全看不出换了皮肤。
- 品牌渐变仍是**推导**：Kimi 站点没有官方品牌渐变变量（全量 grep 41 个
  CSS bundle 确认）。`#1783FF → #2F20FF` 由品牌蓝与代码卡片深紫组合而成。
- 实测锚点保留：品牌蓝 `#1783FF` / 暗 `#1A88FF`、暖白 `#FBFAF9`、
  中性 `#121212` 系、字体栈、`blur` 参数的量级都来自官方 CSS。

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
