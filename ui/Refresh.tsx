'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type Props = {
  delay?: number
  path: string
}

export default function Refresh({ delay = 0, path }: Props): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.prefetch(path)

    const timerID = setTimeout(() => {
      router.replace(path)
    }, 1_000 * delay)

    return () => {
      clearTimeout(timerID)
    }
  }, [path, delay, router])

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<meta content="${delay};URL=${new URL(
          path,
          process.env.NEXT_PUBLIC_BASE_URL
        ).toString()}" http-equiv="refresh" />`
      }}
    />
  )
}
