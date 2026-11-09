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
		const SKIN_VERSION = '1.0.0'

		/** 标记属性，注入到 <html> 上，便于在 DevTools 里确认皮肤已激活。 */
		const SKIN_ATTRIBUTE = 'data-dsh-kimi-skin'

		/** 样式标签的稳定标识（去重 + 卸载时回收）。 */
		const STYLE_TAG_ID = 'dsh-kimi-ui/skin.css'

		/** 亮色令牌选择器：特异性 (0,2,1)。 */
		const LIGHT_SELECTOR = ':root:root body'

		/** 暗色令牌选择器：特异性 (0,3,1)。 */
		const DARK_SELECTOR = ':root:root body[data-ds-dark-theme]'

		/**
		 * 与主题无关的几何/排版令牌。
		 *
		 * Kimi 的几何特征是「更大更圆」：气泡 18px、输入卡 24px、面板 20px。
		 * 字体栈用系统无衬线，CJK 回退族前置。
		 */
		const STRUCTURAL = Object.freeze({
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
		const LIGHT = Object.freeze({
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
		const DARK = Object.freeze({
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
		const STRUCTURE_CSS = `
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
		    `/* 本版色值为视觉归纳（推导），非官方 CSS 令牌实测值。详见 docs/DESIGN.md */`,
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
		 * 形状语言：深蓝紫渐变圆角方底 + 一弯月牙 + 两点星芒。渐变取自实测品牌色。
		 */

		/** 侧栏 / hero 共用的方形标记（viewBox 0 0 48 48）。 */
		const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="">
		  <defs>
		    <linearGradient id="km-g" x1="0" y1="0" x2="1" y2="1">
		      <stop offset="0" stop-color="#7B8CFF"/>
		      <stop offset="0.55" stop-color="#5A5FE0"/>
		      <stop offset="1" stop-color="#3D3FA8"/>
		    </linearGradient>
		  </defs>
		  <rect x="2" y="2" width="44" height="44" rx="15" fill="url(#km-g)"/>
		  <path d="M29.5 12.5a12 12 0 1 0 0 23 9.5 9.5 0 1 1 0-23z" fill="#fff" fill-opacity=".95"/>
		  <circle cx="33.5" cy="17.5" r="1.7" fill="#fff" fill-opacity=".85"/>
		  <circle cx="36.5" cy="24" r="1.1" fill="#fff" fill-opacity=".7"/>
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
		 * 关于 priority：-1 是社区 dsh-doubao-ui 已验证的写法，用来盖掉
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
		.km-mark{display:block;flex:none;border-radius:32%;user-select:none;-webkit-user-drag:none}
		.km-brand{display:inline-flex;align-items:center;gap:8px;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;letter-spacing:.02em;font-weight:600}
		.km-hero-mark{display:block;border-radius:34%;box-shadow:0 8px 24px rgba(90,95,224,.28)}
		.km-quick{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;width:100%;padding:2px 0 0;box-sizing:border-box}
		.km-chip{appearance:none;display:inline-flex;align-items:center;gap:6px;min-height:32px;padding:0 14px;border:1px solid var(--dsw-alias-border-l2,rgba(0,0,0,.12));border-radius:9999px;background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-secondary,rgba(0,0,0,.85));font:inherit;font-size:13px;line-height:20px;cursor:pointer;transition:background-color var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1)),border-color var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1)),color var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1)),transform var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1))}
		.km-chip:hover{border-color:var(--km-primary-border,rgba(123,140,255,.4));color:var(--km-primary,#5A5FE0);background:var(--km-primary-soft,rgba(90,95,224,.1));transform:translateY(-1px)}
		.km-chip:active{transform:translateY(0)}
		.km-chip:focus-visible{outline:2px solid var(--dsw-focus-ring-color,#5A5FE0);outline-offset:2px}
		.km-about{max-width:760px;display:flex;flex-direction:column;gap:18px;color:var(--dsw-alias-label-primary,#000);font:14px/1.6 var(--dsw-font-family,system-ui)}
		.km-about h2{margin:0;font-size:20px;font-weight:600;line-height:28px}
		.km-about h3{margin:0 0 6px;font-size:15px;font-weight:600}
		.km-about p{margin:0;color:var(--dsw-alias-label-secondary,rgba(0,0,0,.85))}
		.km-about-card{border:1px solid var(--dsw-alias-border-l2,rgba(0,0,0,.12));border-radius:var(--dsw-radius-lg,16px);padding:16px;background:var(--dsw-alias-bg-layer-1,#fff);display:flex;flex-direction:column;gap:8px}
		.km-about-head{display:flex;align-items:center;gap:12px}
		.km-about-head img{width:40px;height:40px;border-radius:32%;flex:none}
		.km-about-badge{display:inline-flex;align-items:center;padding:2px 9px;border-radius:9999px;font-size:12px;line-height:18px;background:var(--km-primary-soft,rgba(90,95,224,.1));color:var(--km-primary,#5A5FE0);border:1px solid var(--km-primary-border,rgba(123,140,255,.4))}
		.km-about-tip{margin:0;font-size:12.5px;color:var(--dsw-alias-label-tertiary,rgba(0,0,0,.5))}
		.km-about a{color:var(--km-primary,#5A5FE0);text-decoration:none}
		.km-about a:hover{text-decoration:underline}
		@media (prefers-reduced-motion: reduce){.km-chip{transition:none}}
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
		          jsx('span', { className: 'km-about-badge', children: 'dsh-kimi-ui · v1.0.0' }),
		        ] }),
		      ] }),
		      jsxs('div', { className: 'km-about-card', children: [
		        jsx('h3', { children: '这是什么' }),
		        jsx('p', { children: '给 DeepSeek Harness Web 换一套 Kimi 风格界面：深蓝紫渐变主色、深色优先的表面层级、玻璃质感面板与大圆角几何，外加品牌标记与首页快捷入口。明暗双主题跟随宿主设置。' }),
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
