!/wslpress-new-logo.svg

# WSLpress (WSLpress) 威懾力·輕翼：基於 Next.js、Contentlayer 和 Tailwind 的現代博客框架，專為簡體中文用户打造，擁有全界面漢化與完整本土生態兼容性的博客框架

# WSLpress 🚀 ]()

輕量高效的現代博客模板，基於 Next.js 13 + Contentlayer + Tailwind CSS 構建

**如果您需要快速插入圖片，可使用我們為您提供的工具，非常好用！**

- 介紹文章： /posts/wslpress-base64-image-tool
- 點此直接使用： 🌐 

WSLpress（Wingsly Press）是一款為開發者和內容創作者設計的博客模板，融合了前沿的前端技術棧與優雅的視覺設計，支援暗色模式、響應式佈局和可視化內容管理，讓你無需關注複雜配置，專注於內容創作。

由 **@che-ui** 開發 | 🌐 

---

## ✨ 核心特性

- **前沿技術棧**：基於 Next.js 13 App Router，支援 React Server Components、路由分組等現代特性
- **內容高效管理**：透過 Contentlayer 自動解析 Markdown/MDX，類型安全且無需手動配置
- **美觀易用的 UI**：Tailwind CSS 驅動的響應式設計，內置精心設計的首頁 Hero 區和文章卡片
- **SEO友好**：本站僅上線10天不到時，Bing權重國內版、國際版、海外版均排名第一
- **暗色模式**：自動跟隨系統偏好，也支援手動切換，適配不同閱讀場景
- **可視化 CMS**：集成 Netlify (Decap) CMS，非技術用户也能輕鬆發布/編輯文章（由於學業繁忙，目前尚在維護中，極度不建議啟用）
- **開發體驗優化**：ESLint 配置、TypeScript 類型校驗、Tailwind 工具類快速開發
- **一鍵部署**：無縫適配 Cloudflare Pages、Vercel、Netlify 等平台，部署流程簡單高效
- **RSS**：支援RSS訂閱 (/rss.xml)
- **全局搜索**：支援全文快速檢索

---

## 🚀 快速開始

### 前置要求

- Node.js 18.x 或更高版本
- pnpm 8.x 或更高版本（推薦，也可使用 npm/yarn）

### 步驟 1：克隆倉庫

```Bash
git clone
cd wslpress
```

### 步驟 2：安裝依賴

```Bash
pnpm install
# 或 npm install / yarn install
```

### 步驟 3：啟動開發服務器

```Bash
pnpm dev
```

### 步驟 4：訪問本地站點

打開瀏覽器訪問 ``，即可看到博客預覽。

### 步驟 5：構建生產版本

```Bash
pnpm build
# 構建完成後可透過 pnpm start 啟動生產服務器
```

---

## 📝 使用指南

### 1. 創建第一篇文章

1. 在 `content/` 目錄下創建 Markdown/MDX 文件（例如 `hello-world.md`）
2. 遵循以下_frontmatter_格式添加元數據：

```Markdown
---
title: "我的第一篇博客"
date: "2026-01-21"
description: "這是使用 WSLpress 發布的第一篇文章"
tags: ["Next.js", "博客"]
---

這裏是文章正文內容，可以使用 Markdown 或 MDX 語法。

## 二級標題

- 列表項 1
- 列表項 2

import SomeComponent from "@/components/SomeComponent";

<SomeComponent />
```

1. 保存後，開發服務器會自動熱更新，文章會實時顯示在首頁和文章列表中。

### 2. 自定義博客配置

- **修改站點信息**：編輯 `contentlayer.config.js` 中的 `siteMetadata`（需同步更新 CMS 配置）
- **調整樣式**：修改 `tailwind.config.js` 自定義顏色、字體、間距等
- **修改頁面結構**：編輯 `app/` 目錄下的頁面組件（如 `app/page.tsx` 對應首頁）
- **添加組件**：在 `components/` 目錄下創建自定義組件，支援在 MDX 中直接引入

### 3. 使用 Netlify CMS 管理內容

1. 啟動開發服務器後，訪問 `/admin`
2. 使用 Netlify 賬户登錄（首次使用需關聯倉庫）
3. 在 CMS 後台可直接創建、編輯、刪除文章，無需手動修改 Markdown 文件

---

## 📂 目錄結構

```Plain Text
wslpress/
├── app/                    # Next.js 13 App Router 目錄
│   ├── page.tsx           # 首頁
│   ├── posts/             # 文章列表/詳情頁
│   └── layout.tsx         # 全局佈局（包含導航、頁腳）
├── components/            # 可複用組件（文章卡片、導航欄等）
├── content/               # 文章內容目錄（Markdown/MDX 文件）
├── public/                # 靜態資源（圖片、圖標、CMS 配置）
│   ├── admin/             # Netlify CMS 管理界面配置
│   └── WSLpress.svg       # 項目 Logo
├── contentlayer.config.js # Contentlayer 配置（內容類型、元數據）
├── tailwind.config.js     # Tailwind CSS 配置
├── next.config.js         # Next.js 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 依賴管理
```

---

## 🌐 快速部署指南（先fork完本倉庫）

### 方案 1：部署到 Vercel（推薦）

示例： /

1. 訪問  並登錄
2. 點擊 "New Project"，導入 `wslpress` 倉庫
3. 無需額外配置，Vercel 會自動識別 Next.js 項目
4. 點擊 "Deploy"，等待部署完成即可獲得在線地址
5. 綁定域名（可選），但國內用户無法訪問 `.vercel.app` ，請知曉

### 方案 2：部署到 Netlify

示例：

1. 訪問  並登錄
2. 點擊 "Add new site" → "Import an existing project"
3. 導入 `wslpress` 倉庫
4. 構建配置（自動填充，可無需修改）：
   - Build command: `pnpm build`
   - Publish directory: `.next`
5. 點擊 "Deploy site" 完成部署
6. 得到一個 `.netlify.app` 三級域名，截止2026.2.3國內均可正常訪問，但使用中國移動蜂窩網絡訪問可能會不穩定，請知曉。

### 方案 3：正常方法部署到 Cloudflare Pages（不是Worker！）

示例：

1. 訪問  並登錄
2. 點擊 "計算和AI" → "Workers和Pages"，點擊右上角“創建應用程序”，跳轉後在下方“想要部署 Pages？開始使用”點擊“開始使用”
3. 導入 `wslpress` 倉庫
4. 構建配置（選擇Next.js）：
5. 點擊 "Deploy site" 完成部署
6. 得到一個 `.pages.dev` 三級域名，已被封。但可以綁定自定義域名
7. 然後按教程去做：/posts/deploying-wsl-on-cfpages

### 方案 4：透過直接上傳資產部署到 Cloudflare Pages（建議不會科學上網的小白使用）

參考教程：/posts/deploy-wsl-on-cf-easily

---

## 🛠️ 配置說明

### Contentlayer 配置

`contentlayer.config.js` 定義了文章的元數據結構，可根據需求擴展字段（如 `author`、`coverImage` 等）：

```JavaScript
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // 可添加自定義字段
    // author: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
    },
  },
}));
```

### Tailwind 自定義主題

修改 `tailwind.config.js` 中的 `theme` 字段，自定義品牌色、字體等：

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 支援類名切換暗色模式
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // 自定義主色調
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## 🤝 貢獻指南

歡迎透過以下方式貢獻項目：

1. Fork 倉庫並創建分支（`git checkout -b feature/xxx`）
2. 提交修改（`git commit -m "feat: 添加 xxx 功能"`）
3. 推送分支（`git push origin feature/xxx`）
4. 提交 Pull Request

### 貢獻規範

- 代碼風格遵循 ESLint 配置
- 新增功能需同步更新 README
- 提交信息使用規範語義化提交信息（feat/fix/docs/style/refactor/test/chore）

---

## 📄 許可證

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

---

## 📞 聯繫我們&官方聲明

如果有任何問題或建議，歡迎透過以下方式聯繫：

- GitHub Issues：https:///che-ui/wslpress/issues
- 官方反饋平台提交（推薦）：🌐 /feedback.html
- 開發者：che-ui（中國初中生，WSLpress的GitHub 倉庫維護者）

---

🌟 如果你喜歡這個模板，歡迎給倉庫點個 Star 支持我們！

---

**關於項目名稱 “WSLPress” 的正式聲明**

本項目 **WSLPress**（一個靜態博客生成框架）特此聲明： **與微軟（Microsoft）的 Windows Subsystem for Linux（WSL）技術與產品無任何隸屬、依賴或關聯關係。**

為避免混淆，特澄清以下幾點：

1. **名稱說明**：本項目名稱中的 “WSL” 僅為標識，指代“威懾力”。不代表其依賴於 Windows WSL 技術才能運行。它只是一個靜態博客框架。
2. **無關聯聲明**：本項目並非由微軟開發、贊助或認可。微軟的 “WSL” 是其獨立的操作系統兼容層技術商標。
3. **項目獨立性**：WSLPress 是一個獨立的開源靜態網站生成工具，其設計、開發與維護均與微軟官方無關。
4. **名稱由來**：名稱最初的靈感源於Wingsly，像翼般輕量，與微軟官方無關。
5. **使用範圍**：用户可在任何支援其運行環境的平台上使用本框架，無需局限於 Windows 或 WSL。

我們尊重微軟及其 WSL 技術的商標與知識產權。任何因名稱相似可能導致的誤解，均非本意。

如有任何疑問，請透過項目 GitHub 倉庫與我們聯繫。

特此聲明。

**WSLPress 項目維護者：@che-ui**
