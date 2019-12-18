import React, { FC } from 'react'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <div className="root">
        <Header />

        <div className="root__content">{children}</div>

        <Footer />
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .root__content {
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}

export default Layout
