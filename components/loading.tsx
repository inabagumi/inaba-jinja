import Portal from '@reach/portal'
import { useNProgress } from '@tanem/react-nprogress'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import styles from '@/styles/components/loading.module.css'
import type { VFC } from 'react'

const Loading: VFC = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter()
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating
  })

  const startAnimating = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimating = useCallback(() => {
    setIsAnimating(false)
  }, [])

  useEffect(() => {
    router.events.on('routeChangeStart', startAnimating)
    router.events.on('routeChangeComplete', stopAnimating)
    router.events.on('routeChangeError', stopAnimating)

    return () => {
      router.events.off('routeChangeStart', startAnimating)
      router.events.off('routeChangeComplete', stopAnimating)
      router.events.off('routeChangeError', stopAnimating)
    }
  }, [router.events, startAnimating, stopAnimating])

  return (
    <Portal type="div">
      <div
        aria-hidden
        className={clsx(styles.container, {
          [styles.containerShow]: !isFinished
        })}
        style={{
          transitionDuration: `${animationDuration}ms`
        }}
      >
        <div
          className={styles.bar}
          key={router.pathname}
          style={{
            marginLeft: `${(-1 + progress) * 100}%`,
            transitionDuration: `${animationDuration}ms`
          }}
        />
      </div>
    </Portal>
  )
}

export default Loading
