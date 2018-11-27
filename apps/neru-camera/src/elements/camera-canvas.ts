import { LitElement, customElement, html, property, query } from '@polymer/lit-element';
import { default as PinchZoom } from 'pinch-zoom-element';
import { default as Renderer } from '../renderer';

declare global {
  interface HTMLElementTagNameMap {
    'camera-canvas': CameraCanvas;
  }

  interface HTMLVideoElement {
    playsInline: boolean;
  }
}

const constraints: MediaStreamConstraints = {
  audio: false,
  video: {
    facingMode: 'environment',
  },
};

@customElement('camera-canvas' as any)
export default class CameraCanvas extends LitElement {

  private renderer: Renderer;

  @property() height: number = 720;
  @property() src: string;
  @property() width: number = 1280;

  @query('canvas')
  private canvas?: HTMLCanvasElement;

  @query('pinch-zoom')
  private pinchZoom?: PinchZoom;

  firstUpdated() {
    this.renderer = new Renderer(this.canvas);

    this.setup();
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          position: relative;
        }

        canvas {
          display: block;
          height: auto;
          width: 100%;
        }

        pinch-zoom {
          bottom: 0;
          display: block;
          left: 0;
          overflow: hidden;
          position: absolute;
          right: 0;
          touch-action: none;
          top: 0;
        }

        pinch-zoom .dummy {
          background-color: transparent;
          height: 100px;
          width: 100px;
        }
      </style>

      <canvas
        height="${this.height}"
        width="${this.width}">
      </canvas>

      <pinch-zoom @change="${this.changeHandler}">
        <div class="dummy"></div>
      </pinch-zoom>
    `;
  }

  toBlob() {
    return new Promise<Blob>((resolve, reject) => {
      try {
        this.canvas.toBlob(resolve, 'image/png');
      } catch (error) {
        reject(error);
      }
    });
  }

  private changeHandler(event) {
    const { scale, x, y } = event.target;

    this.renderer.updateTransform(scale, x, y);
  }

  private async setup() {
    await Promise.all([
      (async () => {
        const blob = await this.download(this.src);
        const overlay = await this.loadVideo(blob);

        this.pinchZoom.scaleTo(0.5);
        this.renderer.setOverlay(overlay);
      })(),
      (async () => {
        const { mediaDevices } = navigator;
        const media = await mediaDevices.getUserMedia(constraints);
        const stream = await this.loadVideo(media);

        this.renderer.setBackground(stream);
      })(),
    ]);

    this.renderer.start();
  }

  private loadVideo(media: Blob | MediaStream) {
    return new Promise<HTMLVideoElement>((resolve, reject) => {
      const video = document.createElement('video');

      video.autoplay = true;
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;
      video.playsInline = true;

      video.addEventListener('loadeddata', () => {
        video.play()
          .then(() => resolve(video))
          .catch(reject);
      });
      video.addEventListener('error', reject);

      if (media instanceof MediaStream) {
        video.srcObject = media;
      } else {
        video.src = URL.createObjectURL(media);
      }
    });
  }

  private async download(url: string): Promise<Blob> {
    const req = new Request(url);
    const res = await fetch(req);

    return res.blob();
  }
}
