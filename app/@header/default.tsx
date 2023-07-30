import Link from 'next/link'
import Logo from '@/components/logo.svg'
import { title as siteName } from '@/lib/constants'
import styles from './default.module.css'

export default function DefaultHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        <Logo aria-label={siteName} className={styles.brandLogo} />
      </Link>
    </header>
  )
}
