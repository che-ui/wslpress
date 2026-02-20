![WSL logo](/wslpress-new-logo.svg)

# WSLpress (Wingsly Press) 威慑力·轻翼：基于 Next.js、Contentlayer 和 Tailwind 的现代博客框架，专为简体中文用户打造，拥有全界面汉化与完整本土生态兼容性的博客框架

- ❗2026年2月20日将是这个框架的最后更新日期，我们预计在2026年7月1日左右重启本项目，在此期间我们将不再提供更新，但您仍可以正常使用本框架
- ❗20 февраля 2026 года станет датой последнего обновления данной структуры. Мы планируем возобновить данный проект около 1 июля 2026 года. В этот период мы больше не будем предоставлять обновления, но вы по-прежнему сможете нормально использовать данную структуру.
- ❗February 20, 2026 will be the final update date for this framework. We expect to restart this project around July 1, 2026. During this period, we will no longer provide updates, but you can still use this framework normally.
- ❗2026년 2월 20일은 본 프레임워크의 마지막 업데이트 날짜가 될 것입니다. 우리는 2026년 7월 1일경 본 프로젝트를 재개할 예정입니다. 이 기간 동안 더 이상 업데이트를 제공하지 않지만, 본 프레임워크는 정상적으로 사용하실 수 있습니다.
- ❗Is é an 20 Feabhra 2026 an dáta nuashonraithe deiridh don chreat seo. Táimid ag súil go dtosóimid an tionscadal seo arís timpeall 1 Iúil 2026. San am seo, ní sholáthróimid aon nuashonruithe breise, ach is féidir leat an creat a úsáid go normálta fós.
- ❗Le 20 février 2026 sera la dernière date de mise à jour de ce cadre. Nous prévoyons de relancer ce projet vers le 1er juillet 2026. Pendant cette période, nous ne fournirons plus de mises à jour, mais vous pourrez toujours utiliser ce cadre normalement.
- ❗2026年2月20日將是本框架的最後更新日期，我們預計在2026年7月1日左右重啟本專案。在此期間，我們將不再提供更新，但您仍可正常使用本框架。

# WSLpress 🚀 [![Netlify Status](https://api.netlify.com/api/v1/badges/c69cc1c0-6349-4e44-83b9-bfbbc25417ae/deploy-status)](https://app.netlify.com/projects/wslpress/deploys)

轻量高效的现代博客模板，基于 Next.js 13 + Contentlayer + Tailwind CSS 构建

**如果您需要快速插入图片，可使用我们为您提供的工具，非常好用！**
- 介绍文章：
https://wslpress.taiwan.mrche.top/posts/wslpress-base64-image-tool
- 点此直接使用：
🌐 [WSLpress-图片压缩转Markdown Base64工具](https://wslpress-base64-image-tool.mrche.top)

WSLpress（Wingsly Press）是一款为开发者和内容创作者设计的博客模板，融合了前沿的前端技术栈与优雅的视觉设计，支持暗色模式、响应式布局和可视化内容管理，让你无需关注复杂配置，专注于内容创作。

由 **@che-ui** 开发 | 🌐 [在线演示](https://wslpress.taiwan.mrche.top)

---

## ✨ 核心特性

- **前沿技术栈**：基于 Next.js 13 App Router，支持 React Server Components、路由分组等现代特性

- **内容高效管理**：通过 Contentlayer 自动解析 Markdown/MDX，类型安全且无需手动配置

- **美观易用的 UI**：Tailwind CSS 驱动的响应式设计，内置精心设计的首页 Hero 区和文章卡片

- **SEO友好**：本站仅上线10天不到时，Bing权重国内版、国际版、海外版均排名第一

- **暗色模式**：自动跟随系统偏好，也支持手动切换，适配不同阅读场景

- **可视化 CMS**：集成 Netlify (Decap) CMS，非技术用户也能轻松发布/编辑文章（由于学业繁忙，目前尚在维护中，极度不建议启用）

- **开发体验优化**：ESLint 配置、TypeScript 类型校验、Tailwind 工具类快速开发

- **一键部署**：无缝适配 Cloudflare Pages、Vercel、Netlify 等平台，部署流程简单高效

- **RSS**：支持RSS订阅 (/rss.xml)

- **全局搜索**：支持全文快速检索

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

## 🌐 快速部署指南（先fork完本仓库）

### 方案 1：部署到 Vercel（推荐）

示例：
https://wslpress.vercel.app/
https://wslpress.taiwan.mrche.top/

1. 访问 [Vercel](https://vercel.com/) 并登录

2. 点击 "New Project"，导入 `wslpress` 仓库

3. 无需额外配置，Vercel 会自动识别 Next.js 项目

4. 点击 "Deploy"，等待部署完成即可获得在线地址

5. 绑定域名（可选），但国内用户无法访问 `.vercel.app` ，请知晓

### 方案 2：部署到 Netlify

示例：https://wslpress.netlify.app/

1. 访问 [Netlify](https://www.netlify.com/) 并登录

2. 点击 "Add new site" → "Import an existing project"

3. 导入 `wslpress` 仓库

4. 构建配置（自动填充，可无需修改）：

    - Build command: `pnpm build`

    - Publish directory: `.next`

5. 点击 "Deploy site" 完成部署

6. 得到一个 `.netlify.app` 三级域名，截止2026.2.3国内均可正常访问，但使用中国移动蜂窝网络访问可能会不稳定，请知晓。

### 方案 3：正常方法部署到 Cloudflare Pages（不是Worker！）

示例：https://wslpress.pages.dev/

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/) 并登录

2. 点击 "计算和AI" → "Workers和Pages"，点击右上角“创建应用程序”，跳转后在下方“想要部署 Pages？开始使用”点击“开始使用”

3. 导入 `wslpress` 仓库

4. 构建配置（选择Next.js）：

5. 点击 "Deploy site" 完成部署

6. 得到一个 `.pages.dev` 三级域名，已被封。但可以绑定自定义域名

7. 然后按教程去做：[使用 Cloudflare Pages 部署 WSLpress 的用户：请注意](https://wslpress.taiwan.mrche.top/posts/deploying-wsl-on-cfpages)

### 方案 4：通过直接上传资产部署到 Cloudflare Pages（建议不会科学上网的小白使用）

参考教程：[🚀 保姆级教程：从零部署 WSLpress 博客到 Cloudflare Pages（本地构建 + 拖拽上传）](https://wslpress.taiwan.mrche.top/posts/deploy-wsl-on-cf-easily)

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

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

---

## 📞 联系我们&官方声明

如果有任何问题或建议，欢迎通过以下方式联系：

- GitHub Issues：[提交问题](https://github.com/che-ui/wslpress/issues)

- 官方反馈平台提交（推荐）：🌐 [点此进入](https://wslpress.taiwan.mrche.top/feedback.html)

- 开发者：che-ui（中国初中生，WSLpress的GitHub 仓库维护者）

---

🌟 如果你喜欢这个模板，欢迎给仓库点个 Star 支持我们！

---

**关于项目名称 “WSLpress” 的正式声明**

本项目 **WSLpress**（一个静态博客生成框架）特此声明：

**与微软（Microsoft）的 Windows Subsystem for Linux（WSL）技术与产品无任何隶属、依赖或关联关系。**

为避免混淆，特澄清以下几点：

1.  **名称说明**：本项目名称中的 “WSL” 仅为标识，指代“威慑力”。不代表其依赖于 Windows WSL 技术才能运行。它只是一个静态博客框架。
2.  **无关联声明**：本项目并非由微软开发、赞助或认可。微软的 “WSL” 是其独立的操作系统兼容层技术商标。
3.  **项目独立性**：WSLpress 是一个独立的开源静态网站生成工具，其设计、开发与维护均与微软官方无关。
4.  **名称由来**：名称最初的灵感源于Wingsly，像翼般轻量，与微软官方无关。
5.  **使用范围**：用户可在任何支持其运行环境的平台上使用本框架，无需局限于 Windows 或 WSL。

我们尊重微软及其 WSL 技术的商标与知识产权。任何因名称相似可能导致的误解，均非本意。

如有任何疑问，请通过项目 GitHub 仓库与我们联系。

特此声明。

**WSLpress 项目维护者：@che-ui**

---

Если вы не используете упрощённый китайский, пожалуйста, выберите файл README на соответствующем языке в корневом каталоге в соответствии со своей страной или регионом.

Falls Sie kein vereinfachtes Chinesisch verwenden, wählen Sie bitte im Stammverzeichnis die README in der für Ihr Land oder Ihre Region entsprechenden Sprache aus.

간체중국어 사용자가 아닌 경우, 귀하의 국가 또는 지역에 따라 루트 디렉토리에서 해당 언어의 README 파일을 선택해 주세요.

如非簡體中文使用者，請根據您所處的國家或地區，在根目錄選擇相應語言的README文件。

Si vous n'utilisez pas le chinois simplifié, veuillez sélectionner le README dans la langue correspondante à votre pays ou région dans le répertoire racine.

Mura úsáideoir Sínis Shimplí thú, roghnaigh an README sa teanga is cuí de réir do thíre nó do réigiúin san eolaire fréimhe, le do thoil.

إذا لم تكن مستخدمًا للصينية المبسطة، يُرجى اختيار ملف README باللغة المناسبة حسب بلدك أو منطقتك في الدليل الجذري.

---

During the development of WSLpress, we referred to relevant templates from Vercel and made extensive modifications and expansions on that basis. Approximately 6% of the initial structure references template code. The remaining approximately 34% of the code was generated with the assistance of AI such as Deepseek R1, Deepseek V3, Dola, and GPT 5.2 mini, and all of it has been manually reviewed, adjusted, and optimized by @che-ui.
