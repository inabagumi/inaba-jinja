import { GetterTree } from 'vuex'
import { RootState } from '../state'
import { AssetState } from './state'

const getters: GetterTree<AssetState, RootState> = {
  getAssetById: state => (id: number) =>
    state.assets.find(asset => asset.id === id) || null
}

export default getters
