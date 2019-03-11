import { register } from 'register-service-worker'
import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`)
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
