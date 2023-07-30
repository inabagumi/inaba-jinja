import { SkipNavContent } from '@reach/skip-nav'
import { type ReactNode } from 'react'
import styles from './layout.module.css'

type Props = {
  children: ReactNode
  title: ReactNode
}

export default function ContentLayout({ children, title }: Props) {
  return (
    <main className={styles.wrapper}>
      <SkipNavContent />

      <div className={styles.content}>
        {title}
        {children}
      </div>
    </main>
  )
}
