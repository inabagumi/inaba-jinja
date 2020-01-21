import { keyframes } from '@emotion/core'

const shake = keyframes`
  from {
    transform: translateY(0) rotate(180deg);
  }

  to {
    transform: translateY(20px) rotate(170deg);
  }
`

export default shake
