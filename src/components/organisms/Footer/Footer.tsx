import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import Container from '../../atoms/Container'

const Content = styled(Container)`
  padding-bottom: 2rem;
  padding-top: 2em;
`

const Copyright = styled('p')`
  margin: 0 1rem 0;
  text-align: center;
`

const CopyrightLink = styled('a')`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const FooterLinks = styled('nav')`
  & ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0.5rem 0 0;
    padding: 0;
  }

  & li {
    margin: 0;
    padding: 0;
  }

  & a {
    color: #ff9800;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
  }
`

const Wrapper = styled('footer')`
  color: #fff;
  background-color: #424242;
`

const Footer: FC = () => {
  return (
    <Wrapper>
      <Content>
        <Copyright>
          {'Copyright © 2020 '}
          <CopyrightLink
            href="https://haneru.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Haneru Developers
          </CopyrightLink>
          {'.'}
        </Copyright>
        <FooterLinks>
          <ul>
            <li>
              <Link to="/privacy">プライバシーポリシー</Link>
            </li>
          </ul>
        </FooterLinks>
      </Content>
    </Wrapper>
  )
}

export default Footer
