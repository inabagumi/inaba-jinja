import { type ReactNode } from 'react'
import styles from './layout.module.css'

type Props = {
  children: ReactNode
}

export default function DocumentLayout({ children }: Props) {
  return <div className={styles.markdown}>{children}</div>
}
