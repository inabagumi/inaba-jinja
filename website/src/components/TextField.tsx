import clsx from 'clsx'
import * as React from 'react'
import { forwardRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styles from './TextField.module.css'

import type { HTMLAttributes, Ref } from 'react'

type Props = {
  block?: boolean
  multiline?: boolean
  type?: string
} & Omit<
  HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  'height' | 'style'
>

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  function TextField(
    { block = false, className, multiline = false, type = 'text', ...props },
    ref
  ) {
    return multiline ? (
      <TextareaAutosize
        className={clsx(
          styles.root,
          styles.multiline,
          {
            [styles.block]: block
          },
          className
        )}
        minRows={10}
        ref={ref as Ref<HTMLTextAreaElement>}
        {...props}
      />
    ) : (
      <input
        className={clsx(
          styles.root,
          {
            [styles.block]: block
          },
          className
        )}
        ref={ref as Ref<HTMLInputElement>}
        type={type}
        {...props}
      />
    )
  }
)

export default TextField
