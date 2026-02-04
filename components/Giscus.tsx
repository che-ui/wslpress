'use client'
import React from 'react'
import Giscus from '@giscus/react'

type Props = {
  identifier: string
  title?: string
  url?: string
  mapping?: 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'
}

export default function GiscusComments({
  identifier,
  title,
  url,
  mapping = 'specific',
}: Props) {
  // 需要在项目环境中设置以下环境变量（示例见下方）
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
  const reactionsEnabled = process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED ?? '1'
  const emitMetadata = process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA ?? '0'
  const inputPosition = process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION ?? 'bottom'
  const theme = process.env.NEXT_PUBLIC_GISCUS_THEME ?? 'light'
  const lang = process.env.NEXT_PUBLIC_GISCUS_LANG ?? 'zh-CN'

  if (!repo || !repoId || !category || !categoryId) {
    // 若未配置 Giscus，静默返回空占位，避免页面报错
    return null
  }

  // 如果使用 mapping='specific'，需要传入 `term` （这里使用 identifier，例如 post.slug）
  const giscusProps: Record<string, any> = {
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    theme,
    lang,
    loading: 'lazy',
  }

  if (mapping === 'specific') {
    giscusProps.term = identifier
  }

  return (
    <div className="prose dark:prose-invert">
      <Giscus {...giscusProps} />
    </div>
  )
}