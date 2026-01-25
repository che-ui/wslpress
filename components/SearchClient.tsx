'use client'

import { useMemo, useState } from 'react'
import PostCard from '@/components/PostCard'

type PostItem = {
  _id: string
  title: string
  description?: string
  slug: string
  date?: string
  tags?: string[]
}

export default function SearchClient({ posts }: { posts: PostItem[] }) {
  const [q, setQ] = useState('')
  const qNorm = q.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!qNorm) return posts
    return posts.filter((p) => {
      const title = p.title ?? ''
      const desc = p.description ?? ''
      const tags = (p.tags ?? []).join(' ')
      const hay = `${title} ${desc} ${tags}`.toLowerCase()
      return hay.includes(qNorm)
    })
  }, [qNorm, posts])

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="my-6">
        <label htmlFor="site-search" className="sr-only">
          搜索文章
        </label>
        <input
          id="site-search"
          type="search"
          placeholder="搜索标题、描述或标签（回车或等待）"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring focus:border-sky-300"
        />
      </div>

      <div className="mb-4 text-sm text-slate-600">
        {qNorm
          ? `匹配到 ${filtered.length} 篇文章`
          : `共 ${posts.length} 篇文章`}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            href={post.slug}
            date={post.date}
          />
        ))}
      </div>
    </div>
  )
}