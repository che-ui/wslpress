import Link from "next/link"

export default function HomeHero() {
  return (
    <header className="relative overflow-hidden">
      <div
        className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 text-white"
        aria-hidden="true"
      >
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
              Wingsly Press
            </h1>
            <p className="mt-4 text-lg sm:text-xl opacity-95">
              一个现代、极简又有设计感的博客模板 —— 更易读、更好看，也更酷。
            </p>

            <div className="mt-8 flex gap-3">
              <Link
                href="/about"
                className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur"
              >
                了解我们
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow-sm"
              >
                全局搜索
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 装饰性 SVG / 形状，增强设计感 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -mb-20">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 C 400 100 1040 100 1440 0 L 1440 120 L 0 120 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>
    </header>
  )
}
