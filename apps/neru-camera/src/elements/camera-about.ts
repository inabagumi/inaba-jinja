import { LitElement, customElement, html } from '@polymer/lit-element';

declare global {
  interface HTMLElementTagNameMap {
    'camera-about': CameraAbout;
  }
}

/* todo */
@customElement('camera-about' as any)
export default class CameraAbout extends LitElement {
  render() {
    // tslint:disable:max-line-length
    return html`
      <p>ねるカメラは「有閑喫茶 あにまーれ」に所属する<a href="https://www.youtube.com/channel/UC0Owc36U9lOyi9Gx9Ic-4qg" rel="noopener noreferrer" target="_blank">因幡はねるさん</a>と一緒に写真の撮影ができるウェブアプリケーションです。</p>
      <p>因幡はねるさんや「有閑喫茶 あにまーれ」とは一切関係のない第三者である<a href="https://ykzts.com/" rel="noopener noreferrer" target="_blank">山岸和利</a>が個人的に開発をしています。このウェブアプリケーションに対する問い合わせを「有閑喫茶 あにまーれ」や因幡はねるさんに対して行うのはお止めください。</p>
    `;
    // tslint:enable:max-line-length
  }
}
