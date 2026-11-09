/**
 * dsh-kimi-ui — Kimi 风格主题令牌（v2.0.0「强化辨识度」版）
 *
 * ── 这一版和 v1.x 的根本区别 ──────────────────────────────────────────
 * v1.x 严格照搬 Kimi 官方 CSS 的实测值，结果是**几乎看不出变化**：
 * 官方 DSH 页面底 #fff、Kimi 是 #FBFAF9（都是白）；圆角两边都是 12/16px；
 * 唯一明显差异只是主色从黑变蓝。这在 DSH 密集的界面里等于没换肤。
 *
 * v2.0.0 改变策略：**以 Kimi 的设计语言为准，而不是逐值照搬**。
 *   - 渐变：Kimi 的蓝紫渐变用在主按钮、hero 标记、选中态
 *   - 大圆角：气泡 20px、输入卡 28px、面板 24px（官方 DSH 是 12/16px）
 *   - 玻璃质感：侧栏、菜单、对话框真正用上 blur + 半透明
 *   - 分色：侧栏底色与主区明确拉开（暖白 vs 纯白）
 *   - 深浅对比：文字层级、边框都加强
 *
 * ── 色值来源 ────────────────────────────────────────────────────────
 * 【实测锚点】品牌蓝 #1783FF / 暗 #1A88FF、暖白底 #FBFAF9、中性 #121212
 *   等来自 Kimi 官方 CSS（statics.moonshot.cn/kimi-web/assets/Bd7TiIrN.css）。
 * 【推导/强化】为提升辨识度做的调整，逐项在 docs/DESIGN.md 标注：
 *   - 圆角放大：气泡 12→20px、输入卡 24→28px、面板 →24px
 *   - 侧栏用暖灰 #F2F0ED（比主区更暖更深），暗色用 #0C0C0B
 *   - 主色使用范围扩大：选中态、图标、边框、渐变
 *   - 渐变：Kimi 无官方品牌渐变，由品牌蓝 → 深紫 #2F20FF 组合（推导）
 *   - 阴影加重，玻璃参数从 blur(15px) 提到 blur(20px) saturate(180%)
 */

/** 皮肤版本。 */
export const SKIN_VERSION = '2.0.0'

/** 标记属性，注入到 <html> 上。 */
export const SKIN_ATTRIBUTE = 'data-dsh-kimi-skin'

/** 样式标签的稳定标识。 */
export const STYLE_TAG_ID = 'dsh-kimi-ui/skin.css'

/** 亮色选择器：特异性 (0,2,1)。 */
export const LIGHT_SELECTOR = ':root:root body'

/** 暗色选择器：特异性 (0,3,1)。 */
export const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

/**
 * 几何 / 排版令牌 —— v2 刻意放大，这是辨识度的主要来源之一。
 */
export const STRUCTURAL = Object.freeze({
  '--dsw-radius-xs': '6px',
  '--dsw-radius-sm': '10px',
  '--dsw-radius-md': '14px',
  '--dsw-radius-lg': '20px',
  '--dsw-radius-xl': '24px',
  '--dsw-radius-panel': '28px',
  '--dsw-radius-2xl': '28px',
  '--dsw-radius-full': '9999px',
  '--dsw-shadow-lv1': '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
  '--dsw-shadow-lv1-blur': '0 4px 12px rgba(0, 0, 0, 0.08)',
  '--dsw-shadow-lv2': '0 6px 20px rgba(0, 0, 0, 0.10), 0 2px 6px rgba(0, 0, 0, 0.05)',
  '--dsw-shadow-lv3': '0 16px 48px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08)',
  '--dsw-elevation-soft': '0 1px 3px rgba(0, 0, 0, 0.06)',
  '--dsw-elevation-panel': '0 6px 20px rgba(0, 0, 0, 0.10)',
  '--dsw-elevation-prominent': '0 16px 48px rgba(0, 0, 0, 0.16)',
  '--dsw-elevation-stroke-color': 'rgba(0, 0, 0, 0.10)',
  '--dsw-corner-shape': '20px',
  '--dsw-font-family':
    '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, Arial, "PingFang SC", "Source Han Sans SC", "Microsoft YaHei UI", "Microsoft YaHei", "Noto Sans CJK SC"',
  '--dsh-font-family-code-default': '"Geist Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
  // 15px 基线：比官方 14px 略大，Kimi 的阅读感（推导）
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
  '--dsh-scrollbar-width': '9px',
  '--dsh-scrollbar-thumb-border': '2px',
  '--dsw-focus-ring-width': '2px',
  // ── Kimi 私有语义变量 ──
  '--km-primary': '#1783FF',
  '--km-primary-hover': '#0E6FE8',
  '--km-primary-active': '#0A5FC8',
  '--km-primary-soft': 'rgba(23, 131, 255, 0.10)',
  '--km-primary-softer': 'rgba(23, 131, 255, 0.06)',
  '--km-primary-border': 'rgba(23, 131, 255, 0.32)',
  '--km-gradient': 'linear-gradient(135deg, #4DA0FF 0%, #1783FF 45%, #2F20FF 100%)',
  '--km-gradient-soft': 'linear-gradient(135deg, rgba(77,160,255,.14) 0%, rgba(47,32,255,.10) 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #2E93FF 0%, #1783FF 50%, #0E6FE8 100%)',
  '--km-gradient-text': 'linear-gradient(135deg, #1783FF 0%, #2F20FF 100%)',
  '--km-user-bubble': 'rgba(23, 131, 255, 0.09)',
  '--km-glass-blur': 'blur(20px) saturate(180%)',
  '--km-glass-fill': 'rgba(255, 255, 255, 0.78)',
  '--km-composer-radius': '28px',
  '--km-composer-shadow': '0 8px 32px rgba(23, 131, 255, 0.10), 0 2px 8px rgba(0, 0, 0, 0.04)',
  '--km-content-max-width': '768px',
  '--km-ease': 'cubic-bezier(.25, 1, .3, 1)',
  '--km-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.22s',
})

/**
 * 亮色色板 —— 强化版。
 *
 * 核心策略：
 *   1. 侧栏 #F2F0ED（暖灰、明显比主区深）vs 主区 #FFFFFF —— 分色一眼可见
 *   2. 主色 #1783FF 用在选中态、图标、边框、渐变
 *   3. 圆角 14/20/24/28px，比官方 12/16 明显更大
 *   4. 文字与边框对比加强
 */
export const LIGHT = Object.freeze({
  // ── 静态中性阶梯（暖灰） ──
  '--dsw-static-neutral-bluish-950': '#FFFFFF',
  '--dsw-static-neutral-bluish-875': '#FAF9F7',
  '--dsw-static-neutral-bluish-850': '#F5F3F0',
  '--dsw-static-neutral-bluish-800': '#F2F0ED',
  '--dsw-static-neutral-bluish-750': '#E8E5E0',
  '--dsw-static-neutral-bluish-700': '#D8D4CD',
  '--dsw-static-neutral-bluish-600': '#B8B3AA',
  '--dsw-static-neutral-bluish-500': '#8F8A80',
  '--dsw-static-neutral-bluish-400': '#6B665D',
  '--dsw-static-neutral-bluish-300': '#4A463F',
  '--dsw-static-neutral-bluish-200': '#2E2B26',
  '--dsw-static-neutral-bluish-150': '#E8E5E0',
  '--dsw-static-neutral-bluish-100': '#D8D4CD',
  '--dsw-static-neutral-bluish-75': '#F2F0ED',
  '--dsw-static-neutral-bluish-60': '#F2F0ED',
  '--dsw-static-neutral-bluish-50': '#F5F3F0',
  '--dsw-static-neutral-bluish-00': '#1A1815',
  '--dsw-static-neutral-bluish-1000': '#1A1815',

  // ── 背景：主区纯白，侧栏暖灰，明确分色 ──
  '--dsw-alias-bg-base': '#FFFFFF',
  '--dsw-alias-bg-layer-1': '#FFFFFF',
  '--dsw-alias-bg-layer-2': '#F7F5F2',
  '--dsw-alias-bg-layer-3': '#F2F0ED',
  '--dsw-alias-bg-layer-4': '#E8E5E0',
  '--dsw-alias-bg-overlay': '#FFFFFF',
  '--dsw-alias-bg-module-platform': '#F2F0ED',
  '--dsw-alias-bg-multi-select': 'rgba(23, 131, 255, 0.14)',
  '--dsw-alias-bg-l1': '#FFFFFF',
  '--dsw-alias-bg-l2': '#F7F5F2',
  '--dsw-alias-background-secondary': '#F7F5F2',
  '--dsw-alias-bg-document-preview': '#FAF9F7',
  '--dsw-alias-bg-document-selection': 'rgba(23, 131, 255, 0.28)',
  '--dsw-alias-bg-skeleton': 'rgba(26, 24, 21, 0.05)',
  '--dsw-alias-bg-mask-1': 'rgba(26, 24, 21, 0.30)',
  '--dsw-alias-bg-mask-2': 'rgba(26, 24, 21, 0.14)',
  '--dsw-alias-bg-mask-3': 'rgba(26, 24, 21, 0.50)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
  '--dsw-alias-bg-mask-drop': 'rgba(255, 255, 255, 0.75)',

  // ── 边框：比官方更明显 ──
  '--dsw-alias-border-l1': 'rgba(26, 24, 21, 0.07)',
  '--dsw-alias-border-l2': 'rgba(26, 24, 21, 0.12)',
  '--dsw-alias-border-subtle': 'rgba(26, 24, 21, 0.10)',
  '--dsw-alias-border-l2-darkmode-thin': 'rgba(26, 24, 21, 0.09)',
  '--dsw-alias-border-l3': 'rgba(26, 24, 21, 0.16)',
  '--dsw-alias-border-l4': 'rgba(26, 24, 21, 0.22)',
  '--dsw-alias-border-inverted': 'rgba(26, 24, 21, 0.06)',
  '--dsw-alias-border-inverted2': 'rgba(26, 24, 21, 0.12)',
  '--dsw-alias-separator-primary': 'rgba(26, 24, 21, 0.10)',

  // ── 文字：对比加强 ──
  '--dsw-alias-label-primary': '#1A1815',
  '--dsw-alias-label-primary-foreground': '#FFFFFF',
  '--dsw-alias-label-primary-inverted': '#FFFFFF',
  '--dsw-alias-label-primary-dimmed': 'rgba(26, 24, 21, 0.65)',
  '--dsw-alias-label-primary-bluish': '#1783FF',
  '--dsw-alias-label-secondary': 'rgba(26, 24, 21, 0.68)',
  '--dsw-alias-label-tertiary': 'rgba(26, 24, 21, 0.52)',
  '--dsw-alias-label-caption': 'rgba(26, 24, 21, 0.42)',
  '--dsw-alias-label-dimmed': 'rgba(26, 24, 21, 0.32)',
  '--dsw-alias-label-quaternary': 'rgba(26, 24, 21, 0.34)',
  '--dsw-alias-label-error': '#E5484D',
  '--dsw-alias-label-shimmer': 'rgba(26, 24, 21, 0.30)',
  '--dsw-alias-label-document-preview': '#4A463F',
  '--dsw-alias-menu-icon': 'rgba(26, 24, 21, 0.68)',

  // ── 品牌 / 主色：扩大使用范围 ──
  '--dsw-alias-brand-primary': '#1783FF',
  '--dsw-alias-brand-primary-invert': '#FFFFFF',
  '--dsw-alias-brand-text': '#1783FF',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#1783FF',
  '--dsw-alias-state-business-primary': '#1783FF',
  '--dsw-alias-state-business-tertiary': 'rgba(23, 131, 255, 0.12)',
  '--dsw-alias-button-primary-fill': '#1783FF',
  '--dsw-alias-button-primary-hover': '#0E6FE8',
  '--dsw-alias-button-primary-dimmed': 'rgba(23, 131, 255, 0.32)',
  '--dsw-alias-button-contrast-fill': '#1A1815',
  '--dsw-alias-button-elevated-fill': '#FFFFFF',
  '--dsw-alias-button-floating-fill': '#FFFFFF',
  '--dsw-alias-button-floating-hover': '#F2F0ED',
  '--dsw-alias-button-ghost-active-fill': 'rgba(23, 131, 255, 0.10)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(23, 131, 255, 0.16)',
  '--dsw-alias-button-ghost-active-border': 'rgba(23, 131, 255, 0.34)',
  '--dsw-alias-button-info-fill': '#1783FF',
  '--dsw-alias-button-info-hover': '#0E6FE8',
  '--dsw-alias-button-tool-bar-fill': 'rgba(74, 70, 63, 0.50)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(46, 43, 38, 0.36)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(74, 70, 63, 0.64)',

  // ── 交互态 ──
  '--dsw-alias-interactive-bg-hover': 'rgba(26, 24, 21, 0.055)',
  '--dsw-alias-interactive-bg-hover-solid': '#F2F0ED',
  '--dsw-alias-interactive-bg-active': 'rgba(23, 131, 255, 0.12)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(23, 131, 255, 0.10)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(229, 72, 77, 0.07)',
  '--dsw-alias-fill-l1': 'rgba(26, 24, 21, 0.04)',
  '--dsw-alias-fill-l2': 'rgba(26, 24, 21, 0.07)',
  '--dsw-alias-fill-tertiary': 'rgba(26, 24, 21, 0.07)',
  '--dsw-alias-fill-tsp-secondary': 'rgba(26, 24, 21, 0.04)',

  // ── 状态色 ──
  '--dsw-static-green-500': '#2E9E5B',
  '--dsw-static-green-400': '#2E9E5B',
  '--dsw-static-green-100': 'rgba(46, 158, 91, 0.13)',
  '--dsw-static-green-900': 'rgba(46, 158, 91, 0.13)',
  '--dsw-static-green-500-a08': 'rgba(46, 158, 91, 0.09)',
  '--dsw-static-green-500-a12': 'rgba(46, 158, 91, 0.13)',
  '--dsw-static-red-600': '#E5484D',
  '--dsw-static-red-500': '#E5484D',
  '--dsw-static-red-400': '#E5484D',
  '--dsw-static-red-100': 'rgba(229, 72, 77, 0.13)',
  '--dsw-static-red-900': 'rgba(229, 72, 77, 0.13)',
  '--dsw-static-red-400-a12': 'rgba(229, 72, 77, 0.13)',
  '--dsw-static-red-600-a08': 'rgba(229, 72, 77, 0.09)',
  '--dsw-static-amber-500': '#D9820B',
  '--dsw-static-amber-400': '#D9820B',
  '--dsw-static-amber-600': '#D9820B',
  '--dsw-static-amber-100': 'rgba(217, 130, 11, 0.13)',
  '--dsw-static-amber-900': 'rgba(217, 130, 11, 0.13)',
  '--dsw-alias-state-success-primary': '#2E9E5B',
  '--dsw-alias-state-success-secondary': '#2E9E5B',
  '--dsw-alias-state-success-tertiary': 'rgba(46, 158, 91, 0.13)',
  '--dsw-alias-state-error-primary': '#E5484D',
  '--dsw-alias-state-error-secondary': '#E5484D',
  '--dsw-alias-state-warn-primary': '#D9820B',
  '--dsw-alias-state-warning-primary': '#D9820B',
  '--dsw-alias-state-warn-secondary': '#D9820B',
  '--dsw-alias-state-warn-label': '#D9820B',
  '--dsw-alias-state-warn-tertiary': 'rgba(217, 130, 11, 0.13)',
  '--dsw-alias-state-idle-primary': '#8F8A80',

  // ── 蓝 / 链接 ──
  '--dsw-static-deepseek-500': '#1783FF',
  '--dsw-static-deepseek-450': '#1783FF',
  '--dsw-static-deepseek-400': '#1783FF',
  '--dsw-static-deepseek-600': '#0E6FE8',
  '--dsw-static-deepseek-800': 'rgba(23, 131, 255, 0.18)',
  '--dsw-static-deepseek-100': 'rgba(23, 131, 255, 0.10)',
  '--dsw-static-deepseek-50': 'rgba(23, 131, 255, 0.06)',
  '--dsw-static-deepseek-200': 'rgba(23, 131, 255, 0.16)',
  '--dsw-static-deepseek-300': 'rgba(23, 131, 255, 0.26)',
  '--dsw-alias-link': '#0E6FE8',
  '--dsw-alias-label-deep-diving': '#1783FF',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(23, 131, 255, 0.32)',
  '--dsw-static-blue-500': '#1783FF',
  '--dsw-static-blue-450': '#1783FF',
  '--dsw-static-blue-400': '#4DA0FF',
  '--dsw-static-blue-300': '#80BBFF',
  '--dsw-static-blue-100': 'rgba(23, 131, 255, 0.12)',

  // ── Markdown / 代码 ──
  '--dsw-alias-markdown-code-block': '#F7F5F2',
  '--dsw-alias-markdown-code-block-banner': '#F2F0ED',
  '--dsw-alias-markdown-inline-code': 'rgba(23, 131, 255, 0.10)',
  '--dsw-alias-markdown-code-editor-bg': '#1A1815',
  '--dsw-alias-markdown-code-editor-fg': '#F2F0ED',
  '--dsw-alias-markdown-tag': '#E8E5E0',
  '--dsw-alias-markdown-citation': '#F2F0ED',
  '--dsw-alias-markdown-placeholder': '#FAF9F7',
  '--dsw-alias-markdown-code-segment-selected': '#FFFFFF',
  '--dsw-alias-markdown-code-segment-unselected': '#F7F5F2',
  '--dsw-alias-turn-trigger-bg': '#F2F0ED',
  '--dsw-alias-turn-trigger-bg-hover': 'rgba(26, 24, 21, 0.055)',
  '--dsw-alias-code-diff-added': 'rgba(46, 158, 91, 0.10)',
  '--dsw-alias-code-diff-deleted': 'rgba(229, 72, 77, 0.10)',
  '--dsw-alias-file-diff-added-bg': '#EAF7EF',
  '--dsw-alias-file-diff-added-gutter': '#F3FAF6',
  '--dsw-alias-file-diff-added-marker': '#2E9E5B',
  '--dsw-alias-file-diff-deleted-bg': '#FBEEEE',
  '--dsw-alias-file-diff-deleted-gutter': '#FDF5F5',
  '--dsw-alias-file-diff-deleted-marker': '#E5484D',

  // ── 滚动条 / 浮层 / 表单 ──
  '--dsw-alias-scrollbar-bg-l1': 'rgba(26, 24, 21, 0.14)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(26, 24, 21, 0.14)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(74, 70, 63, 0.38)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(74, 70, 63, 0.38)',
  '--dsw-alias-toast-bg': '#1A1815',
  '--dsw-alias-toast-label': '#FFFFFF',
  '--dsw-alias-tooltip-bg': '#1A1815',
  '--dsw-alias-tooltip-label': '#FFFFFF',
  '--dsw-alias-tooltip-key-bg': '#4A463F',
  '--dsw-alias-menu-group-header-fill': 'rgba(242, 240, 237, 0.95)',
  '--dsw-alias-switch-thumb': '#FFFFFF',
  '--dsw-alias-settings-card-fill': '#FFFFFF',
  '--dsw-alias-settings-card-stroke': 'rgba(26, 24, 21, 0.12)',
  '--dsw-alias-onboarding-accent': '#1783FF',
  '--dsw-alias-onboarding-card-fill': '#FFFFFF',
  '--dsw-alias-onboarding-secondary-fill': '#F2F0ED',
  '--dsw-alias-onboarding-checkbox-border': 'rgba(26, 24, 21, 0.22)',
  '--dsw-focus-ring-color': '#1783FF',
  '--dsw-alias-icon-blue': '#1783FF',

  // ── 特定表面：侧栏与主区明确分色 ──
  '--dsw-specific-sidebar-fill': '#F2F0ED',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(23, 131, 255, 0.13)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#1783FF',
  '--dsw-specific-bubble': 'rgba(23, 131, 255, 0.09)',
  '--dsw-specific-bubble-highlight': 'rgba(23, 131, 255, 0.18)',
  '--dsw-specific-input-major': '#FFFFFF',
  '--dsw-specific-login-input': '#FFFFFF',
  '--dsw-specific-selector': '#1783FF',
  '--dsw-specific-tip': '#F2F0ED',
  '--dsw-specific-menu-item-hover': '#F2F0ED',
  '--dsw-specific-menu': '#FFFFFF',
  '--dsw-menu-surface-fill': 'rgba(255, 255, 255, 0.82)',
  '--dsw-menu-backdrop-filter': 'blur(20px) saturate(180%)',

  // ── Kimi 私有：亮色 ──
  '--km-primary': '#1783FF',
  '--km-primary-hover': '#0E6FE8',
  '--km-primary-active': '#0A5FC8',
  '--km-primary-soft': 'rgba(23, 131, 255, 0.10)',
  '--km-primary-softer': 'rgba(23, 131, 255, 0.06)',
  '--km-primary-border': 'rgba(23, 131, 255, 0.32)',
  '--km-gradient': 'linear-gradient(135deg, #4DA0FF 0%, #1783FF 45%, #2F20FF 100%)',
  '--km-gradient-soft': 'linear-gradient(135deg, rgba(77,160,255,.14) 0%, rgba(47,32,255,.10) 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #2E93FF 0%, #1783FF 50%, #0E6FE8 100%)',
  '--km-gradient-text': 'linear-gradient(135deg, #1783FF 0%, #2F20FF 100%)',
  '--km-user-bubble': 'rgba(23, 131, 255, 0.09)',
  '--km-glass-blur': 'blur(20px) saturate(180%)',
  '--km-glass-fill': 'rgba(255, 255, 255, 0.78)',
  '--km-composer-radius': '28px',
  '--km-composer-shadow': '0 8px 32px rgba(23, 131, 255, 0.10), 0 2px 8px rgba(0, 0, 0, 0.04)',
  '--km-content-max-width': '768px',
  '--km-ease': 'cubic-bezier(.25, 1, .3, 1)',
  '--km-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.22s',
})

/**
 * 暗色色板 —— 强化版。深中性底 + 提亮主色 + 强玻璃。
 */
export const DARK = Object.freeze({
  '--dsw-static-neutral-bluish-950': '#0F0F0E',
  '--dsw-static-neutral-bluish-875': '#171715',
  '--dsw-static-neutral-bluish-850': '#1C1C1A',
  '--dsw-static-neutral-bluish-800': '#242422',
  '--dsw-static-neutral-bluish-750': '#2E2E2B',
  '--dsw-static-neutral-bluish-700': '#3D3D39',
  '--dsw-static-neutral-bluish-600': '#52524D',
  '--dsw-static-neutral-bluish-500': '#6E6E68',
  '--dsw-static-neutral-bluish-400': '#8F8F88',
  '--dsw-static-neutral-bluish-300': '#B5B5AD',
  '--dsw-static-neutral-bluish-200': '#D8D8D0',
  '--dsw-static-neutral-bluish-150': '#2E2E2B',
  '--dsw-static-neutral-bluish-100': '#3D3D39',
  '--dsw-static-neutral-bluish-75': '#242422',
  '--dsw-static-neutral-bluish-60': '#242422',
  '--dsw-static-neutral-bluish-50': '#F2F0ED',
  '--dsw-static-neutral-bluish-00': '#FFFFFF',
  '--dsw-static-neutral-bluish-1000': '#080807',

  // 主区 #171715，侧栏 #0F0F0E（更深）—— 分色明确
  '--dsw-alias-bg-base': '#171715',
  '--dsw-alias-bg-layer-1': '#1C1C1A',
  '--dsw-alias-bg-layer-2': '#242422',
  '--dsw-alias-bg-layer-3': '#2E2E2B',
  '--dsw-alias-bg-layer-4': '#3D3D39',
  '--dsw-alias-bg-overlay': '#242422',
  '--dsw-alias-bg-module-platform': '#0F0F0E',
  '--dsw-alias-bg-multi-select': 'rgba(26, 136, 255, 0.22)',
  '--dsw-alias-bg-l1': '#1C1C1A',
  '--dsw-alias-bg-l2': '#242422',
  '--dsw-alias-background-secondary': '#242422',
  '--dsw-alias-bg-document-preview': '#1C1C1A',
  '--dsw-alias-bg-document-selection': 'rgba(26, 136, 255, 0.34)',
  '--dsw-alias-bg-skeleton': 'rgba(255, 255, 255, 0.06)',
  '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.55)',
  '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.28)',
  '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.65)',
  '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.9)',
  '--dsw-alias-bg-mask-drop': 'rgba(28, 28, 26, 0.75)',

  '--dsw-alias-border-l1': 'rgba(255, 255, 255, 0.08)',
  '--dsw-alias-border-l2': 'rgba(255, 255, 255, 0.13)',
  '--dsw-alias-border-subtle': 'rgba(255, 255, 255, 0.11)',
  '--dsw-alias-border-l2-darkmode-thin': 'rgba(255, 255, 255, 0.09)',
  '--dsw-alias-border-l3': 'rgba(255, 255, 255, 0.18)',
  '--dsw-alias-border-l4': 'rgba(255, 255, 255, 0.24)',
  '--dsw-alias-border-inverted': 'rgba(255, 255, 255, 0.07)',
  '--dsw-alias-border-inverted2': 'rgba(255, 255, 255, 0.13)',
  '--dsw-alias-separator-primary': 'rgba(255, 255, 255, 0.11)',

  '--dsw-alias-label-primary': '#F2F0ED',
  '--dsw-alias-label-primary-foreground': '#0F0F0E',
  '--dsw-alias-label-primary-inverted': '#1A1815',
  '--dsw-alias-label-primary-dimmed': 'rgba(242, 240, 237, 0.65)',
  '--dsw-alias-label-primary-bluish': '#4DA0FF',
  '--dsw-alias-label-secondary': 'rgba(242, 240, 237, 0.68)',
  '--dsw-alias-label-tertiary': 'rgba(242, 240, 237, 0.52)',
  '--dsw-alias-label-caption': 'rgba(242, 240, 237, 0.42)',
  '--dsw-alias-label-dimmed': 'rgba(242, 240, 237, 0.32)',
  '--dsw-alias-label-quaternary': 'rgba(242, 240, 237, 0.36)',
  '--dsw-alias-label-error': '#FF6B70',
  '--dsw-alias-label-shimmer': 'rgba(255, 255, 255, 0.45)',
  '--dsw-alias-label-document-preview': '#B5B5AD',
  '--dsw-alias-menu-icon': 'rgba(242, 240, 237, 0.68)',

  '--dsw-alias-brand-primary': '#1A88FF',
  '--dsw-alias-brand-primary-invert': '#0F0F0E',
  '--dsw-alias-brand-text': '#4DA0FF',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#1A88FF',
  '--dsw-alias-state-business-primary': '#1A88FF',
  '--dsw-alias-state-business-tertiary': 'rgba(26, 136, 255, 0.18)',
  '--dsw-alias-button-primary-fill': '#1A88FF',
  '--dsw-alias-button-primary-hover': '#3D9BFF',
  '--dsw-alias-button-primary-dimmed': 'rgba(26, 136, 255, 0.26)',
  '--dsw-alias-button-contrast-fill': '#F2F0ED',
  '--dsw-alias-button-elevated-fill': '#242422',
  '--dsw-alias-button-floating-fill': '#242422',
  '--dsw-alias-button-floating-hover': '#2E2E2B',
  '--dsw-alias-button-ghost-active-fill': 'rgba(26, 136, 255, 0.18)',
  '--dsw-alias-button-ghost-active-hover': 'rgba(26, 136, 255, 0.26)',
  '--dsw-alias-button-ghost-active-border': 'rgba(77, 160, 255, 0.40)',
  '--dsw-alias-button-info-fill': '#1A88FF',
  '--dsw-alias-button-info-hover': '#3D9BFF',
  '--dsw-alias-button-tool-bar-fill': 'rgba(143, 143, 136, 0.52)',
  '--dsw-alias-button-tool-bar-fill-invisible': 'rgba(82, 82, 77, 0.38)',
  '--dsw-alias-button-tool-bar-hover': 'rgba(143, 143, 136, 0.66)',

  '--dsw-alias-interactive-bg-hover': 'rgba(255, 255, 255, 0.06)',
  '--dsw-alias-interactive-bg-hover-solid': '#242422',
  '--dsw-alias-interactive-bg-active': 'rgba(26, 136, 255, 0.20)',
  '--dsw-alias-interactive-bg-hover-accent': 'rgba(26, 136, 255, 0.18)',
  '--dsw-alias-interactive-bg-hover-danger': 'rgba(255, 107, 112, 0.14)',
  '--dsw-alias-fill-l1': 'rgba(255, 255, 255, 0.055)',
  '--dsw-alias-fill-l2': 'rgba(255, 255, 255, 0.09)',
  '--dsw-alias-fill-tertiary': 'rgba(255, 255, 255, 0.09)',
  '--dsw-alias-fill-tsp-secondary': 'rgba(255, 255, 255, 0.055)',

  '--dsw-static-green-500': '#4ADE80',
  '--dsw-static-green-400': '#4ADE80',
  '--dsw-static-green-100': 'rgba(74, 222, 128, 0.18)',
  '--dsw-static-green-900': 'rgba(74, 222, 128, 0.18)',
  '--dsw-static-green-500-a08': 'rgba(74, 222, 128, 0.10)',
  '--dsw-static-green-500-a12': 'rgba(74, 222, 128, 0.14)',
  '--dsw-static-red-600': '#FF6B70',
  '--dsw-static-red-500': '#FF6B70',
  '--dsw-static-red-400': '#FF6B70',
  '--dsw-static-red-100': 'rgba(255, 107, 112, 0.18)',
  '--dsw-static-red-900': 'rgba(255, 107, 112, 0.18)',
  '--dsw-static-red-400-a12': 'rgba(255, 107, 112, 0.14)',
  '--dsw-static-red-600-a08': 'rgba(255, 107, 112, 0.10)',
  '--dsw-static-amber-500': '#FFA640',
  '--dsw-static-amber-400': '#FFA640',
  '--dsw-static-amber-600': '#FFA640',
  '--dsw-static-amber-100': 'rgba(255, 166, 64, 0.18)',
  '--dsw-static-amber-900': 'rgba(255, 166, 64, 0.18)',
  '--dsw-alias-state-success-primary': '#4ADE80',
  '--dsw-alias-state-success-secondary': '#4ADE80',
  '--dsw-alias-state-success-tertiary': 'rgba(74, 222, 128, 0.18)',
  '--dsw-alias-state-error-primary': '#FF6B70',
  '--dsw-alias-state-error-secondary': '#FF6B70',
  '--dsw-alias-state-warn-primary': '#FFA640',
  '--dsw-alias-state-warning-primary': '#FFA640',
  '--dsw-alias-state-warn-secondary': '#FFA640',
  '--dsw-alias-state-warn-label': '#FFA640',
  '--dsw-alias-state-warn-tertiary': 'rgba(255, 166, 64, 0.18)',
  '--dsw-alias-state-idle-primary': '#6E6E68',

  '--dsw-static-deepseek-500': '#1A88FF',
  '--dsw-static-deepseek-450': '#1A88FF',
  '--dsw-static-deepseek-400': '#1A88FF',
  '--dsw-static-deepseek-600': '#3D9BFF',
  '--dsw-static-deepseek-800': 'rgba(26, 136, 255, 0.24)',
  '--dsw-static-deepseek-100': 'rgba(26, 136, 255, 0.16)',
  '--dsw-static-deepseek-50': 'rgba(26, 136, 255, 0.10)',
  '--dsw-static-deepseek-200': 'rgba(26, 136, 255, 0.22)',
  '--dsw-static-deepseek-300': 'rgba(26, 136, 255, 0.32)',
  '--dsw-alias-link': '#4DA0FF',
  '--dsw-alias-label-deep-diving': '#4DA0FF',
  '--dsw-alias-label-deep-diving-shimmer': 'rgba(77, 160, 255, 0.34)',
  '--dsw-static-blue-500': '#1A88FF',
  '--dsw-static-blue-450': '#1A88FF',
  '--dsw-static-blue-400': '#4DA0FF',
  '--dsw-static-blue-300': '#80BBFF',
  '--dsw-static-blue-100': 'rgba(26, 136, 255, 0.18)',

  '--dsw-alias-markdown-code-block': '#1C1C1A',
  '--dsw-alias-markdown-code-block-banner': '#242422',
  '--dsw-alias-markdown-inline-code': 'rgba(26, 136, 255, 0.16)',
  '--dsw-alias-markdown-code-editor-bg': '#080807',
  '--dsw-alias-markdown-code-editor-fg': '#F2F0ED',
  '--dsw-alias-markdown-tag': '#2E2E2B',
  '--dsw-alias-markdown-citation': '#242422',
  '--dsw-alias-markdown-placeholder': '#1C1C1A',
  '--dsw-alias-markdown-code-segment-selected': '#242422',
  '--dsw-alias-markdown-code-segment-unselected': '#171715',
  '--dsw-alias-turn-trigger-bg': '#242422',
  '--dsw-alias-turn-trigger-bg-hover': 'rgba(255, 255, 255, 0.06)',
  '--dsw-alias-code-diff-added': 'rgba(74, 222, 128, 0.14)',
  '--dsw-alias-code-diff-deleted': 'rgba(255, 107, 112, 0.14)',
  '--dsw-alias-file-diff-added-bg': '#16301F',
  '--dsw-alias-file-diff-added-gutter': '#101F15',
  '--dsw-alias-file-diff-added-marker': '#4ADE80',
  '--dsw-alias-file-diff-deleted-bg': '#33191B',
  '--dsw-alias-file-diff-deleted-gutter': '#231214',
  '--dsw-alias-file-diff-deleted-marker': '#FF6B70',

  '--dsw-alias-scrollbar-bg-l1': 'rgba(255, 255, 255, 0.14)',
  '--dsw-alias-scrollbar-bg-l2': 'rgba(255, 255, 255, 0.14)',
  '--dsw-alias-scrollbar-hover-l1': 'rgba(242, 240, 237, 0.34)',
  '--dsw-alias-scrollbar-hover-l2': 'rgba(242, 240, 237, 0.34)',
  '--dsw-alias-toast-bg': '#2E2E2B',
  '--dsw-alias-toast-label': '#F2F0ED',
  '--dsw-alias-tooltip-bg': '#2E2E2B',
  '--dsw-alias-tooltip-label': '#FFFFFF',
  '--dsw-alias-tooltip-key-bg': '#3D3D39',
  '--dsw-alias-menu-group-header-fill': 'rgba(23, 23, 21, 0.95)',
  '--dsw-alias-switch-thumb': '#F2F0ED',
  '--dsw-alias-settings-card-fill': '#1C1C1A',
  '--dsw-alias-settings-card-stroke': 'rgba(255, 255, 255, 0.13)',
  '--dsw-alias-onboarding-accent': '#1A88FF',
  '--dsw-alias-onboarding-card-fill': '#1C1C1A',
  '--dsw-alias-onboarding-secondary-fill': '#242422',
  '--dsw-alias-onboarding-checkbox-border': 'rgba(255, 255, 255, 0.24)',
  '--dsw-focus-ring-color': '#4DA0FF',
  '--dsw-alias-icon-blue': '#4DA0FF',

  '--dsw-specific-sidebar-fill': '#0F0F0E',
  '--dsw-specific-sidebar-nav-item-active': 'rgba(26, 136, 255, 0.18)',
  '--dsw-specific-sidebar-nav-item-active-accent': '#4DA0FF',
  '--dsw-specific-bubble': 'rgba(26, 136, 255, 0.14)',
  '--dsw-specific-bubble-highlight': 'rgba(26, 136, 255, 0.24)',
  '--dsw-specific-input-major': '#1C1C1A',
  '--dsw-specific-login-input': '#1C1C1A',
  '--dsw-specific-selector': '#4DA0FF',
  '--dsw-specific-tip': '#242422',
  '--dsw-specific-menu-item-hover': '#2E2E2B',
  '--dsw-specific-menu': '#1C1C1A',
  '--dsw-menu-surface-fill': 'rgba(36, 36, 34, 0.82)',
  '--dsw-menu-backdrop-filter': 'blur(20px) saturate(180%)',

  '--km-primary': '#1A88FF',
  '--km-primary-hover': '#3D9BFF',
  '--km-primary-active': '#5CADFF',
  '--km-primary-soft': 'rgba(26, 136, 255, 0.18)',
  '--km-primary-softer': 'rgba(26, 136, 255, 0.10)',
  '--km-primary-border': 'rgba(77, 160, 255, 0.38)',
  '--km-gradient': 'linear-gradient(135deg, #4DA0FF 0%, #1A88FF 45%, #2F20FF 100%)',
  '--km-gradient-soft': 'linear-gradient(135deg, rgba(77,160,255,.18) 0%, rgba(47,32,255,.14) 100%)',
  '--km-gradient-button': 'linear-gradient(135deg, #4DA0FF 0%, #1A88FF 50%, #0E6FE8 100%)',
  '--km-gradient-text': 'linear-gradient(135deg, #4DA0FF 0%, #8B7BFF 100%)',
  '--km-user-bubble': 'rgba(26, 136, 255, 0.14)',
  '--km-glass-blur': 'blur(20px) saturate(180%)',
  '--km-glass-fill': 'rgba(36, 36, 34, 0.78)',
  '--km-composer-radius': '28px',
  '--km-composer-shadow': '0 8px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06)',
  '--km-content-max-width': '768px',
  '--km-ease': 'cubic-bezier(.25, 1, .3, 1)',
  '--km-ease-out': 'cubic-bezier(.23, 1, .32, 1)',
  '--km-dur': '.15s',
  '--km-dur-mid': '.22s',
})

/**
 * 结构规则 —— v2 显著加强，这是辨识度的主要来源。
 *
 * 纪律不变：**不针对 DSH 的 CSS Module 哈希类名写规则**。所有选择器只用
 * 实测确认存在的宿主 `data-*` 锚点，加上 `:root` / `body`。
 */
export const STRUCTURE_CSS = `
/* 原生控件跟随皮肤。 */
:root:root body{color-scheme:light}
:root:root body[data-ds-dark-theme]{color-scheme:dark}

/* 字体归一：零特异性，只压过 UA 默认值。 */
:where(body){font-family:var(--dsw-font-family);font-variant-numeric:tabular-nums}
:where(button,input,select,textarea){font-family:inherit}

/* ── 输入框：28px 大圆角 + 品牌光晕阴影 ──────────────────────────── */
[data-composer-card]{
  border-radius:var(--km-composer-radius)!important;
  box-shadow:var(--km-composer-shadow)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  background:var(--dsw-alias-bg-layer-1)!important;
  transition:box-shadow var(--km-dur-mid) var(--km-ease),border-color var(--km-dur) var(--km-ease-out)!important;
}
[data-composer-card]:focus-within{
  border-color:var(--km-primary)!important;
  box-shadow:0 0 0 4px var(--km-primary-softer),var(--km-composer-shadow)!important;
}

/* ── 消息气泡：20px 圆角，用户气泡上品牌色 ────────────────────── */
[data-message-bubble]{
  border-radius:var(--dsw-radius-lg)!important;
}

/* ── 快捷胶囊：玻璃 + 渐变 hover ──────────────────────────────── */
[data-composer-chip]{
  border-radius:var(--dsw-radius-full)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  background:var(--km-glass-fill)!important;
  backdrop-filter:var(--km-glass-blur)!important;
  -webkit-backdrop-filter:var(--km-glass-blur)!important;
  color:var(--dsw-alias-label-secondary)!important;
  transition:all var(--km-dur) var(--km-ease-out)!important;
}
[data-composer-chip]:hover{
  border-color:var(--km-primary-border)!important;
  color:var(--km-primary)!important;
  background:var(--km-primary-soft)!important;
  transform:translateY(-1px)!important;
  box-shadow:0 4px 12px var(--km-primary-softer)!important;
}
[data-composer-chip][data-composer-chip-selected],
[data-composer-chip][aria-pressed=true]{
  border-color:var(--km-primary)!important;
  color:#fff!important;
  background:var(--km-gradient-button)!important;
  box-shadow:0 4px 14px var(--km-primary-soft)!important;
}

/* ── 主按钮：品牌渐变（v2 的核心识别点之一） ──────────────────── */
[data-composer-card] button[class*="primary"],
[data-composer-card] [data-composer-command]{
  background:var(--km-gradient-button)!important;
  color:#fff!important;
  border:0!important;
  border-radius:var(--dsw-radius-full)!important;
  box-shadow:0 4px 14px var(--km-primary-soft)!important;
  transition:transform var(--km-dur) var(--km-ease-out),box-shadow var(--km-dur) var(--km-ease-out)!important;
}
[data-composer-card] button[class*="primary"]:hover,
[data-composer-card] [data-composer-command]:hover{
  transform:translateY(-1px)!important;
  box-shadow:0 6px 20px var(--km-primary-border)!important;
}

/* ── 浮层：强玻璃质感 ────────────────────────────────────────── */
[data-menu-field],[data-context-menu],[data-global-panel]{
  backdrop-filter:var(--km-glass-blur)!important;
  -webkit-backdrop-filter:var(--km-glass-blur)!important;
  border-radius:var(--dsw-radius-xl)!important;
  border:1px solid var(--dsw-alias-border-l2)!important;
  box-shadow:var(--dsw-shadow-lv3)!important;
}

/* ── 代码块 / 引用：大圆角 + 品牌化引用边 ────────────────────── */
[data-code-block-banner]{border-radius:var(--dsw-radius-lg) var(--dsw-radius-lg) 0 0!important}
[data-conversation-scroll] pre{border-radius:var(--dsw-radius-lg)!important}
[data-conversation-scroll] blockquote{
  border-radius:var(--dsw-radius-lg)!important;
  border-left:3px solid var(--km-primary)!important;
  background:var(--km-gradient-soft)!important;
  padding-left:16px!important;
}

/* ── 滚动条：更细更淡 ──────────────────────────────────────── */
:root:root ::-webkit-scrollbar{width:var(--dsh-scrollbar-width);height:var(--dsh-scrollbar-width)}
:root:root ::-webkit-scrollbar-thumb{
  background:var(--dsw-alias-scrollbar-bg-l1);
  border-radius:9999px;
  border:var(--dsh-scrollbar-thumb-border) solid transparent;
  background-clip:padding-box;
}
:root:root ::-webkit-scrollbar-thumb:hover{background:var(--dsw-alias-scrollbar-hover-l1);background-clip:padding-box}
:root:root ::-webkit-scrollbar-track{background:transparent}

/* ── 焦点环：品牌色 ────────────────────────────────────────── */
:root:root body :focus-visible{outline-color:var(--dsw-focus-ring-color)}

/* ── 选中文本：品牌色 ──────────────────────────────────────── */
:root:root body ::selection{background:var(--km-primary-soft);color:var(--dsw-alias-label-primary)}

@media (prefers-reduced-motion: reduce){
  [data-composer-card],[data-composer-chip],
  [data-composer-card] button[class*="primary"]{transition:none!important;transform:none!important}
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
    `/* v2: 以 Kimi 的设计语言为准（渐变/大圆角/玻璃/分色），不再逐值照搬。详见 docs/DESIGN.md */`,
    renderTokenBlock(LIGHT_SELECTOR, LIGHT),
    renderTokenBlock(DARK_SELECTOR, DARK),
    structural,
    STRUCTURE_CSS,
  ].join('\n')
}
