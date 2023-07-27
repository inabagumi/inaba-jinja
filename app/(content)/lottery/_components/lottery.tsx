import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getAnyFortuneID } from '@/lib/contentful'
import kujiImage from './kuji.png'
import styles from './lottery.module.css'

function delay(seconds = 1): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1_000)
  })
}

export function LotteryBox(): JSX.Element {
  return (
    <div className={styles.lotteryBox}>
      <Image
        alt="くじ引き中..."
        className={styles.lotteryImage}
        height={kujiImage.height / 2}
        priority
        quality={80}
        src={kujiImage}
        width={kujiImage.width / 2}
      />
    </div>
  )
}

export default async function Lottery(): Promise<null> {
  const [fortuneID] = await Promise.all([getAnyFortuneID(), delay(2)])

  redirect(`/kuji/${fortuneID}`)
}
