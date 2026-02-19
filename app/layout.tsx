/* 在你的 layout.tsx 的 head 部分加上这行（示例片段） */
<head>
  {/* 其他 meta / link */}
  <link rel="alternate" type="application/rss+xml" title="WSLpress RSS" href="/rss.xml" />
</head>

import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "WSLpress 官方示例：体验简约、快速、安全、现代的网页设计 | 由@che-ui强势驱动",
  description: "由 WSLpress 生成的網頁，這是一個輕量高效的現代部落格模板，基於 Next.js 13 + Contentlayer + Tailwind CSS 建構",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">🚗 首页</Link>
                  <Link href="/about">😊 关于</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
