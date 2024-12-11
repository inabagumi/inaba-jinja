'use client'

import dynamic from 'next/dynamic'

const WrappedCamera = dynamic(() => import('./camera'), { ssr: false })

export default WrappedCamera
