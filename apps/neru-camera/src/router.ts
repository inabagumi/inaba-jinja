import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Camera = (): Promise<typeof import('./views/Camera.vue')> =>
  import(/* webpackChunkName: 'views/camera' */ './views/Camera.vue')

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      component: Camera,
      name: 'camera',
      path: '/'
    },
    {
      component: Camera,
      name: 'camera-with-id',
      path: '/c/:id'
    }
  ]
})
