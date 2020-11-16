import Portal from '@reach/portal'
import { useNProgress } from '@tanem/react-nprogress'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  animationDuration: number
  show: boolean
}

const Container = styled.div<ContainerProps>`
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: none;
  transition: opacity ${(props) => props.animationDuration}ms linear;
`

type BarProps = {
  animationDuration: number
  progress: number
}

const Bar = styled.div<BarProps>`
  background-color: var(--ij-color-primary);
  height: 2px;
  left: 0;
  margin-left: ${(props) => (-1 + props.progress) * 100}%;
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: margin-left ${(props) => props.animationDuration}ms linear;
  width: 100%;
  z-index: 1031;
`

const Loading: FC = () => {
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
      <Container
        aria-hidden
        animationDuration={animationDuration}
        show={!isFinished}
      >
        <Bar
          animationDuration={animationDuration}
          key={router.pathname}
          progress={progress}
        />
      </Container>
    </Portal>
  )
}

export default Loading
