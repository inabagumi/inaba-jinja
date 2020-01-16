import styled from '@emotion/styled'
import Link from 'next/link'
import React, { FC } from 'react'

const Copyright = styled.p`
  margin: 0;
`

const Navigation = styled.nav`
  li:not(:first-child) {
    margin-left: 0.5em;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const Root = styled.footer`
  align-items: flex-start;
  color: #eee;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  justify-content: space-between;
  padding: 2rem 1rem 1.5rem;

  @media (min-width: 960px) {
    & {
      flex-direction: row;
      padding-bottom: 0.5rem;
    }
  }
`

const Footer: FC = () => {
  return (
    <Root>
      <Copyright>&copy; 2020 Haneru Developers</Copyright>

      <Navigation>
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
      </Navigation>
    </Root>
  )
}

export default Footer
