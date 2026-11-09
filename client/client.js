/* dsh-kimi-ui — 自动生成，请勿直接编辑。
 * 源码：src/tokens.mjs + src/artwork.mjs + src/components.mjs + src/client.mjs
 * 生成：node scripts/build.mjs
 */
window.__ModuleLoader__.load({
	id: 'dsh-kimi-ui',
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

		const __MOD_TOKENS__ = (() => {
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
		const SKIN_VERSION = '2.0.0'

		/** 标记属性，注入到 <html> 上。 */
		const SKIN_ATTRIBUTE = 'data-dsh-kimi-skin'

		/** 样式标签的稳定标识。 */
		const STYLE_TAG_ID = 'dsh-kimi-ui/skin.css'

		/** 亮色选择器：特异性 (0,2,1)。 */
		const LIGHT_SELECTOR = ':root:root body'

		/** 暗色选择器：特异性 (0,3,1)。 */
		const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

		/**
		 * 几何 / 排版令牌 —— v2 刻意放大，这是辨识度的主要来源之一。
		 */
		const STRUCTURAL = Object.freeze({
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
		const LIGHT = Object.freeze({
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
		const DARK = Object.freeze({
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
		const STRUCTURE_CSS = `
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
		function renderTokenBlock(selector, tokens) {
		  return `${selector}{${Object.entries(tokens)
		    .map(([name, value]) => `${name}:${value}`)
		    .join(';')}}`
		}

		/** 生成完整皮肤样式表。 */
		function renderSkinCss() {
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

		return { SKIN_VERSION, SKIN_ATTRIBUTE, STYLE_TAG_ID, LIGHT_SELECTOR, DARK_SELECTOR, STRUCTURAL, LIGHT, DARK, STRUCTURE_CSS, renderTokenBlock, renderSkinCss };
		})();

		const __MOD_ARTWORK__ = (() => {
		/**
		 * 原创图形资产 —— 纯内联 SVG 字符串，不含任何来自 Kimi / 夸克客户端的图片。
		 *
		 * 合规说明：本插件不复制任何厂商的图标、吉祥物或受版权保护的素材。这里画的
		 * 是一个**自创的「月牙 + 星点」标记**，呼应 Kimi（月之暗面 Moonshot）的
		 * 「月」意象，但形状与构图均为本项目原创，不是任何 logo 的临摹。
		 *
		 * v2 形状语言：品牌蓝 → 深紫的三段渐变 + 柔和内高光 + 月牙 + 星芒，
		 * 比 v1 更饱和、更有体积感。
		 */

		/** 侧栏 / hero 共用的方形标记（viewBox 0 0 48 48）。 */
		const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="">
		  <defs>
		    <linearGradient id="km-g" x1="0" y1="0" x2="1" y2="1">
		      <stop offset="0" stop-color="#5FB0FF"/>
		      <stop offset="0.45" stop-color="#1783FF"/>
		      <stop offset="1" stop-color="#2F20FF"/>
		    </linearGradient>
		    <linearGradient id="km-shine" x1="0" y1="0" x2="0" y2="1">
		      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.38"/>
		      <stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0"/>
		    </linearGradient>
		  </defs>
		  <rect x="2" y="2" width="44" height="44" rx="16" fill="url(#km-g)"/>
		  <rect x="2" y="2" width="44" height="44" rx="16" fill="url(#km-shine)"/>
		  <path d="M30 11.5a12.5 12.5 0 1 0 0 25 10 10 0 1 1 0-25z" fill="#fff" fill-opacity=".97"/>
		  <circle cx="35" cy="16.5" r="1.9" fill="#fff" fill-opacity=".92"/>
		  <circle cx="38" cy="24.5" r="1.2" fill="#fff" fill-opacity=".75"/>
		  <circle cx="34.5" cy="31" r="0.85" fill="#fff" fill-opacity=".6"/>
		</svg>`

		/** 作为 `<img src>` 使用的 data URL。 */
		function markDataUrl() {
		  try {
		    return 'data:image/svg+xml;base64,' + btoa(MARK_SVG)
		  } catch {
		    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(MARK_SVG)
		  }
		}

		return { MARK_SVG, markDataUrl };
		})();

		const __MOD_COMPONENTS__ = (() => {
		/**
		 * dsh-kimi-ui — React 组件层（源码）
		 *
		 * 这一层让皮肤不止于换颜色：
		 *   1. sidebar.brand.mark / sidebar.brand.name  → 自创月牙标记 + 名称
		 *   2. conversation.hero.brand.mark             → 首页大号标记
		 *   3. conversation.hero.options                → 快捷入口胶囊
		 *   4. settings.section                          → 「关于」页
		 *
		 * 全部通过官方 `ctx.slots.inject` / `ctx.slots.register` 声明式注册，
		 * 不直接改宿主 DOM、不碰会话数据、不注册工具、不联网。
		 *
		 * ── 安全纪律 ───────────────────────────────────────────────────────────
		 * DSH 客户端 Loader **不隔离 entry 工厂**：一个工厂抛异常会聚合成
		 * "entries did not activate"，把整个 Web 壳带崩。所以：
		 *   - 模块顶层**绝不** require('react')，改由 bindReact() 惰性绑定；
		 *   - 每个 slots.inject 都单独 try/catch，某个插槽不存在/已声明不影响其余；
		 *   - 组件内部不访问可能为空的 ctx 服务，全部用可选链 + 默认值。
		 *
		 * 关于 priority：-1 是社区皮肤已验证的写法，用来盖掉
		 * 官方 dsh-client-ui-brand-official（默认优先级 0）的占位。
		 */

		let __jsx = null
		let __jsxs = null

		/**
		 * 惰性绑定 React 种子模块；成功返回 true，失败返回 false（绝不抛）。
		 *
		 * 为什么不在模块顶层 require：工厂一进入就会求值所有内联模块体；若此时
		 * React 种子缺失，抛出的异常发生在调用方的 try 之外，会直接把 Web 壳带崩。
		 */
		function bindReact(requireFn) {
		  try {
		    const React = requireFn('react')
		    const runtime = requireFn('react/jsx-runtime')
		    if (!React || !runtime || typeof runtime.jsx !== 'function') return false
		    __jsx = runtime.jsx
		    __jsxs = runtime.jsxs ?? runtime.jsx
		    return true
		  } catch {
		    return false
		  }
		}

		/** 渲染助手：未绑定时返回 null，不抛异常。 */
		const jsx = (...args) => (__jsx ? __jsx(...args) : null)
		const jsxs = (...args) => (__jsxs ? __jsxs(...args) : null)

		const { markDataUrl } = __MOD_ARTWORK__

		const PLUGIN_ID = 'dsh-kimi-ui'
		const NS = 'settings.kimiUi'

		/** 快捷入口文案。Kimi 首页同族能力，用中性措辞避免绑定具体厂商文案。 */
		const QUICK_ACTIONS = [
		  { id: 'search', label: 'AI 搜索', prompt: '帮我搜索并总结：' },
		  { id: 'read', label: '长文阅读', prompt: '帮我阅读并总结这份长文：\n' },
		  { id: 'write', label: '帮我写作', prompt: '帮我写一段：' },
		  { id: 'translate', label: '翻译', prompt: '请把下面内容翻译成中文：\n' },
		]

		/** 组件层样式，命名空间 .km-*，与皮肤层令牌解耦。 */
		const COMPONENT_CSS = `
		.km-mark{display:block;flex:none;border-radius:32%;user-select:none;-webkit-user-drag:none;filter:drop-shadow(0 2px 6px rgba(23,131,255,.30))}
		.km-brand{display:inline-flex;align-items:center;gap:8px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.01em;font-weight:700;font-size:15px;background:var(--km-gradient-text,linear-gradient(135deg,#1783FF,#2F20FF));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:var(--km-primary,#1783FF)}
		.km-hero-mark{display:block;border-radius:34%;box-shadow:0 12px 32px rgba(23,131,255,.34),0 0 0 1px rgba(255,255,255,.10) inset;transition:transform var(--km-dur-mid,.22s) var(--km-ease-out,cubic-bezier(0,.0,.2,1))}
		.km-hero-mark:hover{transform:translateY(-2px) scale(1.03)}
		.km-quick{display:flex;flex-wrap:wrap;gap:9px;justify-content:center;width:100%;padding:4px 0 0;box-sizing:border-box}
		.km-chip{appearance:none;display:inline-flex;align-items:center;gap:6px;min-height:34px;padding:0 16px;border:1px solid var(--dsw-alias-border-l2,rgba(0,0,0,.12));border-radius:9999px;background:var(--km-glass-fill,rgba(255,255,255,.78));backdrop-filter:var(--km-glass-blur,blur(20px) saturate(180%));-webkit-backdrop-filter:var(--km-glass-blur,blur(20px) saturate(180%));color:var(--dsw-alias-label-secondary,rgba(0,0,0,.85));font:inherit;font-size:13px;font-weight:500;line-height:20px;cursor:pointer;transition:all var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1))}
		.km-chip:hover{border-color:var(--km-primary-border,rgba(23,131,255,.32));color:var(--km-primary,#1783FF);background:var(--km-primary-soft,rgba(23,131,255,.1));transform:translateY(-1px);box-shadow:0 4px 12px var(--km-primary-softer,rgba(23,131,255,.06))}
		.km-chip:active{transform:translateY(0)}
		.km-chip:focus-visible{outline:2px solid var(--dsw-focus-ring-color,#1783FF);outline-offset:2px}
		.km-about{max-width:760px;display:flex;flex-direction:column;gap:18px;color:var(--dsw-alias-label-primary,#1A1815);font:14px/1.6 var(--dsw-font-family,system-ui)}
		.km-about h2{margin:0;font-size:22px;font-weight:700;line-height:30px;letter-spacing:-.01em}
		.km-about h3{margin:0 0 6px;font-size:15px;font-weight:600}
		.km-about p{margin:0;color:var(--dsw-alias-label-secondary,rgba(26,24,21,.68))}
		.km-about-card{border:1px solid var(--dsw-alias-border-l2,rgba(26,24,21,.12));border-radius:var(--dsw-radius-lg,20px);padding:18px;background:var(--dsw-alias-bg-layer-1,#fff);display:flex;flex-direction:column;gap:8px;transition:box-shadow var(--km-dur-mid,.22s) var(--km-ease-out,cubic-bezier(0,0,.2,1))}
		.km-about-card:hover{box-shadow:0 6px 20px rgba(23,131,255,.10)}
		.km-about-head{display:flex;align-items:center;gap:14px}
		.km-about-head img{width:44px;height:44px;border-radius:32%;flex:none;box-shadow:0 6px 18px rgba(23,131,255,.28)}
		.km-about-badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:9999px;font-size:12px;font-weight:600;line-height:18px;background:var(--km-gradient-soft,linear-gradient(135deg,rgba(77,160,255,.14),rgba(47,32,255,.10)));color:var(--km-primary,#1783FF);border:1px solid var(--km-primary-border,rgba(23,131,255,.32))}
		.km-about-tip{margin:0;font-size:12.5px;color:var(--dsw-alias-label-tertiary,rgba(26,24,21,.52))}
		.km-about a{color:var(--km-primary,#1783FF);text-decoration:none}
		.km-about a:hover{text-decoration:underline}
		@media (prefers-reduced-motion: reduce){.km-chip,.km-hero-mark,.km-about-card{transition:none}.km-hero-mark:hover{transform:none}}
		`.trim()

		/** 幂等安装组件层样式（与皮肤层同一约定，便于 HMR 回收）。 */
		function installComponentStyles(doc) {
		  if (typeof doc === 'undefined' || doc === null || doc.head == null) return () => {}
		  const id = 'dsh-kimi-ui/components.css'
		  let tag = doc.querySelector(`style[data-plugin-css="${id}"]`)
		  if (tag === null) {
		    tag = doc.createElement('style')
		    tag.dataset.plugin = PLUGIN_ID
		    tag.dataset.pluginCss = id
		    doc.head.appendChild(tag)
		  }
		  tag.textContent = COMPONENT_CSS
		  return () => {
		    try { tag?.remove() } catch { /* ignore */ }
		  }
		}

		/** 派发 `input` 事件，让 React 的受控组件感知到值变化。三级兜底。 */
		function dispatchInput(el) {
		  try {
		    const view = el.ownerDocument?.defaultView
		    const Ctor = view?.Event ?? (typeof Event !== 'undefined' ? Event : null)
		    if (Ctor !== null && Ctor !== undefined) {
		      el.dispatchEvent(new Ctor('input', { bubbles: true }))
		      return
		    }
		  } catch { /* 落到下一级 */ }
		  try {
		    const ev = el.ownerDocument.createEvent('Event')
		    ev.initEvent('input', true, false)
		    el.dispatchEvent(ev)
		  } catch { /* 事件发不出就算了，值已经写进去了 */ }
		}

		/**
		 * 把预置提示词写进当前输入框。
		 *
		 * 用宿主公开的稳定锚点 `[data-composer-input]` 找真实输入元素，
		 * 走原型上的原生 setter 写值（绕过 React 的值追踪），再派发冒泡 input 事件。
		 * 找不到输入框时返回 false，绝不抛异常。
		 */
		function insertDraft(text) {
		  try {
		    const doc = globalThis.document
		    if (doc === null || doc === undefined) return false
		    const candidates = [
		      '[data-composer-input] textarea',
		      '[data-composer-input] [contenteditable="true"]',
		      '[data-composer-card] textarea',
		      '[data-composer-card] [contenteditable="true"]',
		      '[data-input] textarea',
		      'textarea[data-input]',
		    ]
		    let el = null
		    for (const selector of candidates) {
		      el = doc.querySelector(selector)
		      if (el !== null) break
		    }
		    if (el === null) return false

		    if (el.getAttribute('contenteditable') === 'true') {
		      el.focus?.()
		      el.textContent = text
		      dispatchInput(el)
		      return true
		    }

		    // 用 tagName 判断而不是 instanceof —— 后者在跨 realm 场景会误判。
		    const tag = String(el.tagName ?? '').toUpperCase()
		    const view = el.ownerDocument?.defaultView
		    const Ctor = tag === 'TEXTAREA' ? view?.HTMLTextAreaElement : view?.HTMLInputElement
		    let setter
		    try {
		      setter = Ctor ? Object.getOwnPropertyDescriptor(Ctor.prototype, 'value')?.set : undefined
		    } catch {
		      setter = undefined
		    }
		    el.focus?.()
		    if (typeof setter === 'function') setter.call(el, text)
		    else el.value = text
		    dispatchInput(el)
		    return true
		  } catch {
		    return false
		  }
		}

		/** 侧栏方形标记。props.size 由宿主传入（实测 24）。 */
		function BrandMark(props) {
		  const size = props && typeof props.size === 'number' ? props.size : 24
		  return jsx('img', {
		    'data-kimi-mark': '',
		    className: 'km-mark',
		    src: markDataUrl(),
		    alt: '',
		    'aria-hidden': 'true',
		    draggable: false,
		    style: { width: `${size}px`, height: `${size}px` },
		  })
		}

		/** 侧栏名称。 */
		function BrandName() {
		  return jsx('span', { 'data-kimi-name': '', className: 'km-brand' }, 'Kimi')
		}

		/** 首页大号标记。props.size / props.className 由宿主传入（实测 34）。 */
		function HeroMark(props) {
		  const size = props && typeof props.size === 'number' ? props.size : 34
		  const cls = props && typeof props.className === 'string' ? props.className : ''
		  return jsx('img', {
		    'data-kimi-hero-mark': '',
		    className: `km-hero-mark ${cls}`.trim(),
		    src: markDataUrl(),
		    alt: '',
		    'aria-hidden': 'true',
		    draggable: false,
		    style: { width: `${size}px`, height: `${size}px` },
		  })
		}

		/** 首页快捷入口胶囊：点击把预置提示词写进输入框。 */
		function QuickActions() {
		  return jsxs('div', {
		    className: 'km-quick',
		    'data-kimi-quick': '',
		    role: 'group',
		    'aria-label': '快捷入口',
		    children: QUICK_ACTIONS.map((action) =>
		      jsx('button', {
		        key: action.id,
		        type: 'button',
		        className: 'km-chip',
		        'data-kimi-chip': action.id,
		        onClick: () => { insertDraft(action.prompt) },
		        children: action.label,
		      }),
		    ),
		  })
		}

		/** 「关于」设置页：说明来源、权限边界与回滚方式。 */
		function AboutSection() {
		  return jsxs('div', {
		    className: 'km-about',
		    children: [
		      jsxs('div', { className: 'km-about-head', children: [
		        jsx('img', { src: markDataUrl(), alt: '', 'aria-hidden': 'true' }),
		        jsxs('div', { children: [
		          jsx('h2', { children: 'Kimi 风格皮肤' }),
		          jsx('span', { className: 'km-about-badge', children: 'dsh-kimi-ui · v2.0.0' }),
		        ] }),
		      ] }),
		      jsxs('div', { className: 'km-about-card', children: [
		        jsx('h3', { children: '这是什么' }),
		        jsx('p', { children: '给 DeepSeek Harness Web 换一套 Kimi 风格界面：Kimi 品牌蓝主色、深色优先的表面层级、玻璃质感面板与大圆角几何，外加品牌标记与首页快捷入口。明暗双主题跟随宿主设置。' }),
		      ] }),
		      jsxs('div', { className: 'km-about-card', children: [
		        jsx('h3', { children: '能力边界' }),
		        jsx('p', { children: '本插件只写两张样式表并注册几个界面插槽：不读写文件、不发起网络请求、不注册工具或服务、不写会话记录。停用或卸载后官方界面完整恢复。' }),
		      ] }),
		      jsxs('div', { className: 'km-about-card', children: [
		        jsx('h3', { children: '来源与声明' }),
		        jsx('p', { children: '配色与几何参照 Kimi 公开界面的设计语言，按 DSH 语义重新映射；图标为本项目原创绘制，未复制任何第三方素材。这是个人维护的非官方插件，与月之暗面 / Kimi、DeepSeek 无隶属或背书关系。' }),
		        jsx('p', { className: 'km-about-tip', children: '完整令牌映射与逐项「实测 / 推导」标注见仓库 docs/DESIGN.md。' }),
		      ] }),
		    ],
		  })
		}

		/**
		 * 声明式注册所有插槽。
		 *
		 * 每个注册都独立 try/catch：某个插槽在当前宿主版本不存在、或已被别的插件
		 * 声明（slot already declared），就跳过它，其余照常工作。
		 */
		function registerSlots(ctx) {
		  const slots = ctx && ctx.slots
		  if (!slots || typeof slots.inject !== 'function' || typeof slots.register !== 'function') return

		  // 1. 侧栏品牌：盖掉官方 brand-official（priority -1）
		  try {
		    slots.inject('sidebar.brand.mark', () =>
		      slots.inject('sidebar.brand.name', function* () {
		        try { yield slots.register({ name: 'sidebar.brand.mark', priority: -1 }, BrandMark) } catch { /* slot taken */ }
		        try { yield slots.register({ name: 'sidebar.brand.name', priority: -1 }, BrandName) } catch { /* slot taken */ }
		      }),
		    )
		  } catch { /* 宿主无此插槽 */ }

		  // 2. 首页 hero 标记
		  try {
		    slots.inject('conversation.hero.brand.mark', () =>
		      slots.register({ name: 'conversation.hero.brand.mark', priority: -1 }, HeroMark),
		    )
		  } catch { /* 宿主无此插槽 */ }

		  // 3. 首页快捷胶囊
		  try {
		    slots.inject('conversation.hero.options', () =>
		      slots.register({ name: 'conversation.hero.options', id: 'kimi-quick-actions', order: 80 }, QuickActions),
		    )
		  } catch { /* 宿主无此插槽 */ }

		  // 4. 设置页「关于」
		  try {
		    slots.inject('settings.section', () =>
		      slots.register({
		        name: 'settings.section',
		        id: 'kimi-ui',
		        order: 900,
		        label: () => 'Kimi 皮肤',
		      }, AboutSection),
		    )
		  } catch { /* 宿主无此插槽 */ }
		}


		return { bindReact, installComponentStyles, registerSlots, insertDraft, dispatchInput, BrandMark, BrandName, HeroMark, QuickActions, AboutSection, QUICK_ACTIONS, COMPONENT_CSS, NS };
		})();

		const __MOD_CLIENT__ = (() => {
		/**
		 * dsh-kimi-ui — Kimi 风格皮肤 · 浏览器半（源码）
		 *
		 * 构建产物是 client/client.js：一个由 window.__ModuleLoader__.load 注册的
		 * 工厂式 CJS 模块（与官方 ui-* 包、dsh-doubao-ui 等第三方皮肤完全同一套机制）。
		 * 构建脚本 scripts/build.mjs 把 src/*.mjs 全部内联打包，因此本包**没有运行时
		 * 依赖、没有构建期框架依赖、不需要 pnpm install**。
		 *
		 * 两层贡献：
		 *   - 皮肤层（tokens.mjs）：纯 CSS 变量覆盖，换全站配色与几何。始终生效。
		 *   - 组件层（components.mjs）：React 插槽注册，换品牌标记、首页快捷入口、
		 *     设置页关于入口。宿主无 React / 无插槽时整体安全降级，皮肤层不受影响。
		 *
		 * ── 导出契约 ──────────────────────────────────────────────────────────
		 * 本文件**不使用** `module.exports = {...}`。原因：`module.exports = x` 会让
		 * `module.exports` 指向新对象，而工厂开头 `var exports = module.exports` 拿到的
		 * 是**旧对象**；后续任何 `exports.foo = ...` 都写在废弃对象上，静默丢失。
		 *
		 * ── require 的传递 ────────────────────────────────────────────────────
		 * `apply` 需要工厂的 `require` 来探测 React 种子模块。ESM 源码里没有 `require`
		 * 这个自由变量，所以由构建器在工厂作用域内调用 `createApply(require)`。
		 *
		 * 设计原则（刻意保守，避免把宿主带崩）：
		 *   1. 不替换宿主业务组件、不注册工具、不碰会话数据、不发起网络请求。
		 *   2. 所有平台能力探测与样式注入都包在 try 里；任何一步失败都退化成
		 *      「隐形的哑模块」——绝不让 loader 的 entry 工厂抛异常（loader 不隔离
		 *      工厂：一个工厂抛异常会聚合成 "entries did not activate"，把整个 Web
		 *      壳带崩，这是社区插件最常见的白屏原因）。
		 *   3. 不依赖宿主的 CSS Module 哈希类名。所有选择器走 :root / body /
		 *      data-* 稳定锚点；找不到锚点时什么都不发生，皮肤其余部分不受影响。
		 *   4. 样式标签带 data-plugin / data-plugin-css，遵循 DSH 客户端插件约定，
		 *      让 HMR 驱动与卸载流程能正确回收它。
		 */

		const {
		  SKIN_VERSION,
		  SKIN_ATTRIBUTE,
		  STYLE_TAG_ID,
		  renderSkinCss,
		} = __MOD_TOKENS__

		const PLUGIN_ID = 'dsh-kimi-ui'

		/**
		 * 安全获取 React 组件层。
		 *
		 * `require('react')` / `require('react/jsx-runtime')` 是 DSH 客户端模块系统的
		 * **平台种子模块**（无需在 dsh.client.external 声明），但宿主版本差异或加载
		 * 顺序异常时仍可能抛错。这里把整个组件层的加载包在 try 里：拿不到就返回
		 * null，插件自动退化为「纯 CSS 皮肤」，绝不白屏。
		 */
		function probeComponents(requireFn) {
		  if (typeof requireFn !== 'function') return null
		  try {
		    const components = __MOD_COMPONENTS__
		    if (!components || typeof components.bindReact !== 'function') return null
		    // 绑定失败（React 种子缺失）→ 整体降级为纯 CSS 皮肤。
		    if (!components.bindReact(requireFn)) return null
		    return components
		  } catch {
		    return null
		  }
		}

		/**
		 * 安装皮肤样式表。
		 *
		 * 幂等：同名标签已存在时只替换内容，不重复插入。
		 * 返回卸载函数，供 ctx.effect 在插件停用时回收（同时还原 <html> 标记）。
		 */
		function installSkin(doc) {
		  if (typeof doc === 'undefined' || doc === null || doc.head == null) return () => {}
		  let tag = doc.querySelector(`style[data-plugin-css="${STYLE_TAG_ID}"]`)
		  if (tag === null) {
		    tag = doc.createElement('style')
		    tag.dataset.plugin = PLUGIN_ID
		    tag.dataset.pluginCss = STYLE_TAG_ID
		    doc.head.appendChild(tag)
		  }
		  tag.textContent = renderSkinCss()

		  const root = doc.documentElement
		  const previous = root.getAttribute(SKIN_ATTRIBUTE)
		  root.setAttribute(SKIN_ATTRIBUTE, SKIN_VERSION)

		  return () => {
		    try {
		      tag?.remove()
		      if (previous === null) root.removeAttribute(SKIN_ATTRIBUTE)
		      else root.setAttribute(SKIN_ATTRIBUTE, previous)
		    } catch {
		      /* 卸载时 DOM 可能已经不在了，忽略 */
		    }
		  }
		}

		/**
		 * 在宿主侧栏/会话区打上 `data-kimi-*` 标记，供样式表作为稳定锚点。
		 *
		 * 为什么需要：DSH 的组件类名是 CSS Module 内容哈希（形如 `._8HJdBW_group`），
		 * 上游每次构建都会变。社区皮肤均采用同一策略：
		 * 「主题只能用 data-* 属性选择器，不能依赖宿主类名」。
		 *
		 * 这里用 MutationObserver 只做「加属性」这一件事，且带短路与节流，
		 * 不改动任何元素结构、不注入任何 DOM 节点、不监听业务事件。
		 */
		function markHostSurfaces(doc) {
		  if (typeof doc === 'undefined' || doc === null || doc.body == null) return () => {}

		  const ALIASES = [
		    ['[data-conversation-scroll]', 'data-kimi-conversation'],
		    ['[data-composer-card]', 'data-kimi-composer'],
		    ['[data-phase="hero"]', 'data-kimi-hero-phase'],
		  ]

		  const mark = (root) => {
		    try {
		      for (const [selector, attr] of ALIASES) {
		        const nodes = root.querySelectorAll?.(selector) ?? []
		        for (const node of nodes) {
		          if (!node.hasAttribute(attr)) node.setAttribute(attr, '')
		        }
		      }
		    } catch {
		      /* 单个节点失败不影响其余 */
		    }
		  }

		  mark(doc.body)

		  let observer = null
		  try {
		    if (typeof MutationObserver !== 'undefined') {
		      let frame = 0
		      observer = new MutationObserver(() => {
		        if (frame !== 0) return
		        frame = requestAnimationFrame(() => {
		          frame = 0
		          mark(doc.body)
		        })
		      })
		      observer.observe(doc.body, { childList: true, subtree: true })
		    }
		  } catch {
		    observer = null
		  }

		  return () => {
		    try { observer?.disconnect() } catch { /* ignore */ }
		  }
		}

		/**
		 * 客户端服务注入声明。
		 *
		 * `slots` 是唯一硬依赖：组件层的品牌/首页/设置页注册都需要它。
		 * 即使宿主没有 slots 服务，`apply` 也会安全跳过组件层，CSS 皮肤照常工作。
		 */
		const inject = ['slots']

		/**
		 * 构造真正的 `apply(ctx)`。
		 *
		 * 为什么不直接导出 `apply(ctx, requireFn)`：Loader 只会用 `apply(ctx)` 调用，
		 * 第二个参数恒为 undefined，组件层会被永久静默禁用。因此必须把工厂的 require
		 * 在**闭包**里捕获，导出签名严格为 1 参。
		 */
		function createApply(requireFn) {
		  return function apply(ctx) {
		    const undo = []
		    try {
		      const effect = typeof ctx?.effect === 'function' ? ctx.effect.bind(ctx) : null
		      const register = (fn, label) => {
		        if (effect !== null) {
		          try {
		            effect(fn, label)
		            return
		          } catch {
		            /* 某些宿主版本 effect 签名不同，退回直接调用 */
		          }
		        }
		        undo.push(fn())
		      }

		      const doc = globalThis.document

		      // 第一层：纯 CSS 皮肤，永远尝试，不依赖任何服务。
		      register(() => installSkin(doc), `${PLUGIN_ID}: skin stylesheet`)
		      register(() => markHostSurfaces(doc), `${PLUGIN_ID}: surface markers`)

		      // 第二层：React 组件。整体可选，失败只影响这一层。
		      try {
		        const components = probeComponents(requireFn)
		        if (components !== null) {
		          register(
		            () => components.installComponentStyles(doc),
		            `${PLUGIN_ID}: component stylesheet`,
		          )
		          components.registerSlots(ctx)
		        }
		      } catch (error) {
		        try { console.warn(`[${PLUGIN_ID}] 组件层降级：`, error && error.message) } catch { /* ignore */ }
		      }
		    } catch (error) {
		      try {
		        console.warn(`[${PLUGIN_ID}] 皮肤初始化失败，已安全降级：`, error && error.message)
		      } catch { /* console 不可用时彻底静默 */ }
		      for (const dispose of undo) {
		        try { dispose?.() } catch { /* ignore */ }
		      }
		    }
		  }
		}


		return { createApply, inject, installSkin, markHostSurfaces, probeComponents, PLUGIN_ID };
		})();

		// Loader 只用 apply(ctx) 一个参数调用，所以工厂的 require 必须在
		// 闭包里捕获后交给 createApply —— 否则组件层永远拿不到 React 种子模块。
		Object.assign(exports, __MOD_CLIENT__);
		exports.apply = __MOD_CLIENT__.createApply(require);
		return module.exports;
	}
});
