import { SkipNavContent } from '@reach/skip-nav'
import type { ReactNode, VFC } from 'react'

import styles from '@/styles/components/simple-window.module.css'

type Props = {
  children: ReactNode
  title?: string
}

const SimpleWindow: VFC<Props> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <SkipNavContent />

      <div className={styles.content}>
        {title && <h1 className={styles.title}>{title}</h1>}

        {children}
      </div>
    </div>
  )
}

export default SimpleWindow
