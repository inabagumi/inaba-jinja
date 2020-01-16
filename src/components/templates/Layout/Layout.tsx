import styled from '@emotion/styled'
import React, { FC } from 'react'
import Background from '../../molecules/Background'
import Footer from '../../organisms/Footer'

const Content = styled.div`
  flex-grow: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 0;
`

const Layout: FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>

        <Footer />
      </Wrapper>

      <Background />
    </>
  )
}

export default Layout
