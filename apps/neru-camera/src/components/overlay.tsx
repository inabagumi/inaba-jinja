import { Sprite, useApp, withFilters } from '@inlet/react-pixi'
import { Point } from 'pixi.js'
import React, { FC } from 'react'
import ChromaKeyFilter from '../filters/chroma-key-filter'
import useVideoTexture from '../hooks/use-video-texture'
import { OverlayEntry } from '../types/Overlay'
import Viewport from './viewport'

const Filters = withFilters(Sprite, {
  chorma: ChromaKeyFilter
})

type Props = {
  asset: OverlayEntry
}

const Overlay: FC<Props> = ({ asset }) => {
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
          <Filters
            anchor={anchor}
            chorma={{ keyColor: asset.fields.keyColor }}
            position={position}
            {...({ texture } as any)}
          />
        )}
      </Viewport>
    </>
  )
}

export default Overlay
