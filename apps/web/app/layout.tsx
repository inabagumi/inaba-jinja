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
        <div className="pl-[env(safe-area-inset-left,0)] pr-[env(safe-area-inset-right,0)] pt-[env(safe-area-inset-top,0)] md:grid md:min-h-dvh md:grid-rows-[1fr_auto]">
          <MobileMenu />

          {children}

          <footer className="hidden bg-black/80 pb-[env(safe-area-inset-bottom,0)] text-sm text-white md:block">
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
