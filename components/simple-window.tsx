import { SkipNavContent } from '@reach/skip-nav'
import { type FC, type ReactNode } from 'react'
import styles from './simple-window.module.css'

type Props = {
  children: ReactNode
  title?: string
}

const SimpleWindow: FC<Props> = ({ children, title }) => {
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
