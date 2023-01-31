import Image from 'next/legacy/image'
import kujiImage from '@/assets/kuji.png'
import { title as siteName } from '@/lib/constants'
import { getAnyFortuneID } from '@/lib/contentful'
import Refresh from '@/ui/Refresh'
import styles from './page.module.css'

const DELAY_SECONDS = 2

export const revalidate = 0

const title = 'おみくじを引いています...'

export const metadata = {
  alternates: {
    canonical: new URL('/lottery', process.env.NEXT_PUBLIC_BASE_URL),
    languages: []
  },
  openGraph: {
    title,
    url: new URL('/lottery', process.env.NEXT_PUBLIC_BASE_URL)
  },
  robots: {
    index: false
  },
  title,
  twitter: {
    title: `${title} | ${siteName}`
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
