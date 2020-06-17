import React, { FC } from 'react'

import kujiImage from '@/assets/kuji.png'
import SingleDoc from '@/components/templates/SingleDoc'

const Lottery: FC = () => (
  <>
    <SingleDoc>
      <img
        alt="くじ引き中..."
        className="lottery-box"
        height="290"
        src={kujiImage}
        width="225"
      />
    </SingleDoc>

    <style jsx>{`
      @keyframes shake {
        from {
          transform: translateY(0) rotate(180deg);
        }

        to {
          transform: translateY(20px) rotate(170deg);
        }
      }

      .lottery-box {
        animation: shake 0.3s infinite alternate linear;
        display: block;
        margin: 0 auto;
        transform: translateY(0) rotate(180deg);
      }
    `}</style>
  </>
)

export default Lottery
