import { SkipNavContent } from '@reach/skip-nav'
import Link from 'next/link'
import { type ReactNode } from 'react'
import Logo from '@/assets/logo.svg'
import styles from './layout.module.css'

type Props = {
  children: ReactNode
}

export default function ContentLayout({ children }: Props): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">
          <Logo aria-label="因幡神社" className={styles.brandLogo} />
        </Link>
      </header>

      <div className={styles.wrapper}>
        <SkipNavContent />

        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
