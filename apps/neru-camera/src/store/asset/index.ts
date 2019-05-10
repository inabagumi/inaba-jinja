import { Module } from 'vuex'
import { RootState } from '../state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state, { AssetState } from './state'

const mod: Module<AssetState, RootState> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state
}

export default mod
