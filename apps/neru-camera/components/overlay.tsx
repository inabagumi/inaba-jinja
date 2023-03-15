import { Sprite, useApp } from '@pixi/react'
import { Point } from 'pixi.js'
import { type FC } from 'react'
import ChromaKeyFilter from '../filters/chroma-key-filter'
import useVideoTexture from '../hooks/use-video-texture'
import { type OverlayEntry } from '../lib/contentful'
import Viewport from './viewport'

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
            filters={[new ChromaKeyFilter(asset.fields.keyColor)]}
          />
        )}
      </Viewport>
    </>
  )
}

export default Overlay
