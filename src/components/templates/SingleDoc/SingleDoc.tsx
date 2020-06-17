import React, { FC } from 'react'

import Header from '@/components/organisms/Header'

type Props = {
  title?: string
}

const SingleDoc: FC<Props> = ({ children, title }) => (
  <>
    <div className="wrapper">
      <Header />

      <div className="content">
        {title && <h1 className="content__title">{title}</h1>}

        {children}
      </div>
    </div>

    <style jsx>{`
      .content {
        background-color: rgba(38, 50, 56, 0.7);
        border-radius: 1rem;
        margin: 1rem auto;
        min-height: 70vh;
        max-width: 100%;
        padding: 1rem 1rem 2rem;
        width: 800px;
      }

      .content__title {
        font-size: 1.25rem;
        font-weight: 700;
        margin: 0 0 1rem;
        padding: 1.5;
      }

      .wrapper {
        padding: 0 0.5rem;
      }
    `}</style>
  </>
)

export default SingleDoc
