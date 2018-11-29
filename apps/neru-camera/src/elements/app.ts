import { LitElement, customElement, html } from '@polymer/lit-element';

import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
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
          display: block;
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

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-drawer .toolbar {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          height: 64px;
        }

        app-drawer paper-listbox {
          height: 100%;
          overflow: auto;
        }

        app-drawer paper-listbox a {
          color: inherit;
        }

        app-drawer paper-listbox a:focus {
          outline: 0;
        }
      </style>

      <app-drawer-layout fullbleed>
        <app-header-layout has-scrolling-region>
          <app-header slot="header">
            <app-toolbar>
              <div main-title>
                <img alt="" height="32" src="/assets/logo.svg" width="32">
                <span>ねるカメラ</span>
              </div>

              <paper-icon-button drawer-toggle icon="menu"></paper-icon-button>
            </app-toolabar>
          </app-header>

          <nc-camera></nc-camera>
        </app-header-layout>

        <app-drawer align="end" slot="drawer">
          <div class="toolbar"></div>

          <paper-listbox>
            <a
              href="https://github.com/ykzts/neru-camera/blob/master/README.md"
              rel="noopener noreferrer"
              tabindex="-1"
              target="_blank">
              <paper-item raised>ねるカメラについて</paper-item>
            </a>
            <a
              href="https://github.com/ykzts/neru-camera/releases"
              rel="noopener noreferrer"
              tabindex="-1"
              target="_blank">
              <paper-item raised>リリースノート</paper-item>
            </a>
          </paper-listbox>
        </app-drawer>
      </app-drawer-layout>

      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700" rel="stylesheet">
    `;
  }
}
