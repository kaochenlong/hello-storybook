# Vue + Storybook Workshop

這是「Storybook 基礎與 Vue 整合」課程的範例專案。

## 用途

這個專案配合課程章節，透過 Git Tag 標記每個階段的進度，讓你可以：

- 跟著教材一步步操作
- 隨時切換到特定階段查看程式碼
- 比較不同階段的變化

## Tags

### 第一章：基礎與 Vue 整合

| Tag | 說明 |
|-----|------|
| `01-01-init` | 建立 Vue 專案 |
| `01-02-storybook` | 安裝 Storybook |
| `01-03-tailwind` | 安裝 Tailwind CSS |
| `01-04-badge-step1` | 建立 Badge 元件 |
| `01-04-badge-step2` | 建立最簡單的 Story |
| `01-04-badge-step3` | 加入 args |
| `01-04-badge-step4` | 加入 argTypes |
| `01-04-badge-step5` | 加入 autodocs |
| `01-05-advanced` | 進階技巧（render 函式） |
| `01-06-pinia` | Pinia 整合 |
| `01-07-decorators` | Decorators |

### 第二章：進階開發技巧

| Tag | 說明 |
|-----|------|
| `02-01-autodocs` | 啟用 vue-component-meta 自動文件 |
| `02-01-events` | Events 自動擷取（defineEmits） |
| `02-01-slots` | Slots 自動擷取 |
| `02-02-interaction` | Interaction Testing（play function） |
| `02-03-login` | 登入表單範例 |
| `02-04-form` | TextInput 表單元件練習 |

### 第三章：AI 協作開發整合

| Tag | 說明 |
|-----|------|
| `03-01-mcp` | 安裝 Storybook MCP addon |
| `03-02-notification` | 用 AI 建立 Notification 元件 |

## 使用方式

```bash
# 查看所有 tags
git tag

# 切換到特定階段
git checkout 01-04-badge-step1

# 回到最新狀態
git checkout main
```
