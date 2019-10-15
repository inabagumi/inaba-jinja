import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { AssetContext } from '../../context/asset-context'
import download from '../../lib/download'
import Renderer from '../renderer'
import { RefObject } from '../renderer/renderer'

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
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    margin: 0
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    overflow: 'hidden'
  }
})

const Camera: FC = (): ReactElement => {
  const { asset } = useContext(AssetContext)
  const [isShooting, setIsShooting] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [cameraStream, setCameraStream] = useState<MediaStream>()
  const classes = useStyles()

  const rendererRef = useRef<RefObject>(null)

  const takePhoto = useCallback(() => {
    if (isShooting || !rendererRef.current) return

    setIsShooting(true)

    rendererRef.current
      .toBlob('image/jpeg', 0.8)
      .then(blob => {
        download(blob)
      })
      .finally(() => {
        setIsShooting(false)
      })
  }, [isShooting])

  const refreshError = useCallback(() => {
    setHasError(false)
  }, [])

  useEffect(() => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia(mediaStreamConstraints)
        .then(cameraStream => setCameraStream(cameraStream))
        .catch(() => setHasError(true))
    } else {
      setHasError(true)
    }
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {asset && cameraStream && (
          <Renderer
            asset={asset}
            cameraStream={cameraStream}
            ref={rendererRef}
          />
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
    </div>
  )
}

export default Camera
