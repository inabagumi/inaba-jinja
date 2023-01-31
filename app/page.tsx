import { SkipNavContent } from '@reach/skip-nav'
import Link from 'next/link'
import Logo from '@/assets/vertical-logo.svg'
import { description, title } from '@/lib/constants'
import styles from './page.module.css'

export const metadata = {
  alternates: {
    canonical: new URL('/', process.env.NEXT_PUBLIC_BASE_URL),
    languages: []
  },
  openGraph: {
    type: 'website',
    url: new URL('/', process.env.NEXT_PUBLIC_BASE_URL)
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
