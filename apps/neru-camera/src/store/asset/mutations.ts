import { MutationTree } from 'vuex'
import { AssetState } from './state'
import { ASSET_FETCH_LIST } from './types'

const mutations: MutationTree<AssetState> = {
  [ASSET_FETCH_LIST](state, { assets }) {
    state.assets = assets
  }
}

export default mutations
