import { Global, css } from '@emotion/core'
import React, { FC } from 'react'
import Heartbeat from 'components/molecules/Heartbeat'

const globalStyles = css`
  body {
    background-color: #222;
    bottom: 0;
    left: 0;
    margin: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  #app {
    height: 100%;
  }
`

const App: FC = () => {
  return (
    <>
      <Global styles={globalStyles} />

      <Heartbeat />
    </>
  )
}

export default App
