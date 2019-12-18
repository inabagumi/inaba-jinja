import Link from 'next/link'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import Container from '../../atoms/Container'

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <Container className="footer__content">
          <p className="copyright">
            {'Copyright © 2020 '}
            <a
              className="copyright__link"
              href="https://haneru.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FormattedMessage
                defaultMessage="Haneru Developers"
                id="footer.haneru_developers"
              />
            </a>
            {'.'}
          </p>
          <nav className="footer__links">
            <ul>
              <li>
                <Link href="/privacy" prefetch={false}>
                  <a href="/privacy">
                    <FormattedMessage
                      defaultMessage="プライバシーポリシー"
                      id="footer.privacy_policy"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </footer>

      <style jsx>{`
        .copyright {
          margin: 0 1rem 0;
          text-align: center;
        }

        .copyright__link {
          color: inherit;
          text-decoration: none;
        }

        .copyright__link:hover {
          text-decoration: underline;
        }

        .footer {
          color: #fff;
          background-color: #424242;
        }

        .footer :global(.footer__content) {
          padding-bottom: 2rem;
          padding-top: 2em;
        }

        .footer__links ul {
          align-items: center;
          display: flex;
          justify-content: center;
          list-style: none;
          margin: 0.5rem 0 0;
          padding: 0;
        }

        .footer__links li {
          margin: 0;
          padding: 0;
        }

        .footer__links a {
          color: #ff9800;
          text-decoration: none;
        }

        .footer__links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default Footer
