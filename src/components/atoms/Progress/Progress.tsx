import Router from 'next/router'
import NProgress from 'nprogress'
import React, { FC, useCallback, useEffect } from 'react'

NProgress.configure({
  showSpinner: false
})

const Progress: FC = () => {
  const handleRouteChangeStart = useCallback(() => {
    NProgress.start()
  }, [])

  const handleRouteChangeComplete = useCallback(() => {
    NProgress.done()
  }, [])

  const handleRouteChangeError = useCallback(() => {
    NProgress.done()
  }, [])

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)
    Router.events.on('routeChangeError', handleRouteChangeError)

    return (): void => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
      Router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [
    handleRouteChangeComplete,
    handleRouteChangeError,
    handleRouteChangeStart
  ])

  return (
    <style global jsx>{`
      /**
       * see https://github.com/rstacruz/nprogress/blob/v1.0.0-1/css/nprogress.css
       */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background-color: #ff5722;
        height: 2px;
        left: 0;
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1031;
      }
    `}</style>
  )
}

export default Progress
