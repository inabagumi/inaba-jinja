import React from 'react'

/**
 *
 * @type {import('gatsby').GatsbySSR}
 */
const gatsbySSR = {
  onRenderBody: ({ setHeadComponents }) => {
    setHeadComponents([
      <>
        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
      </>
    ])
  }
}

export default gatsbySSR
