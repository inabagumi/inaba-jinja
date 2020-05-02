import { Global, css } from '@emotion/react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import React, { FC, useCallback, useEffect } from 'react'

/**
 * see https://github.com/rstacruz/nprogress/blob/v1.0.0-1/css/nprogress.css
 */
const nprogressStyles = css`
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
`

NProgress.configure({
  showSpinner: false
})

const Progress: FC = () => {
  const router = useRouter()

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
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    return (): void => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [
    router,
    handleRouteChangeComplete,
    handleRouteChangeError,
    handleRouteChangeStart
  ])

  return <Global styles={nprogressStyles} />
}

export default Progress
