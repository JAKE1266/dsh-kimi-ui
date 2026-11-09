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
 * ── 色值来源（严格区分实测 / 推导）────────────────────────────────────
 * 【推导】本版全部色值基于对 Kimi（月之暗面）公开界面的视觉归纳，尚未取得
 *   官方 CSS 设计令牌的实测值。Kimi Web 为 JS 渲染 + 反爬，官方 CSS bundle
 *   未能稳定抓取。因此：
 *     - 品牌主色取 Kimi 界面观感的深蓝紫 `#5A5FE0`，渐变 `#7B8CFF → #3D3FA8`；
 *     - 中性面采用偏冷的蓝灰（Kimi 是冷调而非暖调），深色优先；
 *     - 玻璃质感（backdrop-filter）是 Kimi 面板的显著特征；
 *     - 大圆角：气泡 18px、输入框 24px、胶囊 9999px。
 *   待取得实测值后会在 CHANGELOG 标注并更新。**不要把本文件当作官方色值。**
 * 【实测】DSH 侧 208 个 `--dsw-*` 令牌名与 `data-*` 锚点来自本机 app.asar
 *   字符串扫描与官方包源码（与 dsh-doubao-ui 同一份调研）。
 * 【声明】本皮肤是 inspired-by 再设计，不是官方资产的复刻；本仓库不含任何
 *   来自 Kimi 客户端的图片、图标或字体。商标与名称归各自权利人所有，
 *   本插件与月之暗面 / Kimi、DeepSeek 无任何隶属或背书关系。
 */

/** 皮肤版本：改动令牌口径时递增，便于排查浏览器里挂着的旧样式。 */
export const SKIN_VERSION = '1.0.0'

/** 标记属性，注入到 <html> 上，便于在 DevTools 里确认皮肤已激活。 */
export const SKIN_ATTRIBUTE = 'data-dsh-kimi-skin'

/** 样式标签的稳定标识（去重 + 卸载时回收）。 */
export const STYLE_TAG_ID = 'dsh-kimi-ui/skin.css'

/** 亮色令牌选择器：特异性 (0,2,1)。 */
export const LIGHT_SELECTOR = ':root:root body'

/** 暗色令牌选择器：特异性 (0,3,1)。 */
export const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

/**
 * 与主题无关的几何/排版令牌。
 *
 * Kimi 的几何特征是「更大更圆」：气泡 18px、输入卡 24px、面板 20px。
 * 字体栈用系统无衬线，CJK 回退族前置。
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
  '--dsw-shadow-lv1': '0 1px 2px rgba(20, 22, 46, 0.06)',
  '--dsw-shadow-lv1-blur': '0 2px 8px rgba(20, 22, 46, 0.05)',
  '--dsw-shadow-lv2': '0 4px 16px rgba(20, 22, 46, 0.08), 0 1px 3px rgba(20, 22, 46, 0.05)',
  '--dsw-shadow-lv3': '0 0 1px rgba(20, 22, 46, 0.14), 0 12px 36px rgba(20, 22, 46, 0.16)',
  '--dsw-elevation-soft': '0 1px 2px rgba(20, 22, 46, 0.06)',
  '--dsw-elevation-panel': '0 4px 16px rgba(20, 22, 46, 0.08), 0 1px 3px rgba(20, 22, 46, 0.05)',
  '--dsw-elevation-prominent': '0 12px 36px rgba(20, 22, 46, 0.16)',
  '--dsw-elevation-stroke-color': 'rgba(20, 22, 46, 0.1)',
  '--dsw-corner-shape': '18px',
  '--dsw-font-family':
    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "Noto Sans", "PingFang SC", "Microsoft YaHei UI", "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
  '--dsh-font-family-code-default':
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  // 字号基线 15px：DSH 默认 14px，Kimi 正文偏大；取折中避免宿主布局溢出（推导）。
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
  '--km-primary': '#5A5FE0',
  '--km-primary-hover': '#4A4FC8',
  '--km-primary-active': '#3D3FA8',
  '--km-primary-soft': 'rgba(90, 95, 224, 0.1)',
  '--km-primary-border': 'rgba(123, 140, 255, 0.4)',
  '--km-gradient': 'linear-gradient(135deg, #7B8CFF 0%, #5A5FE0 55%, #3D3FA8 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #6E7BFF 0%, #4A4FC8 100%)',
  '--km-user-bubble': 'rgba(90, 95, 224, 0.08)',
  '--km-glass-blur': 'blur(20px) saturate(160%)',
  '--km-glass-fill': 'rgba(255, 255, 255, 0.72)',
  '--km-composer-radius': '24px',
  '--km-composer-shadow': '0 8px 32px rgba(20, 22, 46, 0.1)',
  '--km-content-max-width': '880px',
  '--km-ease': 'cubic-bezier(.2,0,0,1)',
  '--km-ease-out': 'cubic-bezier(0,0,.2,1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.2s',
})

/**
 * 亮色色板。
 * 键集合必须与 DARK 完全一致 —— test/run-all.mjs 会强制校验。
 */
export const LIGHT = Object.freeze({
  // ── 静态中性阶梯（冷蓝灰） ──
  '--dsw-static-neutral-bluish-950': '#FFFFFF',
  '--dsw-static-neutral-bluish-875': '#FAFBFF',
  '--dsw-static-neutral-bluish-850': '#F5F7FD',
  '--dsw-static-neutral-bluish-800': '#EEF1F9',
  '--dsw-static-neutral-bluish-750': '#E3E8F4',
  '--dsw-static-neutral-bluish-700': '#D2D9EA',
  '--dsw-static-neutral-bluish-600': '#B6BFD6',
  '--dsw-static-neutral-bluish-500': '#939DB8',
  '--dsw-static-neutral-bluish-400': '#6B7590',
  '--dsw-static-neutral-bluish-300': '#4C5570',
  '--dsw-static-neutral-bluish-200': '#333B52',
  '--dsw-static-neutral-bluish-150': '#E3E8F4',
  '--dsw-static-neutral-bluish-100': '#D2D9EA',
  '--dsw-static-neutral-bluish-75': '#EEF1F9',
  '--dsw-static-neutral-bluish-60': '#EEF1F9',
  '--dsw-static-neutral-bluish-50': '#F5F7FD',
  '--dsw-static-neutral-bluish-00': '#14162E',
  '--dsw-static-neutral-bluish-1000': '#14162E',

  // ── 背景 ──
  '--dsw-alias-bg-base': '#FFFFFF',
  '--dsw-alias-bg-layer-1': '#FFFFFF',
  '--dsw-alias-bg-layer-2': '#F5F7FD',
  '--dsw-alias-bg-layer-3': '#EEF1F9',
  '--dsw-alias-bg-layer-4': '#E3E8F4',
  '--dsw-alias-bg-overlay': '#FFFFFF',
  '--dsw-alias-bg-module-platform': '#F5F7FD',
  '--dsw-alias-bg-multi-select': 'rgba(90, 95, 224, 0.12)',
  '--dsw-alias-bg-l1': '#FFFFFF',
  '--dsw-alias-bg-l2': '#F5F7FD',
  '--dsw-alias-background-secondary': '#F5F7FD',
  '--dsw-alias-bg-document-preview': '#FAFBFF',
  '--dsw-alias-bg-document-selection': 'rgba(90, 95, 224, 0.26)',
  '--dsw-alias-bg-skeleton': 'rgba(20, 22, 46, 0.04)',
  '--dsw-alias-bg-mask-1': 'rgba(20, 22, 46, 0.28)',
  '--dsw-alias-bg-mask-2': 'rgba(20, 22, 46, 0.12)',
  '--dsw-alias-bg-mask-3': 'rgba(20, 22, 46, 0.48)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
  '--dsw-alias-bg-mask-drop': 'rgba(255, 255, 255, 0.72)',

  // ── 边框 ──
  '--dsw-alias-border-l1': 'rgba(20, 22, 46, 0.05)',
  '--dsw-alias-border-l2': 'rgba(20, 22, 46, 0.09)',
  '--dsw-alias-border-subtle': 'rgba(20, 22, 46, 0.09)',
  '--dsw-alias-border-l2-darkmode-thin': 'rgba(20, 22, 46, 0.07)',
  '--dsw-alias-border-l3': 'rgba(20, 22, 46, 0.12)',
  '--dsw-alias-border-l4': 'rgba(20, 22, 46, 0.16)',
  '--dsw-alias-border-inverted': 'rgba(20, 22, 46, 0.05)',
  '--dsw-alias-border-inverted2': 'rgba(20, 22, 46, 0.09)',
  '--dsw-alias-separator-primary': 'rgba(20, 22, 46, 0.09)',

  // ── 文字 ──
  '--dsw-alias-label-primary': '#14162E',
  '--dsw-alias-label-primary-foreground': '#FFFFFF',
  '--dsw-alias-label-primary-inverted': '#FFFFFF',
  '--dsw-alias-label-primary-dimmed': 'rgba(20, 22, 46, 0.6)',
  '--dsw-alias-label-primary-bluish': '#5A5FE0',
  '--dsw-alias-label-secondary': 'rgba(20, 22, 46, 0.64)',
  '--dsw-alias-label-tertiary': 'rgba(20, 22, 46, 0.48)',
  '--dsw-alias-label-caption': 'rgba(20, 22, 46, 0.38)',
  '--dsw-alias-label-dimmed': 'rgba(20, 22, 46, 0.3)',
  '--dsw-alias-label-quaternary': 'rgba(20, 22, 46, 0.3)',
  '--dsw-alias-label-error': '#E5484D',
  '--dsw-alias-label-shimmer': 'rgba(20, 22, 46, 0.28)',
  '--dsw-alias-label-document-preview': '#4C5570',
  '--dsw-alias-menu-icon': 'rgba(20, 22, 46, 0.64)',

  // ── 品牌 / 主色（深蓝紫） ──
  '--dsw-alias-brand-primary': '#5A5FE0',
  '--dsw-alias-brand-primary-invert': '#FFFFFF',
  '--dsw-alias-brand-text': '#5A5FE0',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#5A5FE0',
  '--dsw-alias-state-business-primary': '#5A5FE0',
  '--dsw-alias-state-business-tertiary': 'rgba(90, 95, 224, 0.1)',
  '--dsw-alias-button-primary-fill': '#5A5FE0',
  '--dsw-alias-button-primary-hover': '#4A4FC8',
  '--dsw-alias-button-primary-dimmed': 'rgba(90, 95, 224, 0.3)',
  '--dsw-alias-button-contrast-fill': '#14162E',
  '--dsw-alias-button-elevated-fill': '#FFFFFF',
  '--dsw-alias-button-floating-fill': '#FFFFFF',
  '--dsw-alias-button-floating-hover': '#F5F7FD',
  '--dsw-alias-button-ghost-active-fill': 'rgba(90, 95, 224, 0.1)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(90, 95, 224, 0.16)',
  '--dsw-alias-button-ghost-active-border': 'rgba(123, 140, 255, 0.4)',
  '--dsw-alias-button-info-fill': '#5A5FE0',
  '--dsw-alias-button-info-hover': '#4A4FC8',
  '--dsw-alias-button-tool-bar-fill': 'rgba(76, 85, 112, 0.45)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(51, 59, 82, 0.32)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(76, 85, 112, 0.6)',

  // ── 交互态 ──
  '--dsw-alias-interactive-bg-hover': 'rgba(20, 22, 46, 0.045)',
  '--dsw-alias-interactive-bg-hover-solid': '#F5F7FD',
  '--dsw-alias-interactive-bg-active': 'rgba(90, 95, 224, 0.1)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(90, 95, 224, 0.1)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(229, 72, 77, 0.06)',
  '--dsw-alias-fill-l1': 'rgba(20, 22, 46, 0.035)',
  '--dsw-alias-fill-l2': 'rgba(20, 22, 46, 0.055)',
  '--dsw-alias-fill-tertiary': 'rgba(20, 22, 46, 0.055)',
  '--dsw-alias-fill-tsp-secondary': 'rgba(20, 22, 46, 0.035)',

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
  '--dsw-alias-state-idle-primary': '#939DB8',

  // ── 蓝 / 链接（统一为品牌蓝紫） ──
  '--dsw-static-deepseek-500': '#5A5FE0',
  '--dsw-static-deepseek-450': '#5A5FE0',
  '--dsw-static-deepseek-400': '#5A5FE0',
  '--dsw-static-deepseek-600': '#4A4FC8',
  '--dsw-static-deepseek-800': 'rgba(90, 95, 224, 0.16)',
  '--dsw-static-deepseek-100': 'rgba(90, 95, 224, 0.12)',
  '--dsw-static-deepseek-50': 'rgba(90, 95, 224, 0.06)',
  '--dsw-static-deepseek-200': 'rgba(90, 95, 224, 0.18)',
  '--dsw-static-deepseek-300': 'rgba(90, 95, 224, 0.26)',
  '--dsw-alias-link': '#5A5FE0',
  '--dsw-alias-label-deep-diving': '#5A5FE0',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(90, 95, 224, 0.3)',
  '--dsw-static-blue-500': '#5A5FE0',
  '--dsw-static-blue-450': '#5A5FE0',
  '--dsw-static-blue-400': '#7B8CFF',
  '--dsw-static-blue-300': '#9AA6FF',
  '--dsw-static-blue-100': 'rgba(90, 95, 224, 0.12)',

  // ── Markdown / 代码 ──
  '--dsw-alias-markdown-code-block': '#F5F7FD',
  '--dsw-alias-markdown-code-block-banner': '#EEF1F9',
  '--dsw-alias-markdown-inline-code': 'rgba(90, 95, 224, 0.09)',
  '--dsw-alias-markdown-code-editor-bg': '#14162E',
  '--dsw-alias-markdown-code-editor-fg': '#E8EBF5',
  '--dsw-alias-markdown-tag': '#E3E8F4',
  '--dsw-alias-markdown-citation': '#F5F7FD',
  '--dsw-alias-markdown-placeholder': '#FAFBFF',
  '--dsw-alias-markdown-code-segment-selected': '#FFFFFF',
  '--dsw-alias-markdown-code-segment-unselected': '#F5F7FD',
  '--dsw-alias-turn-trigger-bg': '#F5F7FD',
  '--dsw-alias-turn-trigger-bg-hover': 'rgba(20, 22, 46, 0.045)',
  '--dsw-alias-code-diff-added': 'rgba(46, 158, 91, 0.08)',
  '--dsw-alias-code-diff-deleted': 'rgba(229, 72, 77, 0.08)',
  '--dsw-alias-file-diff-added-bg': '#EAF7EF',
  '--dsw-alias-file-diff-added-gutter': '#F3FAF6',
  '--dsw-alias-file-diff-added-marker': '#2E9E5B',
  '--dsw-alias-file-diff-deleted-bg': '#FBEEEE',
  '--dsw-alias-file-diff-deleted-gutter': '#FDF5F5',
  '--dsw-alias-file-diff-deleted-marker': '#E5484D',

  // ── 滚动条 / 浮层 / 表单 ──
  '--dsw-alias-scrollbar-bg-l1': 'rgba(20, 22, 46, 0.1)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(20, 22, 46, 0.1)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(76, 85, 112, 0.3)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(76, 85, 112, 0.3)',
  '--dsw-alias-toast-bg': '#FFFFFF',
  '--dsw-alias-toast-label': '#14162E',
  '--dsw-alias-tooltip-bg': '#14162E',
  '--dsw-alias-tooltip-label': '#F5F7FD',
  '--dsw-alias-tooltip-key-bg': '#333B52',
  '--dsw-alias-menu-group-header-fill': 'rgba(245, 247, 253, 0.94)',
  '--dsw-alias-switch-thumb': '#FFFFFF',
  '--dsw-alias-settings-card-fill': '#FFFFFF',
  '--dsw-alias-settings-card-stroke': 'rgba(20, 22, 46, 0.09)',
  '--dsw-alias-onboarding-accent': '#5A5FE0',
  '--dsw-alias-onboarding-card-fill': '#FFFFFF',
  '--dsw-alias-onboarding-secondary-fill': '#F5F7FD',
  '--dsw-alias-onboarding-checkbox-border': 'rgba(20, 22, 46, 0.16)',
  '--dsw-focus-ring-color': '#5A5FE0',
  '--dsw-alias-icon-blue': '#5A5FE0',

  // ── 特定表面 ──
  '--dsw-specific-sidebar-fill': '#F5F7FD',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(90, 95, 224, 0.1)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#5A5FE0',
  '--dsw-specific-bubble': 'rgba(90, 95, 224, 0.08)',
  '--dsw-specific-bubble-highlight': 'rgba(90, 95, 224, 0.16)',
  '--dsw-specific-input-major': '#FFFFFF',
  '--dsw-specific-login-input': '#FFFFFF',
  '--dsw-specific-selector': '#5A5FE0',
  '--dsw-specific-tip': '#EEF1F9',
  '--dsw-specific-menu-item-hover': '#F5F7FD',
  '--dsw-specific-menu': '#FFFFFF',
  '--dsw-menu-surface-fill': 'rgba(255, 255, 255, 0.86)',
  '--dsw-menu-backdrop-filter': 'blur(20px) saturate(160%)',

  // ── Kimi 私有：亮色（键集合必须与 DARK 完全一致） ──
  '--km-primary': '#5A5FE0',
  '--km-primary-hover': '#4A4FC8',
  '--km-primary-active': '#3D3FA8',
  '--km-primary-soft': 'rgba(90, 95, 224, 0.1)',
  '--km-primary-border': 'rgba(123, 140, 255, 0.4)',
  '--km-gradient': 'linear-gradient(135deg, #7B8CFF 0%, #5A5FE0 55%, #3D3FA8 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #6E7BFF 0%, #4A4FC8 100%)',
  '--km-user-bubble': 'rgba(90, 95, 224, 0.08)',
  '--km-glass-blur': 'blur(20px) saturate(160%)',
  '--km-glass-fill': 'rgba(255, 255, 255, 0.72)',
  '--km-composer-radius': '24px',
  '--km-composer-shadow': '0 8px 32px rgba(20, 22, 46, 0.1)',
  '--km-content-max-width': '880px',
  '--km-ease': 'cubic-bezier(.2,0,0,1)',
  '--km-ease-out': 'cubic-bezier(0,0,.2,1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.2s',
})

/**
 * 暗色色板 —— Kimi 的「深色优先」是产品主调，这套是重点。
 * 底色带蓝紫倾向（不是中性黑），主色提亮。
 */
export const DARK = Object.freeze({
  '--dsw-static-neutral-bluish-950': '#0E1020',
  '--dsw-static-neutral-bluish-875': '#15172A',
  '--dsw-static-neutral-bluish-850': '#1A1D33',
  '--dsw-static-neutral-bluish-800': '#22263F',
  '--dsw-static-neutral-bluish-750': '#2B304C',
  '--dsw-static-neutral-bluish-700': '#363C5C',
  '--dsw-static-neutral-bluish-600': '#454C70',
  '--dsw-static-neutral-bluish-500': '#5C6488',
  '--dsw-static-neutral-bluish-400': '#7D85A8',
  '--dsw-static-neutral-bluish-300': '#A3AAC8',
  '--dsw-static-neutral-bluish-200': '#C7CCE0',
  '--dsw-static-neutral-bluish-150': '#2B304C',
  '--dsw-static-neutral-bluish-100': '#363C5C',
  '--dsw-static-neutral-bluish-75': '#22263F',
  '--dsw-static-neutral-bluish-60': '#22263F',
  '--dsw-static-neutral-bluish-50': '#E8EBF5',
  '--dsw-static-neutral-bluish-00': '#F5F7FD',
  '--dsw-static-neutral-bluish-1000': '#0A0B16',

  '--dsw-alias-bg-base': '#0E1020',
  '--dsw-alias-bg-layer-1': '#15172A',
  '--dsw-alias-bg-layer-2': '#1A1D33',
  '--dsw-alias-bg-layer-3': '#22263F',
  '--dsw-alias-bg-layer-4': '#2B304C',
  '--dsw-alias-bg-overlay': '#1A1D33',
  '--dsw-alias-bg-module-platform': '#22263F',
  '--dsw-alias-bg-multi-select': 'rgba(123, 140, 255, 0.2)',
  '--dsw-alias-bg-l1': '#15172A',
  '--dsw-alias-bg-l2': '#1A1D33',
  '--dsw-alias-background-secondary': '#1A1D33',
  '--dsw-alias-bg-document-preview': '#15172A',
  '--dsw-alias-bg-document-selection': 'rgba(123, 140, 255, 0.36)',
  '--dsw-alias-bg-skeleton': 'rgba(255, 255, 255, 0.05)',
  '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.52)',
  '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.24)',
  '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.6)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
  '--dsw-alias-bg-mask-drop': 'rgba(26, 29, 51, 0.72)',

  '--dsw-alias-border-l1': 'rgba(255, 255, 255, 0.06)',
  '--dsw-alias-border-l2': 'rgba(255, 255, 255, 0.1)',
  '--dsw-alias-border-subtle': 'rgba(255, 255, 255, 0.1)',
  '--dsw-alias-border-l2-darkmode-thin': 'rgba(255, 255, 255, 0.07)',
  '--dsw-alias-border-l3': 'rgba(255, 255, 255, 0.14)',
  '--dsw-alias-border-l4': 'rgba(255, 255, 255, 0.18)',
  '--dsw-alias-border-inverted': 'rgba(255, 255, 255, 0.06)',
  '--dsw-alias-border-inverted2': 'rgba(255, 255, 255, 0.1)',
  '--dsw-alias-separator-primary': 'rgba(255, 255, 255, 0.1)',

  '--dsw-alias-label-primary': '#E8EBF5',
  '--dsw-alias-label-primary-foreground': '#0E1020',
  '--dsw-alias-label-primary-inverted': '#14162E',
  '--dsw-alias-label-primary-dimmed': 'rgba(232, 235, 245, 0.6)',
  '--dsw-alias-label-primary-bluish': '#8B96FF',
  '--dsw-alias-label-secondary': 'rgba(232, 235, 245, 0.64)',
  '--dsw-alias-label-tertiary': 'rgba(232, 235, 245, 0.48)',
  '--dsw-alias-label-caption': 'rgba(232, 235, 245, 0.38)',
  '--dsw-alias-label-dimmed': 'rgba(232, 235, 245, 0.3)',
  '--dsw-alias-label-quaternary': 'rgba(232, 235, 245, 0.32)',
  '--dsw-alias-label-error': '#FF6B70',
  '--dsw-alias-label-shimmer': 'rgba(255, 255, 255, 0.42)',
  '--dsw-alias-label-document-preview': '#A3AAC8',
  '--dsw-alias-menu-icon': 'rgba(232, 235, 245, 0.64)',

  '--dsw-alias-brand-primary': '#7B8CFF',
  '--dsw-alias-brand-primary-invert': '#0E1020',
  '--dsw-alias-brand-text': '#8B96FF',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#7B8CFF',
  '--dsw-alias-state-business-primary': '#7B8CFF',
  '--dsw-alias-state-business-tertiary': 'rgba(123, 140, 255, 0.16)',
  '--dsw-alias-button-primary-fill': '#6E7BFF',
  '--dsw-alias-button-primary-hover': '#7F8BFF',
  '--dsw-alias-button-primary-dimmed': 'rgba(123, 140, 255, 0.24)',
  '--dsw-alias-button-contrast-fill': '#F5F7FD',
  '--dsw-alias-button-elevated-fill': '#1A1D33',
  '--dsw-alias-button-floating-fill': '#1A1D33',
  '--dsw-alias-button-floating-hover': '#22263F',
  '--dsw-alias-button-ghost-active-fill': 'rgba(123, 140, 255, 0.16)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(123, 140, 255, 0.24)',
  '--dsw-alias-button-ghost-active-border': 'rgba(123, 140, 255, 0.4)',
  '--dsw-alias-button-info-fill': '#7B8CFF',
  '--dsw-alias-button-info-hover': '#8B96FF',
  '--dsw-alias-button-tool-bar-fill': 'rgba(125, 133, 168, 0.5)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(69, 76, 112, 0.36)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(125, 133, 168, 0.62)',

  '--dsw-alias-interactive-bg-hover': 'rgba(255, 255, 255, 0.05)',
  '--dsw-alias-interactive-bg-hover-solid': '#22263F',
  '--dsw-alias-interactive-bg-active': 'rgba(123, 140, 255, 0.16)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(123, 140, 255, 0.16)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(255, 107, 112, 0.12)',
  '--dsw-alias-fill-l1': 'rgba(255, 255, 255, 0.045)',
  '--dsw-alias-fill-l2': 'rgba(255, 255, 255, 0.075)',
  '--dsw-alias-fill-tertiary': 'rgba(255, 255, 255, 0.075)',
  '--dsw-alias-fill-tsp-secondary': 'rgba(255, 255, 255, 0.045)',

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
  '--dsw-alias-state-idle-primary': '#5C6488',

  '--dsw-static-deepseek-500': '#7B8CFF',
  '--dsw-static-deepseek-450': '#7B8CFF',
  '--dsw-static-deepseek-400': '#7B8CFF',
  '--dsw-static-deepseek-600': '#8B96FF',
  '--dsw-static-deepseek-800': 'rgba(123, 140, 255, 0.2)',
  '--dsw-static-deepseek-100': 'rgba(123, 140, 255, 0.14)',
  '--dsw-static-deepseek-50': 'rgba(123, 140, 255, 0.08)',
  '--dsw-static-deepseek-200': 'rgba(123, 140, 255, 0.2)',
  '--dsw-static-deepseek-300': 'rgba(123, 140, 255, 0.3)',
  '--dsw-alias-link': '#8B96FF',
  '--dsw-alias-label-deep-diving': '#8B96FF',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(123, 140, 255, 0.3)',
  '--dsw-static-blue-500': '#7B8CFF',
  '--dsw-static-blue-450': '#7B8CFF',
  '--dsw-static-blue-400': '#9AA6FF',
  '--dsw-static-blue-300': '#B3BCFF',
  '--dsw-static-blue-100': 'rgba(123, 140, 255, 0.16)',

  '--dsw-alias-markdown-code-block': '#15172A',
  '--dsw-alias-markdown-code-block-banner': '#1A1D33',
  '--dsw-alias-markdown-inline-code': 'rgba(123, 140, 255, 0.14)',
  '--dsw-alias-markdown-code-editor-bg': '#0A0B16',
  '--dsw-alias-markdown-code-editor-fg': '#E8EBF5',
  '--dsw-alias-markdown-tag': '#2B304C',
  '--dsw-alias-markdown-citation': '#22263F',
  '--dsw-alias-markdown-placeholder': '#1A1D33',
  '--dsw-alias-markdown-code-segment-selected': '#1A1D33',
  '--dsw-alias-markdown-code-segment-unselected': '#15172A',
  '--dsw-alias-turn-trigger-bg': '#22263F',
  '--dsw-alias-turn-trigger-bg-hover': 'rgba(255, 255, 255, 0.05)',
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
  '--dsw-alias-scrollbar-hover-l1': 'rgba(232, 235, 245, 0.28)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(232, 235, 245, 0.28)',
  '--dsw-alias-toast-bg': '#1A1D33',
  '--dsw-alias-toast-label': '#E8EBF5',
  '--dsw-alias-tooltip-bg': '#2B304C',
  '--dsw-alias-tooltip-label': '#F5F7FD',
  '--dsw-alias-tooltip-key-bg': '#363C5C',
  '--dsw-alias-menu-group-header-fill': 'rgba(21, 23, 42, 0.94)',
  '--dsw-alias-switch-thumb': '#F5F7FD',
  '--dsw-alias-settings-card-fill': '#1A1D33',
  '--dsw-alias-settings-card-stroke': 'rgba(255, 255, 255, 0.1)',
  '--dsw-alias-onboarding-accent': '#7B8CFF',
  '--dsw-alias-onboarding-card-fill': '#1A1D33',
  '--dsw-alias-onboarding-secondary-fill': '#22263F',
  '--dsw-alias-onboarding-checkbox-border': 'rgba(255, 255, 255, 0.2)',
  '--dsw-focus-ring-color': '#7B8CFF',
  '--dsw-alias-icon-blue': '#7B8CFF',

  '--dsw-specific-sidebar-fill': '#12142A',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(123, 140, 255, 0.14)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#7B8CFF',
  '--dsw-specific-bubble': 'rgba(123, 140, 255, 0.14)',
  '--dsw-specific-bubble-highlight': 'rgba(123, 140, 255, 0.22)',
  '--dsw-specific-input-major': '#1A1D33',
  '--dsw-specific-login-input': '#1A1D33',
  '--dsw-specific-selector': '#7B8CFF',
  '--dsw-specific-tip': '#22263F',
  '--dsw-specific-menu-item-hover': '#22263F',
  '--dsw-specific-menu': '#1A1D33',
  '--dsw-menu-surface-fill': 'rgba(26, 29, 51, 0.86)',
  '--dsw-menu-backdrop-filter': 'blur(20px) saturate(160%)',

  '--km-primary': '#7B8CFF',
  '--km-primary-hover': '#8B96FF',
  '--km-primary-active': '#9AA6FF',
  '--km-primary-soft': 'rgba(123, 140, 255, 0.14)',
  '--km-primary-border': 'rgba(123, 140, 255, 0.4)',
  '--km-gradient': 'linear-gradient(135deg, #8B96FF 0%, #6E7BFF 55%, #4A4FC8 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #7B8CFF 0%, #5A5FE0 100%)',
  '--km-user-bubble': 'rgba(123, 140, 255, 0.14)',
  '--km-glass-blur': 'blur(20px) saturate(160%)',
  '--km-glass-fill': 'rgba(26, 29, 51, 0.72)',
  '--km-composer-radius': '24px',
  '--km-composer-shadow': '0 8px 32px rgba(0, 0, 0, 0.4)',
  '--km-content-max-width': '880px',
  '--km-ease': 'cubic-bezier(.2,0,0,1)',
  '--km-ease-out': 'cubic-bezier(0,0,.2,1)',
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
 * 实现「仅键盘才显示焦点环」。直接写 outline 会连鼠标点击也画出焦点环。
 */
export const STRUCTURE_CSS = `
/* 原生控件跟随皮肤而不是跟随操作系统。 */
:root:root body{color-scheme:light}
:root:root body[data-ds-dark-theme]{color-scheme:dark}

/* 字体归一：零特异性，只压过 UA 默认值，不覆盖任何作者样式。 */
:where(body){font-family:var(--dsw-font-family);font-variant-numeric:tabular-nums}
:where(button,input,select,textarea){font-family:inherit}

/* 输入框外壳：Kimi 的 24px 大圆角 + 柔和浮起阴影。 */
[data-composer-card]{
  border-radius:var(--km-composer-radius)!important;
  box-shadow:var(--km-composer-shadow)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  transition:box-shadow var(--km-dur-mid) var(--km-ease),border-color var(--km-dur) var(--km-ease-out)!important;
}
[data-composer-card]:focus-within{
  border-color:var(--km-primary)!important;
  box-shadow:0 0 0 3px var(--km-primary-soft),var(--km-composer-shadow)!important;
}

/* 消息气泡：Kimi 的 18px 圆角。只统一圆角，不改底色/对齐 ——
   宿主没有角色区分属性，猜错会伤到 AI 回答。 */
[data-message-bubble]{border-radius:var(--dsw-radius-lg)!important}

/* 快捷胶囊：圆角药丸 + 玻璃质感（Kimi 的显著特征）。 */
[data-composer-chip]{
  border-radius:var(--dsw-radius-full)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
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

/* 主按钮（发送键）：品牌渐变。 */
[data-composer-card] button[class*="primary"],
[data-composer-card] [data-composer-command]{
  background:var(--km-gradient-button)!important;
  color:#fff!important;
  border:0!important;
  border-radius:var(--dsw-radius-full)!important;
}

/* 浮层：玻璃质感（菜单、对话框）。 */
[data-menu-field],[data-context-menu]{
  backdrop-filter:var(--km-glass-blur)!important;
  -webkit-backdrop-filter:var(--km-glass-blur)!important;
}

/* 代码块与引用块：统一大圆角、禁止横向溢出。 */
[data-code-block-banner]{border-radius:var(--dsw-radius-lg) var(--dsw-radius-lg) 0 0!important}
[data-conversation-scroll] pre,
[data-conversation-scroll] blockquote{border-radius:var(--dsw-radius-lg)!important}

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
    `/* 本版色值为视觉归纳（推导），非官方 CSS 令牌实测值。详见 docs/DESIGN.md */`,
    renderTokenBlock(LIGHT_SELECTOR, LIGHT),
    renderTokenBlock(DARK_SELECTOR, DARK),
    structural,
    STRUCTURE_CSS,
  ].join('\n')
}
