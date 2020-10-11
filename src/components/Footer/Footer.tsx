import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  justify-content: space-between;
  padding: 2rem 1rem 1.5rem;

  @media (min-width: 960px) {
    flex-direction: row;
    padding-bottom: 0.5rem;
  }
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavLinksItem = styled.li`
  :not(:first-child) {
    margin-left: 0.5em;
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
            <NavLink
              className="footer__link"
              href="https://haneru.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              運営者情報
            </NavLink>
          </NavLinksItem>
        </NavLinks>
      </nav>
    </Container>
  )
}

export default Footer
