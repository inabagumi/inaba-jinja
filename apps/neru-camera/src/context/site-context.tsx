import React, { FC, ReactElement, createContext } from 'react'

const defaultValues = {
  baseUrl: 'https://example.com',
  description: '',
  title: 'The camera'
}

export const SiteContext = createContext(defaultValues)

export const SiteProvider: FC = ({ children }): ReactElement => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || defaultValues.baseUrl
  const description =
    process.env.NEXT_PUBLIC_DESCRIPTION || defaultValues.description
  const title = process.env.NEXT_PUBLIC_TITLE || defaultValues.title

  return (
    <SiteContext.Provider value={{ baseUrl, description, title }}>
      {children}
    </SiteContext.Provider>
  )
}
