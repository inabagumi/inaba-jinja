import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { VFC } from 'react'

import fullPath from '@/helpers/fullPath'

type Props = {
  delay?: number
  path: string
}

const Refresh: VFC<Props> = ({ delay = 0, path }) => {
  const router = useRouter()

  useEffect(() => {
    void router.prefetch(path)

    const timerID = setTimeout(() => {
      void router.replace(path)
    }, 1_000 * delay)

    return () => {
      clearTimeout(timerID)
    }
  }, [path, delay, router])

  return (
    <Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<meta content="${delay};URL=${fullPath(
            path
          )}" http-equiv="refresh" />`
        }}
      />
    </Head>
  )
}

export default Refresh
