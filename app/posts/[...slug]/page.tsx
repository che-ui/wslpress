import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import GiscusComments from "@/components/Giscus"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article className="py-6 prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>

      {/* Giscus 评论区 */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* 使用 post.slug 或 post._id 作为 identifier，确保每篇文章唯一 */}
        {/* mapping='specific' 时会使用 term=identifier 来匹配或创建讨论线程 */}
        {/* @ts-ignore Server->Client component usage */}
        <GiscusComments identifier={post.slug} title={post.title} url={post.slug} mapping="specific" />
      </div>
    </>
  )
}