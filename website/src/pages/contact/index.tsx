import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Layout from '@theme/Layout'
import ContactForm from '@site/src/components/ContactForm'

import type { VFC } from 'react'
import type { FormData } from '@site/src/components/ContactForm'

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
