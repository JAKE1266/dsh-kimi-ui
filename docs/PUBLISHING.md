# 发布到 GitHub / npm

> 本文件记录「从本地仓库到公开可用」的完整步骤。

## 0. 当前进度

| 项 | 状态 |
| --- | --- |
| Git 仓库 | ✅ `main` 分支，工作树干净 |
| Remote | ✅ `https://github.com/JAKE1266/dsh-kimi-ui.git` |
| GitHub 仓库 | ✅ **已发布** <https://github.com/JAKE1266/dsh-kimi-ui>（Public） |
| 推送 | ✅ `main` 已推送；CI 运行通过 |
| 仓库元数据 | ✅ 描述 + 8 个 topics |
| 构建产物 | ✅ `client/client.js` 已提交，重建无差异 |
| 验证 | ✅ `node test/run-all.mjs` **19/19** 通过 |
| npm 发布 | ⛔ 尚未发布（非必需，GitHub 安装已够用） |

## 1. 推送凭据（本机备忘）

本机 Windows 凭据管理器存有 `GitHub - https://api.github.com/JAKE1266` 的 OAuth
token（`gho_` 前缀，权限 `repo, user, workflow`）。**凭据 blob 是 ASCII 编码**，
按 Unicode 解码会得到乱码并导致 401 —— 这是第一次踩过的坑。

推送时用一次性带 token 的 URL，token 不写入任何文件：

```powershell
$env:GIT_TERMINAL_PROMPT = "0"
git push "https://JAKE1266:${env:GITHUB_TOKEN}@github.com/JAKE1266/dsh-kimi-ui.git" main
```

> ⚠️ 不要把 token 写进仓库、不要提交、不要贴到聊天里。

## 2. 日常发版流程

```powershell
Set-Location "C:\Users\lenovo\Documents\deepseek-harness\default-workspace\dsh-kimi-ui"

# 1) 改代码（src/*.mjs）
# 2) 升版本：package.json 的 version 与 src/tokens.mjs 的 SKIN_VERSION 必须同步
# 3) 在 CHANGELOG.md 加 "## [x.y.z]" 条目
# 4) 重建 + 验证（测试会强制校验三处版本一致 + CHANGELOG 有条目）
node scripts/build.mjs
node test/run-all.mjs

# 5) 提交推送
git add -A
git commit -m "feat(vX.Y.Z): ..."
git push "https://JAKE1266:${env:GITHUB_TOKEN}@github.com/JAKE1266/dsh-kimi-ui.git" main
```

**版本三处一致是硬性要求**，测试会拦下来：

| 位置 | 说明 |
| --- | --- |
| `package.json` → `version` | npm / 插件市场读取 |
| `src/tokens.mjs` → `SKIN_VERSION` | 注入 `<html data-dsh-kimi-skin>`，用于排查浏览器里挂着的旧样式 |
| `client/client.js` | 构建产物内嵌值；必须与上面一致（否则说明忘了重建） |

## 3. 发布到 npm（可选）

```powershell
npm login
npm publish --access public
```

`prepublishOnly` 会自动跑 `build` + `test`，版本不一致或产物过期会直接拒绝发布。

发布后安装命令变成：

```bash
dsh plugin --profile desktop add dsh-kimi-ui
```

### 发版检查清单

- [ ] `node scripts/build.mjs && node test/run-all.mjs` 全绿（19 项）
- [ ] `git status --porcelain` 为空（产物已重新提交）
- [ ] `package.json` / `SKIN_VERSION` / 产物 三处版本一致
- [ ] `CHANGELOG.md` 有对应版本条目
- [ ] 若有视觉改动，补 `assets/screenshot-light.png` / `screenshot-dark.png`（别带真实工作区数据）
- [ ] CI 在推送后跑绿

## 4. 使用者安装

```bash
# GitHub（无需 npm 账号）
dsh plugin --profile desktop add github:JAKE1266/dsh-kimi-ui

# npm（发布后）
dsh plugin --profile desktop add dsh-kimi-ui
```

## 5. 回滚 / 卸载（给使用者）

```bash
dsh plugin --profile desktop disable dsh-kimi-ui   # 停用，硬刷新即恢复官方界面
dsh plugin --profile desktop remove dsh-kimi-ui    # 卸载
```

## 6. 与其他皮肤互斥

本插件与 `dsh-doubao-ui`、`dsh-zcode-ui`、`dsh-wechat-ui` 都覆盖同一批
`--dsw-*` 令牌，**同时只能启用一个**，否则会混色。
