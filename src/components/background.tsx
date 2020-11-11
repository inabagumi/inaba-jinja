import Image from 'next/image'
import type { FC } from 'react'
import styled from 'styled-components'

import mainVisual from '@/assets/main-visual.jpg'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: -1;

  img {
    object-fit: cover;
  }
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
    <Container aria-hidden="true" role="presentation">
      <Image
        alt=""
        layout="fill"
        priority
        unoptimized
        src={mainVisual.preSrc}
      />
      <Image alt="" layout="fill" priority quality={70} src={mainVisual.src} />
      <Overlay />
    </Container>
  )
}

export default Background
