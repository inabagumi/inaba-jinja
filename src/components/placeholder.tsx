import type { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`

const Image = styled.img`
  display: block;
  filter: blur(15px);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

type Props = {
  src: string
}

const Placeholder: FC<Props> = ({ src }) => {
  return (
    <Container>
      <Image alt="" aria-hidden role="none presentation" src={src} />
    </Container>
  )
}

export default Placeholder
