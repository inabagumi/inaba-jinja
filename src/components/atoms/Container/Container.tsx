import clsx from 'clsx'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Container: FC<Props> = ({ children, className, ...props }) => {
  return (
    <>
      <div className={clsx('container', className)} {...props}>
        {children}
      </div>

      <style jsx>{`
        .container {
          margin-left: auto;
          margin-right: auto;
          max-width: 1280px;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      `}</style>
    </>
  )
}

export default Container
