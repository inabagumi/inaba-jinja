import React, { useCallback, useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  h: number
  w: number
}

const Container = styled.picture<ContainerProps>`
  display: block;
  height: 0;
  overflow: hidden;
  padding-bottom: ${(props) => (props.h / props.w) * 100}%;
  position: relative;
`

type BaseImageProps = {
  isLoading?: boolean
  preSrc: string
}

const BaseImage = styled.img<BaseImageProps>`
  background-color: #fff;
  background-image: url('${(props) => props.preSrc}');
  background-position: center;
  background-size: contain;
  display: block;
  filter: ${(props) => (props.isLoading ? 'blur(5px)' : 'filter(0)')};
  height: 100%;
  left: 0;
  margin: 0 auto;
  max-width: 100%;
  position: absolute;
  top: 0;
  transition: filter 0.5s ease;
  width: 100%;
`

type Props = {
  alt?: string
  className?: string
  height: number
  preSrc: string
  src: string
  width: number
}

const Image: FC<Props> = ({ alt, className, height, preSrc, src, width }) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const complete = useCallback(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    setIsLoading(true)
  }, [src])

  useEffect(() => {
    if (!imageRef.current) return

    const handle = requestAnimationFrame(() => {
      if (imageRef.current?.complete) {
        setIsLoading(false)
      }
    })

    return () => {
      cancelAnimationFrame(handle)
    }
  }, [imageRef])

  const clientWidth = width / 2
  const clientHeight = height / 2
  const srcSet = [`${src}?w=${clientWidth} 1x`, `${src}?w=${width} 2x`]
    .filter(Boolean)
    .join(',')

  return (
    <Container h={clientHeight} w={clientWidth}>
      <source
        srcSet={`${src}?fm=webp&w=254 1x, ${src}?fm=webp 2x`}
        type="image/webp"
      />

      <BaseImage
        alt={alt}
        className={className}
        height={clientHeight}
        isLoading={isLoading}
        onError={complete}
        onLoad={complete}
        preSrc={preSrc}
        ref={imageRef}
        src={clientWidth ? `${src}?w=${clientWidth}` : src}
        srcSet={srcSet || undefined}
        width={clientWidth}
      />
    </Container>
  )
}

export default Image
