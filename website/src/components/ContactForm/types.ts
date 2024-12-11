import type { FormEventHandler } from 'react'

export type FormData = {
  email: string
  message: string
  name: string
}

export type HandleSubmit = FormEventHandler<HTMLFormElement>
