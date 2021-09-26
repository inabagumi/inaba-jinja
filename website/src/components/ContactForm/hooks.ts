import { useForm } from '@formspree/react'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import type { FormState } from 'react-hook-form'
import type { FormData, HandleSubmit } from './types'

export function useHandleSubmit(
  formKey: string
): [FormState<FormData>, HandleSubmit] {
  const {
    formState,
    handleSubmit: createHandleSubmit,
    reset
  } = useFormContext<FormData>()
  const [, sendEmail] = useForm(formKey)
  const handleSubmit = useMemo<HandleSubmit>(
    () =>
      createHandleSubmit(async (submissionData) => {
        try {
          await sendEmail(submissionData)
        } catch {
          return
        }

        reset()
      }),
    [createHandleSubmit, sendEmail, reset]
  )

  return [formState, handleSubmit]
}
