import 'pinch-zoom-element'
import { utils as pixiUtils } from 'pixi.js'
import Vue, { VNode } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  import('workbox-window').then(({ Workbox }): void => {
    const wb = new Workbox(`${process.env.BASE_URL}sw.js`)
    wb.register()
  })
}

Vue.config.productionTip = false
Vue.config.ignoredElements = ['pinch-zoom']

pixiUtils.skipHello()

new Vue({
  render: (h): VNode => h(App),
  router,
  store
}).$mount('#app')
