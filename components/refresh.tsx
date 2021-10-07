import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useBaseURLUtils } from '@/lib/hooks'
import type { VFC } from 'react'

type Props = {
  delay?: number
  path: string
}

const Refresh: VFC<Props> = ({ delay = 0, path }) => {
  const router = useRouter()
  const { withBaseURL } = useBaseURLUtils()

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
          __html: `<meta content="${delay};URL=${withBaseURL(
            path
          )}" http-equiv="refresh" />`
        }}
      />
    </Head>
  )
}

export default Refresh
