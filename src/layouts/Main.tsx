import Toolbar from '@material-ui/core/Toolbar'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      flexGrow: 1
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }
  })
)

const Layout: FC = ({ children }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Header />
      <Toolbar />

      <div className={classes.content}>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
