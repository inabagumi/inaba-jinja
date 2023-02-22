import { type Metadata } from 'next'
import Image from 'next/legacy/image'
import kujiImage from '@/assets/kuji.png'
import { title as siteName, twitterAccount } from '@/lib/constants'
import { getAnyFortuneID } from '@/lib/contentful'
import Refresh from '@/ui/Refresh'
import styles from './page.module.css'

const DELAY_SECONDS = 2

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

export default async function Page() {
  const id = await getAnyFortuneID()
  const path = `/kuji/${id}`

  return (
    <>
      <div className={styles.content}>
        <div className={styles.lotteryBox}>
          <Image
            alt="くじ引き中..."
            height={kujiImage.height / 2}
            priority
            quality={80}
            src={kujiImage}
            width={kujiImage.width / 2}
          />
        </div>
      </div>

      <Refresh delay={DELAY_SECONDS} path={path} />
    </>
  )
}
