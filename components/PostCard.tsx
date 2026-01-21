import Link from "next/link"

interface Props {
  title: string
  description?: string
  href: string
  date?: string
}

export default function PostCard({ title, description, href, date }: Props) {
  return (
    <article className="group relative rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6">
      <Link href={href} className="absolute inset-0 z-10" />
      <div className="relative z-20">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
        </div>

        {description && <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{description}</p>}

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <time dateTime={date}>{date ? new Date(date).toLocaleDateString() : ""}</time>
          <span className="inline-flex items-center gap-2">
            <span className="px-2 py-1 rounded-full text-xs bg-slate-100 dark:bg-slate-700">文章</span>
          </span>
        </div>
      </div>
    </article>
  )
}