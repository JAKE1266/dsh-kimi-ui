/**
 * 原创图形资产 —— 纯内联 SVG 字符串，不含任何来自 Kimi / 夸克客户端的图片。
 *
 * 合规说明：本插件不复制任何厂商的图标、吉祥物或受版权保护的素材。这里画的
 * 是一个**自创的「月牙 + 星点」标记**，呼应 Kimi（月之暗面 Moonshot）的
 * 「月」意象，但形状与构图均为本项目原创，不是任何 logo 的临摹。
 *
 * 形状语言：品牌蓝渐变圆角方底 + 一弯月牙 + 两点星芒。渐变取自实测品牌色
 * （--Colors-KMBlue #1783ff 的亮/暗两档）。
 */

/** 侧栏 / hero 共用的方形标记（viewBox 0 0 48 48）。 */
export const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="">
  <defs>
    <linearGradient id="km-g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4DA0FF"/>
      <stop offset="0.55" stop-color="#1783FF"/>
      <stop offset="1" stop-color="#0F5FD9"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="44" height="44" rx="15" fill="url(#km-g)"/>
  <path d="M29.5 12.5a12 12 0 1 0 0 23 9.5 9.5 0 1 1 0-23z" fill="#fff" fill-opacity=".95"/>
  <circle cx="33.5" cy="17.5" r="1.7" fill="#fff" fill-opacity=".85"/>
  <circle cx="36.5" cy="24" r="1.1" fill="#fff" fill-opacity=".7"/>
</svg>`

/** 作为 `<img src>` 使用的 data URL。 */
export function markDataUrl() {
  try {
    return 'data:image/svg+xml;base64,' + btoa(MARK_SVG)
  } catch {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(MARK_SVG)
  }
}
