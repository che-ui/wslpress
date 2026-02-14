import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 max-w-none">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <div>
        <style jsx>{`
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5em 0;
          }
          th, td {
            padding: 0.75em 1em;
            text-align: left;
            border: 1px solid #d1d5db;
          }
          th {
            background-color: #f3f4f6;
            font-weight: 600;
          }
          tbody tr:nth-child(even) {
            background-color: #f9fafb;
          }

          /* Dark mode styles for WSLpress (uses class="dark") */
          .dark th,
          .dark td {
            border-color: #4b5563;
          }
          .dark th {
            background-color: #1f2937;
          }
          .dark tbody tr:nth-child(even) {
            background-color: #111827;
          }
        `}</style>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
}
