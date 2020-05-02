import styled from '@emotion/styled'
import React, { FC } from 'react'
import Link from 'components/atoms/Link'

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
      <Navigation>
        <ul>
          <li>
            <Link href="https://haneru.dev/">運営者情報</Link>
          </li>
          <li>
            <Link href="/disclaimer" prefetch={false}>
              免責事項
            </Link>
          </li>
          <li>
            <Link href="/privacy" prefetch={false}>
              プライバシーポリシー
            </Link>
          </li>
        </ul>
      </Navigation>
    </Root>
  )
}

export default Footer
