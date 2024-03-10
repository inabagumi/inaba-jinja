import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function DocumentLayout({ children }: Props) {
  return (
    <div className="[&_a:hover]:underline [&_a]:text-orange-400 [&_em]:font-semibold [&_em]:not-italic [&_h2]:my-4 [&_h2]:text-xl [&_h2]:font-semibold [&_p+p]:mt-4 [&_p]:leading-7">
      {children}
    </div>
  )
}
