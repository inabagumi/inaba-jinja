import Link from 'next/link'
import React, { FC } from 'react'
import Logo from 'components/atoms/Logo'

const Home: FC = () => {
  return (
    <>
      <div className="home">
        <header className="home__header">
          <h1 className="home__title">
            <Logo aria-label="因幡神社" vertical />
          </h1>

          <p className="home__description">
            因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶
            あにまーれの因幡はねる様をご祭神としてお祀りしています。
          </p>
        </header>

        <Link href="/lottery">
          <a className="lottery-button" href="/lottery" role="button">
            おみくじを引く
          </a>
        </Link>
      </div>

      <style jsx>{`
        .home {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
        }

        .home__description {
          font-family: var(--ij-serif-font-family, sans-serif);
          font-size: 0.95rem;
          letter-spacing: 0.3rem;
          margin: 1rem 0 0;
          padding: 0;
        }

        .home__header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          max-width: 620px;
          padding: 2rem 1rem 3rem;
        }

        .home__title {
          font-size: 4rem;
          margin: 0;
          padding: 0;
        }

        .lottery-button {
          color: inherit;
          background-color: rgba(255, 255, 255, 0);
          border: 1px solid currentColor;
          border-radius: 5px;
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.5em 1em;
          text-decoration: none;
          transition: background-color 0.5s, transform 0.2s ease;
        }

        .lottery-button:hover {
          background-color: rgba(255, 255, 255, 0.15);
          color: inherit;
          text-decoration: none;
        }

        .lottery-button:active {
          transform: scale(0.98);
        }
      `}</style>
    </>
  )
}

export default Home
