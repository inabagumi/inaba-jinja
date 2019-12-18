import React from 'react'
import { IntlProvider } from 'react-intl'
import { addDecorator, configure } from '@storybook/react'
import messages from '../src/locales/ja'

addDecorator(storyFn => (
  <IntlProvider locale="ja" messages={messages}>
    {storyFn()}
  </IntlProvider>
))

configure(require.context('../src', true, /\.stories.tsx?$/), module)
