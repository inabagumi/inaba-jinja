import Image from 'next/legacy/image'
import { type FC } from 'react'
import mainVisual from '@/assets/main-visual.jpg'
import styles from './background.module.css'

const Background: FC = () => {
  return (
    <div aria-hidden className={styles.container} role="none presentation">
      <Image
        alt=""
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
        quality={70}
        src={mainVisual}
      />
      <div className={styles.overlay} />
    </div>
  )
}

export default Background
