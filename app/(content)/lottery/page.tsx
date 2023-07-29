import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { title as siteName, twitterAccount } from '@/lib/constants'
import { getAnyFortuneID } from '@/lib/contentful'

// export const runtime = 'edge'
export const revalidate = 0

const title = 'おみくじを引いています...'

function delay(seconds = 1): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1_000)
  })
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/lottery'
  },
  openGraph: {
    title,
    url: '/lottery'
  },
  robots: {
    follow: true,
    index: false
  },
  title,
  twitter: {
    site: `@${twitterAccount}`,
    title: `${title} - ${siteName}`
  }
}

export default async function Page(): Promise<null> {
  const [fortuneID] = await Promise.all([getAnyFortuneID(), delay(2)])

  redirect(`/kuji/${fortuneID}`)
}
