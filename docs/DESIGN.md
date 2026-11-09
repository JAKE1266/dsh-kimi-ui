# 设计规格与来源

> 本文件是 `src/tokens.mjs` 的「为什么」。每一行色值的出处都能在这里查到。
> 严格区分 **实测**（从 Kimi 官方 CSS 读到）与 **推导**（为适配 DSH 或缺失数据所做）。

## 0. 来源总览

| 项 | 状态 |
| --- | --- |
| Kimi 官方 CSS 令牌 | ✅ **已取得并实测** |
| 主色 / 中性面 / 文字 / 填充 / 边框 / 气泡 / 输入框几何 / 字体 / 阴影 / 玻璃 / 圆角 | ✅ 实测 |
| Kimi「品牌渐变」 | ⚠️ **不存在**，本皮肤的组合式为推导 |
| DSH 侧 `--dsw-*` 令牌名与 `data-*` 锚点 | ✅ 实测（本机 `app.asar` 扫描 + 官方包源码） |
| 部分中间态透明度、DSH 专属令牌 | ⚠️ 推导 |

### 实测来源 URL

```
https://www.kimi.com/                                    （218,616 B HTML）
https://statics.moonshot.cn/kimi-web/assets/Bd7TiIrN.css （328 KB，主令牌表 :root / :root.dark）
https://statics.moonshot.cn/kimi-web/assets/5Dx4H7G1.css （body 字体栈与底色）
```

共下载 41 个 CSS bundle（773 KB）逐项 grep。两个站均无鉴权、无反爬、无 JS 渲染依赖。

## 1. 品牌色（实测）

| Kimi 官方令牌 | 浅色 | 暗色 |
| --- | --- | --- |
| `--Colors-KMBlue` | `#1783ff` | `#1a88ff` |
| hover | `#167ff7` | `#258eff` |
| active | `#167cf2` | `#3194ff` |
| `--Colors-Purple` | `#985ffb` | `#a16bff` |
| `--Others-LinkBlue` | `#3061a0` | `#6f88aa` |

本皮肤主色 = `--Colors-KMBlue`；链接色 = `--Others-LinkBlue`（这是 Kimi 的实测链接色，
比品牌蓝更沉稳，直接沿用）。

## 2. 渐变：Kimi 没有官方品牌渐变（重要）

全量 grep 41 个 CSS + 144 个 JS 资源名 + HTML，`gradient` 在 HTML 中出现 **0 次**。
站点唯一的蓝紫渐变是**代码卡片背景**：

```css
/* 浅色 */ --code-card-bg: linear-gradient(#d6f5ff, #c1ddff, #eae9ff); opacity .8
/* 暗色 */ --code-card-bg: linear-gradient(#1a88ff, #1c82ff, #2f20ff); opacity .35
```

来源：`.code-card-layer[data-v-9572e788]`（实测）。

**本皮肤的 `--km-gradient` 是推导**：由「品牌蓝 `#1783ff` → 代码卡深紫 `#2f20ff`」组合，
用来给 hero 标记与强调面一点层次。其余渐变（输入框淡出遮罩、骨架屏微光、loading 环）
都是功能性遮罩，不用于品牌视觉。

**另外**：Kimi 的发送键/主按钮是**纯色实底**，不是渐变。所以 `STRUCTURE_CSS` 里
`[data-composer-card] button[class*="primary"]` 用的是 `var(--km-primary)` 纯色。

## 3. 背景层级（实测）

| 官方令牌 | 浅色 | 暗色 |
| --- | --- | --- |
| `--Bg-GroundPC`（页面底） | `#fbfaf9` | `#181817` |
| `--Bg-Primary` | `#fff` | `#121212` |
| `--Bg-Secondary` | `#f5f5f5` | `#1f1f1f` |
| `--Bg-Tertiary` | `#fff` | `#292929` |
| `--Bg-Quaternary` | `#fff` | `#4d4d4d` |
| `--Bg-Primary90` | `#ffffffe6` | `#121212e6` |

**关键**：Kimi 页面底是**暖白** `#fbfaf9`，不是冷灰；暗色是**中性偏暖** `#121212`/`#181817`，
不是蓝紫黑。这与豆包（冷灰）明显不同。`<meta name="theme-color" content="#fbfaf9">` 同值（实测）。

**侧栏底色 = `--Bg-GroundPC`**：实测 `.next-sidebar__footer-content[data-v-0d757fe4]{background:var(--Bg-GroundPC)}`。
「侧栏复用 GroundPC」属实测值 + 语义归属推断。

## 4. 文字 / 填充 / 边框（实测）

| 官方令牌 | 浅色 | 暗色 |
| --- | --- | --- |
| `--Labels-Primary` | `#000000e6` | `#ffffffd6` |
| `--Labels-Secondary` | `#0009` | `#ffffff8f` |
| `--Labels-Tertiary` | `#00000073` | `#ffffff6b` |
| `--Labels-Quaternary` | `#0000004d` | `#ffffff42` |
| `--Separators-S1` | `#00000021` | `#ffffff1f` |
| `--Fills-F1` | `#00000008` | `#ffffff0d` |
| `--Fills-F2` | `#0000000d` | `#ffffff1a` |
| `--Fills-F3` | `#00000026` | `#ffffff2e` |
| `--Fills-F4` | `#00000040` | `#ffffff40` |

输入框边框实测：`1px solid #0000000f`（`.chat-editor-content[data-v-dc050648]`），
hover/focus `#00000017`。

## 5. 几何（实测）

| 项 | 值 | 出处 |
| --- | --- | --- |
| 输入框圆角 | **24px** | `--chat-input-radius` |
| 输入框最大宽 | 768px | `--chat-input-max-width` |
| 输入框最小高 | 114px | `--chat-input-height` |
| 输入框阴影 | `0 5px 16px -4px #00000012` | 实测 |
| 输入框 focus 阴影 | `0 4px 12px #00000008, 0 5px 16px -4px #00000012` | 实测 |
| 气泡圆角（用户/AI） | **12px** | `.selected-item` / `.segment-content` |
| 圆角阶梯 | 8 / 12 / 16 / 20 / 24px | 频次 105/106/50/29/10 |
| 玻璃 | `backdrop-filter: blur(15px)` | 最高频 20 处 |
| 玻璃面板底 | `#ffffffe6` / 暗 `#292929e6` | `--Bg-Tertiary90` |
| 字体栈 | `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, ...` | body 规则 |
| body 字号 | 14px | 实测 |
| 阴影主档 | `0 4px 16.4px #0000001a` | 9 处 |
| 动效 | `cubic-bezier(.23,1,.32,1)` / `(.25,1,.3,1)` | 实测 |

## 6. 推导项（明确标注）

1. **品牌渐变**：Kimi 无官方品牌渐变（见 §2），`--km-gradient` 为组合式推导。
2. **字号基线 15px**：DSH 默认 14px、Kimi body 14px；取 15 略大以贴近 Kimi 阅读感，
   同时避免 16px 撑破宿主侧栏。
3. **部分中间态透明度**：如 `--dsw-alias-bg-mask-1/2/3` 的 `.2/.1/.4`，Kimi 无对应令牌。
4. **DSH 专属令牌**：`--dsw-alias-turn-trigger-*`、`--dsw-alias-onboarding-*`、
   `--dsw-alias-file-diff-*` 等 Kimi 没有的语义位，按视觉一致性取近似值。
5. **`--dsw-alias-link` 直接用 Kimi 的 `--Others-LinkBlue`**：这是实测值，但
   「DSH 的 link 该不该用 Kimi 的 link 色」是设计判断。

## 7. 组件层插槽依据（实测）

全部插槽名来自本机 `app.asar` 抽取的官方包源码：

| 插槽 | 证据 |
| --- | --- |
| `sidebar.brand.mark` / `sidebar.brand.name` | `@deepseek-ai/dsh-client-ui-sidebar/lib/client.js:737-744` 的 `children` 声明；渲染处 `:394/:438/:446` 调 `renderSlot("sidebar.brand.mark", {size:24}, {fallback: FishLogo})` |
| 覆盖方式 | `@deepseek-ai/dsh-client-ui-brand-official/lib/client.js:35-40`：`slots.inject("sidebar.brand.mark", () => slots.inject("sidebar.brand.name", function*(){ yield slots.register(...) }))` |
| `conversation.hero.brand.mark` | `@deepseek-ai/dsh-client-ui-conversation/lib/client.js:20450`：`renderSlot("conversation.hero.brand.mark", {size:34, className}, {fallback: HeroFish})` |
| `conversation.hero.options` | 同上 `:20552` / `:22820-22832` |
| `settings.section` | `@deepseek-ai/dsh-client-ui-theme/lib/client.js:2336` 同族 |

`priority:-1`：单个插槽渲染最低优先级的 entry，官方品牌插件默认优先级 0，因此 -1 可盖掉它。

## 8. 图标合规

`src/artwork.mjs` 的 `MARK_SVG` 是本项目原创绘制的「月牙 + 两点星芒」，呼应
Kimi 母公司「月之暗面（Moonshot）」的月意象，但形状、构图、渐变方向均为自创，
**不是任何 logo 的临摹**，也未从任何客户端复制图片/图标/字体。

## 9. React 惰性绑定与导出契约（防止白屏）

- 组件模块顶层**不**调用 `require('react')`：工厂一进入就会求值所有内联模块体，
  此时 React 缺失会抛在调用方 try 之外，直接带崩 Web 壳。改用 `bindReact(requireFn)`
  在激活时绑定，失败则整个组件层降级为空操作。
- `client.mjs` **不使用** `module.exports = {...}`：它会让工厂开头的
  `var exports = module.exports` 别名失效，后续 `exports.*` 赋值静默丢失。
  构建器对这两条都有硬性检查。

## 10. 合规与声明

- 本皮肤是 **inspired-by 再设计**，不是官方设计资产的复刻。
- 本仓库**不含**任何来自 Kimi 客户端的图片、图标、字体或其他受版权保护的素材。
- 「Kimi」「Moonshot」「DeepSeek」「DeepSeek Harness」等名称归各自权利人所有，
  此处仅用于说明视觉灵感来源与兼容性。
- 本插件与月之暗面 / Kimi、深度求索 / DeepSeek 无任何隶属、授权或背书关系。
