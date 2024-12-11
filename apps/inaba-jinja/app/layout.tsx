import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { type Metadata, type Viewport } from 'next'
import Link from 'next/link'
import { type ReactNode } from 'react'
import { description, title as siteName, themeColor } from '@/lib/constants'
import Background from './_components/background'
import MobileMenu from './_components/mobile-menu'

export const metadata: Metadata = {
  description,
  manifest: '/manifest.webmanifest',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  robots: {
    follow: true,
    index: true
  },
  title: {
    default: siteName,
    template: `%s - ${siteName}`
  }
}

export const viewport: Viewport = {
  themeColor,
  viewportFit: 'cover'
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns#" />
      <body>
        <div className="md:grid md:min-h-dvh md:grid-rows-[1fr_auto]">
          <MobileMenu className="supports-[right:env(safe-area-inset-right)]:right-safe supports-[top:env(safe-area-inset-top)]:top-safe fixed right-0 top-0 md:hidden" />

          <div className="pl-safe pr-safe pt-safe">{children}</div>

          <footer className="pb-safe pl-safe pr-safe hidden bg-black/80 text-sm text-slate-100 md:block">
            <nav className="p-4">
              <ul className="flex items-center justify-end gap-4">
                <li>
                  <Link className="hover:underline" href="/about">
                    因幡神社とは
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href="/privacy">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="https://haneru.dev/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    運営者情報
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>

        <Background />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
