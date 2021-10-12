import Image from 'next/image'
import styles from './background.module.css'
import mainVisual from '@/assets/main-visual.jpg'
import type { VFC } from 'react'

const Background: VFC = () => {
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
