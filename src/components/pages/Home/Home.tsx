import Link from 'next/link'
import React, { FC } from 'react'
import Logo from '../../atoms/Logo'
import Layout from '../../templates/Layout'

const Home: FC = () => {
  return (
    <>
      <Layout>
        <div className="home">
          <header className="header">
            <h1 className="header__title">
              <Logo aria-label="因幡神社" vertical />
            </h1>

            <p className="home__description">
              因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶
              あにまーれの因幡はねる様をご祭神としてお祀りしています。
            </p>
          </header>

          <Link href="/lottery" prefetch={false}>
            <a className="lottery-button" href="/lottery" role="button">
              おみくじを引く
            </a>
          </Link>
        </div>
      </Layout>

      <style jsx>{`
        .lottery-button {
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
        }

        .lottery-button:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }

        .header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          max-width: 620px;
          padding: 2rem 1rem 3rem;
        }

        .header__title {
          font-size: 4rem;
          margin: 0;
          padding: 0;
        }

        .home {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
        }

        .home__description {
          font-family: var(--ij-serif-font-family);
          font-size: 0.95rem;
          letter-spacing: 0.3rem;
          margin: 1rem 0 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default Home
