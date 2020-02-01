import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import Meta from '../components/meta'
import { useAsset } from '../context/asset-context'

const Camera = dynamic(() => import('../components/camera'), { ssr: false })

const useStyles = makeStyles({
  container: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0
  }
})

const Index: NextPage = () => {
  const classes = useStyles()
  const asset = useAsset()

  return (
    <>
      <Meta />

      <main className={classes.container}>
        <Camera asset={asset} />
      </main>
    </>
  )
}

export default Index
