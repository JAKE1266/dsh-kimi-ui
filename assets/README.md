# Assets

This directory is reserved for **optional preview screenshots** of the skin.

The plugin itself ships **no images, icons or fonts** — every visual is expressed
as a CSS custom property in [`src/tokens.mjs`](../src/tokens.mjs), and the brand
mark is an original inline SVG in [`src/artwork.mjs`](../src/artwork.mjs). No
asset is copied from any vendor client.

To add your own screenshots after installing and activating the skin:

```bash
assets/screenshot-light.png
assets/screenshot-dark.png
```

Then reference them from the top of [`README.md`](../README.md).

Please do not commit screenshots containing real workspace names, session
titles, balances or any other personal data — use a throwaway workspace.
