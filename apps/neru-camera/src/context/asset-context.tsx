import React, { FC, createContext, useState, useEffect } from 'react'
import Asset from '../interfaces/asset'

export const initialValues = {
  isLoading: true
}

type Values = {
  asset?: Asset
  isLoading: boolean
}

export const AssetContext = createContext<Values>(initialValues)

export const AssetProvider: FC = ({ children }) => {
  const [asset, setAsset] = useState<Asset>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/list.json')
      .then(res => res.json())
      .then((assets: Asset[]) => {
        setAsset(assets[0])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <AssetContext.Provider value={{ asset, isLoading }}>
      {children}
    </AssetContext.Provider>
  )
}
