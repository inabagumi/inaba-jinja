import React, { FC } from 'react'
import Background from '../../molecules/Background'
import Footer from '../../organisms/Footer'

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="content">{children}</div>

        <Footer />
      </div>

      <Background />

      <style jsx>{`
        .content {
          flex-grow: 1;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 0;
        }
      `}</style>

      <style global jsx>{`
        :root {
          --ij-default-font-family: -apple-system, BlinkMacSystemFont,
            Helvetica Neue, Helvetica, Arial, YuGothic, Yu Gothic, sans-serif;
          --ij-serif-font-family: Garamond, Times New Roman, YuMincho, Yu Mincho,
            serif;
        }

        html {
          box-sizing: border-box;
          font-family: var(--ij-default-font-family);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: none;
        }

        body {
          background-color: #424242;
          color: #fafafa;
          margin: 0;
          line-height: 2;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        body,
        html,
        #__next {
          height: 100%;
        }

        a {
          color: #f57f17;
        }

        a:hover {
          color: #ff6f00;
        }
      `}</style>
    </>
  )
}

export default Layout
