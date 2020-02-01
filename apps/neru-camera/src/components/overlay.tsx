import { Sprite, useApp } from '@inlet/react-pixi'
import { Filter, Point } from 'pixi.js'
import React, { FC, useMemo } from 'react'
import ChromaKeyFilter from '../filters/chroma-key-filter'
import useVideoTexture from '../hooks/use-video-texture'
import { OverlayEntry } from '../types/Overlay'
import Viewport from './viewport'

type Props = {
  asset: OverlayEntry
}

const Overlay: FC<Props> = ({ asset }) => {
  const filters = useMemo<Filter[]>(
    () => [new ChromaKeyFilter(asset.fields.keyColor)],
    [asset.fields.keyColor]
  )
  const app = useApp()
  const texture = useVideoTexture({
    src: asset.fields.media.fields.file.url
  })

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
