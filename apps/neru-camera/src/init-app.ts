import { MDCDrawer } from '@material/drawer/index';
import { MDCList } from '@material/list/index';
import { MDCRipple } from '@material/ripple/index';
import { MDCTopAppBar } from '@material/top-app-bar/index';

export async function init() {
  const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
  const list = MDCList.attachTo(document.querySelector('.mdc-drawer .mdc-list'));
  const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));

  list.listElements.forEach(listItemEl => new MDCRipple(listItemEl));

  list.listen('click', () => {
    drawer.open = false;
  });

  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  await import(
    /* webpackChunkName: 'init' */
    './elements/camera',
  );
}
