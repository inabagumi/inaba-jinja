import './camera-canvas';

import { LitElement, customElement, html } from '@polymer/lit-element';

// tslint:disable-next-line:max-line-length
const neruChan = 'https://video.twimg.com/ext_tw_video/1054770262854389760/pu/vid/592x1280/Iqv1cl0KCIdFJL5p.mp4';

@customElement('neru-camera' as any)
export default class NeruCamera extends LitElement {

  render() {
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
      </style>

      <camera-canvas src="${neruChan}"></camera-canvas>
    `;
  }
}
