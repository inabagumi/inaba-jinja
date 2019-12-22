import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Meta from '../components/atoms/Meta'
import Home from '../components/pages/Home'
import SiteMedatada from '../types/SiteMetadata'

type Props = {
  data: {
    site: {
      siteMetadata: SiteMedatada
    }
  }
}

const Index: FC<Props> = ({ data }) => {
  const { siteMetadata } = data.site

  return (
    <>
      <Meta
        description={siteMetadata.description}
        pathname="/"
        title={siteMetadata.title}
      />

      <Home />
    </>
  )
}

export default Index

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
