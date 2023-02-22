import { SkipNavContent } from '@reach/skip-nav'
import { type Metadata } from 'next'
import Link from 'next/link'
import Logo from '@/assets/vertical-logo.svg'
import { description, title } from '@/lib/constants'
import styles from './page.module.css'

export const metadata: Metadata = {
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/'
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
