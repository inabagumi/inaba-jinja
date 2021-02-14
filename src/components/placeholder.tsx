import type { VFC } from 'react'

import styles from '@/styles/components/placeholder.module.css'

type Props = {
  src: string
}

const Placeholder: VFC<Props> = ({ src }) => {
  return (
    <div className={styles.container}>
      <img
        alt=""
        aria-hidden
        className={styles.image}
        role="none presentation"
        src={src}
      />
    </div>
  )
}

export default Placeholder
