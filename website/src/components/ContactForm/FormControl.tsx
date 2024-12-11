import { ErrorMessage } from '@hookform/error-message'
import { clsx } from 'clsx'
import { useFormContext } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import TextField from '@site/src/components/TextField'
import styles from './FormControl.module.css'
import type { FormData } from './types'
import type { RegisterOptions } from 'react-hook-form'

export default function FormControl<Name extends keyof FormData>({
  disabled = false,
  label,
  multiline = false,
  name,
  placeholder,
  registerOptions,
  type = 'text'
}: Readonly<{
  disabled?: boolean
  label: string
  multiline?: boolean
  name: Name
  placeholder?: string
  registerOptions?: RegisterOptions<FormData, Name>
  type?: string
}>) {
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
        {multiline ? (
          <TextareaAutosize
            aria-describedby={isInvalid ? `${name}-error` : undefined}
            aria-invalid={isInvalid || undefined}
            aria-required={isRequired}
            className={styles.textarea}
            minRows={10}
            placeholder={placeholder}
            {...register(name, registerOptions)}
          />
        ) : (
          <TextField
            aria-describedby={isInvalid ? `${name}-error` : undefined}
            aria-invalid={isInvalid || undefined}
            aria-required={isRequired}
            block
            disabled={disabled}
            id={name}
            placeholder={placeholder}
            type={type}
            {...register(name, registerOptions)}
          />
        )}

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
