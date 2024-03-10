import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export default function Skeleton({ className }: Props) {
  return (
    <span
      className={twMerge(
        'inline-block animate-pulse rounded-md bg-slate-200',
        className
      )}
    />
  )
}
