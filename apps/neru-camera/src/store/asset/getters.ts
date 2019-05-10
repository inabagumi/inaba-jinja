import { GetterTree } from 'vuex'
import { AssetState } from './state'

const getters: GetterTree<AssetState, {}> = {
  getAssetById: state => (id: number) =>
    state.assets.find(asset => asset.id === id) || null
}

export default getters
