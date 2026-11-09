# dsh-kimi-ui

**A Kimi-inspired skin for the [DeepSeek Harness](https://www.deepseek.com/harness/) Web client.**

> Pure CSS token overrides plus declarative slot injection. No image assets in this repository.

> [!IMPORTANT]
> **Unofficial, community-maintained plugin.** Not a product of Moonshot AI / Kimi, nor of DeepSeek AI, and has no authorization or endorsement from either. Trademarks belong to their respective owners and are used only to describe the visual inspiration and compatibility.
>
> The plugin changes **only the interface**: no models, no session data, no network, no tools, no file I/O.

## Colors are measured from Kimi's shipped CSS

Every token traces to Kimi's official CSS bundle (`:root` / `:root.dark`):

```
https://statics.moonshot.cn/kimi-web/assets/Bd7TiIrN.css   (328 KB, token table)
https://statics.moonshot.cn/kimi-web/assets/5Dx4H7G1.css   (body font + background)
```

| Kimi token | Light | Dark |
| --- | --- | --- |
| `--Colors-KMBlue` | `#1783ff` | `#1a88ff` |
| `--Bg-GroundPC` (page + sidebar) | `#fbfaf9` warm white | `#181817` |
| `--Bg-Primary` / `--Bg-Secondary` | `#fff` / `#f5f5f5` | `#121212` / `#1f1f1f` |
| `--Labels-Primary` | `#000000e6` | `#ffffffd6` |
| `--Fills-F1` (bubble fill) | `#00000008` | `#ffffff0d` |
| `--chat-input-radius` | **24px** | same |
| Bubble radius | **12px** | same |
| Glass | `blur(15px)` | same |

**One derived item:** Kimi has **no** official brand-gradient variable — grepping all 41 CSS bundles found `gradient` zero times in the HTML, and the only blue-violet gradient on the site is the code-card background. This plugin's `--km-gradient` composes brand blue with that deep violet and is labelled derived, as are the 15px font baseline and a few intermediate opacities. See [`docs/DESIGN.md`](docs/DESIGN.md) §6 for the full list.

## What it does

### Layer 1 — skin (pure CSS token overrides)

- Kimi brand blue `#1783ff` on warm-white / neutral surfaces; replaces DSH's full `--dsw-alias-*` / `--dsw-static-*` / `--dsw-specific-*` set.
- Dark theme is Kimi's **neutral-warm** `#121212` / `#181817` — not blue-black.
- **Glassmorphism** on menus, dialogs and composer chips (`backdrop-filter: blur(15px)`, Kimi's most frequent value).
- Measured geometry: 12px bubbles, **24px** composer, 24px panels, `9999px` pills.
- Composer shadow `0 5px 16px -4px #00000012` + focus ring; unified code-block radii.
- Respects `prefers-reduced-motion`; keeps DSH's keyboard-only focus ring.

### Layer 2 — components (declarative React slots)

| Slot | Contribution |
| --- | --- |
| `sidebar.brand.mark` / `sidebar.brand.name` | Original crescent mark + the "Kimi" name (`priority:-1` shadows the official brand occupant) |
| `conversation.hero.brand.mark` | Large mark on the new-conversation page |
| `conversation.hero.options` | Four quick-action pills: `AI 搜索 / 长文阅读 / 帮我写作 / 翻译` |
| `settings.section` | About page: capabilities, provenance, rollback |

The mark is an **original inline SVG** (crescent + two star points) alluding to the "moonshot" name; no vendor asset is copied.

## Why CSS token overrides

Every DSH Web surface consumes `--dsw-alias-*` variables from `body`. Replacing them changes the whole UI without touching a business component:

- **Zero dependencies** — no bundler, no runtime deps, no `npm install` (the names in `dsh.client.inject` are module-graph load-order declarations; React comes from host seed modules).
- **Upgrade-safe** — never targets DSH's content-hashed CSS Module class names.
- **Reversible** — stylesheets and slot registrations are owned by `ctx.effect`.
- **Cannot white-screen** — the loader does not isolate entry factories. Every init step is wrapped; the component layer does not even `require('react')` at module top level (lazy binding), so a missing React degrades it to a no-op while the CSS skin stays intact.

## Install

```bash
# from GitHub (client/client.js is committed; no prepare script)
dsh plugin --profile desktop add github:JAKE1266/dsh-kimi-ui

# from a local clone
git clone https://github.com/JAKE1266/dsh-kimi-ui.git
cd dsh-kimi-ui
node scripts/build.mjs && node test/run-all.mjs
dsh plugin --profile desktop add link:$(pwd)
```

Replace `desktop` with the profile actually running `dsh web`.

**Activate:** restart DSH Web, then hard-refresh (`Ctrl+Shift+R`). `<html>` should carry `data-dsh-kimi-skin="1.1.0"`, and `<head>` should contain both `.../skin.css"` and `.../components.css"` style tags.

**Disable / remove:**

```bash
dsh plugin --profile desktop disable dsh-kimi-ui
dsh plugin --profile desktop remove dsh-kimi-ui
```

## ⚠️ Only one full-site skin at a time

This plugin conflicts with `dsh-doubao-ui`, `dsh-zcode-ui` and `dsh-wechat-ui` — all override the same `--dsw-*` tokens, so enabling two produces mixed colors. Disable one before enabling the other.

## Customizing

| Want to change | Edit |
| --- | --- |
| Brand color and gradients | `LIGHT/DARK['--dsw-alias-brand-primary']` and the `--km-*` private vars |
| Page / sidebar / card backgrounds | `--dsw-alias-bg-*` |
| Radii, shadows, font sizes | `STRUCTURAL` |
| Composer, pills, glass parameters | `STRUCTURE_CSS` |
| Quick-action copy and prompts | `QUICK_ACTIONS` |
| Brand mark | `MARK_SVG` in `src/artwork.mjs` |

Rebuild after editing (the artifact is committed):

```bash
node scripts/build.mjs && node test/run-all.mjs
```

## Verification

```bash
node test/run-all.mjs
```

Zero-dependency suite, **18 checks**: output syntax and factory contract, four inlined modules, dual-theme CSS, light/dark key-set parity (205 tokens), idempotent injection and teardown, `apply` fault tolerance, slot declarations, `priority:-1`, `insertDraft` write/dispatch, React-missing degradation, manifest consistency.

## License

[MIT](LICENSE) for the code. Visual inspiration and names belong to their respective owners.
