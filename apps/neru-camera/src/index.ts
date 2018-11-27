declare module '@webcomponents/custom-elements';

function init() {
  require('./init-app');
}

async function main() {
  if (!('customElements' in global)) {
    await import(
      /* webpackChunkName: 'wc-polyfill' */
      '@webcomponents/custom-elements',
    );
  }

  init();
}

main().catch(error => console.error(error));
