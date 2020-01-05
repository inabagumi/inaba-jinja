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
              <Logo aria-label="因幡神社" />
            </h1>

            <p className="home__description">
              因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶
              あにまーれの因幡はねる様をご祭神としてお祀りしています。
            </p>
          </header>
        </div>
      </Layout>

      <style jsx>{`
        .header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          padding: 2rem 1rem 3rem;
          max-width: 620px;
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
