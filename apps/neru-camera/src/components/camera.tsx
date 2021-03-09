import { Sprite, Stage } from '@inlet/react-pixi'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { fileSave } from 'browser-fs-access'
import { Application } from 'pixi.js'
import { FC, useCallback, useEffect, useState } from 'react'
import useVideoTexture from '../hooks/use-video-texture'
import processing from '../lib/processing'
import { OverlayEntry } from '../types/Overlay'
import Overlay from './overlay'

const mediaStreamConstraints: MediaStreamConstraints = {
  audio: false,
  video: {
    facingMode: 'environment',
    height: 960,
    width: 1280
  }
}

const useStyles = makeStyles({
  actionButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '3px solid #fafafa',
    borderRadius: '50%',
    color: '#fafafa',
    display: 'block',
    height: '56px',
    overflow: 'hidden',
    padding: 0,
    width: '56px',

    '&:focus': {
      outline: 0
    },

    '&::before': {
      backgroundColor: '#fafafa',
      border: '2px solid #1b1b1b',
      borderRadius: '50%',
      content: '""',
      display: 'block',
      height: '100%',
      transition: 'border-width 0.2s linear',
      width: '100%'
    }
  },
  actionButtonActive: {
    borderWidth: '4px'
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5px 12px 24px',
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  preview: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  stage: {
    display: 'block',
    heigh: 'auto',
    width: '100%'
  }
})

type Props = {
  asset?: OverlayEntry
}

const Camera: FC<Props> = ({ asset }) => {
  const [pixiView, setPixiView] = useState<HTMLCanvasElement>()
  const [cameraStream, setCameraStream] = useState<MediaStream>()
  const [isShooting, setIsShooting] = useState(false)
  const [hasError, setHasError] = useState(false)
  const classes = useStyles()
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

  const refreshError = useCallback(() => setHasError(false), [])

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
    <Container className={classes.container} disableGutters maxWidth={false}>
      <div className={classes.preview}>
        {texture ? (
          <Stage
            className={classes.stage}
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
          <CircularProgress color="secondary" />
        )}
      </div>

      <div className={classes.actionButtons}>
        <button
          className={clsx(classes.actionButton, {
            [classes.actionButtonActive]: isShooting
          })}
          disabled={isShooting}
          onClick={takePhoto}
          tabIndex={-1}
        >
          Take a photo!
        </button>
      </div>

      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={refreshError}
        open={hasError}
      >
        <DialogTitle id="alert-dialog-title">エラー</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            カメラの取得に失敗しました。
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button color="primary" onClick={refreshError}>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Camera
