import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import React, { FC } from 'react'
import { MdFavorite } from 'react-icons/md'

const beat = keyframes`
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.8);
  }
`

const AnimatedHeart = styled(MdFavorite)`
  animation: ${beat} 0.8s ease-in-out infinite;
  color: #fff59d;
  display: block;
  fill: currentColor;
  height: auto;
  width: 100%;
`

const Heart: FC = () => <AnimatedHeart />

export default Heart
