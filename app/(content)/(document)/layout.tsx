import { type ReactNode } from 'react'
import MarkdownWrapper from './MarkdownWrapper'
import styles from './layout.module.css'

type Props = {
  children: ReactNode
}

export default function DocumentLayout({ children }: Props) {
  return (
    <MarkdownWrapper>
      <div className={styles.markdown}>{children}</div>
    </MarkdownWrapper>
  )
}
