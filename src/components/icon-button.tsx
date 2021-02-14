import clsx from 'clsx'
import { VFC } from 'react'

import styles from '@/styles/components/icon-button.module.css'

type Props = Omit<JSX.IntrinsicElements['button'], 'ref'>

const IconButton: VFC<Props> = ({ children, className, type, ...props }) => {
  return (
    <button
      className={clsx(styles.iconButton, className)}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
