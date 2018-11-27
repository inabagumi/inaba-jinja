import { LitElement, customElement, html } from '@polymer/lit-element';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import './camera';

declare global {
  interface HTMLElementTagNameMap {
    'nc-app': App;
  }
}

@customElement('nc-app' as any)
export default class App extends LitElement {
  render() {
    return html`
      <style>
        :host {
          height: 100%;
          font-family: Roboto, Noto Sans JP, sans-serif;
          width: 100%;
        }

        app-header {
          background-color: #ff9800;
        }

        app-toolbar {
          color: #fff;
          font-weight: 700;
        }

        [main-title] {
          align-items: center;
          display: flex;
        }

        [main-title] > :not(:first-child) {
          margin-left: 5px;
        }
      </style>

      <app-header-layout fullbleed>
        <app-header slot="header">
          <app-toolbar>
            <div main-title>
              <img alt="" height="32" src="/assets/logo.svg" width="32">
              <span>ねるカメラ</span>
            </div>
          </app-toolabar>
        </app-header>

        <nc-camera></nc-camera>
      </app-header-layout>

      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700" rel="stylesheet">
    `;
  }
}
