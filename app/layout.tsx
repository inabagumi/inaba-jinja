import '@reach/skip-nav/styles.css'
import '@/styles/globals.css'
import { SkipNavLink } from '@reach/skip-nav'
import { type Metadata } from 'next'
import Link from 'next/link'
import { type ReactNode } from 'react'
import cardImage from '@/assets/card.jpg'
import appleTouchIcon from '@/assets/icons/apple-touch-icon.png'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import {
  description,
  title as siteName,
  themeColor,
  twitterAccount
} from '@/lib/constants'
import AnalyticsWrapper from './AnalyticsWrapper'
import Background from './Background'
import Menu from './Menu'
import styles from './layout.module.css'

export const metadata: Metadata = {
  description,
  icons: {
    apple: {
      sizes: `${appleTouchIcon.width}x${appleTouchIcon.height}`,
      url: appleTouchIcon.src
    },
    icon: [
      {
        sizes: `${favicon192x192.width}x${favicon192x192.height}`,
        url: favicon192x192.src
      },
      {
        sizes: `${favicon512x512.width}x${favicon512x512.height}`,
        url: favicon512x512.src
      }
    ]
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    description,
    images: [
      {
        height: cardImage.height,
        url: cardImage.src,
        width: cardImage.width
      }
    ],
    siteName,
    type: 'article'
  },
  robots: {
    follow: true,
    index: true
  },
  themeColor,
  title: {
    default: siteName,
    template: `%s - ${siteName}`
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${twitterAccount}`
  },
  viewport: 'viewport-fit=cover,width=device-width'
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns#">
        <link href="/manifest.webmanifest" rel="manifest" />
      </head>
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

        <AnalyticsWrapper />
      </body>
    </html>
  )
}
