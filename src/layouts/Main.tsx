import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import Footer from '../components/organisms/Footer'

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
      <div className={classes.content}>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
