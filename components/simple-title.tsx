import { type ReactNode } from 'react'
import styles from './simple-title.module.css'

type Props = {
  children: ReactNode
}

export default function SimpleTitle({ children }: Props): JSX.Element {
  return <h1 className={styles.title}>{children}</h1>
}