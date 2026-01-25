![WSL logo](/WSLpress.svg)

# WSLpress (WSLpress) 威慑力·轻翼部落格：基于 Next.js、Contentlayer 和 Tailwind 的现代博客模板

# WSLpress 🚀

轻量高效的现代博客模板，基于 Next.js 13 + Contentlayer + Tailwind CSS 构建

WSLpress（Wingsly Press）是一款为开发者和内容创作者设计的博客模板，融合了前沿的前端技术栈与优雅的视觉设计，支持暗色模式、响应式布局和可视化内容管理，让你无需关注复杂配置，专注于内容创作。

由 **Wingsly** & **TWINGS CORPORATION** 开发 | 🌐 [在线演示](https://wslpress.taiwan.mrche.top)

---

## ✨ 核心特性

- **前沿技术栈**：基于 Next.js 13 App Router，支持 React Server Components、路由分组等现代特性

- **内容高效管理**：通过 Contentlayer 自动解析 Markdown/MDX，类型安全且无需手动配置

- **美观易用的 UI**：Tailwind CSS 驱动的响应式设计，内置精心设计的首页 Hero 区和文章卡片

- **暗色模式**：自动跟随系统偏好，也支持手动切换，适配不同阅读场景

- **可视化 CMS**：集成 Netlify (Decap) CMS，非技术用户也能轻松发布/编辑文章

- **开发体验优化**：ESLint 配置、TypeScript 类型校验、Tailwind 工具类快速开发

- **一键部署**：无缝适配 Vercel、Netlify 等平台，部署流程简单高效

---

## 🚀 快速开始

### 前置要求

- Node.js 18.x 或更高版本

- pnpm 8.x 或更高版本（推荐，也可使用 npm/yarn）

### 步骤 1：克隆仓库

```Bash

git clone https://github.com/che-ui/wslpress.git
cd wslpress
```

### 步骤 2：安装依赖

```Bash

pnpm install
# 或 npm install / yarn install
```

### 步骤 3：启动开发服务器

```Bash

pnpm dev
```

### 步骤 4：访问本地站点

打开浏览器访问 `http://localhost:3000`，即可看到博客预览。

### 步骤 5：构建生产版本

```Bash

pnpm build
# 构建完成后可通过 pnpm start 启动生产服务器
```

---

## 📝 使用指南

### 1. 创建第一篇文章

1. 在 `content/` 目录下创建 Markdown/MDX 文件（例如 `hello-world.md`）

2. 遵循以下_frontmatter_格式添加元数据：

```Markdown

---
title: "我的第一篇博客"
date: "2026-01-21"
description: "这是使用 WSLpress 发布的第一篇文章"
tags: ["Next.js", "博客"]
---

这里是文章正文内容，可以使用 Markdown 或 MDX 语法。

## 二级标题
- 列表项 1
- 列表项 2

import SomeComponent from "@/components/SomeComponent";
<SomeComponent />
```

1. 保存后，开发服务器会自动热更新，文章会实时显示在首页和文章列表中。

### 2. 自定义博客配置

- **修改站点信息**：编辑 `contentlayer.config.js` 中的 `siteMetadata`（需同步更新 CMS 配置）

- **调整样式**：修改 `tailwind.config.js` 自定义颜色、字体、间距等

- **修改页面结构**：编辑 `app/` 目录下的页面组件（如 `app/page.tsx` 对应首页）

- **添加组件**：在 `components/` 目录下创建自定义组件，支持在 MDX 中直接引入

### 3. 使用 Netlify CMS 管理内容

1. 启动开发服务器后，访问 `http://localhost:3000/admin`

2. 使用 Netlify 账户登录（首次使用需关联仓库）

3. 在 CMS 后台可直接创建、编辑、删除文章，无需手动修改 Markdown 文件

---

## 📂 目录结构

```Plain Text

wslpress/
├── app/                  # Next.js 13 App Router 目录
│   ├── page.tsx          # 首页
│   ├── posts/            # 文章列表/详情页
│   └── layout.tsx        # 全局布局（包含导航、页脚）
├── components/           # 可复用组件（文章卡片、导航栏等）
├── content/              # 文章内容目录（Markdown/MDX 文件）
├── public/               # 静态资源（图片、图标、CMS 配置）
│   ├── admin/            # Netlify CMS 管理界面配置
│   └── WSLpress.svg      # 项目 Logo
├── contentlayer.config.js # Contentlayer 配置（内容类型、元数据）
├── tailwind.config.js    # Tailwind CSS 配置
├── next.config.js        # Next.js 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 依赖管理
```

---

## 🌐 部署指南

### 方案 1：部署到 Vercel（推荐）

1. 访问 [Vercel](https://vercel.com/) 并登录

2. 点击 "New Project"，导入 `wslpress` 仓库

3. 无需额外配置，Vercel 会自动识别 Next.js 项目

4. 点击 "Deploy"，等待部署完成即可获得在线地址

### 方案 2：部署到 Netlify

1. 访问 [Netlify](https://www.netlify.com/) 并登录

2. 点击 "Add new site" → "Import an existing project"

3. 导入 `wslpress` 仓库

4. 构建配置（自动填充，可无需修改）：

    - Build command: `pnpm build`

    - Publish directory: `.next`

5. 点击 "Deploy site" 完成部署

---

## 🛠️ 配置说明

### Contentlayer 配置

`contentlayer.config.js` 定义了文章的元数据结构，可根据需求扩展字段（如 `author`、`coverImage` 等）：

```JavaScript

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // 可添加自定义字段
    // author: { type: "string", required: false },
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "") },
  },
}));
```

### Tailwind 自定义主题

修改 `tailwind.config.js` 中的 `theme` 字段，自定义品牌色、字体等：

```JavaScript

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 支持类名切换暗色模式
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // 自定义主色调
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

## 🤝 贡献指南

欢迎通过以下方式贡献项目：

1. Fork 仓库并创建分支（`git checkout -b feature/xxx`）

2. 提交修改（`git commit -m "feat: 添加 xxx 功能"`）

3. 推送分支（`git push origin feature/xxx`）

4. 提交 Pull Request

### 贡献规范

- 代码风格遵循 ESLint 配置

- 新增功能需同步更新 README

- 提交信息使用规范语义化提交信息（feat/fix/docs/style/refactor/test/chore）

---

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源，你可以自由使用、修改和分发，无需额外授权。

---

## 📞 联系我们

如果有任何问题或建议，欢迎通过以下方式联系：

- GitHub Issues：[提交问题](https://github.com/che-ui/wslpress/issues)

- 开发者：che-ui（GitHub 仓库维护者）

---

🌟 如果你喜欢这个模板，欢迎给仓库点个 Star 支持我们！
