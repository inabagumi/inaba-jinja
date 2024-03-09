import { SkipNavContent } from '@reach/skip-nav'
import Link from 'next/link'
import { type ReactNode } from 'react'
import Logo from '@/components/logo.svg'
import { title as siteName } from '@/lib/constants'
import styles from './layout.module.css'

type Props = {
  children: ReactNode
  title: ReactNode
}

export default function ContentLayout({ children, title }: Props) {
  return (
    <div>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <Logo aria-label={siteName} className={styles.brandLogo} />
        </Link>
      </header>

      <main className={styles.wrapper}>
        <SkipNavContent />

        <div className={styles.content}>
          {title}
          {children}
        </div>
      </main>
    </div>
  )
}
