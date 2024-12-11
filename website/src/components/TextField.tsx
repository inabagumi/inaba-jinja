import { clsx } from 'clsx'
import styles from './TextField.module.css'
import type { ComponentProps } from 'react'

export default function TextField({
  block = false,
  className: additionalClassName,
  ref,
  type = 'text',
  ...props
}: Readonly<{ block?: boolean } & ComponentProps<'input'>>) {
  const className = clsx(
    styles.root,
    {
      [styles.block]: block
    },
    additionalClassName
  )

  return <input className={className} ref={ref} type={type} {...props} />
}
