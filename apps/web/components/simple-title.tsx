import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function SimpleTitle({ children }: Props): JSX.Element {
  return <h1 className="mb-4 text-xl font-bold leading-6">{children}</h1>
}
