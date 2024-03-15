import { type Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import Image from 'next/image'
import { Suspense } from 'react'
import { title as siteName, twitterAccount } from '@/lib/constants'
import { getAnyFortuneID } from '@/lib/contentful'
import Redirect from './_components/redirect'
import kujiImage from './kuji.png'

const title = 'おみくじを引いています...'

export const metadata = {
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
} satisfies Metadata

export default function LotteryPage() {
  noStore()

  const idPromise = getAnyFortuneID()

  return (
    <div className="mb-4 mt-8 flex h-full flex-col items-center justify-center">
      <Suspense fallback={null}>
        <Redirect idPromise={idPromise} />
      </Suspense>

      <div className="animate-shake mx-auto max-w-full">
        <Image
          alt="くじ引き中..."
          className="h-auto max-w-full"
          height={kujiImage.height / 2}
          priority
          quality={80}
          src={kujiImage}
          width={kujiImage.width / 2}
        />
      </div>
    </div>
  )
}
