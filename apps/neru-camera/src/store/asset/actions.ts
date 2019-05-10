import { ActionTree } from 'vuex'
import { AssetState } from './state'
import { ASSET_FETCH_LIST } from './types'

const actions: ActionTree<AssetState, {}> = {
  async fetch({ commit }) {
    const response = await fetch('/list.json')
    const assets = await response.json()

    commit(ASSET_FETCH_LIST, { assets })
  }
}

export default actions
