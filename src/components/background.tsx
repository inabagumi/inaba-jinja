import Image from 'next/image'
import type { VFC } from 'react'

import mainVisual from '@/assets/main-visual.jpg'
import styles from '@/styles/components/background.module.css'

const Background: VFC = () => {
  return (
    <div aria-hidden className={styles.container} role="none presentation">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
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
