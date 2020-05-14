import Link from 'next/link'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a
                className="footer__link"
                href="https://haneru.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                運営者情報
              </a>
            </li>
            <li className="footer-nav__item">
              <Link href="/disclaimer" prefetch={false}>
                <a className="footer__link" href="/disclaimer">
                  免責事項
                </a>
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link href="/privacy" prefetch={false}>
                <a className="footer__link" href="/privacy">
                  プライバシーポリシー
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>

      <style jsx>{`
        .footer {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          justify-content: space-between;
          padding: 2rem 1rem 1.5rem;
        }

        @media (min-width: 960px) {
          .footer {
            flex-direction: row;
            padding-bottom: 0.5rem;
          }
        }

        .footer__link {
          color: inherit;
          text-decoration: none;
        }

        .footer__link:hover {
          color: inherit;
          text-decoration: underline;
        }

        .footer-nav__list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-nav__item:not(:first-child) {
          margin-left: 0.5em;
        }
      `}</style>
    </>
  )
}

export default Footer
