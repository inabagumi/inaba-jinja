import clsx from 'clsx'
import * as React from 'react'
import { forwardRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styles from './TextField.module.css'
import type { HTMLAttributes, Ref } from 'react'

type Props = {
  block?: boolean
  disabled?: boolean
  multiline?: boolean
  type?: string
} & Omit<
  HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  'height' | 'style'
>

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  function TextField(
    {
      block = false,
      className: additionalClassName,
      multiline = false,
      type = 'text',
      ...props
    },
    ref
  ) {
    const className = clsx(
      styles.root,
      {
        [styles.multiline]: multiline,
        [styles.block]: block
      },
      additionalClassName
    )

    return multiline ? (
      <TextareaAutosize
        className={className}
        minRows={10}
        ref={ref as Ref<HTMLTextAreaElement>}
        {...props}
      />
    ) : (
      <input
        className={className}
        ref={ref as Ref<HTMLInputElement>}
        type={type}
        {...props}
      />
    )
  }
)

export default TextField
