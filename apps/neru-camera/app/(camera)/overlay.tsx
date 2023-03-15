'use client'

import { Sprite, useApp } from '@pixi/react'
import { Point } from 'pixi.js'
import { useMemo } from 'react'
import { ChromaKeyFilter } from './filters'
import { useVideoTexture } from './hooks'
import { type OverlayEntry } from '@/lib/contentful'
import Viewport from './viewport'

type Props = {
  asset: OverlayEntry
}

export default function Overlay({ asset }: Props): JSX.Element {
  const app = useApp()
  const texture = useVideoTexture({
    src: asset.fields.media.fields.file.url
  })
  const chromaKeyFilter = useMemo(
    () => new ChromaKeyFilter(asset.fields.keyColor),
    [asset.fields.keyColor]
  )

  const anchor = 0.5
  const position = new Point(
    app.screen.width * anchor,
    app.screen.height * anchor
  )

  return (
    <>
      <Viewport
        events={app.renderer.events}
        screenHeight={app.screen.height}
        screenWidth={app.screen.width}
        worldHeight={app.screen.height}
        worldWidth={app.screen.width}
      >
        {texture && (
          <Sprite
            anchor={new Point(anchor, anchor)}
            position={position}
            texture={texture}
            filters={[chromaKeyFilter]}
          />
        )}
      </Viewport>
    </>
  )
}
