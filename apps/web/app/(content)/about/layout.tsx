import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { title as siteName, twitterAccount } from '@/lib/constants'

export const metadata = {
  alternates: {
    canonical: '/privacy'
  },
  openGraph: {
    siteName,
    title: `${siteName}とは`,
    type: 'article',
    url: '/privacy'
  },
  title: `${siteName}とは`,
  twitter: {
    site: `@${twitterAccount}`,
    title: `${siteName}とは - ${siteName}`
  }
} satisfies Metadata

type Props = {
  children: ReactNode
}

export default function AboutLayout({ children }: Props) {
  return (
    <div className="prose prose-invert prose-orange max-w-none">{children}</div>
  )
}
