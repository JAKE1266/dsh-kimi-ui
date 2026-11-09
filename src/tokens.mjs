/**
 * dsh-kimi-ui — Kimi 风格主题令牌
 *
 * 这一层是皮肤的全部「设计值」。DSH Web 的所有官方区域（标题栏、侧栏、会话列、
 * 按钮、菜单、输入框、气泡、代码块）都只消费 `--dsw-alias-*` / `--dsw-static-*`
 * 变量。在变量层替换，等于在不触碰任何业务组件的前提下换掉全站外观。
 *
 * 明暗判定：DSH 用 `body[data-ds-dark-theme]` 表达暗色（从已安装运行的
 * dsh-doubao-ui / dsh-zcode-ui 源码确认）。选择器用 `:root:root` 前缀把
 * 亮/暗分别抬到 (0,2,1)/(0,3,1)，确定性胜出，不依赖样式表加载顺序。
 *
 * ── 色值来源（实测 / 推导，逐项标注）──────────────────────────────────
 * 【实测】主色、中性面、文字层级、填充、边框、气泡、输入框几何、字体栈、
 *   阴影、玻璃参数、圆角阶梯，全部来自 Kimi 官方 CSS bundle 的 `:root` /
 *   `:root.dark` 令牌表：
 *     https://statics.moonshot.cn/kimi-web/assets/Bd7TiIrN.css（328 KB，主令牌表）
 *     https://statics.moonshot.cn/kimi-web/assets/5Dx4H7G1.css（body 字体与底色）
 *   对应官方令牌名：
 *     --Colors-KMBlue              #1783ff / 暗 #1a88ff
 *     --Colors-Purple              #985ffb / 暗 #a16bff
 *     --Bg-GroundPC                #fbfaf9 / 暗 #181817   ← 页面底 + 侧栏底
 *     --Bg-Primary/Secondary/Tertiary/Quaternary
 *     --Labels-Primary/Secondary/Tertiary/Quaternary
 *     --Separators-S1  --Fills-F1..F4
 *     --Others-BubbleBlue / --Others-BubbleGray_PC
 *     --chat-input-radius 24px / --chat-input-max-width 768px
 *   几何实测：气泡 12px、输入框 24px、圆角阶梯 8/12/16/20/24px、
 *     玻璃 blur(15px)（最高频，20 处）、字体栈与 body 字号 14px。
 *
 * 【推导】以下为按 DSH 语义做的适配，不是 Kimi 实测值：
 *   - Kimi **没有**官方「品牌渐变」变量。站点唯一的蓝紫渐变是代码卡片背景
 *     （浅 #d6f5ff→#c1ddff→#eae9ff / 暗 #1a88ff→#1c82ff→#2f20ff）。
 *     本皮肤的 --km-gradient 由「品牌蓝 → 代码卡深紫」组合而成，标为推导。
 *   - 字号基线取 15px（DSH 默认 14px、Kimi body 14px；取 15 避免过小）。
 *   - 部分中间态透明度、DSH 专属令牌（无 Kimi 对应物）按视觉一致性推导。
 *   - 「侧栏底 = --Bg-GroundPC」属实测值 + 语义归属推断。
 *
 * 【声明】本皮肤是 inspired-by 再设计，不是官方资产的复刻；本仓库不含任何
 *   来自 Kimi 客户端的图片、图标或字体。商标与名称归各自权利人所有，
 *   本插件与月之暗面 / Kimi、DeepSeek 无任何隶属或背书关系。
 */

/** 皮肤版本：改动令牌口径时递增，便于排查浏览器里挂着的旧样式。 */
export const SKIN_VERSION = '1.1.0'

/** 标记属性，注入到 <html> 上，便于在 DevTools 里确认皮肤已激活。 */
export const SKIN_ATTRIBUTE = 'data-dsh-kimi-skin'

/** 样式标签的稳定标识（去重 + 卸载时回收）。 */
export const STYLE_TAG_ID = 'dsh-kimi-ui/skin.css'

/** 亮色令牌选择器：特异性 (0,2,1)。 */
export const LIGHT_SELECTOR = ':root:root body'

/** 暗色令牌选择器：特异性 (0,3,1)。 */
export const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

/**
 * 与主题无关的几何/排版令牌 —— 全部为 Kimi 官方 CSS 实测值。
 *
 * 圆角阶梯实测频次：12px(106) / 8px(105) / 10px(85) / 16px(50) / 4px(41) /
 * 6px(36) / 20px(29) / 24px(10) / 100px(7)。
 * 输入框 24px、气泡 12px、玻璃 blur(15px)。
 */
export const STRUCTURAL = Object.freeze({
  '--dsw-radius-xs': '4px',
  '--dsw-radius-sm': '8px',
  '--dsw-radius-md': '12px',
  '--dsw-radius-lg': '16px',
  '--dsw-radius-xl': '20px',
  '--dsw-radius-panel': '24px',
  '--dsw-radius-2xl': '24px',
  '--dsw-radius-full': '9999px',
  '--dsw-shadow-lv1': '0 1px 2px rgba(0, 0, 0, 0.05)',
  '--dsw-shadow-lv1-blur': '0 4px 10px rgba(0, 0, 0, 0.1)',
  '--dsw-shadow-lv2': '0 4px 16.4px rgba(0, 0, 0, 0.1)',
  '--dsw-shadow-lv3': '0 4px 16px rgba(0, 0, 0, 0.1)',
  '--dsw-elevation-soft': '0 1px 2px rgba(0, 0, 0, 0.05)',
  '--dsw-elevation-panel': '0 4px 16.4px rgba(0, 0, 0, 0.1)',
  '--dsw-elevation-prominent': '0 4px 16px rgba(0, 0, 0, 0.1)',
  '--dsw-elevation-stroke-color': 'rgba(0, 0, 0, 0.13)',
  '--dsw-corner-shape': '12px',
  // 官方字体栈（实测 body 规则）
  '--dsw-font-family':
    '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, Arial, "PingFang SC", "Source Han Sans SC", "Microsoft YaHei UI", "Microsoft YaHei", "Noto Sans CJK SC"',
  '--dsh-font-family-code-default': '"Geist Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
  // 字号基线 15px（推导）：DSH 默认 14px，Kimi body 14px，取 15 略大以贴近 Kimi 阅读感。
  '--dsw-font-size-base': '15px',
  '--dsw-font-size-display': 'calc(var(--dsw-font-size-base) + 20px)',
  '--dsw-font-size-headline': 'calc(var(--dsw-font-size-base) + 8px)',
  '--dsw-font-size-title': 'calc(var(--dsw-font-size-base) + 6px)',
  '--dsw-font-size-xl': 'calc(var(--dsw-font-size-base) + 4px)',
  '--dsw-font-size-lg': 'calc(var(--dsw-font-size-base) + 2px)',
  '--dsw-font-size-caption': 'calc(var(--dsw-font-size-base) - 1px)',
  '--dsw-font-size-sm': 'calc(var(--dsw-font-size-base) - 2px)',
  '--dsw-font-size-xs': 'calc(var(--dsw-font-size-base) - 4px)',
  '--dsw-font-size-2xs': 'calc(var(--dsw-font-size-base) - 5px)',
  '--dsh-scrollbar-width': '8px',
  '--dsh-scrollbar-thumb-border': '2px',
  '--dsw-focus-ring-width': '2px',
  // Kimi 私有语义变量：供 STRUCTURE_CSS 与组件层消费。
  '--km-primary': '#1783ff',
  '--km-primary-hover': '#167ff7',
  '--km-primary-active': '#167cf2',
  '--km-primary-soft': 'rgba(23, 131, 255, 0.08)',
  '--km-primary-border': 'rgba(23, 131, 255, 0.3)',
  // 推导：Kimi 无官方品牌渐变；这里由「品牌蓝 → 代码卡深紫」组合。
  '--km-gradient': 'linear-gradient(135deg, #1783ff 0%, #2f20ff 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #1783ff 0%, #167cf2 100%)',
  '--km-user-bubble': 'rgba(0, 0, 0, 0.03)',
  '--km-glass-blur': 'blur(15px)',
  '--km-glass-fill': 'rgba(255, 255, 255, 0.9)',
  '--km-composer-radius': '24px',
  '--km-composer-shadow': '0 5px 16px -4px rgba(0, 0, 0, 0.07)',
  '--km-content-max-width': '768px',
  '--km-ease': 'cubic-bezier(.25, 1, .3, 1)',
  '--km-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.2s',
})

/**
 * 亮色色板 —— 官方 `:root` 实测值。
 * 键集合必须与 DARK 完全一致 —— test/run-all.mjs 会强制校验。
 */
export const LIGHT = Object.freeze({
  // ── 静态中性阶梯（Kimi 是暖白，不是冷灰） ──
  '--dsw-static-neutral-bluish-950': '#FFFFFF',
  '--dsw-static-neutral-bluish-875': '#FBFCFD',
  '--dsw-static-neutral-bluish-850': '#FAFAF9',
  '--dsw-static-neutral-bluish-800': '#F5F5F5',
  '--dsw-static-neutral-bluish-750': '#EDEDED',
  '--dsw-static-neutral-bluish-700': '#DEDEDE',
  '--dsw-static-neutral-bluish-600': '#C2C2C2',
  '--dsw-static-neutral-bluish-500': '#9E9E9E',
  '--dsw-static-neutral-bluish-400': '#757575',
  '--dsw-static-neutral-bluish-300': '#565656',
  '--dsw-static-neutral-bluish-200': '#333333',
  '--dsw-static-neutral-bluish-150': '#EDEDED',
  '--dsw-static-neutral-bluish-100': '#DEDEDE',
  '--dsw-static-neutral-bluish-75': '#F5F5F5',
  '--dsw-static-neutral-bluish-60': '#F5F5F5',
  '--dsw-static-neutral-bluish-50': '#FAFAF9',
  '--dsw-static-neutral-bluish-00': '#000000',
  '--dsw-static-neutral-bluish-1000': '#000000',

  // ── 背景（--Bg-* 实测） ──
  // 页面底 = --Bg-GroundPC #fbfaf9（暖白），侧栏同色。
  '--dsw-alias-bg-base': '#FBFAF9',
  '--dsw-alias-bg-layer-1': '#FFFFFF',
  '--dsw-alias-bg-layer-2': '#F5F5F5',
  '--dsw-alias-bg-layer-3': '#FFFFFF',
  '--dsw-alias-bg-layer-4': '#F5F5F5',
  '--dsw-alias-bg-overlay': '#FFFFFF',
  '--dsw-alias-bg-module-platform': '#F5F5F5',
  '--dsw-alias-bg-multi-select': 'rgba(23, 131, 255, 0.1)',
  '--dsw-alias-bg-l1': '#FFFFFF',
  '--dsw-alias-bg-l2': '#F5F5F5',
  '--dsw-alias-background-secondary': '#F5F5F5',
  '--dsw-alias-bg-document-preview': '#FBFCFD',
  '--dsw-alias-bg-document-selection': 'rgba(23, 131, 255, 0.24)',
  '--dsw-alias-bg-skeleton': 'rgba(0, 0, 0, 0.03)',
  '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.2)',
  '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.1)',
  '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.4)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
  '--dsw-alias-bg-mask-drop': 'rgba(255, 255, 255, 0.72)',

  // ── 边框（--Separators-S1 #00000021 实测） ──
  '--dsw-alias-border-l1': '#0000000F',
  '--dsw-alias-border-l2': '#00000021',
  '--dsw-alias-border-subtle': '#00000021',
  '--dsw-alias-border-l2-darkmode-thin': '#00000017',
  '--dsw-alias-border-l3': '#00000026',
  '--dsw-alias-border-l4': '#00000040',
  '--dsw-alias-border-inverted': '#00000008',
  '--dsw-alias-border-inverted2': '#00000021',
  '--dsw-alias-separator-primary': '#00000021',

  // ── 文字（--Labels-* 实测） ──
  '--dsw-alias-label-primary': '#000000E6',
  '--dsw-alias-label-primary-foreground': '#FFFFFF',
  '--dsw-alias-label-primary-inverted': '#FFFFFF',
  '--dsw-alias-label-primary-dimmed': 'rgba(0, 0, 0, 0.6)',
  '--dsw-alias-label-primary-bluish': '#1783FF',
  '--dsw-alias-label-secondary': '#00000099',
  '--dsw-alias-label-tertiary': '#00000073',
  '--dsw-alias-label-caption': '#0000004D',
  '--dsw-alias-label-dimmed': '#0000004D',
  '--dsw-alias-label-quaternary': '#0000004D',
  '--dsw-alias-label-error': '#E5484D',
  '--dsw-alias-label-shimmer': 'rgba(0, 0, 0, 0.28)',
  '--dsw-alias-label-document-preview': '#565656',
  '--dsw-alias-menu-icon': '#00000099',

  // ── 品牌 / 主色（--Colors-KMBlue #1783ff 实测） ──
  '--dsw-alias-brand-primary': '#1783FF',
  '--dsw-alias-brand-primary-invert': '#FFFFFF',
  '--dsw-alias-brand-text': '#1783FF',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#1783FF',
  '--dsw-alias-state-business-primary': '#1783FF',
  '--dsw-alias-state-business-tertiary': 'rgba(23, 131, 255, 0.08)',
  '--dsw-alias-button-primary-fill': '#1783FF',
  '--dsw-alias-button-primary-hover': '#167FF7',
  '--dsw-alias-button-primary-dimmed': 'rgba(23, 131, 255, 0.3)',
  '--dsw-alias-button-contrast-fill': '#000000E6',
  '--dsw-alias-button-elevated-fill': '#FFFFFF',
  '--dsw-alias-button-floating-fill': '#FFFFFF',
  '--dsw-alias-button-floating-hover': '#F5F5F5',
  '--dsw-alias-button-ghost-active-fill': '#00000008',
  '--dsw-alias-button-ghost-active-hover': '#0000000D',
  '--dsw-alias-button-ghost-active-border': 'rgba(23, 131, 255, 0.3)',
  '--dsw-alias-button-info-fill': '#1783FF',
  '--dsw-alias-button-info-hover': '#167FF7',
  '--dsw-alias-button-tool-bar-fill': 'rgba(86, 86, 86, 0.45)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(51, 51, 51, 0.32)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(86, 86, 86, 0.6)',

  // ── 交互态（--Fills-F1..F4 实测） ──
  '--dsw-alias-interactive-bg-hover': '#00000008',
  '--dsw-alias-interactive-bg-hover-solid': '#F5F5F5',
  '--dsw-alias-interactive-bg-active': '#0000000D',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(23, 131, 255, 0.08)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(229, 72, 77, 0.06)',
  '--dsw-alias-fill-l1': '#00000008',
  '--dsw-alias-fill-l2': '#0000000D',
  '--dsw-alias-fill-tertiary': '#00000026',
  '--dsw-alias-fill-tsp-secondary': '#00000008',

  // ── 状态色 ──
  '--dsw-static-green-500': '#2E9E5B',
  '--dsw-static-green-400': '#2E9E5B',
  '--dsw-static-green-100': 'rgba(46, 158, 91, 0.12)',
  '--dsw-static-green-900': 'rgba(46, 158, 91, 0.12)',
  '--dsw-static-green-500-a08': 'rgba(46, 158, 91, 0.08)',
  '--dsw-static-green-500-a12': 'rgba(46, 158, 91, 0.12)',
  '--dsw-static-red-600': '#E5484D',
  '--dsw-static-red-500': '#E5484D',
  '--dsw-static-red-400': '#E5484D',
  '--dsw-static-red-100': 'rgba(229, 72, 77, 0.12)',
  '--dsw-static-red-900': 'rgba(229, 72, 77, 0.12)',
  '--dsw-static-red-400-a12': 'rgba(229, 72, 77, 0.12)',
  '--dsw-static-red-600-a08': 'rgba(229, 72, 77, 0.08)',
  '--dsw-static-amber-500': '#D9820B',
  '--dsw-static-amber-400': '#D9820B',
  '--dsw-static-amber-600': '#D9820B',
  '--dsw-static-amber-100': 'rgba(217, 130, 11, 0.12)',
  '--dsw-static-amber-900': 'rgba(217, 130, 11, 0.12)',
  '--dsw-alias-state-success-primary': '#2E9E5B',
  '--dsw-alias-state-success-secondary': '#2E9E5B',
  '--dsw-alias-state-success-tertiary': 'rgba(46, 158, 91, 0.12)',
  '--dsw-alias-state-error-primary': '#E5484D',
  '--dsw-alias-state-error-secondary': '#E5484D',
  '--dsw-alias-state-warn-primary': '#D9820B',
  '--dsw-alias-state-warning-primary': '#D9820B',
  '--dsw-alias-state-warn-secondary': '#D9820B',
  '--dsw-alias-state-warn-label': '#D9820B',
  '--dsw-alias-state-warn-tertiary': 'rgba(217, 130, 11, 0.12)',
  '--dsw-alias-state-idle-primary': '#9E9E9E',

  // ── 蓝 / 链接（统一为 Kimi 品牌蓝） ──
  '--dsw-static-deepseek-500': '#1783FF',
  '--dsw-static-deepseek-450': '#1783FF',
  '--dsw-static-deepseek-400': '#1783FF',
  '--dsw-static-deepseek-600': '#167FF7',
  '--dsw-static-deepseek-800': 'rgba(23, 131, 255, 0.16)',
  '--dsw-static-deepseek-100': 'rgba(23, 131, 255, 0.08)',
  '--dsw-static-deepseek-50': 'rgba(23, 131, 255, 0.05)',
  '--dsw-static-deepseek-200': 'rgba(23, 131, 255, 0.14)',
  '--dsw-static-deepseek-300': 'rgba(23, 131, 255, 0.22)',
  // --Others-LinkBlue #3061a0 实测
  '--dsw-alias-link': '#3061A0',
  '--dsw-alias-label-deep-diving': '#1783FF',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(23, 131, 255, 0.3)',
  '--dsw-static-blue-500': '#1783FF',
  '--dsw-static-blue-450': '#1783FF',
  '--dsw-static-blue-400': '#4DA0FF',
  '--dsw-static-blue-300': '#80BBFF',
  '--dsw-static-blue-100': 'rgba(23, 131, 255, 0.1)',

  // ── Markdown / 代码 ──
  '--dsw-alias-markdown-code-block': '#F5F5F5',
  '--dsw-alias-markdown-code-block-banner': '#EDEDED',
  '--dsw-alias-markdown-inline-code': 'rgba(0, 0, 0, 0.05)',
  '--dsw-alias-markdown-code-editor-bg': '#121212',
  '--dsw-alias-markdown-code-editor-fg': '#EDEDED',
  '--dsw-alias-markdown-tag': '#EDEDED',
  '--dsw-alias-markdown-citation': '#F5F5F5',
  '--dsw-alias-markdown-placeholder': '#FBFCFD',
  '--dsw-alias-markdown-code-segment-selected': '#FFFFFF',
  '--dsw-alias-markdown-code-segment-unselected': '#F5F5F5',
  '--dsw-alias-turn-trigger-bg': '#F5F5F5',
  '--dsw-alias-turn-trigger-bg-hover': '#00000008',
  '--dsw-alias-code-diff-added': 'rgba(46, 158, 91, 0.08)',
  '--dsw-alias-code-diff-deleted': 'rgba(229, 72, 77, 0.08)',
  '--dsw-alias-file-diff-added-bg': '#EAF7EF',
  '--dsw-alias-file-diff-added-gutter': '#F3FAF6',
  '--dsw-alias-file-diff-added-marker': '#2E9E5B',
  '--dsw-alias-file-diff-deleted-bg': '#FBEEEE',
  '--dsw-alias-file-diff-deleted-gutter': '#FDF5F5',
  '--dsw-alias-file-diff-deleted-marker': '#E5484D',

  // ── 滚动条 / 浮层 / 表单 ──
  '--dsw-alias-scrollbar-bg-l1': 'rgba(0, 0, 0, 0.1)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(0, 0, 0, 0.1)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(0, 0, 0, 0.3)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(0, 0, 0, 0.3)',
  '--dsw-alias-toast-bg': '#FFFFFF',
  '--dsw-alias-toast-label': '#000000E6',
  '--dsw-alias-tooltip-bg': '#000000E6',
  '--dsw-alias-tooltip-label': '#FFFFFF',
  '--dsw-alias-tooltip-key-bg': '#333333',
  '--dsw-alias-menu-group-header-fill': 'rgba(250, 250, 249, 0.94)',
  '--dsw-alias-switch-thumb': '#FFFFFF',
  '--dsw-alias-settings-card-fill': '#FFFFFF',
  '--dsw-alias-settings-card-stroke': '#00000021',
  '--dsw-alias-onboarding-accent': '#1783FF',
  '--dsw-alias-onboarding-card-fill': '#FFFFFF',
  '--dsw-alias-onboarding-secondary-fill': '#F5F5F5',
  '--dsw-alias-onboarding-checkbox-border': '#00000026',
  '--dsw-focus-ring-color': '#1783FF',
  '--dsw-alias-icon-blue': '#1783FF',

  // ── 特定表面 ──
  // 侧栏底 = --Bg-GroundPC（实测值 + 语义归属推断）
  '--dsw-specific-sidebar-fill': '#FBFAF9',
  '--dsw-specific-sidebar-nav-item-active': '#0000000D',
  '--dsw-specific-sidebar-nav-item-active-accent': '#1783FF',
  // 用户气泡 = --Fills-F1 #00000008（实测）
  '--dsw-specific-bubble': '#00000008',
  '--dsw-specific-bubble-highlight': '#0000000D',
  '--dsw-specific-input-major': '#FFFFFF',
  '--dsw-specific-login-input': '#FFFFFF',
  '--dsw-specific-selector': '#1783FF',
  '--dsw-specific-tip': '#F5F5F5',
  '--dsw-specific-menu-item-hover': '#F5F5F5',
  '--dsw-specific-menu': '#FFFFFF',
  '--dsw-menu-surface-fill': '#FFFFFFE6',
  '--dsw-menu-backdrop-filter': 'blur(15px)',

  // ── Kimi 私有：亮色（键集合必须与 DARK 完全一致） ──
  '--km-primary': '#1783FF',
  '--km-primary-hover': '#167FF7',
  '--km-primary-active': '#167CF2',
  '--km-primary-soft': 'rgba(23, 131, 255, 0.08)',
  '--km-primary-border': 'rgba(23, 131, 255, 0.3)',
  '--km-gradient': 'linear-gradient(135deg, #1783ff 0%, #2f20ff 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #1783ff 0%, #167cf2 100%)',
  '--km-user-bubble': '#00000008',
  '--km-glass-blur': 'blur(15px)',
  '--km-glass-fill': '#FFFFFFE6',
  '--km-composer-radius': '24px',
  '--km-composer-shadow': '0 5px 16px -4px rgba(0, 0, 0, 0.07)',
  '--km-content-max-width': '768px',
  '--km-ease': 'cubic-bezier(.25, 1, .3, 1)',
  '--km-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.2s',
})

/**
 * 暗色色板 —— 官方 `:root.dark` 实测值。
 * Kimi 暗色是**中性偏暖**（#121212 / #181817），不是蓝紫黑。
 */
export const DARK = Object.freeze({
  '--dsw-static-neutral-bluish-950': '#181817',
  '--dsw-static-neutral-bluish-875': '#1F1F1F',
  '--dsw-static-neutral-bluish-850': '#1F1F1F',
  '--dsw-static-neutral-bluish-800': '#292929',
  '--dsw-static-neutral-bluish-750': '#333333',
  '--dsw-static-neutral-bluish-700': '#4D4D4D',
  '--dsw-static-neutral-bluish-600': '#5C5C5C',
  '--dsw-static-neutral-bluish-500': '#767676',
  '--dsw-static-neutral-bluish-400': '#9E9E9E',
  '--dsw-static-neutral-bluish-300': '#C2C2C2',
  '--dsw-static-neutral-bluish-200': '#DEDEDE',
  '--dsw-static-neutral-bluish-150': '#333333',
  '--dsw-static-neutral-bluish-100': '#4D4D4D',
  '--dsw-static-neutral-bluish-75': '#292929',
  '--dsw-static-neutral-bluish-60': '#292929',
  '--dsw-static-neutral-bluish-50': '#FFFFFF',
  '--dsw-static-neutral-bluish-00': '#000000',
  '--dsw-static-neutral-bluish-1000': '#0A0A0A',

  '--dsw-alias-bg-base': '#181817',
  '--dsw-alias-bg-layer-1': '#121212',
  '--dsw-alias-bg-layer-2': '#1F1F1F',
  '--dsw-alias-bg-layer-3': '#292929',
  '--dsw-alias-bg-layer-4': '#4D4D4D',
  '--dsw-alias-bg-overlay': '#1F1F1F',
  '--dsw-alias-bg-module-platform': '#292929',
  '--dsw-alias-bg-multi-select': 'rgba(26, 136, 255, 0.2)',
  '--dsw-alias-bg-l1': '#121212',
  '--dsw-alias-bg-l2': '#1F1F1F',
  '--dsw-alias-background-secondary': '#1F1F1F',
  '--dsw-alias-bg-document-preview': '#1F1F1F',
  '--dsw-alias-bg-document-selection': 'rgba(26, 136, 255, 0.32)',
  '--dsw-alias-bg-skeleton': 'rgba(255, 255, 255, 0.05)',
  '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.5)',
  '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.24)',
  '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.6)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
  '--dsw-alias-bg-mask-drop': 'rgba(31, 31, 31, 0.72)',

  '--dsw-alias-border-l1': '#FFFFFF0F',
  '--dsw-alias-border-l2': '#FFFFFF1F',
  '--dsw-alias-border-subtle': '#FFFFFF1F',
  '--dsw-alias-border-l2-darkmode-thin': '#FFFFFF17',
  '--dsw-alias-border-l3': '#FFFFFF2E',
  '--dsw-alias-border-l4': '#FFFFFF40',
  '--dsw-alias-border-inverted': '#FFFFFF0D',
  '--dsw-alias-border-inverted2': '#FFFFFF1F',
  '--dsw-alias-separator-primary': '#FFFFFF1F',

  '--dsw-alias-label-primary': '#FFFFFFD6',
  '--dsw-alias-label-primary-foreground': '#121212',
  '--dsw-alias-label-primary-inverted': '#000000',
  '--dsw-alias-label-primary-dimmed': 'rgba(255, 255, 255, 0.6)',
  '--dsw-alias-label-primary-bluish': '#1A88FF',
  '--dsw-alias-label-secondary': '#FFFFFF8F',
  '--dsw-alias-label-tertiary': '#FFFFFF6B',
  '--dsw-alias-label-caption': '#FFFFFF42',
  '--dsw-alias-label-dimmed': '#FFFFFF42',
  '--dsw-alias-label-quaternary': '#FFFFFF42',
  '--dsw-alias-label-error': '#FF6B70',
  '--dsw-alias-label-shimmer': 'rgba(255, 255, 255, 0.42)',
  '--dsw-alias-label-document-preview': '#C2C2C2',
  '--dsw-alias-menu-icon': '#FFFFFF8F',

  '--dsw-alias-brand-primary': '#1A88FF',
  '--dsw-alias-brand-primary-invert': '#121212',
  '--dsw-alias-brand-text': '#1A88FF',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#1A88FF',
  '--dsw-alias-state-business-primary': '#1A88FF',
  '--dsw-alias-state-business-tertiary': 'rgba(26, 136, 255, 0.16)',
  '--dsw-alias-button-primary-fill': '#1A88FF',
  '--dsw-alias-button-primary-hover': '#258EFF',
  '--dsw-alias-button-primary-dimmed': 'rgba(26, 136, 255, 0.24)',
  '--dsw-alias-button-contrast-fill': '#FFFFFF',
  '--dsw-alias-button-elevated-fill': '#1F1F1F',
  '--dsw-alias-button-floating-fill': '#1F1F1F',
  '--dsw-alias-button-floating-hover': '#292929',
  '--dsw-alias-button-ghost-active-fill': '#FFFFFF0D',
  '--dsw-alias-button-ghost-active-hover': '#FFFFFF1A',
  '--dsw-alias-button-ghost-active-border': 'rgba(26, 136, 255, 0.32)',
  '--dsw-alias-button-info-fill': '#1A88FF',
  '--dsw-alias-button-info-hover': '#258EFF',
  '--dsw-alias-button-tool-bar-fill': 'rgba(158, 158, 158, 0.5)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(92, 92, 92, 0.36)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(158, 158, 158, 0.62)',

  '--dsw-alias-interactive-bg-hover': '#FFFFFF0D',
  '--dsw-alias-interactive-bg-hover-solid': '#1F1F1F',
  '--dsw-alias-interactive-bg-active': '#FFFFFF1A',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(26, 136, 255, 0.16)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(255, 107, 112, 0.12)',
  '--dsw-alias-fill-l1': '#FFFFFF0D',
  '--dsw-alias-fill-l2': '#FFFFFF1A',
  '--dsw-alias-fill-tertiary': '#FFFFFF2E',
  '--dsw-alias-fill-tsp-secondary': '#FFFFFF0D',

  '--dsw-static-green-500': '#4ADE80',
  '--dsw-static-green-400': '#4ADE80',
  '--dsw-static-green-100': 'rgba(74, 222, 128, 0.16)',
  '--dsw-static-green-900': 'rgba(74, 222, 128, 0.16)',
  '--dsw-static-green-500-a08': 'rgba(74, 222, 128, 0.08)',
  '--dsw-static-green-500-a12': 'rgba(74, 222, 128, 0.12)',
  '--dsw-static-red-600': '#FF6B70',
  '--dsw-static-red-500': '#FF6B70',
  '--dsw-static-red-400': '#FF6B70',
  '--dsw-static-red-100': 'rgba(255, 107, 112, 0.16)',
  '--dsw-static-red-900': 'rgba(255, 107, 112, 0.16)',
  '--dsw-static-red-400-a12': 'rgba(255, 107, 112, 0.12)',
  '--dsw-static-red-600-a08': 'rgba(255, 107, 112, 0.08)',
  '--dsw-static-amber-500': '#FFA640',
  '--dsw-static-amber-400': '#FFA640',
  '--dsw-static-amber-600': '#FFA640',
  '--dsw-static-amber-100': 'rgba(255, 166, 64, 0.16)',
  '--dsw-static-amber-900': 'rgba(255, 166, 64, 0.16)',
  '--dsw-alias-state-success-primary': '#4ADE80',
  '--dsw-alias-state-success-secondary': '#4ADE80',
  '--dsw-alias-state-success-tertiary': 'rgba(74, 222, 128, 0.16)',
  '--dsw-alias-state-error-primary': '#FF6B70',
  '--dsw-alias-state-error-secondary': '#FF6B70',
  '--dsw-alias-state-warn-primary': '#FFA640',
  '--dsw-alias-state-warning-primary': '#FFA640',
  '--dsw-alias-state-warn-secondary': '#FFA640',
  '--dsw-alias-state-warn-label': '#FFA640',
  '--dsw-alias-state-warn-tertiary': 'rgba(255, 166, 64, 0.16)',
  '--dsw-alias-state-idle-primary': '#767676',

  '--dsw-static-deepseek-500': '#1A88FF',
  '--dsw-static-deepseek-450': '#1A88FF',
  '--dsw-static-deepseek-400': '#1A88FF',
  '--dsw-static-deepseek-600': '#258EFF',
  '--dsw-static-deepseek-800': 'rgba(26, 136, 255, 0.2)',
  '--dsw-static-deepseek-100': 'rgba(26, 136, 255, 0.14)',
  '--dsw-static-deepseek-50': 'rgba(26, 136, 255, 0.08)',
  '--dsw-static-deepseek-200': 'rgba(26, 136, 255, 0.2)',
  '--dsw-static-deepseek-300': 'rgba(26, 136, 255, 0.3)',
  // --Others-LinkBlue dark #6f88aa 实测
  '--dsw-alias-link': '#6F88AA',
  '--dsw-alias-label-deep-diving': '#1A88FF',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(26, 136, 255, 0.3)',
  '--dsw-static-blue-500': '#1A88FF',
  '--dsw-static-blue-450': '#1A88FF',
  '--dsw-static-blue-400': '#4DA0FF',
  '--dsw-static-blue-300': '#80BBFF',
  '--dsw-static-blue-100': 'rgba(26, 136, 255, 0.16)',

  '--dsw-alias-markdown-code-block': '#121212',
  '--dsw-alias-markdown-code-block-banner': '#1F1F1F',
  '--dsw-alias-markdown-inline-code': 'rgba(255, 255, 255, 0.08)',
  '--dsw-alias-markdown-code-editor-bg': '#0A0A0A',
  '--dsw-alias-markdown-code-editor-fg': '#EDEDED',
  '--dsw-alias-markdown-tag': '#292929',
  '--dsw-alias-markdown-citation': '#1F1F1F',
  '--dsw-alias-markdown-placeholder': '#1F1F1F',
  '--dsw-alias-markdown-code-segment-selected': '#1F1F1F',
  '--dsw-alias-markdown-code-segment-unselected': '#121212',
  '--dsw-alias-turn-trigger-bg': '#1F1F1F',
  '--dsw-alias-turn-trigger-bg-hover': '#FFFFFF0D',
  '--dsw-alias-code-diff-added': 'rgba(74, 222, 128, 0.12)',
  '--dsw-alias-code-diff-deleted': 'rgba(255, 107, 112, 0.12)',
  '--dsw-alias-file-diff-added-bg': '#16301F',
  '--dsw-alias-file-diff-added-gutter': '#101F15',
  '--dsw-alias-file-diff-added-marker': '#4ADE80',
  '--dsw-alias-file-diff-deleted-bg': '#33191B',
  '--dsw-alias-file-diff-deleted-gutter': '#231214',
  '--dsw-alias-file-diff-deleted-marker': '#FF6B70',

  '--dsw-alias-scrollbar-bg-l1': 'rgba(255, 255, 255, 0.1)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(255, 255, 255, 0.1)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(255, 255, 255, 0.3)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(255, 255, 255, 0.3)',
  '--dsw-alias-toast-bg': '#292929',
  '--dsw-alias-toast-label': '#FFFFFFD6',
  '--dsw-alias-tooltip-bg': '#292929',
  '--dsw-alias-tooltip-label': '#FFFFFF',
  '--dsw-alias-tooltip-key-bg': '#4D4D4D',
  '--dsw-alias-menu-group-header-fill': 'rgba(18, 18, 18, 0.94)',
  '--dsw-alias-switch-thumb': '#FFFFFF',
  '--dsw-alias-settings-card-fill': '#1F1F1F',
  '--dsw-alias-settings-card-stroke': '#FFFFFF1F',
  '--dsw-alias-onboarding-accent': '#1A88FF',
  '--dsw-alias-onboarding-card-fill': '#1F1F1F',
  '--dsw-alias-onboarding-secondary-fill': '#292929',
  '--dsw-alias-onboarding-checkbox-border': '#FFFFFF2E',
  '--dsw-focus-ring-color': '#1A88FF',
  '--dsw-alias-icon-blue': '#1A88FF',

  '--dsw-specific-sidebar-fill': '#181817',
  '--dsw-specific-sidebar-nav-item-active': '#FFFFFF1A',
  '--dsw-specific-sidebar-nav-item-active-accent': '#1A88FF',
  '--dsw-specific-bubble': '#FFFFFF0D',
  '--dsw-specific-bubble-highlight': '#FFFFFF1A',
  '--dsw-specific-input-major': '#1F1F1F',
  '--dsw-specific-login-input': '#1F1F1F',
  '--dsw-specific-selector': '#1A88FF',
  '--dsw-specific-tip': '#292929',
  '--dsw-specific-menu-item-hover': '#292929',
  '--dsw-specific-menu': '#1F1F1F',
  '--dsw-menu-surface-fill': '#292929E6',
  '--dsw-menu-backdrop-filter': 'blur(15px)',

  '--km-primary': '#1A88FF',
  '--km-primary-hover': '#258EFF',
  '--km-primary-active': '#3194FF',
  '--km-primary-soft': 'rgba(26, 136, 255, 0.16)',
  '--km-primary-border': 'rgba(26, 136, 255, 0.32)',
  '--km-gradient': 'linear-gradient(135deg, #1a88ff 0%, #2f20ff 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #1a88ff 0%, #167cf2 100%)',
  '--km-user-bubble': '#FFFFFF0D',
  '--km-glass-blur': 'blur(15px)',
  '--km-glass-fill': '#292929E6',
  '--km-composer-radius': '24px',
  '--km-composer-shadow': '0 5px 16px -4px rgba(0, 0, 0, 0.4)',
  '--km-content-max-width': '768px',
  '--km-ease': 'cubic-bezier(.25, 1, .3, 1)',
  '--km-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.2s',
})

/**
 * 令牌之外的结构修正。
 *
 * 纪律：**不针对 DSH 的 CSS Module 哈希类名写规则**。所有选择器只使用经
 * 本机 app.asar 字符串扫描实测确认存在的宿主 `data-*` 稳定锚点。
 *
 * 刻意不覆盖 `:focus-visible` 的 outline：DSH 用
 * `html[data-input-modality=pointer] body :focus-visible{outline-color:#0000}`
 * 实现「仅键盘才显示焦点环」。
 */
export const STRUCTURE_CSS = `
/* 原生控件跟随皮肤而不是跟随操作系统。 */
:root:root body{color-scheme:light}
:root:root body[data-ds-dark-theme]{color-scheme:dark}

/* 字体归一：零特异性，只压过 UA 默认值，不覆盖任何作者样式。 */
:where(body){font-family:var(--dsw-font-family);font-variant-numeric:tabular-nums}
:where(button,input,select,textarea){font-family:inherit}

/* 输入框外壳：Kimi 实测 24px 圆角 / max-width 768px / 0 5px 16px -4px #00000012。 */
[data-composer-card]{
  border-radius:var(--km-composer-radius)!important;
  box-shadow:var(--km-composer-shadow)!important;
  border:1px solid var(--dsw-alias-border-l1)!important;
  transition:box-shadow var(--km-dur-mid) var(--km-ease),border-color var(--km-dur) var(--km-ease-out)!important;
}
[data-composer-card]:focus-within{
  border-color:var(--km-primary-border)!important;
  box-shadow:0 4px 12px rgba(0,0,0,0.03),var(--km-composer-shadow)!important;
}

/* 消息气泡：Kimi 实测 12px 圆角。只统一圆角，不改底色/对齐 ——
   宿主没有角色区分属性，猜错会伤到 AI 回答。 */
[data-message-bubble]{border-radius:var(--dsw-radius-md)!important}

/* 快捷胶囊：圆角药丸 + Kimi 的玻璃质感（blur(15px) 是其最高频参数）。 */
[data-composer-chip]{
  border-radius:var(--dsw-radius-full)!important;
  border:1px solid var(--dsw-alias-border-l1)!important;
  background:var(--km-glass-fill)!important;
  backdrop-filter:var(--km-glass-blur)!important;
  -webkit-backdrop-filter:var(--km-glass-blur)!important;
  transition:background-color var(--km-dur) var(--km-ease-out),border-color var(--km-dur) var(--km-ease-out),color var(--km-dur) var(--km-ease-out)!important;
}
[data-composer-chip]:hover{
  border-color:var(--km-primary-border)!important;
  color:var(--km-primary)!important;
  background:var(--km-primary-soft)!important;
}
[data-composer-chip][data-composer-chip-selected],
[data-composer-chip][aria-pressed=true]{
  border-color:var(--km-primary-border)!important;
  color:var(--km-primary)!important;
  background:var(--km-primary-soft)!important;
}

/* 主按钮（发送键）：品牌蓝实底（Kimi 的按钮是纯色，不是渐变）。 */
[data-composer-card] button[class*="primary"],
[data-composer-card] [data-composer-command]{
  background:var(--km-primary)!important;
  color:#fff!important;
  border:0!important;
  border-radius:var(--dsw-radius-full)!important;
}

/* 浮层：玻璃质感（Kimi 实测 blur(15px) + 90% 不透明底）。 */
[data-menu-field],[data-context-menu]{
  backdrop-filter:var(--km-glass-blur)!important;
  -webkit-backdrop-filter:var(--km-glass-blur)!important;
}

/* 代码块与引用块：统一圆角。 */
[data-code-block-banner]{border-radius:var(--dsw-radius-md) var(--dsw-radius-md) 0 0!important}
[data-conversation-scroll] pre,
[data-conversation-scroll] blockquote{border-radius:var(--dsw-radius-md)!important}

/* 尊重系统的减少动效偏好。 */
@media (prefers-reduced-motion: reduce){
  [data-composer-card],[data-composer-chip]{transition:none!important}
}
`.trim()

/** 把令牌映射渲染成 `selector{--a:b;--c:d}` 形式的 CSS 文本。 */
export function renderTokenBlock(selector, tokens) {
  return `${selector}{${Object.entries(tokens)
    .map(([name, value]) => `${name}:${value}`)
    .join(';')}}`
}

/** 生成完整皮肤样式表。 */
export function renderSkinCss() {
  const structural = [
    renderTokenBlock(':root:root', STRUCTURAL),
    renderTokenBlock(':root:root body', STRUCTURAL),
  ].join('')
  return [
    `/* dsh-kimi-ui — Kimi 风格皮肤 v${SKIN_VERSION} · inspired-by, 非官方 */`,
    `/* 色值来源：Kimi 官方 CSS bundle（statics.moonshot.cn/kimi-web/assets）实测。渐变与部分中间态为推导。详见 docs/DESIGN.md */`,
    renderTokenBlock(LIGHT_SELECTOR, LIGHT),
    renderTokenBlock(DARK_SELECTOR, DARK),
    structural,
    STRUCTURE_CSS,
  ].join('\n')
}
