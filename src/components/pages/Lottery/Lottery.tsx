import styled from '@emotion/styled'
import React, { FC } from 'react'
import kujiImage from 'assets/kuji.png'
import SingleDoc from 'components/templates/SingleDoc'
import shake from 'styles/shake'

const LotteryBox = styled.img`
  animation: ${shake} 0.3s infinite alternate linear;
  display: block;
  margin: 0 auto;
  transform: translateY(0) rotate(180deg);
`

const Lottery: FC = () => (
  <SingleDoc>
    <LotteryBox alt="くじ引き中..." height="290" src={kujiImage} width="225" />
  </SingleDoc>
)

export default Lottery
