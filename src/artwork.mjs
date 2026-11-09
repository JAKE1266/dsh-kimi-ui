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
export const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="">
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
export function markDataUrl() {
  try {
    return 'data:image/svg+xml;base64,' + btoa(MARK_SVG)
  } catch {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(MARK_SVG)
  }
}
