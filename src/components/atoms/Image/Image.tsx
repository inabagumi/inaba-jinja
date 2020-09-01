import clsx from 'clsx'
import React, { FC } from 'react'

const half = (number: number): number => number / 2

type Props = {
  alt?: string
  className?: string
  height?: number
  src: string
  width?: number
}

const Image: FC<Props> = ({ alt, className, height, src, width }) => {
  const clientWidth = width && half(width)
  const clientHeight = height && half(height)
  const srcSet = [
    clientWidth && `${src}?w=${clientWidth} 1x`,
    width && `${src}?w=${width} 2x`
  ]
    .filter(Boolean)
    .join(',')

  return (
    <>
      <picture>
        <source
          srcSet={`${src}?fm=webp&w=254 1x, ${src}?fm=webp 2x`}
          type="image/webp"
        />

        <img
          alt={alt}
          className={clsx('image', className)}
          height={clientHeight}
          src={clientWidth ? `${src}?w=${clientWidth}` : src}
          srcSet={srcSet || undefined}
          width={clientWidth}
        />
      </picture>

      <style jsx>{`
        .image {
          background-color: #fff;
          background-image: url('${src}?w=10');
          background-position: center;
          background-size: contain;
          display: block;
          height: auto;
          margin: 0 auto;
          max-width: 100%;
        }
      `}</style>
    </>
  )
}

export default Image
