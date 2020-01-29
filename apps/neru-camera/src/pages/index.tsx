import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React, { ReactElement } from 'react'
import Meta from '../components/meta'

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

const Index: NextPage = (): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <Meta />

      <main className={classes.container}>
        <Camera />
      </main>
    </>
  )
}

export default Index
