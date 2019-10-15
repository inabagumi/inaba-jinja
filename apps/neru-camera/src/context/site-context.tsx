import React, { FC, ReactElement, createContext } from 'react'

const defaultValues = {
  baseUrl: 'https://example.com',
  description: '',
  title: 'The camera'
}

export const SiteContext = createContext(defaultValues)

export const SiteProvider: FC = ({ children }): ReactElement => {
  const baseUrl = process.env.NERU_CAMERA_BASE_URL || defaultValues.baseUrl
  const description =
    process.env.NERU_CAMERA_DESCRIPTION || defaultValues.description
  const title = process.env.NERU_CAMERA_TITLE || defaultValues.title

  return (
    <SiteContext.Provider value={{ baseUrl, description, title }}>
      {children}
    </SiteContext.Provider>
  )
}
