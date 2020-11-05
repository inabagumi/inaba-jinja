import NextImage from 'next/image'
import type { FC } from 'react'
import styled from 'styled-components'

type WrapperProps = {
  ratio: number
}

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['ratio'].includes(prop)
})<WrapperProps>`
  overflow: hidden;
  padding-top: ${(props) => props.ratio * 100}%;
  position: relative;
  width: 100%;
`

type PlaceholderProps = {
  value: string
}

const Placeholder = styled.div.withConfig({
  shouldForwardProp: (prop) => !['value'].includes(prop)
})<PlaceholderProps>`
  background-color: transparent;
  background-image: url('${(props) => props.value}');
  background-position: center;
  background-size: cover;
  filter: blur(10px);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

type Props = {
  alt?: string
  height: number
  placeholder?: string
  priority?: boolean
  quality?: number
  sizes?: string
  src: string
  width: number
}

const Image: FC<Props> = ({
  alt,
  height,
  placeholder,
  priority = false,
  quality,
  sizes,
  src,
  width
}) => {
  return (
    <Wrapper ratio={height / width}>
      {placeholder && <Placeholder value={placeholder} />}
      <NextImage
        alt={alt}
        layout="fill"
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={src}
      />
    </Wrapper>
  )
}

export default Image
