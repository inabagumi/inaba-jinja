import styled from '@emotion/styled'
import React, { FC } from 'react'
import Link from 'components/atoms/Link'

const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  :hover {
    color: inherit;
    text-decoration: underline;
  }
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
            <FooterLink href="https://haneru.dev/">運営者情報</FooterLink>
          </li>
          <li>
            <FooterLink href="/disclaimer" prefetch={false}>
              免責事項
            </FooterLink>
          </li>
          <li>
            <FooterLink href="/privacy" prefetch={false}>
              プライバシーポリシー
            </FooterLink>
          </li>
        </ul>
      </Navigation>
    </Root>
  )
}

export default Footer
