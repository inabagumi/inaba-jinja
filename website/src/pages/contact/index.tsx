import Layout from '@theme/Layout'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import ContactForm from '@site/src/components/ContactForm'
import type { FormData } from '@site/src/components/ContactForm'
import type { VFC } from 'react'

const Contact: VFC = () => {
  const methods = useForm<FormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: false
  })

  return (
    <Layout title="お問い合わせ">
      <main className="container">
        <FormProvider {...methods}>
          <ContactForm />
        </FormProvider>
      </main>
    </Layout>
  )
}

export default Contact
