import { type Metadata } from 'next'
import { title as siteName, twitterAccount } from '@/lib/constants'
import SimpleTitle from '@/ui/SimpleTitle'
import About from './About.mdx'

const title = '因幡神社とは'

export const runtime = 'edge'
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
