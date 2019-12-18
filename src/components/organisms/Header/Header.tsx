import Link from 'next/link'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Container from '../../atoms/Container'
import Logo from '../../atoms/Logo'

const messages = defineMessages({
  title: {
    defaultMessages: '因幡神社',
    id: 'app.title'
  }
})

const Header: FC = () => {
  const intl = useIntl()

  return (
    <>
      <header className="header">
        <Container className="header__content">
          <Link href="/" prefetch={false}>
            <a className="header__brand" href="/">
              <Logo
                aria-label={intl.formatMessage(messages.title)}
                className="header__logo"
              />
            </a>
          </Link>
        </Container>
      </header>

      <style jsx>{`
        .header {
          background-color: #f5f5f5;
        }

        .header__brand {
          color: inherit;
          display: block;
        }

        .header :global(.header__content) {
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
        }

        .header :global(.header__logo) {
          height: 36px;
          max-height: 100%;
          width: auto;
        }
      `}</style>
    </>
  )
}

export default Header
