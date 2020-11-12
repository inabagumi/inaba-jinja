import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

import cardImage from '@/assets/card.jpg'
import BaseLogo from '@/assets/vertical-logo.svg'
import Page from '@/components/layout'
import SEO from '@/components/seo'
import { SkipNavContent } from '@/components/skip-nav'

const description =
  '因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。'

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
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

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding: 0;
`

const Logo = styled(BaseLogo)`
  display: inline-block;
  fill: currentColor;
  height: auto;
  line-height: 1;
  vertical-align: middle;
  width: 1em;
`

const Description = styled.p`
  font-family: var(--ij-font-family-serif, serif);
  font-size: 0.95rem;
  letter-spacing: 0.3rem;
  margin: 1rem 0 0;
  padding: 0;
`

const LotteryButton = styled.a`
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid currentColor;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: background-color 0.5s, transform 0.2s ease;

  :hover {
    background-color: rgba(255, 255, 255, 0.15);
    color: inherit;
    text-decoration: none;
  }

  :active {
    transform: scale(0.98);
  }
`

const HomePage: NextPage = () => (
  <>
    <SEO
      description={description}
      image={{
        height: cardImage.height,
        url: cardImage.src,
        width: cardImage.width
      }}
      path="/"
    />

    <Page hideHeader>
      <Container>
        <Header>
          <Title>
            <Logo aria-label="因幡神社" />
          </Title>

          <Description>{description}</Description>
        </Header>

        <SkipNavContent />

        <Link href="/lottery" passHref>
          <LotteryButton role="button">おみくじを引く</LotteryButton>
        </Link>
      </Container>
    </Page>
  </>
)

export default HomePage
