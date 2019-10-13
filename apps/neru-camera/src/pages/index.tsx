import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React, { ReactElement, useState, useEffect } from 'react'
import Asset from '../interfaces/asset'

const Camera = dynamic(() => import('../components/camera'), { ssr: false })

const Index: NextPage = (): ReactElement => {
  const [asset, setAsset] = useState<Asset>()

  useEffect(() => {
    fetch('/list.json')
      .then(res => res.json())
      .then((assets: Asset[]) => setAsset(assets[0]))
  }, [])

  return (
    <>
      <main className="container">
        <Camera asset={asset} />
      </main>

      <style jsx>{`
        .container {
          background-color: #1b1b1b;
          bottom: 0;
          left: 0;
          position: fixed;
          right: 0;
          top: 0;
        }
      `}</style>
    </>
  )
}

export default Index
