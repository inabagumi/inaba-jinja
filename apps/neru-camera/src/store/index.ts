import Vue from 'vue'
import Vuex from 'vuex'
import asset from './asset'
import { RootState } from './state'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  modules: { asset }
})
