import { type Metadata } from 'next'
import SimpleTitle from '@/components/simple-title'
import { title as siteName, twitterAccount } from '@/lib/constants'
import About from './about.mdx'

const title = '因幡神社とは'

export const dynamic = 'force-static'

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
      <About />
    </>
  )
}
