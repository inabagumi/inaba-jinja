import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import kujiImage from '../../../assets/kuji.png'
import SingleDoc from '../../templates/SingleDoc'

const shake = keyframes`
  0% {
    transform: translateY(0) rotate(180deg);
  }

  100% {
    transform: translateY(20px) rotate(170deg);
  }
`

const LotteryBox = styled.img`
  animation: ${shake} 0.3s infinite alternate linear;
  display: block;
  margin: 0 auto;
  transform: translateY(0) rotate(180deg);
`
type Props = {
  id: string
}

const Lottery: FC<Props> = ({ id }) => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace('/kuji/[id]', `/kuji/${id}`)
    }, 1000 * 2)
  }, [id, router])

  return (
    <SingleDoc>
      <LotteryBox
        alt="くじ引き中..."
        height="290"
        src={kujiImage}
        width="225"
      />
    </SingleDoc>
  )
}

export default Lottery
