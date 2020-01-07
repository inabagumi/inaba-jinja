import Link from 'next/link'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <p className="copyright">&copy; 2020 Haneru Developers</p>

        <nav className="footer__navigation">
          <ul>
            <li>
              <a
                href="https://haneru.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                運営者情報
              </a>
            </li>
            <li>
              <Link href="/privacy" prefetch={false}>
                <a href="/privacy">プライバシーポリシー</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>

      <style jsx>{`
        .copyright {
          margin: 0;
        }

        .footer {
          align-items: flex-start;
          color: #eee;
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          justify-content: space-between;
          padding: 2rem 1rem 0.5rem;
        }

        @media (min-width: 960px) {
          .footer {
            flex-direction: row;
          }
        }

        .footer__navigation ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer__navigation li:not(:first-child) {
          margin-left: 0.5em;
        }
      `}</style>
    </>
  )
}

export default Footer
