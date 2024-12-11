import type { Metadata } from 'next'
import { description, title } from '@/lib/constants'
import WrappedCamera from './wrapped-camera'

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

export default function CameraPage() {
  return <WrappedCamera />
}
