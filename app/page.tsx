import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import HomeHero from "@/components/HomeHero"
import PostCard from "@/components/PostCard"

export default function Home() {
  // 按日期倒序显示最新文章
  const posts = allPosts
    .slice()
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  return (
    <div className="min-h-screen">
      <HomeHero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <section className="bg-transparent">
          <h3 className="sr-only">Latest posts</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                description={post.description}
                href={post.slug}
                date={post.date}
              />
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="https://github.com/che-ui/wslpress/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-700 transition"
          >
            ✨ 在Github上查看本项目
          </Link>
        </div>
      </div>
    </div>
  )
}
