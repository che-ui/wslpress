"use client"; // 关键：标记为客户端组件
import { useState, useEffect } from "react";
import { allPosts } from "contentlayer/generated";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import "client-only"; // 现在可以安全导入

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 解析 slug 并匹配对应文章
  useEffect(() => {
    const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
    const matchedPost = allPosts.find((p) => p._raw.flattenedPath === slug);
    
    if (!matchedPost) {
      notFound(); // 文章不存在则 404
    } else {
      setPost(matchedPost);
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse text-center">加载中...</div>
      </div>
    );
  }

  if (!post) return notFound();

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 文章标题 */}
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>
      
      {/* 文章日期 */}
      <div className="text-gray-500 mb-8">{new Date(post.date).toLocaleDateString()}</div>
      
      {/* 文章内容（包含表格样式） */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />

      {/* styled-jsx 表格样式（客户端组件中可用） */}
      <style jsx global>{`
        /* 表格通用样式 */
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 1rem;
        }

        /* 表头样式 */
        th {
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
        }

        /* 单元格样式 */
        td {
          border: 1px solid #dee2e6;
          padding: 0.75rem 1rem;
          vertical-align: top;
        }

        /* 奇偶行交替 */
        tbody tr:nth-child(even) {
          background-color: #f8f9fa;
        }

        /*  hover 效果 */
        tbody tr:hover {
          background-color: #e9ecef;
        }

        /* 响应式表格 */
        @media (max-width: 768px) {
          table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }
        }
      `}</style>
    </article>
  );
}
