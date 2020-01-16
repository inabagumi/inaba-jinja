import styled from '@emotion/styled'
import Link from 'next/link'
import React, { FC } from 'react'
import Logo from '../../atoms/Logo'

const Description = styled.p`
  font-family: var(--ij-serif-font-family, sans-serif);
  font-size: 0.95rem;
  letter-spacing: 0.3rem;
  margin: 1rem 0 0;
  padding: 0;
`

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 620px;
  padding: 2rem 1rem 3rem;
`

const LotteryButton = styled.a`
  color: #fff;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #fff;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: background-color 0.5s;

  :hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding: 0;
`

const Home: FC = () => {
  return (
    <Root>
      <Header>
        <Title>
          <Logo aria-label="因幡神社" vertical />
        </Title>

        <Description>
          因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶
          あにまーれの因幡はねる様をご祭神としてお祀りしています。
        </Description>
      </Header>

      <Link href="/lottery" passHref>
        <LotteryButton href="/lottery" role="button">
          おみくじを引く
        </LotteryButton>
      </Link>
    </Root>
  )
}

export default Home
