# 设计规格与来源

> 本文件是 `src/tokens.mjs` 的「为什么」。

## 0. 最重要的一条：本版色值是推导，不是实测

| 项 | 状态 |
| --- | --- |
| Kimi 官方 CSS 设计令牌 | ❌ **未取得** |
| 本插件色值 | ⚠️ **视觉归纳（推导）** |
| DSH 侧 `--dsw-*` 令牌名 | ✅ 实测（本机 `app.asar` 字符串扫描 + 官方包源码） |
| DSH 侧 `data-*` 锚点 | ✅ 实测（同上） |

**为什么拿不到**：Kimi Web 为 JS 渲染，页面首屏 HTML 不含设计令牌；CSS bundle
为按需加载且带反爬策略，多次尝试未能稳定抓取到含完整自定义属性的样式表。

**这意味着什么**：本皮肤的配色可以作为「Kimi 风格」使用，但**不应被当作
Kimi 官方色值引用**。同系列的 [`dsh-doubao-ui`](https://github.com/JAKE1266/dsh-doubao-ui)
是从豆包官方 CSS bundle 读到的实测令牌，两者在可信度上不同，README 与
`src/tokens.mjs` 顶部注释都如实标注了这一点。

拿到实测值后的更新路径：替换 `LIGHT` / `DARK` 中的品牌色与中性阶 → 跑
`node scripts/build.mjs && node test/run-all.mjs` → 在 CHANGELOG 标注「实测」。

## 1. 视觉语言（推导）

| 维度 | 取值 | 理由 |
| --- | --- | --- |
| 品牌主色 | `#5A5FE0` | Kimi 界面的深蓝紫，比纯蓝更有辨识度 |
| 品牌渐变 | `linear-gradient(135deg, #7B8CFF 0%, #5A5FE0 55%, #3D3FA8 100%)` | 品牌面与按钮的渐变方向 |
| 暗色主色 | `#7B8CFF` | 深色底上提亮，保证对比度 |
| 中性面 | 冷蓝灰（`#F5F7FD` 系 / `#15172A` 系） | Kimi 是冷调，不是暖调 |
| 深色底 | `#0E1020` / 层 `#15172A`、`#1A1D33`、`#22263F` | 带蓝紫倾向，非中性黑 |
| 玻璃质感 | `blur(20px) saturate(160%)` | 菜单/对话框/胶囊的半透明叠层 |
| 气泡圆角 | 16px | 比豆包更圆 |
| 输入卡圆角 | 24px | Kimi 的显著大圆角 |
| 胶囊 | 9999px | 全圆角药丸 |

## 2. DSH 令牌映射（实测键名 + 推导值）

两套系统语义不同，映射是设计判断；右侧色值本身为推导：

| DSH alias | 本插件值（light） | 说明 |
| --- | --- | --- |
| `--dsw-alias-brand-primary` | `#5A5FE0` | 品牌主色 |
| `--dsw-alias-button-primary-fill` / `-hover` | `#5A5FE0` / `#4A4FC8` | 主按钮 |
| `--dsw-alias-bg-base` / `bg-l1` / `bg-layer-1` | `#FFFFFF` | 页面底 |
| `--dsw-alias-bg-l2` / `bg-layer-2` | `#F5F7FD` | 二级面 |
| `--dsw-alias-bg-layer-3` / `-4` | `#EEF1F9` / `#E3E8F4` | 三级/四级面 |
| `--dsw-alias-border-l1..l4` | `.05/.09/.12/.16` | 边框阶梯 |
| `--dsw-alias-label-primary` | `#14162E` | 主文字 |
| `--dsw-alias-label-secondary` / `-tertiary` | `.64` / `.48` | 文字层级 |
| `--dsw-alias-interactive-bg-hover` | `rgba(20,22,46,.045)` | hover |
| `--dsw-alias-interactive-bg-active` | `rgba(90,95,224,.1)` | 选中 |
| `--dsw-specific-sidebar-fill` | `#F5F7FD` / 暗 `#12142A` | 侧栏 |
| `--dsw-specific-bubble` | `rgba(90,95,224,.08)` / 暗 `.14` | 用户气泡 |
| `--dsw-menu-backdrop-filter` | `blur(20px) saturate(160%)` | 玻璃浮层 |
| `--dsw-radius-full` | `9999px` | 胶囊 |
| `--dsw-focus-ring-color` | `#5A5FE0` / 暗 `#7B8CFF` | 焦点环 |

## 3. 组件层插槽依据（实测）

全部插槽名来自本机 `app.asar` 抽取出的官方包源码：

| 插槽 | 证据 |
| --- | --- |
| `sidebar.brand.mark` / `sidebar.brand.name` | `@deepseek-ai/dsh-client-ui-sidebar/lib/client.js:737-744` 的 `children` 声明；渲染处 `:394/:438/:446` 调 `renderSlot("sidebar.brand.mark", {size:24}, {fallback: FishLogo})` |
| 覆盖方式 | `@deepseek-ai/dsh-client-ui-brand-official/lib/client.js:35-40`：`slots.inject("sidebar.brand.mark", () => slots.inject("sidebar.brand.name", function*(){ yield slots.register(...) }))` |
| `conversation.hero.brand.mark` | `@deepseek-ai/dsh-client-ui-conversation/lib/client.js:20450`：`renderSlot("conversation.hero.brand.mark", {size:34, className}, {fallback: HeroFish})` |
| `conversation.hero.options` | 同上 `:20552` / `:22820-22832` 的 `children` 声明 |
| `settings.section` | `@deepseek-ai/dsh-client-ui-theme/lib/client.js:2336` 同族；社区插件均用此插槽 |

`priority:-1`：单个插槽渲染最低优先级的 entry，官方品牌插件默认优先级 0，
因此 -1 可以盖掉它。

## 4. 图标合规

`src/artwork.mjs` 的 `MARK_SVG` 是本项目原创绘制的「月牙 + 两点星芒」，
呼应 Kimi 母公司「月之暗面（Moonshot）」的月意象，但形状、构图、渐变方向
均为自创，**不是任何 logo 的临摹**，也未从任何客户端复制图片/图标/字体。

## 5. React 惰性绑定（防止白屏）

组件模块顶层**不**调用 `require('react')`。工厂一进入就会求值所有内联模块体；
若此时 React 种子缺失，异常会发生在调用方的 try 之外，直接带崩 Web 壳。
因此改用 `bindReact(requireFn)` 在激活时绑定，失败则整个组件层降级为空操作。
这一条由 `test/run-all.mjs` 的「React 缺失」用例守门。

同理，`client.mjs` **不使用** `module.exports = {...}`：它会让工厂开头的
`var exports = module.exports` 别名失效，后续 `exports.*` 赋值静默丢失。
构建器对此有硬性检查。

## 6. 合规与声明

- 本皮肤是 **inspired-by 再设计**，不是官方设计资产的复刻。
- 本仓库**不含**任何来自 Kimi / 夸克客户端的图片、图标、字体或其他受版权保护的素材。
- 「Kimi」「Moonshot」「DeepSeek」「DeepSeek Harness」等名称归各自权利人所有，
  此处仅用于说明视觉灵感来源与兼容性。
- 本插件与月之暗面 / Kimi、深度求索 / DeepSeek 无任何隶属、授权或背书关系。
