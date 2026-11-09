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
export function bindReact(requireFn) {
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

const { markDataUrl } = require('./artwork.mjs')

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
.km-hero-mark{display:block;border-radius:34%;box-shadow:0 8px 24px rgba(23,131,255,.28)}
.km-quick{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;width:100%;padding:2px 0 0;box-sizing:border-box}
.km-chip{appearance:none;display:inline-flex;align-items:center;gap:6px;min-height:32px;padding:0 14px;border:1px solid var(--dsw-alias-border-l2,rgba(0,0,0,.12));border-radius:9999px;background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-secondary,rgba(0,0,0,.85));font:inherit;font-size:13px;line-height:20px;cursor:pointer;transition:background-color var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1)),border-color var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1)),color var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1)),transform var(--km-dur,.15s) var(--km-ease-out,cubic-bezier(0,0,.2,1))}
.km-chip:hover{border-color:var(--km-primary-border,rgba(23,131,255,.4));color:var(--km-primary,#1783FF);background:var(--km-primary-soft,rgba(23,131,255,.1));transform:translateY(-1px)}
.km-chip:active{transform:translateY(0)}
.km-chip:focus-visible{outline:2px solid var(--dsw-focus-ring-color,#1783FF);outline-offset:2px}
.km-about{max-width:760px;display:flex;flex-direction:column;gap:18px;color:var(--dsw-alias-label-primary,#000);font:14px/1.6 var(--dsw-font-family,system-ui)}
.km-about h2{margin:0;font-size:20px;font-weight:600;line-height:28px}
.km-about h3{margin:0 0 6px;font-size:15px;font-weight:600}
.km-about p{margin:0;color:var(--dsw-alias-label-secondary,rgba(0,0,0,.85))}
.km-about-card{border:1px solid var(--dsw-alias-border-l2,rgba(0,0,0,.12));border-radius:var(--dsw-radius-lg,16px);padding:16px;background:var(--dsw-alias-bg-layer-1,#fff);display:flex;flex-direction:column;gap:8px}
.km-about-head{display:flex;align-items:center;gap:12px}
.km-about-head img{width:40px;height:40px;border-radius:32%;flex:none}
.km-about-badge{display:inline-flex;align-items:center;padding:2px 9px;border-radius:9999px;font-size:12px;line-height:18px;background:var(--km-primary-soft,rgba(23,131,255,.1));color:var(--km-primary,#1783FF);border:1px solid var(--km-primary-border,rgba(23,131,255,.4))}
.km-about-tip{margin:0;font-size:12.5px;color:var(--dsw-alias-label-tertiary,rgba(0,0,0,.5))}
.km-about a{color:var(--km-primary,#1783FF);text-decoration:none}
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
          jsx('span', { className: 'km-about-badge', children: 'dsh-kimi-ui · v1.1.0' }),
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

export {
  bindReact,
  installComponentStyles,
  registerSlots,
  insertDraft,
  dispatchInput,
  BrandMark,
  BrandName,
  HeroMark,
  QuickActions,
  AboutSection,
  QUICK_ACTIONS,
  COMPONENT_CSS,
  NS,
}
