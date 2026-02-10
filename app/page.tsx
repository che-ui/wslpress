// app/page.tsx（原仓库适配版 + 视频预加载）
import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

// 匹配原仓库的SEO配置
export const metadata: Metadata = {
  title: 'wslpress',
  description: '基于Next.js的轻量级博客框架',
};

// 模拟原仓库的文章数据（和原仓库数据结构一致）
const posts = [
  {
    id: 1,
    title: 'wslpress 快速上手',
    excerpt: '基于Next.js + Tailwind CSS构建的现代博客框架，简单易用',
    date: '2026-02-10',
    tag: '教程',
  },
  {
    id: 2,
    title: 'Tailwind CSS 样式适配',
    excerpt: '如何在wslpress中自定义GitHub风格的UI样式',
    date: '2026-02-09',
    tag: '样式',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 原仓库的Hero区（装饰图位置）- 替换为视频 + 预加载 */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* 核心：视频替换原有hero.jpg + 添加预加载 */}
        <video
          src="/home.mp4"                // 指向public/home.mp4
          autoPlay                       // 自动播放（原仓库装饰图自动展示）
          loop                           // 循环播放（贴合装饰图的静态展示逻辑）
          muted                          // 浏览器强制静音才能自动播放
          playsInline                    // 移动端内联播放（匹配原仓库移动端适配）
          poster="/hero.jpg"             // 复用原仓库的hero.jpg作为封面
          preload="auto"                 // 关键：添加预加载，优先加载视频
          className="absolute inset-0 w-full h-full object-cover"  // 匹配原仓库装饰图样式
        >
          {/* 降级提示（原仓库风格） */}
          <p className="text-center py-4">
            您的浏览器不支持视频播放，请<a href="/hero.jpg" className="text-blue-600 underline">查看图片</a>
          </p>
        </video>

        {/* 原仓库的Hero区文字（完全保留原样式） */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">wslpress</h1>
          <p className="text-xl text-white mb-8">轻量级 · 高性能 · 易扩展</p>
          <Link 
            href="/posts" 
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            查看文章
          </Link>
        </div>
      </section>

      {/* 原仓库的文章列表区（完全保留） */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-8 border-b pb-2">最新文章</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <Link href={`/posts/${post.id}`} className="hover:no-underline">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{post.title}</h3>
              </Link>
              <div className="text-sm text-gray-600 mb-3">
                {post.date} · {post.tag}
              </div>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
