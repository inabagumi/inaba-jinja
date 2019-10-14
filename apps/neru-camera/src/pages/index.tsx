import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React, { ReactElement } from 'react'

const Camera = dynamic(() => import('../components/camera'), { ssr: false })

const Index: NextPage = (): ReactElement => {
  return (
    <>
      <main className="container">
        <Camera />
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
