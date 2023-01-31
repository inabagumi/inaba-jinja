'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import Logo from '@/assets/logo.svg'
import IconButton from '@/ui/IconButton'
import styles from './Menu.module.css'

export default function Menu() {
  const [menuShown, setMenuShown] = useState(false)

  const showMenu = useCallback(() => {
    setMenuShown(true)
  }, [])

  const hideMenu = useCallback(() => {
    setMenuShown(false)
  }, [])

  return (
    <>
      <IconButton
        aria-controls="global-menu"
        aria-expanded={menuShown}
        aria-label="メニューを開く"
        className={styles.menuButton}
        onClick={showMenu}
        type="button"
      >
        <span aria-hidden className={styles.menuButtonBar} />
        <span aria-hidden className={styles.menuButtonBar} />
        <span aria-hidden className={styles.menuButtonBar} />
      </IconButton>
      <div
        aria-hidden
        className={clsx(styles.backdrop, {
          [styles.backdropShow]: menuShown
        })}
        onClick={hideMenu}
        role="none presentation"
        tabIndex={-1}
      />
      <RemoveScroll allowPinchZoom enabled={menuShown} forwardProps>
        <FocusLock
          as="nav"
          className={styles.menu}
          disabled={!menuShown}
          lockProps={{
            'aria-hidden': !menuShown,
            id: 'global-menu'
          }}
          noFocusGuards
          returnFocus
        >
          <header className={styles.menuHeader}>
            <Link
              className={styles.menuLogoLink}
              href="/"
              onClick={hideMenu}
              onKeyPress={hideMenu}
              prefetch={false}
              tabIndex={!menuShown ? -1 : undefined}
            >
              <Logo aria-label="因幡神社" className={styles.menuLogo} />
            </Link>
          </header>

          <div className={styles.menuContent} />

          <footer>
            <ul className={styles.menuList} role="menu">
              <li className={styles.menuItem} role="menuitem">
                <Link
                  className={styles.menuLink}
                  href="/about"
                  onClick={hideMenu}
                  onKeyPress={hideMenu}
                  prefetch={false}
                  tabIndex={!menuShown ? -1 : undefined}
                >
                  因幡神社とは
                </Link>
              </li>
              <li className={styles.menuItem} role="menuitem">
                <Link
                  className={styles.menuLink}
                  href="/privacy"
                  onClick={hideMenu}
                  onKeyPress={hideMenu}
                  prefetch={false}
                  tabIndex={!menuShown ? -1 : undefined}
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li className={styles.menuItem} role="menuitem">
                <a
                  className={styles.menuLink}
                  href="https://haneru.dev"
                  onClick={hideMenu}
                  onKeyPress={hideMenu}
                  rel="noopener noreferrer"
                  tabIndex={!menuShown ? -1 : undefined}
                  target="_blank"
                >
                  運営者情報
                </a>
              </li>
            </ul>
          </footer>
        </FocusLock>
      </RemoveScroll>
    </>
  )
}
