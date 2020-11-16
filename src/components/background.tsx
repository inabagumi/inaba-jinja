import Image from 'next/image'
import type { FC } from 'react'
import styled from 'styled-components'

import mainVisual from '@/assets/main-visual.jpg'
import Placeholder from '@/components/placeholder'

const Container = styled.div`
  bottom: 0;
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: -1;
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.54);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Background: FC = () => {
  return (
    <Container aria-hidden role="none presentation">
      <Placeholder src={mainVisual.placeholder} />
      <Image
        alt=""
        layout="fill"
        objectFit="cover"
        priority
        quality={70}
        src={mainVisual.src}
      />
      <Overlay />
    </Container>
  )
}

export default Background
