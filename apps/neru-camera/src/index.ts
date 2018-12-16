import * as style from './styles/app.scss';

async function main() {
  if (process.env.NODE_ENV !== 'production' || typeof PRERENDER !== 'undefined') {
    style.use();
  }

  const { init } = await import(
    /* webpackChunkName: 'init' */
    './init-app',
  );

  await init();
}

main().catch(error => console.error(error));
