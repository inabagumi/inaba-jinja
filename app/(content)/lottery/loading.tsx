import Image from 'next/image'
import kujiImage from './kuji.png'
import styles from './loading.module.css'

export default function Loading(): JSX.Element {
  return (
    <div className={styles.content}>
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
    </div>
  )
}
