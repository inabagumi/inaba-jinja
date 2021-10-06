import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import TextField from '@site/src/components/TextField'
import styles from './FormControl.module.css'
import type { FormData } from './types'
import type { VFC } from 'react'
import type { RegisterOptions } from 'react-hook-form'

type Props = {
  disabled?: boolean
  label: string
  multiline?: boolean
  name: keyof FormData
  placeholder?: string
  registerOptions?: RegisterOptions
  type?: string
}

const FormControl: VFC<Props> = ({
  disabled = false,
  label,
  multiline = false,
  name,
  placeholder,
  registerOptions,
  type = 'text'
}) => {
  const {
    formState: { errors },
    register
  } = useFormContext<FormData>()

  const isRequired =
    'required' in registerOptions
      ? typeof registerOptions.required === 'object'
        ? registerOptions.required.value
        : registerOptions.required !== false
      : false
  const isInvalid = name in errors

  return (
    <div className="margin-top--sm">
      <dt className="margin-vert--xs">
        <label htmlFor={name}>{label}</label>
      </dt>

      <dd className="margin--none">
        <TextField
          aria-describedby={isInvalid ? `${name}-error` : undefined}
          aria-invalid={isInvalid || undefined}
          aria-required={isRequired}
          block
          disabled={disabled}
          id={name}
          multiline={multiline}
          placeholder={placeholder}
          type={type}
          {...register(name, registerOptions)}
        />

        <p
          className={clsx(
            'margin-bottom--none',
            'margin-left--sm',
            'margin-top--xs',
            styles.notice
          )}
        >
          <ErrorMessage
            name={name}
            render={({ message }) => (
              <span className="text--danger" id={`${name}-error`} role="alert">
                {message}
              </span>
            )}
          />
        </p>
      </dd>
    </div>
  )
}

export default FormControl
