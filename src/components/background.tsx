import Image from 'next/image'
import type { VFC } from 'react'

import mainVisual from '@/assets/main-visual.jpg'
import useBlurDataURL from '@/hooks/use-blur-data-url'
import styles from '@/styles/components/background.module.css'

const Background: VFC = () => {
  const blurDataURL = useBlurDataURL(
    mainVisual.placeholder,
    mainVisual.width,
    mainVisual.height
  )

  return (
    <div aria-hidden className={styles.container} role="none presentation">
      <Image
        alt=""
        blurDataURL={blurDataURL}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
        quality={70}
        src={mainVisual.src}
      />
      <div className={styles.overlay} />
    </div>
  )
}

export default Background
