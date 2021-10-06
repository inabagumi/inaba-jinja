import { FormspreeProvider } from '@formspree/react'
import * as React from 'react'
import type { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

const Root: VFC<Props> = ({ children }) => {
  return (
    <FormspreeProvider project="1774341564403809704">
      {children}
    </FormspreeProvider>
  )
}

export default Root
