# dsh-kimi-ui

**给 [DeepSeek Harness](https://www.deepseek.com/harness/) Web 换一套 Kimi 风格皮肤。**

> 纯 CSS 令牌覆盖 + 声明式插槽注入，仓库内不含任何图片素材。

> [!IMPORTANT]
> **个人维护的非官方第三方插件。** 不是月之暗面 / Kimi 的产品，也不是 DeepSeek AI 的产品，未获任何授权或背书。「Kimi」「DeepSeek」等名称归各自权利人所有，此处仅用于说明视觉灵感来源与兼容性。
>
> 本插件**只改界面**：不碰模型、不碰会话数据、不联网、不注册工具、不读写文件。

---

## 配色来自官方 CSS 实测

**色值不是猜的。** 主色、中性面、文字层级、填充、边框、气泡、输入框几何、字体栈、阴影、玻璃参数、圆角阶梯，全部来自 Kimi 官方 CSS bundle 的 `:root` / `:root.dark` 令牌表：

```
https://statics.moonshot.cn/kimi-web/assets/Bd7TiIrN.css   (328 KB, 主令牌表)
https://statics.moonshot.cn/kimi-web/assets/5Dx4H7G1.css   (body 字体与底色)
```

| Kimi 官方令牌 | 浅色 | 暗色 |
| --- | --- | --- |
| `--Colors-KMBlue`（品牌） | `#1783ff` | `#1a88ff` |
| `--Bg-GroundPC`（页面底） | `#fbfaf9`（暖白） | `#181817` |
| `--Bg-Primary` / `--Bg-Secondary` | `#fff` / `#f5f5f5` | `#121212` / `#1f1f1f` |
| `--Labels-Primary` | `#000000e6` | `#ffffffd6` |
| `--Fills-F1`（气泡底） | `#00000008` | `#ffffff0d` |
| `--chat-input-radius` | **24px** | 同 |
| 气泡圆角 | **12px** | 同 |
| 玻璃 | `blur(15px)` | 同 |

**唯一需要说明的推导项**：Kimi 站点**没有**官方「品牌渐变」变量（全量 grep 41 个 CSS 后确认，`gradient` 在 HTML 中出现 0 次）。本皮肤的 `--km-gradient` 由「品牌蓝 → 代码卡片深紫 `#2f20ff`」组合而成，属推导。其余推导项（字号基线、部分中间态透明度）在 [`docs/DESIGN.md`](docs/DESIGN.md) §6 逐条列出。

---

## 它做什么

### 第一层 · 皮肤（纯 CSS 令牌覆盖）

| 方面 | 皮肤做了什么 |
| --- | --- |
| **配色** | Kimi 品牌蓝 `#1783ff` + 暖白/中性面，覆盖 DSH 全部 `--dsw-alias-*` / `--dsw-static-*` / `--dsw-specific-*` 语义令牌 |
| **明暗主题** | 跟随宿主（`body[data-ds-dark-theme]`）；暗色是 Kimi 的**中性偏暖** `#121212`/`#181817`，不是蓝紫黑 |
| **玻璃质感** | 菜单、对话框、快捷胶囊带 `backdrop-filter: blur(15px)`（Kimi 最高频参数，20 处） |
| **几何** | 气泡 12px、输入卡 **24px**、面板 24px、胶囊 9999px —— 全部实测 |
| **输入框** | 24px 大圆角 + `0 5px 16px -4px #00000012` 阴影 + focus 柔光环 |
| **排版** | Kimi 官方字体栈、15px 字号基线、代码块统一圆角 |
| **可访问性** | 尊重 `prefers-reduced-motion`；不破坏 DSH 的「仅键盘显示焦点环」逻辑 |

### 第二层 · 组件（声明式 React 插槽）

| 插槽 | 贡献 |
| --- | --- |
| `sidebar.brand.mark` / `sidebar.brand.name` | 自创月牙标记 + 「Kimi」名称（`priority:-1` 盖掉官方品牌占位） |
| `conversation.hero.brand.mark` | 新会话首页大号标记 |
| `conversation.hero.options` | 4 个快捷胶囊：`AI 搜索 / 长文阅读 / 帮我写作 / 翻译` |
| `settings.section` | 「关于」页：能力边界、来源声明、回滚方式 |

> 图标是**本项目原创绘制的内联 SVG**（月牙 + 星点），呼应「月之暗面」意象但构图自创，**没有复制任何厂商素材**。

---

## 为什么主体是「CSS 变量覆盖」

DSH Web 的整站视觉由 `--dsw-alias-*` 变量在 `body` 上驱动。在变量层替换，就能在不触碰任何业务组件的前提下换掉全站外观：

- **零依赖**：没有构建框架、没有运行时依赖，`npm install` 都不需要（`dsh.client.inject` 里那几个包名只是**模块图装载顺序前置声明**；React 由宿主种子模块提供）。
- **升级友好**：不依赖宿主的 CSS Module 哈希类名，所有选择器走 `:root` / `body` / 实测 `data-*` 锚点。
- **停用即恢复**：样式与组件注册都由 `ctx.effect` 管理生命周期。
- **不会白屏**：加载器不隔离 entry 工厂。本插件所有初始化都包在 try 里；组件层连模块顶层都不 `require('react')`（惰性绑定），React 缺失时整体降级为纯 CSS 皮肤。

选择器特异性：官方主题插件用 `body` / `body[data-ds-dark-theme]` / `html[data-platform=darwin] body` 三档下发调色板，这里用 `:root:root` 前缀把亮/暗抬到 `(0,2,1)` / `(0,3,1)`，确定性胜出。

---

## 安装

```bash
# 从 GitHub（client/client.js 已提交，无 prepare 脚本，安装不编译）
dsh plugin --profile desktop add github:JAKE1266/dsh-kimi-ui

# 从本地源码
git clone https://github.com/JAKE1266/dsh-kimi-ui.git
cd dsh-kimi-ui
node scripts/build.mjs && node test/run-all.mjs
dsh plugin --profile desktop add link:<本目录绝对路径>
```

把 `desktop` 换成实际运行 DSH Web 的 profile 名。

### 生效

1. **重启 DSH Web**。
2. 硬刷新浏览器（`Ctrl+Shift+R`）。
3. DevTools 里 `<html>` 应出现 `data-dsh-kimi-skin="1.1.0"`，`<head>` 里有两张样式表：
   `.../skin.css"` 与 `.../components.css"`。

### 停用 / 卸载

```bash
dsh plugin --profile desktop disable dsh-kimi-ui
dsh plugin --profile desktop remove dsh-kimi-ui
```

---

## ⚠️ 与其他皮肤互斥

**同时只能启用一个全站换肤插件。** 本插件与 `dsh-doubao-ui`、`dsh-zcode-ui`、`dsh-wechat-ui` 都覆盖同一批 `--dsw-*` 令牌，同时启用会互相覆盖（后加载者胜出，通常表现为混色）。

```bash
dsh plugin --profile desktop disable dsh-doubao-ui   # 先停用旧的，再启用新的
```

---

## 改颜色 / 改组件

| 想改什么 | 改哪里 |
| --- | --- |
| 品牌主色与渐变 | `LIGHT/DARK['--dsw-alias-brand-primary']` 及 `--km-*` 私有变量 |
| 页面/侧栏/卡片底色 | `--dsw-alias-bg-*` |
| 圆角 / 阴影 / 字号 | `STRUCTURAL` |
| 输入框与胶囊形态、玻璃参数 | `STRUCTURE_CSS` |
| 快捷入口文案与预置提示词 | `QUICK_ACTIONS` |
| 品牌图标 | `src/artwork.mjs` 的 `MARK_SVG` |
| 组件样式 | `COMPONENT_CSS` |

改完必须重建（产物随仓库提交）：

```bash
node scripts/build.mjs && node test/run-all.mjs
```

> 测试会强制校验**亮/暗两套令牌的键集合完全一致**（205 个），以及 **React 缺失时组件层能整体降级** —— 后者是防止白屏最关键的一道闸。

---

## 验证

```bash
node test/run-all.mjs
```

零依赖自包含套件，**18 项检查**：产物语法与工厂契约、4 模块内联、双主题 CSS、亮/暗键集合一致性、样式幂等与回收、`apply` 容错、组件层插槽声明、`priority:-1`、`insertDraft` 写入与派发、React 缺失降级、manifest 自洽。

---

## 目录

```
client/client.js      构建产物（安装时真正被加载的文件）
src/tokens.mjs        全部设计令牌
src/client.mjs        浏览器半：样式注入、表面标记、组件接线、容错降级
src/components.mjs    React 组件层：品牌 / 快捷入口 / 关于页 / 组件 CSS
src/artwork.mjs       原创内联 SVG 标记
lib/index.mjs         Host 半：空的 Loader 座位
scripts/build.mjs     零依赖多模块打包器
test/run-all.mjs      零依赖验证套件
cordis.patch.yml      profile bundle 挂载声明
docs/DESIGN.md        设计令牌映射与来源（实测 / 推导逐条标注）
.github/workflows/    CI
```

## License

[MIT](LICENSE) — 代码部分。设计灵感与名称归各自权利人所有。
