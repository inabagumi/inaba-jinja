import { type Metadata } from 'next'
import { Suspense } from 'react'
import { title as siteName, twitterAccount } from '@/lib/constants'
import Lottery, { LotteryBox } from './_components/lottery'
import styles from './page.module.css'

// export const runtime = 'edge'
export const revalidate = 0

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

export default function Page() {
  return (
    <div className={styles.content}>
      <Suspense fallback={<LotteryBox />}>
        <Lottery />
      </Suspense>
    </div>
  )
}
