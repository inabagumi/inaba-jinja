import styled from '@emotion/styled'
import React, { FC } from 'react'

const BaseImage = styled.img<{ preSrc: string }>`
  background-color: #fff;
  background-image: url('${(props) => props.preSrc}');
  background-position: center;
  background-size: contain;
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
`

type Props = {
  alt?: string
  className?: string
  height?: number
  src: string
  width?: number
}

const Image: FC<Props> = ({ alt, className, height, src, width }) => {
  const clientWidth = width && width / 2
  const clientHeight = height && height / 2
  const srcSet = [
    clientWidth && `${src}?w=${clientWidth} 1x`,
    width && `${src}?w=${width} 2x`
  ]
    .filter(Boolean)
    .join(',')

  return (
    <picture>
      <source
        srcSet={`${src}?fm=webp&w=254 1x, ${src}?fm=webp 2x`}
        type="image/webp"
      />

      <BaseImage
        alt={alt}
        className={className}
        height={clientHeight}
        preSrc={`${src}?w=10`}
        src={clientWidth ? `${src}?w=${clientWidth}` : src}
        srcSet={srcSet || undefined}
        width={clientWidth}
      />
    </picture>
  )
}

export default Image
