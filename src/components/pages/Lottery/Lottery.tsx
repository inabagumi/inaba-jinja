import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import kujiImage from '../../../assets/kuji.png'
import Error from '../../../pages/_error'
import SingleDoc from '../../templates/SingleDoc'
import styles from './Lottery.module.css'

const sleep = (seconds: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })

type FortuneResponse = {
  error?: string
  id?: string
}

const Lottery: FC = () => {
  const [hasError, setHasError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    Promise.all([
      sleep(3),
      fetch('/api/fortunes')
        .then<FortuneResponse>(res => res.json())
        .then(fortune => {
          if (!fortune.id) {
            const error = new TypeError(fortune.error ?? 'unknown error')

            return Promise.reject(error)
          }

          return fortune.id
        })
    ])
      .then(values => values[1])
      .then(id => {
        router.replace('/kuji/[id]', `/kuji/${id}`)
      })
      .catch(() => {
        setHasError(true)
      })
  }, [router])

  if (hasError) return <Error statusCode={500} />

  return (
    <SingleDoc>
      <p>
        <img
          alt="くじ引き中..."
          className={styles.image}
          height="290"
          src={kujiImage}
          width="225"
        />
      </p>
    </SingleDoc>
  )
}

export default Lottery
