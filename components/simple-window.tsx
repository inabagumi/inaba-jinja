import { SkipNavContent } from '@reach/skip-nav'
import styles from './simple-window.module.css'
import type { ReactNode, VFC } from 'react'

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
