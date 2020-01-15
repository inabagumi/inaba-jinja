import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <p className={styles.copyright}>&copy; 2020 Haneru Developers</p>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <a
              href="https://haneru.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              運営者情報
            </a>
          </li>
          <li>
            <Link href="/disclaimer" prefetch={false}>
              <a href="/disclaimer">免責事項</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy" prefetch={false}>
              <a href="/privacy">プライバシーポリシー</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
