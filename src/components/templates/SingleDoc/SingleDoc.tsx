import Link from 'next/link'
import React, { FC } from 'react'
import Logo from '../../atoms/Logo'
import styles from './SingleDoc.module.css'

type Props = {
  title?: string
}

const SingleDoc: FC<Props> = ({ children, title }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Link href="/" prefetch={false}>
        <a className={styles.brand} href="/">
          <Logo aria-label="因幡神社" />
        </a>
      </Link>
    </header>

    <div className={styles.content}>
      {title && <h1 className={styles.title}>{title}</h1>}

      {children}
    </div>
  </div>
)

export default SingleDoc
