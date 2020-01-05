import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import kujiImage from '../../../assets/kuji.png'
import SingleDoc from '../../templates/SingleDoc'

const sleep = (seconds: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })

const Lottery: FC = () => {
  const router = useRouter()

  useEffect(() => {
    Promise.all([sleep(3), fetch('/api/fortunes')])
      .then<{ id: string }>(([, res]) => res.json())
      .then(({ id }) => {
        router.replace('/kuji/[id]', `/kuji/${id}`)
      })
      .catch(error => console.log(error))
  }, [router])

  return (
    <>
      <SingleDoc>
        <p>
          <img
            alt="くじ引き中..."
            className="lot-image"
            height="290"
            src={kujiImage}
            width="225"
          />
        </p>
      </SingleDoc>

      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateY(0) rotate(180deg);
          }

          50% {
            transform: translateY(20px) rotate(170deg);
          }

          0% {
            transform: translateY(0) rotate(180deg);
          }
        }

        .lot-image {
          animation: shake 0.5s infinite;
          display: block;
          margin: 0 auto;
          transform: translateY(0) rotate(180deg);
        }
      `}</style>
    </>
  )
}

export default Lottery
