import Image from 'next/legacy/image'
import mainVisual from '@/assets/main-visual.jpg'
import styles from './Background.module.css'

export default function Background(): JSX.Element {
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
