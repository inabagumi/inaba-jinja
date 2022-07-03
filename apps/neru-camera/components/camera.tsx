import '@reach/dialog/styles.css'
import { Sprite, Stage } from '@inlet/react-pixi'
import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogLabel
} from '@reach/alert-dialog'
import { fileSave } from 'browser-fs-access'
import clsx from 'clsx'
import { type Application } from 'pixi.js'
import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import useVideoTexture from '../hooks/use-video-texture'
import { type OverlayEntry } from '../lib/contentful'
import processing from '../lib/processing'
import styles from './camera.module.css'
import Overlay from './overlay'

const mediaStreamConstraints: MediaStreamConstraints = {
  audio: false,
  video: {
    facingMode: 'environment',
    height: 960,
    width: 1280
  }
}

type Props = {
  asset?: OverlayEntry
}

const Camera: FC<Props> = ({ asset }) => {
  const [pixiView, setPixiView] = useState<HTMLCanvasElement>()
  const [cameraStream, setCameraStream] = useState<MediaStream>()
  const [isShooting, setIsShooting] = useState(false)
  const [hasError, setHasError] = useState(false)
  const cancelRef = useRef<HTMLDivElement>(null)
  const texture = useVideoTexture({ srcObject: cameraStream })

  const handleMount = useCallback(
    (app: Application) => setPixiView(app.view),
    []
  )

  const handleUnmount = useCallback(() => setPixiView(undefined), [])

  const takePhoto = useCallback(() => {
    if (isShooting || !pixiView) return

    setIsShooting(true)

    processing(pixiView, 'image/jpeg', 0.8)
      .then((blob) =>
        fileSave(blob, {
          extensions: ['.jpg', '.jpeg'],
          fileName: `NeruCamera-${Date.now()}.jpg`
        })
      )
      .catch((error) => {
        console.error(error)
      })
      .finally(() => setIsShooting(false))
  }, [pixiView, isShooting])

  useEffect(() => {
    if (!navigator.mediaDevices) {
      setHasError(true)

      return
    }

    navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints)
      .then((cameraStream) => setCameraStream(cameraStream))
      .catch(() => setHasError(true))
  }, [])

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-grow items-center justify-center overflow-hidden">
        {texture ? (
          <Stage
            className="block h-auto w-full"
            height={texture.height}
            options={{
              autoDensity: false,
              preserveDrawingBuffer: true
            }}
            onMount={handleMount}
            onUnmount={handleUnmount}
            width={texture.width}
          >
            <Sprite texture={texture} />

            {asset && <Overlay asset={asset} />}
          </Stage>
        ) : (
          <svg
            className="animate-spin h-10 text-yellow-400 w-10"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className={clsx('opacity-75', styles.animateDash)}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>

      <div className="flex justify-around pb-6 pt-2 px-4">
        <button
          className={clsx(
            'bg-gray-50',
            'bg-opacity-95',
            isShooting ? 'border-2' : 'border-0',
            'border-black',
            'border-opacity-95',
            'ease-linear',
            'h-14',
            'focus:outline-none',
            'ring-2',
            'ring-offset-2',
            'ring-offset-black',
            'ring-opacity-95',
            'ring-white',
            'rounded-full',
            'transition-all',
            'w-14'
          )}
          disabled={isShooting}
          onClick={takePhoto}
          tabIndex={-1}
        >
          <span className="sr-only">写真を撮る</span>
        </button>
      </div>

      {hasError && (
        <AlertDialog leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>エラー</AlertDialogLabel>

          <AlertDialogDescription>
            カメラの取得に失敗しました。
          </AlertDialogDescription>
        </AlertDialog>
      )}
    </div>
  )
}

export default Camera
