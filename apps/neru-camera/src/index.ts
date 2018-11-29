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

  await Promise.all([
    import(
      /* webpackChunkName: 'icons' */
      '@polymer/iron-icons',
    ),
    import(
      /* webpackChunkName: 'icons' */
      '@polymer/iron-icons/image-icons',
    ),
  ]);

  init();
}

main().catch(error => console.error(error));
