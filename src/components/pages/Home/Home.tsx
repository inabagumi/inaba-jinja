import Link from 'next/link'
import React, { FC } from 'react'
import Logo from '../../atoms/Logo'
import styles from './Home.module.css'

const Home: FC = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Logo aria-label="因幡神社" vertical />
        </h1>

        <p className={styles.description}>
          因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶
          あにまーれの因幡はねる様をご祭神としてお祀りしています。
        </p>
      </header>

      <Link href="/lottery">
        <a className={styles.lotteryButton} href="/lottery" role="button">
          おみくじを引く
        </a>
      </Link>
    </div>
  )
}

export default Home
