import { FC } from 'react'
import { MdFavorite } from 'react-icons/md'

import styles from 'styles/components/heart.module.css'

const Heart: FC = () => {
  return <MdFavorite className={styles.heart} />
}

export default Heart
