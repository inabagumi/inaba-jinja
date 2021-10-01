import '@reach/skip-nav/styles.css'

import { SkipNavLink } from '@reach/skip-nav'
import clsx from 'clsx'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import Logo from '@/assets/logo.svg'
import IconButton from '@/components/icon-button'
import styles from '@/styles/components/layout.module.css'
import type { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
  hideHeader?: boolean
}

const Layout: VFC<Props> = ({ children, hideHeader = false }) => {
  const [menuShown, setMenuShown] = useState(false)

  const showMenu = useCallback(() => {
    setMenuShown(true)
  }, [])

  const hideMenu = useCallback(() => {
    setMenuShown(false)
  }, [])

  return (
    <>
      <SkipNavLink className={styles.skipNavLink}>
        コンテンツにスキップ
      </SkipNavLink>

      <div className={styles.wrapper}>
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
              <Link href="/" prefetch={false}>
                <a
                  className={styles.menuLogoLink}
                  onClick={hideMenu}
                  onKeyPress={hideMenu}
                  tabIndex={!menuShown ? -1 : undefined}
                >
                  <Logo aria-label="因幡神社" className={styles.menuLogo} />
                </a>
              </Link>
            </header>

            <div className={styles.menuContent} />

            <footer>
              <ul className={styles.menuList} role="menu">
                <li className={styles.menuItem} role="menuitem">
                  <Link href="/about" prefetch={false}>
                    <a
                      className={styles.menuLink}
                      href="/about"
                      onClick={hideMenu}
                      onKeyPress={hideMenu}
                      tabIndex={!menuShown ? -1 : undefined}
                    >
                      因幡神社とは
                    </a>
                  </Link>
                </li>
                <li className={styles.menuItem} role="menuitem">
                  <Link href="/privacy" prefetch={false}>
                    <a
                      className={styles.menuLink}
                      href="/privacy"
                      onClick={hideMenu}
                      onKeyPress={hideMenu}
                      tabIndex={!menuShown ? -1 : undefined}
                    >
                      プライバシーポリシー
                    </a>
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

        {!hideHeader && (
          <header className={styles.header}>
            <Link href="/" prefetch={false}>
              <a className={styles.brand}>
                <Logo className={styles.brandLogo} aria-label="因幡神社" />
              </a>
            </Link>
          </header>
        )}

        {children}
      </div>

      <footer className={styles.footer}>
        <nav>
          <ul className={styles.navLinks}>
            <li className={styles.navLinksItem}>
              <Link href="/about" prefetch={false}>
                <a className={styles.navLink} href="/about">
                  因幡神社とは
                </a>
              </Link>
            </li>
            <li className={styles.navLinksItem}>
              <Link href="/privacy" prefetch={false}>
                <a className={styles.navLink} href="/privacy">
                  プライバシーポリシー
                </a>
              </Link>
            </li>
            <li className={styles.navLinksItem}>
              <a
                className={styles.navLink}
                href="https://haneru.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                運営者情報
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default Layout
