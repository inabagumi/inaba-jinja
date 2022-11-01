import clsx from 'clsx'
import styles from './IconButton.module.css'

type Props = Omit<JSX.IntrinsicElements['button'], 'ref'>

export default function IconButton({
  children,
  className,
  type,
  ...props
}: Props): JSX.Element {
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
