import { type Metadata } from 'next'
import { title as siteName, twitterAccount } from '@/lib/constants'
import SimpleTitle from '@/ui/SimpleTitle'
import PrivacyWrapper from './PrivacyWrapper'

const title = 'プライバシーポリシー'

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy'
  },
  openGraph: {
    siteName,
    title,
    type: 'article',
    url: '/privacy'
  },
  title,
  twitter: {
    site: `@${twitterAccount}`,
    title: `${title} - ${siteName}`
  }
}

export default function Page() {
  return (
    <>
      <SimpleTitle>{title}</SimpleTitle>
      <PrivacyWrapper />
    </>
  )
}
