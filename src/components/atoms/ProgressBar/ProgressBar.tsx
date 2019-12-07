import { createStyles, makeStyles } from '@material-ui/core/styles'
import Router from 'next/router'
import NProgress from 'nprogress'
import { FC, useEffect } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    '@global': {
      '#nprogress': {
        pointerEvents: 'none',
        '& .bar': {
          backgroundColor: theme.palette.primary.main,
          height: '2px',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1031
        },
        '& .peg': {
          boxShadow: '0 0 10px #29d, 0 0 5px #29d',
          display: 'block',
          height: '100%',
          opacity: 1,
          position: 'absolute',
          transform: 'rotate(3deg) translate(0px, -4px)',
          width: '100px'
        }
      }
    }
  })
)

const ProgressBar: FC = () => {
  useStyles({})

  useEffect(() => {
    NProgress.configure({
      showSpinner: false
    })

    const handleRouteChangeStart = (): void => {
      NProgress.start()
    }

    const handleRouteChangeComplete = (): void => {
      NProgress.done()
    }

    const handleRouteChangeError = (): void => {
      NProgress.done()
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)

    return (): void => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [])

  return null
}

export default ProgressBar
