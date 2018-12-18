import { LitElement, customElement, html, query } from '@polymer/lit-element'
import { default as CameraCanvas } from './camera-canvas'

import '@material/mwc-icon'

declare global {
  interface HTMLElementTagNameMap {
    'nc-camera': Camera
  }
}

// tslint:disable-next-line:max-line-length
const neruChan =
  'https://video.twimg.com/ext_tw_video/1054770262854389760/pu/vid/592x1280/Iqv1cl0KCIdFJL5p.mp4'

@customElement('nc-camera' as any)
export default class Camera extends LitElement {
  @query('camera-canvas')
  private cameraCanvas?: CameraCanvas

  render() {
    if (!navigator.mediaDevices) {
      return html`
        <style>
          :host {
            display: block;
            padding: 0.5rem;
          }

          h1 {
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
          }

          p {
            line-height: 1.75;
            margin: 0;
          }

          p + p {
            margin-top: 1rem;
          }
        </style>

        <h1>カメラの取得に失敗しました</h1>

        <p>
          あなたの使っているアプリはカメラの取得に対応していません。PC
          の場合、Google Chrome と Firefox
          最新版以外での動作は保証できません。Android の場合は Play Store
          からダウンロードできる Chrome を使ってください。
        </p>
        <p>
          また iOS では Safari 以外のアプリからカメラの取得ができません。iPhone
          や iPad などの iOS 端末を使っている場合は Safari
          で開き直してください。
        </p>
      `
    }

    return html`
      <style>
        :host {
          background-color: #000;
          display: block;
          height: 100%;
          margin: 0;
          overflow: hidden;
          position: relative;
        }

        camera-canvas {
          height: auto;
          width: 100%;
        }

        .action-buttons {
          bottom: 0;
          display: flex;
          justify-content: space-around;
          left: 0;
          padding: 0 12px 24px;
          position: absolute;
          right: 0;
        }

        .action-buttons button {
          align-items: center;
          background-color: transparent;
          border: 1px solid #fff;
          border-radius: 50%;
          color: #fff;
          display: flex;
          height: 56px;
          justify-content: center;
          width: 56px;
        }

        .action-buttons button:focus {
          outline: 0;
        }
      </style>

      <camera-canvas src="${neruChan}"></camera-canvas>

      <div class="action-buttons">
        <button aria-label="撮影" @click="${this.clickHandler}">
          <mwc-icon>photo_camera</mwc-icon>
        </button>
      </div>
    `
  }

  private clickHandler(event: MouseEvent) {
    event.preventDefault()

    const anchor = document.createElement('a')

    let otherTab: Window
    if (typeof anchor.download !== 'string') {
      otherTab = window.open('about:blank', '_blank')
    }

    this.cameraCanvas.toBlob().then(blob => {
      anchor.href = URL.createObjectURL(blob)

      if (!otherTab) {
        anchor.download = `NeruCamera-${Date.now()}.png`
        anchor.target = '_blank'
        anchor.click()
      } else {
        otherTab.location.href = anchor.href
      }
    })
  }
}
