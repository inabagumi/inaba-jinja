import type { ReactNode } from 'react'

export default function SimpleTitle({ children }: { children: ReactNode }) {
  return <h1 className="mb-8 text-2xl font-bold leading-6">{children}</h1>
}
