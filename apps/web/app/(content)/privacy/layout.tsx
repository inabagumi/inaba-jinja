import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { title as siteName, twitterAccount } from '@/lib/constants'

export const metadata = {
  alternates: {
    canonical: '/privacy'
  },
  openGraph: {
    siteName,
    title: 'プライバシーポリシー',
    type: 'article',
    url: '/privacy'
  },
  title: 'プライバシーポリシー',
  twitter: {
    site: `@${twitterAccount}`,
    title: `プライバシーポリシー - ${siteName}`
  }
} satisfies Metadata

type Props = {
  children: ReactNode
}

export default function PrivacyLayout({ children }: Props) {
  return (
    <div className="prose prose-invert prose-orange max-w-none">{children}</div>
  )
}
