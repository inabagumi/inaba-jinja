import { makeStyles } from '@material-ui/core/styles'
import { Application, Sprite } from 'pixi.js'
import { Viewport } from 'pixi-viewport'
import React, {
  ReactElement,
  SyntheticEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { Asset } from '../../context/asset-context'
import { ChromaKeyFilter } from '../../filters/ChromaKeyFilter'

const useStyles = makeStyles({
  container: {
    position: 'relative',
    width: '100%'
  },
  preloaded: {
    display: 'none'
  },
  preview: {
    display: 'block',
    height: 'auto',
    width: '100%'
  }
})

export type RefObject = {
  toBlob: (type: string, quality: number) => Promise<Blob>
}

export type Props = {
  asset: Asset
  cameraStream: MediaStream
}

const Renderer = forwardRef<RefObject, Props>(
  ({ asset, cameraStream }, ref): ReactElement => {
    const [viewport, setViewport] = useState<Viewport>()
    const classes = useStyles()

    const previewRef = useRef<HTMLCanvasElement>(null)
    const cameraRef = useRef<HTMLVideoElement>(null)
    const overlayRef = useRef<HTMLVideoElement>(null)

    const setup = useCallback(
      (event: SyntheticEvent<HTMLVideoElement, Event>) => {
        if (!previewRef.current) return

        const background = Sprite.from(event.currentTarget)

        const app = new Application({
          height: background.height,
          preserveDrawingBuffer: true,
          view: previewRef.current,
          width: background.width
        })
        const viewport = new Viewport({
          interaction: app.renderer.plugins.interaction,
          screenHeight: app.screen.height,
          screenWidth: app.screen.width,
          worldHeight: app.screen.height,
          worldWidth: app.screen.width
        })

        viewport
          .drag()
          .pinch()
          .wheel()
          .decelerate()

        app.stage.addChild(background)
        app.stage.addChild(viewport)

        setViewport(viewport)

        if (overlayRef.current) overlayRef.current.load()
      },
      []
    )

    const handleLoadedData = useCallback(
      (event: SyntheticEvent<HTMLVideoElement, Event>) => {
        if (!viewport) return

        const target = event.currentTarget
        const overlay = Sprite.from(target)
        const { keyColor } = target.dataset

        overlay.filters = [new ChromaKeyFilter(keyColor)]
        overlay.anchor.set(0.5)
        overlay.position.set(
          viewport.worldWidth * 0.5,
          viewport.worldHeight * 0.5
        )

        viewport.addChild(overlay)
      },
      [viewport]
    )

    useEffect(() => {
      if (!cameraRef.current) return

      cameraRef.current.srcObject = cameraStream
    }, [cameraStream])

    useImperativeHandle(ref, () => ({
      toBlob: (type = 'image/png', quality = 1.0): Promise<Blob> =>
        new Promise((resolve, reject): void => {
          if (!previewRef.current) {
            reject(new TypeError('Canvas is not mounted.'))
            return
          }

          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          canvas.width = previewRef.current.width
          canvas.height = previewRef.current.height

          if (!context) {
            reject(new TypeError('Context does not exist.'))
            return
          }

          try {
            context.drawImage(previewRef.current, 0, 0)
            canvas.toBlob(
              blob => {
                if (!blob) {
                  reject(new TypeError('Blob is empty.'))
                  return
                }

                resolve(blob)
              },
              type,
              quality
            )
          } catch (error) {
            reject(error)
          }
        })
    }))

    return (
      <div className={classes.container}>
        <canvas className={classes.preview} ref={previewRef} />

        <video
          className={classes.preloaded}
          crossOrigin="anonymouse"
          muted
          onLoadedData={setup}
          playsInline
          ref={cameraRef}
        />
        <video
          className={classes.preloaded}
          crossOrigin="anonymouse"
          data-key-color={asset.keyColor}
          loop
          muted
          onLoadedData={handleLoadedData}
          playsInline
          preload="none"
          ref={overlayRef}
          src={asset.src}
        />
      </div>
    )
  }
)

export default Renderer
