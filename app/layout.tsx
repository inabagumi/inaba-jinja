import '@reach/skip-nav/styles.css'
import './globals.css'
import { SkipNavLink } from '@reach/skip-nav'
import { Analytics } from '@vercel/analytics/react'
import { type Metadata, type Viewport } from 'next'
import Link from 'next/link'
import { type ReactNode } from 'react'
import { description, title as siteName, themeColor } from '@/lib/constants'
import Background from './_components/background'
import Menu from './_components/menu'
import styles from './layout.module.css'

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
  viewportFit: 'cover',
  width: 'device-width'
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns#" />
      <body>
        <div className={styles.wrapper}>
          <SkipNavLink className={styles.skipNavLink}>
            コンテンツにスキップ
          </SkipNavLink>

          <Menu />

          {children}

          <footer className={styles.footer}>
            <nav>
              <ul className={styles.navLinks}>
                <li className={styles.navLinksItem}>
                  <Link className={styles.navLink} href="/about">
                    因幡神社とは
                  </Link>
                </li>
                <li className={styles.navLinksItem}>
                  <Link className={styles.navLink} href="/privacy">
                    プライバシーポリシー
                  </Link>
                </li>
                <li className={styles.navLinksItem}>
                  <a
                    className={styles.navLink}
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
      </body>
    </html>
  )
}
