'use client'

import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'
import { delay } from '@/lib/timer'

type Props = {
  idPromise: Promise<string>
}

export default function Redirect({ idPromise }: Props) {
  const router = useRouter()
  const [id] = use(Promise.all([idPromise, delay(2)]))

  useEffect(() => {
    router.push(`/kuji/${id}`)
  }, [router, id])

  return null
}
