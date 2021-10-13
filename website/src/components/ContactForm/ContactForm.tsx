import * as React from 'react'
import FormControl from './FormControl'
import { useHandleSubmit } from './hooks'
import type { VFC } from 'react'

const ContactForm: VFC = () => {
  const [formState, handleSubmit] = useHandleSubmit('contact-form')

  return (
    <form
      aria-label="お問い合わせ"
      className="margin-vert--lg"
      noValidate
      onSubmit={handleSubmit}
    >
      <dl className="margin--none">
        <FormControl
          disabled={formState.isSubmitting}
          label="お名前"
          name="name"
          placeholder=""
          registerOptions={{
            required: {
              message: 'お名前の入力は必須です。',
              value: true
            }
          }}
          type="text"
        />

        <FormControl
          disabled={formState.isSubmitting}
          label="メールアドレス"
          name="email"
          placeholder="you@example.com"
          registerOptions={{
            pattern: {
              message: 'メールアドレスには@が必要です。',
              value: /.+@.+/
            },
            required: {
              message: 'メールアドレスは必須です。',
              value: true
            }
          }}
          type="email"
        />

        <FormControl
          disabled={formState.isSubmitting}
          label="本文"
          multiline
          name="message"
          registerOptions={{
            required: {
              message: '本文の入力は必須です。',
              value: true
            }
          }}
        />
      </dl>

      <div className="margin-top--md">
        <button
          className="button button--block button--primary"
          disabled={!formState.isValid || formState.isSubmitting}
          type="submit"
        >
          送信
        </button>
      </div>
    </form>
  )
}

export default ContactForm
