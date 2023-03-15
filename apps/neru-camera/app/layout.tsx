import 'tailwindcss/tailwind.css'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import mainVisual from '@/public/img/main-visual.jpg'

export const metadata: Metadata = {
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  manifest: '/manifest.json',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  ),
  openGraph: {
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    images: [
      {
        height: mainVisual.height,
        url: mainVisual.src,
        width: mainVisual.width
      }
    ],
    title: process.env.NEXT_PUBLIC_TITLE,
    type: 'website'
  },
  title: process.env.NEXT_PUBLIC_TITLE && {
    default: process.env.NEXT_PUBLIC_TITLE,
    template: `%s - ${process.env.NEXT_PUBLIC_TITLE}`
  },
  twitter: {
    card: 'summary_large_image'
  }
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  )
}
