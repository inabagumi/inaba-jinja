import { type Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import { redirect } from 'next/navigation'
import { title as siteName, twitterAccount } from '@/lib/constants'
import { getAnyFortuneID } from '@/lib/contentful'
import { delay } from '@/lib/timer'

// export const runtime = 'edge'

const title = 'おみくじを引いています...'

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

export default async function Page() {
  noStore()

  const [fortuneID] = await Promise.all([getAnyFortuneID(), delay(2)])

  redirect(`/kuji/${fortuneID}`)
}
