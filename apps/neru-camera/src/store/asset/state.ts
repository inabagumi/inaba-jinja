export type Asset = {
  id: number
  keyColor: string
  src: string
}

export type AssetState = {
  assets: Asset[]
}

const state: AssetState = {
  assets: []
}

export default state
