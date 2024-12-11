import { type Metadata } from 'next'
import dynamic from 'next/dynamic'
import { description, title } from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: '/'
  },
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image'
  }
}

const Camera = dynamic(() => import('./camera'), { ssr: false })

export default function CameraPage(): JSX.Element {
  return <Camera />
}
