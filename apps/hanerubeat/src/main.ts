import './registerServiceWorker'
import Vue, { VNode } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: (h): VNode => h(App)
}).$mount('#app')
