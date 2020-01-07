import Link from 'next/link'
import React, { FC } from 'react'
import Layout from '../Layout'
import Logo from '../../atoms/Logo'

type Props = {
  title?: string
}

const SingleDoc: FC<Props> = ({ children, title }) => (
  <>
    <Layout>
      <div className="wrapper">
        <header className="header">
          <Link href="/" prefetch={false}>
            <a className="brand" href="/">
              <Logo aria-label="因幡神社" />
            </a>
          </Link>
        </header>

        <div className="content">
          {title && <h1 className="title">{title}</h1>}

          {children}
        </div>
      </div>
    </Layout>

    <style jsx>{`
      .brand {
        color: inherit;
        font-size: 2rem;
      }

      .brand:hover {
        color: inherit;
      }

      .content {
        background-color: rgba(38, 50, 56, 0.7);
        border-radius: 1rem;
        margin: 1rem auto;
        min-height: 20rem;
        max-width: 100%;
        padding: 1rem 1rem 2rem;
        width: 800px;
      }

      .header {
        margin: 0 auto;
        max-width: 100%;
        width: 800px;
      }

      .title {
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
