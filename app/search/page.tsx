import { allPosts } from 'contentlayer/generated'
import SearchClient from '@/components/SearchClient'
import Link from 'next/link'

export default function SearchPage() {
  // 只传必要的字段到客户端，避免传入大量 MDX/AST
  const posts = allPosts.map((p) => ({
    _id: p._id,
    title: p.title,
    description: p.description ?? '',
    slug: p.slug,
    date: p.date ?? '',
    // 有些 Post 类型可能没有 tags 字段，使用 any 断言以避免 TS 错误
    tags: (p as any).tags ?? [],
  }))

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">搜索文章</h1>
          <Link href="/" className="text-sm text-slate-500 hover:underline">
            返回首页
          </Link>
        </div>

        {/* 客户端组件：负责输入与筛选 */}
        {/* posts 为简单序列化数组，安全可序列化传入客户端 */}
        {/* @ts-ignore-next-line Server Component -> Client prop allowed (plain JSON) */}
        <SearchClient posts={posts} />
      </div>
    </div>
  )
}