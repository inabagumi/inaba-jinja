import { SkipNavContent } from '@reach/skip-nav'
import { type Metadata } from 'next'
import Link from 'next/link'
import cardImage from '@/assets/card.jpg'
import Logo from '@/assets/vertical-logo.svg'
import { description, title, twitterAccount } from '@/lib/constants'
import styles from './page.module.css'

export const metadata: Metadata = {
  alternates: {
    canonical: '/'
  },
  openGraph: {
    description,
    images: [
      {
        height: cardImage.height,
        url: cardImage.src,
        width: cardImage.width
      }
    ],
    title,
    type: 'website',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${twitterAccount}`,
    title
  }
}

export default function Page() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Logo aria-label={title} className={styles.logo} />
        </h1>

        <p className={styles.description}>{description}</p>
      </header>

      <SkipNavContent />

      <Link className={styles.lotteryButton} href="/lottery" role="button">
        おみくじを引く
      </Link>
    </main>
  )
}
