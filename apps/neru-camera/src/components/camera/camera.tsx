import classNames from 'classnames'
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import Asset from '../../interfaces/asset'
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

type Props = {
  asset?: Asset
}

const Camera: FC<Props> = ({ asset }): ReactElement => {
  const [isShooting, setIsShooting] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)
  const [cameraStream, setCameraStream] = useState<MediaStream>()

  const rendererRef = useRef<RefObject>(null)

  const takePhoto = useCallback(() => {
    if (isShooting || !rendererRef.current) return

    setIsShooting(true)

    rendererRef.current
      .toBlob('image/jpeg', 0.8)
      .then(blob => {
        const anchor = document.createElement('a')

        anchor.href = URL.createObjectURL(blob)
        anchor.download = `NeruCamera-${Date.now()}.jpg`
        anchor.target = '_blank'
        anchor.click()
      })
      .finally(() => {
        setIsShooting(false)
      })
  }, [isShooting])

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
    <>
      <div className="camera">
        <div className="camera__content">
          {asset && cameraStream && (
            <Renderer
              asset={asset}
              cameraStream={cameraStream}
              ref={rendererRef}
            />
          )}
        </div>

        {hasError && (
          <div className="camera__error">
            <h2>カメラの取得に失敗しました</h2>

            <p>
              カメラの取得に失敗しました。ねるカメラを利用するにはカメラへのアクセスを許可する必要があります。
            </p>
            <p>
              もしくはあなたの使っているアプリはカメラの取得に対応していません。PC
              の場合、Google Chrome と Firefox
              最新版以外での動作は保証できません。Android の場合は Play Store
              からダウンロードできる Chrome を使ってください。
            </p>
            <p>
              また iOS では Safari
              以外のアプリからカメラの取得ができません。iPhone や iPad などの
              iOS 端末を使っている場合は Safari で開き直してください。
            </p>
          </div>
        )}

        <div className="action-buttons">
          <button
            className={classNames('action-button', {
              'action-button--active': isShooting
            })}
            onClick={takePhoto}
            tabIndex={-1}
          >
            Take a photo!
          </button>
        </div>
      </div>

      <style jsx>{`
        .camera {
          align-items: stretch;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: flex-end;
          margin: 0;
        }

        .camera__content {
          align-items: center;
          display: flex;
          flex-grow: 1;
          overflow: hidden;
        }

        .camera__error {
          background-color: rgba(0, 0, 0, 0.8);
          bottom: 0;
          color: #fafafa;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          left: 0;
          padding: 3rem 1rem 0.5rem;
          position: fixed;
          right: 0;
          top: 0;
        }

        .camera__error h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .camera__error p {
          line-height: 2;
          margin: 0;
          text-align: justify;
        }

        .action-buttons {
          box-sizing: border-box;
          display: flex;
          justify-content: space-around;
          padding: 5px 12px 24px;
          width: 100%;
        }

        .action-button {
          align-items: center;
          background-color: transparent;
          border: 3px solid #fafafa;
          border-radius: 50%;
          box-sizing: border-box;
          color: #fafafa;
          display: block;
          height: 56px;
          overflow: hidden;
          padding: 0;
          width: 56px;
        }

        .action-button:focus {
          outline: 0;
        }

        .action-button::before {
          background-color: #fafafa;
          border: 2px solid #1b1b1b;
          border-radius: 50%;
          box-sizing: border-box;
          content: '';
          display: block;
          height: 100%;
          transition: border-width 0.2s linear;
          width: 100%;
        }

        .action-button--active::before {
          border-width: 4px;
        }
      `}</style>
    </>
  )
}

export default Camera
