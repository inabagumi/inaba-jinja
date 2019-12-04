import CssBaseline from '@material-ui/core/CssBaseline'
import React, { FC } from 'react'
import Header from '../components/organisms/Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <CssBaseline />

      <Header />

      {children}
    </>
  )
}

export default Layout
