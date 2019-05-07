import assets from './list'

export type Asset = {
  id: number
  keyColor: number
  src: string
}

export type AssetState = {
  assets: Asset[]
}

const state: AssetState = {
  assets
}

export default state
