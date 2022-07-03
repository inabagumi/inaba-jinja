import { Container, Sprite, useApp, withFilters } from '@inlet/react-pixi'
import { Point } from 'pixi.js'
import { type FC } from 'react'
import ChromaKeyFilter from '../filters/chroma-key-filter'
import useVideoTexture from '../hooks/use-video-texture'
import { type OverlayEntry } from '../lib/contentful'
import Viewport from './viewport'

const Filters = withFilters(Container, {
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
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
        interaction={app.renderer.plugins.interaction}
        screenHeight={app.screen.height}
        screenWidth={app.screen.width}
        worldHeight={app.screen.height}
        worldWidth={app.screen.width}
      >
        {texture && (
          <Filters chorma={{ keyColor: asset.fields.keyColor }}>
            <Sprite
              anchor={new Point(anchor, anchor)}
              position={position}
              texture={texture}
            />
          </Filters>
        )}
      </Viewport>
    </>
  )
}

export default Overlay
