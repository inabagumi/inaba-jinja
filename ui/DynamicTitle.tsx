'use client'

import { type ReactNode, useEffect } from 'react'
import { title as siteName } from '@/lib/constants'

type Props = {
  children?: ReactNode
}

export default function DynamicTitle({ children = '' }: Props): null {
  useEffect(() => {
    if (typeof children !== 'string') return

    document.title = children ? `${children} - ${siteName}` : siteName
  }, [children])

  return null
}
