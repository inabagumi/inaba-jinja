import Link from 'next/link'
import type { FC } from 'react'
import { useCallback, useState } from 'react'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import styled from 'styled-components'

import Logo from '@/assets/logo.svg'
import ExternalLink from '@/components/external-link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import IconButton from '@/components/icon-button'
import { SkipNavLink } from '@/components/skip-nav'

const Wrapper = styled.div`
  padding-left: env(safe-area-inset-left, 0);
  padding-right: env(safe-area-inset-right, 0);
  padding-top: env(safe-area-inset-top, 0);
  position: relative;

  @media (min-width: 960px) {
    min-height: 100vh;
  }
`

const MenuButton = styled(IconButton)`
  color: #fff;
  font-size: 3rem;
  margin: 0.5rem 0.5rem 0 0;
  position: absolute;
  right: env(safe-area-inset-right, 0);
  top: 0;

  @media (min-width: 960px) {
    display: none !important;
  }
`

const MenuButtonBar = styled.span`
  background-color: currentColor;
  border-radius: 1px;
  display: block;
  height: 2px;
  width: 100%;

  :not(:first-of-type) {
    margin-top: 7px;
  }
`

const Menu = styled.nav`
  background-color: #fff;
  border-left: 1px solid #90a4ae;
  color: #212121;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  transform: translateX(${(props) => (props['aria-hidden'] ? 0 : -100)}%);
  transition: transform 0.3s ease;
  width: 18rem;
  z-index: 100;
`

const MenuHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem 0;
`

const MenuLogoLink = styled.a`
  display: block;
  font-size: 2rem;
`

const MenuLogo = styled(Logo)`
  display: block;
  fill: currentColor;
  height: 1em;
  width: auto;
`

const MenuContent = styled.div`
  flex-grow: 1;
`

const MenuFooter = styled.footer``

const MenuItem = styled.a`
  border-top: 1px solid #90a4ae;
  display: block;
  font-size: 1rem;
  margin: 0;
  padding: 0.5em 1em 0.5em 0.25em;
  text-align: right;
  text-decoration: none;

  :last-of-type {
    padding-bottom: calc(0.25em + env(safe-area-inset-bottom, 0));
  }
`

type BackdropProps = {
  show: boolean
}

const Backdrop = styled.div<BackdropProps>`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: block;
  left: 0;
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 99;

  @media (min-width: 960px) {
    display: none;
  }
`

type Props = {
  hideHeader?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false }) => {
  const [menuShown, setMenuShown] = useState(false)

  const showMenu = useCallback(() => {
    setMenuShown(true)
  }, [])

  const hideMenu = useCallback(() => {
    setMenuShown(false)
  }, [])

  return (
    <>
      <SkipNavLink>コンテンツにスキップ</SkipNavLink>

      <Wrapper>
        <MenuButton
          aria-controls="global-menu"
          aria-expanded={menuShown}
          aria-label="メニューを開く"
          onClick={showMenu}
          type="button"
        >
          <MenuButtonBar aria-hidden />
          <MenuButtonBar aria-hidden />
          <MenuButtonBar aria-hidden />
        </MenuButton>
        <Backdrop
          aria-hidden
          onClick={hideMenu}
          role="none presentation"
          show={menuShown}
          tabIndex={-1}
        />
        <FocusLock disabled={!menuShown} returnFocus>
          <RemoveScroll allowPinchZoom enabled={menuShown} forwardProps>
            <Menu aria-hidden={!menuShown} id="global-menu" role="menu">
              <MenuHeader>
                <Link href="/" passHref>
                  <MenuLogoLink
                    onClick={hideMenu}
                    tabIndex={!menuShown ? -1 : undefined}
                  >
                    <MenuLogo />
                  </MenuLogoLink>
                </Link>
              </MenuHeader>

              <MenuContent />

              <MenuFooter>
                <Link href="/about" passHref>
                  <MenuItem
                    onClick={hideMenu}
                    role="menuitem"
                    tabIndex={!menuShown ? -1 : undefined}
                  >
                    因幡神社とは
                  </MenuItem>
                </Link>
                <Link href="/privacy" passHref>
                  <MenuItem
                    role="menuitem"
                    tabIndex={!menuShown ? -1 : undefined}
                  >
                    プライバシーポリシー
                  </MenuItem>
                </Link>
                <MenuItem
                  as={ExternalLink}
                  href="https://haneru.dev"
                  onClick={hideMenu}
                  role="menuitem"
                  tabIndex={!menuShown ? -1 : undefined}
                >
                  運営者情報
                </MenuItem>
              </MenuFooter>
            </Menu>
          </RemoveScroll>
        </FocusLock>

        {!hideHeader && <Header />}

        {children}
      </Wrapper>

      <Footer />
    </>
  )
}

export default Layout
