import React, { FC } from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import { Link as ScrollLink } from 'react-scroll'
import KeyboardArrowDown from '../../../images/icons/keyboard_arrow_down.svg'
import MainVisual from '../../molecules/MainVisual'
import Footer from '../../organisms/Footer'

const messages = defineMessages({
  scrollDown: {
    defaultMessage: 'コンテンツまでスクロール',
    id: 'home.scroll_down'
  }
})

const Home: FC = () => {
  const intl = useIntl()

  return (
    <>
      <MainVisual>
        <div className="main-visual__text">
          <p className="main-visual__description">
            <FormattedMessage
              defaultMessage="因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。"
              id="home.description"
            />
          </p>
        </div>

        <div className="scroll-down">
          <ScrollLink
            aria-label={intl.formatMessage(messages.scrollDown)}
            className="scroll-down__button"
            href="#content"
            role="button"
            smooth
            to="content"
          >
            <KeyboardArrowDown xmlns={undefined} />
          </ScrollLink>
        </div>
      </MainVisual>

      <main id="content" className="content">
        stub
      </main>

      <Footer />

      <style jsx>{`
        .content {
          align-items: center;
          display: flex;
          flex-direction: column;
          font-size: 10rem;
          font-weight: 900;
          justify-content: center;
          min-height: 100vh;
        }

        .main-visual__description {
          font-family: Roboto Slab, Noto Serif JP, serif;
          font-size: 1rem;
          letter-spacing: 0.2rem;
          margin: 0;
          height: 30em;
          padding: 1em 0;
          writing-mode: vertical-rl;
        }

        .main-visual__text {
          align-items: center;
          display: flex;
          flex-grow: 1;
          justify-content: center;
        }

        .scroll-down :global(.scroll-down__button) {
          color: inherit;
          display: none;
          margin-bottom: 3rem;
          text-decoration: none;
        }

        @media (min-width: 960px) {
          .scroll-down :global(.scroll-down__button) {
            display: block;
          }
        }

        .scroll-down :global(svg) {
          display: inline-block;
          fill: currentColor;
          font-size: 3rem;
          height: 1em;
          vertical-align: middle;
          width: 1em;
        }
      `}</style>
    </>
  )
}

export default Home
