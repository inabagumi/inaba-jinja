import React, { FC, createContext, useContext } from 'react'
import { OverlayEntry } from '../types/Overlay'

type Values = {
  assets: OverlayEntry[]
}

const AssetContext = createContext<Values>({ assets: [] })

type Props = {
  assets: OverlayEntry[]
}

export const AssetProvider: FC<Props> = ({ assets, children }) => (
  <AssetContext.Provider value={{ assets }}>{children}</AssetContext.Provider>
)

export const useAsset = (id?: string): OverlayEntry | undefined => {
  const { assets } = useContext(AssetContext)
  const asset = id ? assets[0] : assets.find(entry => entry.sys.id === id)

  return asset
}

export default AssetContext
