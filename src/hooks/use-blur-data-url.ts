import dedent from 'dedent'
import svgToMiniDataURI from 'mini-svg-data-uri'
import { useMemo } from 'react'

export default function useBlurDataURL(
  src: string,
  width: number,
  height: number
): string {
  const blurDataURL = useMemo(() => {
    const svg = dedent`
      <svg height="${height}" width="${width}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <filter id="blur" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="20" edgeMode="duplicate"/>
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1 1"/>
          </feComponentTransfer>
        </filter>
        <image filter="url(#blur)" href="${src}" x="0" y="0" height="100%" width="100%"/>
      </svg>
    `

    return svgToMiniDataURI(svg)
  }, [src, width, height])

  return blurDataURL
}
