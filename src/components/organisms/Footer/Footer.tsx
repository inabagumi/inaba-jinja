import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FC } from 'react'

const Copyright = styled('p')`
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const Navigation = styled('nav')`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const Root = styled('footer')`
  align-items: flex-start;
  color: #eee;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  justify-content: space-between;
  padding: 2rem 1rem 0.5rem;

  @media (min-width: 960px) {
    & {
      flex-direction: row;
    }
  }
`

const Footer: FC = () => {
  return (
    <Root>
      <Copyright>
        &copy; 2020{' '}
        <a href="https://haneru.dev/" rel="noopener noreferrer" target="_blank">
          Haneru Developers
        </a>
      </Copyright>

      <Navigation>
        <ul>
          <li>
            <Link to="/privacy">プライバシーポリシー</Link>
          </li>
        </ul>
      </Navigation>
    </Root>
  )
}

export default Footer
