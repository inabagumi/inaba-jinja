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

type Props = {
  hideHeader?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false }) => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Header hide={hideHeader} />

      <div className={classes.content}>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
