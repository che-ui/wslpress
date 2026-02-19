!/wslpress-new-logo.svg

# WSLpress (WSLpress) Deterrence·Light Wings: A Modern Blogging Framework Based on Next.js, Contentlayer, and Tailwind, Designed for Simplified Chinese Users, Featuring Fully Localized Interface and Complete Native Ecosystem Compatibility

# WSLpress 🚀 https://api.netlify.com/api/v1/badges/c69cc1c0-6349-4e44-83b9-bfbbc25417ae/deploy-status](https://app.netlify.com/projects/wslpress/deploys)

A lightweight and efficient modern blog template, built with Next.js 13 + Contentlayer + Tailwind CSS.

**If you need to quickly insert images, you can use the tool we provide, which is extremely useful!**
- Introduction article: /posts/wslpress-base64-image-tool
- Use it directly here: 🌐 https://wslpress-base64-image-tool.mrche.top

WSLpress (Wingsly Press) is a blog template designed for developers and content creators. It combines cutting-edge frontend technology stacks with elegant visual design, supports dark mode, responsive layout, and visual content management, allowing you to focus on content creation without worrying about complex configurations.

Developed by **@che-ui** | 🌐 https://wslpress.taiwan.mrche.top

---

## ✨ Core Features

- **Cutting-edge Tech Stack**: Based on Next.js 13 App Router, supporting modern features like React Server Components, Route Groups, etc.
- **Efficient Content Management**: Automatically parses Markdown/MDX via Contentlayer, type-safe and requires no manual configuration.
- **Beautiful & User-Friendly UI**: Responsive design powered by Tailwind CSS, with a well-designed homepage Hero section and article cards.
- **SEO-Friendly**: Within less than 10 days of launch, this site ranked #1 in Bing search weights for domestic, international, and overseas versions.
- **Dark Mode**: Automatically follows system preferences, also supports manual switching, adapting to different reading scenarios.
- **Visual CMS**: Integrated Netlify (Decap) CMS, allowing non-technical users to easily publish/edit articles (Due to academic commitments, currently under maintenance and highly not recommended for enabling).
- **Optimized Development Experience**: ESLint configuration, TypeScript type checking, Tailwind utility classes for rapid development.
- **One-Click Deployment**: Seamlessly adapts to platforms like Cloudflare Pages, Vercel, Netlify, etc., with a simple and efficient deployment process.
- **RSS**: Supports RSS subscription (/rss.xml).
- **Global Search**: Supports full-text quick search.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher (recommended, npm/yarn can also be used)

### Step 1: Clone the Repository

```Bash
git clone https://github.com/che-ui/wslpress.git
cd wslpress
```

### Step 2: Install Dependencies

```Bash
pnpm install
# or npm install / yarn install
```

### Step 3: Start the Development Server

```Bash
pnpm dev
```

### Step 4: Access the Local Site

Open your browser and visit `http://localhost:3000` to see the blog preview.

### Step 5: Build for Production

```Bash
pnpm build
# After building, you can start the production server with pnpm start
```

---

## 📝 Usage Guide

### 1. Create Your First Article

1. Create a Markdown/MDX file in the `content/` directory (e.g., `hello-world.md`).
2. Add metadata following the _frontmatter_ format below:

```Markdown
---
title: "My First Blog Post"
date: "2026-01-21"
description: "This is my first article published using WSLpress"
tags: ["Next.js", "Blogging"]
---

Here is the main content of the article. You can use Markdown or MDX syntax.

## Subheading
- List item 1
- List item 2

import SomeComponent from "@/components/SomeComponent";
<SomeComponent />
```

1. After saving, the development server will hot-reload, and the article will appear in real-time on the homepage and article list.

### 2. Customize Blog Configuration

- **Modify Site Information**: Edit `siteMetadata` in `contentlayer.config.js` (CMS configuration needs to be updated accordingly).
- **Adjust Styles**: Modify `tailwind.config.js` to customize colors, fonts, spacing, etc.
- **Change Page Structure**: Edit page components in the `app/` directory (e.g., `app/page.tsx` corresponds to the homepage).
- **Add Components**: Create custom components in the `components/` directory, which can be directly imported in MDX files.

### 3. Manage Content with Netlify CMS

1. After starting the development server, visit `/admin`.
2. Log in with your Netlify account (requires linking to a repository on first use).
3. You can directly create, edit, and delete articles in the CMS backend without manually modifying Markdown files.

---

## 📂 Directory Structure

```Plain Text
wslpress/
├── app/                  # Next.js 13 App Router directory
│   ├── page.tsx         # Homepage
│   ├── posts/           # Article list/details pages
│   └── layout.tsx       # Global layout (includes navigation, footer)
├── components/          # Reusable components (article cards, navbar, etc.)
├── content/             # Article content directory (Markdown/MDX files)
├── public/              # Static assets (images, icons, CMS config)
│   ├── admin/           # Netlify CMS admin interface configuration
│   └── WSLpress.svg     # Project Logo
├── contentlayer.config.js # Contentlayer configuration (content types, metadata)
├── tailwind.config.js   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependency management
```

---

## 🌐 Quick Deployment Guide (After forking this repository)

### Option 1: Deploy to Vercel (Recommended)

Example: https://wslpress.vercel.app/

1. Visit https://vercel.com/ and log in.
2. Click "New Project" and import the `wslpress` repository.
3. No additional configuration is needed; Vercel will automatically recognize it as a Next.js project.
4. Click "Deploy" and wait for the deployment to complete. You will receive an online address.
5. Optionally, bind a custom domain. Note: Users in mainland China cannot access `.vercel.app` domains.

### Option 2: Deploy to Netlify

Example: https://wslpress.netlify.app/

1. Visit https://www.netlify.com/ and log in.
2. Click "Add new site" → "Import an existing project".
3. Import the `wslpress` repository.
4. Build settings (auto-filled, usually no changes needed):
   - Build command: `pnpm build`
   - Publish directory: `.next`
5. Click "Deploy site" to complete the deployment.
6. You will get a `.netlify.app` subdomain. As of Feb 3, 2026, it is accessible within China, but access may be unstable via China Mobile cellular networks.

### Option 3: Standard Method to Deploy to Cloudflare Pages (Not Worker!)

Example: https://wslpress.pages.dev/

1. Visit the https://dash.cloudflare.com/ and log in.
2. Click "Compute and AI" → "Workers & Pages", then click "Create an application" in the top right. On the next page, click "Get started" under "Ready to deploy Pages?".
3. Import the `wslpress` repository.
4. Build configuration (select Next.js):
5. Click "Deploy site" to complete the deployment.
6. You will get a `.pages.dev` subdomain, which is blocked. However, you can bind a custom domain.
7. Then follow this tutorial: /posts/deploying-wsl-on-cfpages

### Option 4: Deploy to Cloudflare Pages via Direct Asset Upload (Recommended for beginners without access to scientific internet access)

Refer to the tutorial: /posts/deploy-wsl-on-cf-easily

---

## 🛠️ Configuration Details

### Contentlayer Configuration

`contentlayer.config.js` defines the metadata structure for articles. You can extend fields as needed (e.g., `author`, `coverImage`):

```JavaScript
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // You can add custom fields
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

### Tailwind Custom Theme

Modify the `theme` field in `tailwind.config.js` to customize brand colors, fonts, etc.:

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Supports class-based dark mode switching
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Custom primary color
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

## 🤝 Contribution Guidelines

Contributions are welcome through the following methods:

1. Fork the repository and create a branch (`git checkout -b feature/xxx`).
2. Commit your changes (`git commit -m "feat: add xxx feature"`).
3. Push the branch (`git push origin feature/xxx`).
4. Submit a Pull Request.

### Contribution Standards

- Code style follows the ESLint configuration.
- New features should be accompanied by updates to the README.
- Commit messages should use conventional commit format (feat/fix/docs/style/refactor/test/chore).

---

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

---

## 📞 Contact Us & Official Statement

If you have any questions or suggestions, feel free to contact us through:

- GitHub Issues: https://github.com/che-ui/wslpress/issues
- Official Feedback Platform (Recommended): 🌐 https://wslpress.taiwan.mrche.top/feedback.html
- Developer: che-ui (a middle school student in China, maintainer of the WSLpress GitHub repository)

---

🌟 If you like this template, please give the repository a Star to support us!

---

**Official Statement Regarding the Project Name "WSLPress"**

This project, **WSLPress** (a static site/blog generation framework), hereby declares:

**It has no affiliation, dependency, or association whatsoever with Microsoft's Windows Subsystem for Linux (WSL) technology and product.**

To avoid confusion, the following points are clarified:

1.  **Name Clarification**: The "WSL" in this project's name is merely an identifier, representing "威慑力" (Deterrence). It does not imply that the project relies on Windows WSL technology to function. It is simply a static blogging framework.
2.  **Non-Association Statement**: This project is not developed, sponsored, or endorsed by Microsoft. Microsoft's "WSL" is its independent trademark for an operating system compatibility layer technology.
3.  **Project Independence**: WSLPress is an independent open-source static site generation tool. Its design, development, and maintenance are entirely unrelated to Microsoft.
4.  **Name Origin**: The initial inspiration for the name came from "Wingsly," implying lightness like wings, and is unrelated to Microsoft.
5.  **Usage Scope**: Users can utilize this framework on any platform supporting its runtime environment, without being limited to Windows or WSL.

We respect Microsoft's trademarks and intellectual property rights for its WSL technology. Any potential misunderstanding arising from the similarity in names is unintentional.

For any inquiries, please contact us through the project's GitHub repository.

Sincerely,

**WSLPress Project Maintainer: @che-ui**
