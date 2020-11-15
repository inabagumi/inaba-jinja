import Link from 'next/link'
import type { FC } from 'react'
import styled from 'styled-components'

import ExternalLink from '@/components/external-link'

const Container = styled.footer`
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  flex-direction: column;
  font-size: 0.85rem;
  justify-content: space-between;
  padding: 1rem 1rem calc(1rem + env(safe-area-inset-bottom, 0));

  @media (min-width: 960px) {
    display: flex;
  }
`

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`

const NavLinksItem = styled.li`
  @media (min-width: 960px) {
    :not(:first-child) {
      margin-left: 1em;
    }
  }
`

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;

  :hover {
    color: inherit;
    text-decoration: underline;
  }
`

const Footer: FC = () => {
  return (
    <Container>
      <nav>
        <NavLinks>
          <NavLinksItem>
            <Link href="/about" passHref prefetch={false}>
              <NavLink>因幡神社とは</NavLink>
            </Link>
          </NavLinksItem>
          <NavLinksItem>
            <Link href="/privacy" passHref prefetch={false}>
              <NavLink>プライバシーポリシー</NavLink>
            </Link>
          </NavLinksItem>
          <NavLinksItem>
            <NavLink as={ExternalLink} href="https://haneru.dev/">
              運営者情報
            </NavLink>
          </NavLinksItem>
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Footer
