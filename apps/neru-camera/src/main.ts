import 'pinch-zoom-element'
import { register } from 'register-service-worker'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}sw.js`)
}

Vue.config.productionTip = false
Vue.config.ignoredElements = ['pinch-zoom']

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
