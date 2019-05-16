import 'pinch-zoom-element'
import { utils as pixiUtils } from 'pixi.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  import('workbox-window').then(({ Workbox }) => {
    const wb = new Workbox(`${process.env.BASE_URL}sw.js`)
    wb.register()
  })
}

Vue.config.productionTip = false
Vue.config.ignoredElements = ['pinch-zoom']

pixiUtils.skipHello()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
