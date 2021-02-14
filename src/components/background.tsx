import Image from 'next/image'
import type { VFC } from 'react'

import mainVisual from '@/assets/main-visual.jpg'
import Placeholder from '@/components/placeholder'
import styles from '@/styles/components/background.module.css'

const Background: VFC = () => {
  return (
    <div aria-hidden className={styles.container} role="none presentation">
      <Placeholder src={mainVisual.placeholder} />
      <Image
        alt=""
        layout="fill"
        objectFit="cover"
        priority
        quality={70}
        src={mainVisual.src}
      />
      <div className={styles.overlay} />
    </div>
  )
}

export default Background
