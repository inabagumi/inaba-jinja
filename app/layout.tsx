import '@reach/skip-nav/styles.css'
import '@/styles/globals.css'
import { SkipNavLink } from '@reach/skip-nav'
import Link from 'next/link'
import { type ReactNode } from 'react'
import appleTouchIcon from '@/assets/icons/apple-touch-icon.png'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import { themeColor } from '@/lib/constants'
import AnalyticsWrapper from './AnalyticsWrapper'
import Background from './Background'
import Menu from './Menu'
import styles from './layout.module.css'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props): JSX.Element {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns#">
        <meta content="viewport-fit=cover,width=device-width" name="viewport" />
        <meta content={themeColor} name="theme-color" />
        <link href="/manifest.webmanifest" rel="manifest" />
        <link
          href={favicon192x192.src}
          rel="icon"
          sizes={`${favicon192x192.width}x${favicon192x192.height}`}
          type="image/png"
        />
        <link
          href={favicon512x512.src}
          rel="icon"
          sizes={`${favicon512x512.width}x${favicon512x512.height}`}
          type="image/png"
        />
        <link
          href={appleTouchIcon.src}
          rel="apple-touch-icon"
          sizes={`${appleTouchIcon.width}x${appleTouchIcon.height}`}
        />
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
