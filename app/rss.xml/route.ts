import { allPosts } from "contentlayer/generated"

function escapeXml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

export async function GET() {
  // 生产环境请在部署平台（Vercel/Netlify）设置 SITE_URL，例如 https://example.com
  const siteUrl = process.env.SITE_URL || "https://wslpress.taiwan.mrche.top"

  // 过滤并按日期降序排列（确保所有文章都有 date 字段）
  const posts = allPosts
    .filter((p) => p.date) // 只包含有日期的文章
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const lastBuildDate = posts.length ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = `${siteUrl}${post.slug}` // contentlayer 的 slug 通常是以 / 开头
      const title = escapeXml(post.title ?? "Untitled")
      const description = escapeXml((post.description as string) ?? "")
      const pubDate = post.date ? new Date(post.date).toUTCString() : new Date().toUTCString()

      return `
  <item>
    <title>${title}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${description}</description>
  </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml("WSLpress")}</title>
  <link>${siteUrl}</link>
  <description>${escapeXml("WSLpress 博客最新文章")}</description>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <language>zh-CN</language>
  ${items}
</channel>
</rss>`.trim()

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600", // 可根据需要调整缓存
    },
  })
}
