import Image from 'next/image'
import styles from './background.module.css'
import mainVisual from './main-visual.jpg'

export default function Background() {
  return (
    <div aria-hidden className={styles.container} role="none presentation">
      <Image
        alt=""
        className={styles.image}
        fill
        placeholder="blur"
        priority
        quality={70}
        sizes="100vw"
        src={mainVisual}
      />
      <div className={styles.overlay} />
    </div>
  )
}
