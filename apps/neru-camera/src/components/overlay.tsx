import { Sprite, useApp } from '@inlet/react-pixi'
import { Filter, Point } from 'pixi.js'
import React, { FC, useMemo } from 'react'
import { Asset } from '../context/asset-context'
import ChromaKeyFilter from '../filters/chroma-key-filter'
import useVideoTexture from '../hooks/use-video-texture'
import Viewport from './viewport'

type Props = {
  asset: Asset
}

const Overlay: FC<Props> = ({ asset }) => {
  const app = useApp()
  const texture = useVideoTexture({ src: asset.src })
  const filters = useMemo<Filter[]>(
    () => [new ChromaKeyFilter(asset.keyColor)],
    [asset.keyColor]
  )

  const anchor = 0.5
  const position = new Point(
    app.screen.width * anchor,
    app.screen.height * anchor
  )

  return (
    <>
      <Viewport
        interaction={app.renderer.plugins.interaction}
        screenHeight={app.screen.height}
        screenWidth={app.screen.width}
        worldHeight={app.screen.height}
        worldWidth={app.screen.width}
      >
        {texture && (
          <Sprite
            anchor={anchor}
            filters={filters}
            position={position}
            texture={texture}
          />
        )}
      </Viewport>
    </>
  )
}

export default Overlay
