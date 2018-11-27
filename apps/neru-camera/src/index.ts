import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-header-layout/app-header-layout';
import '@polymer/app-layout/app-toolbar/app-toolbar';
import './elements/neru-camera';

import { html, render } from 'lit-html';

async function main() {
  const content = html`
    <app-header-layout fullbleed>
      <app-header slot="header">
        <app-toolbar>
          <div main-title>
            <img alt="" height="32" src="/assets/logo.svg" width="32">
            <span>ねるカメラ</span>
          </div>
        </app-toolabar>
      </app-header>

      <neru-camera></neru-camera>
    </app-header-layout>
  `;

  render(content, document.getElementById('root') as HTMLDivElement);
}

main().catch(error => console.error(error));
