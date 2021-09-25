import { useForm as useFormspreeForm } from '@formspree/react'
import clsx from 'clsx'
import type { FormEventHandler, VFC } from 'react'
import * as React from 'react'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import Layout from '@theme/Layout'
import styles from './styles.module.css'

type FormData = {
  email: string
  message: string
}

const Contact: VFC = () => {
  const [state, handleSubmitToFormspree] = useFormspreeForm('contact-form')
  const {
    formState: { errors },
    handleSubmit: handleSubmitForm,
    register
  } = useForm<FormData>()

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      handleSubmitForm(handleSubmitToFormspree)(event).catch(console.error)
    },
    [handleSubmitForm, handleSubmitToFormspree]
  )

  return (
    <Layout>
      <main className="container">
        <form className="margin-vert--lg" noValidate onSubmit={handleSubmit}>
          <dl className="margin--none">
            <div className="margin-top--sm">
              <dt className="margin-vert--xs">
                <label htmlFor="email">メールアドレス</label>
              </dt>
              <dd className="margin--none">
                <input
                  className={clsx('textfield', 'textfield--block', {
                    'textfield--invalid': 'email' in errors
                  })}
                  disabled={state.submitting}
                  id="email"
                  placeholder="you@example.com"
                  type="email"
                  {...register('email', {
                    pattern: {
                      message: 'メールアドレスには@が必要です。',
                      value: /.+@.+/
                    },
                    required: {
                      message: 'メールアドレスは必須です。',
                      value: true
                    }
                  })}
                />
                <p
                  className={clsx(
                    'margin-bottom--none',
                    'margin-left--sm',
                    'margin-top--xs',
                    styles.notice
                  )}
                >
                  {'email' in errors && (
                    <span className="text--danger">{errors.email.message}</span>
                  )}
                </p>
              </dd>
            </div>

            <div className="margin-top--sm">
              <dt className="margin-vert--xs">
                <label htmlFor="message">本文</label>
              </dt>
              <dd className="margin--none">
                <TextareaAutosize
                  className={clsx(
                    'textfield',
                    'textfield--block',
                    'textfield--multiline',
                    {
                      'textfield--invalid': 'message' in errors
                    }
                  )}
                  disabled={state.submitting}
                  id="message"
                  minRows={10}
                  {...register('message', {
                    required: { message: '本文の入力は必須です。', value: true }
                  })}
                />
                <p
                  className={clsx(
                    'margin-bottom--none',
                    'margin-left--sm',
                    'margin-top--xs',
                    styles.notice
                  )}
                >
                  {'message' in errors && (
                    <span className="text--danger">
                      {errors.message.message}
                    </span>
                  )}
                </p>
              </dd>
            </div>
          </dl>

          <div className="margin-top--md">
            <button
              className={clsx('button', 'button--block', 'button--primary', {
                disable: state.submitting
              })}
              disabled={state.submitting}
              type="submit"
            >
              送信
            </button>
          </div>
        </form>
      </main>
    </Layout>
  )
}

export default Contact
