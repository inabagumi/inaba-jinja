import Vue from 'vue'
import Vuex from 'vuex'
import * as asset from './asset'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { asset }
})
