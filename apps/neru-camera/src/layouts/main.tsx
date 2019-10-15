import React, { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <>
      {children}

      <style global jsx>{`
        html {
          font-family: Noto Sans JP, Roboto, sans-serif;
        }

        body {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Layout
