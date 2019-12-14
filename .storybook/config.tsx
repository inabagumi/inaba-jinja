import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { IntlProvider } from 'react-intl'
import { addDecorator, configure } from '@storybook/react'
import messages from '../src/locales/ja'
import theme from '../src/theme'

addDecorator(storyFn => (
  <IntlProvider locale="ja" messages={messages}>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </IntlProvider>
))

configure(require.context('../src', true, /\.stories.tsx?$/), module)
