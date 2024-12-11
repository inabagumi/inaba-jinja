import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import SimpleTitle from '@/components/simple-title'
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
    <div className="prose prose-invert prose-orange max-w-none [&_em]:font-semibold [&_em]:not-italic">
      <SimpleTitle>{siteName}とは</SimpleTitle>
      {children}
    </div>
  )
}
