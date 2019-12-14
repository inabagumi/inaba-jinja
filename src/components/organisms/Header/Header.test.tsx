/* eslint-env jest */

import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import messages from '../../../locales/en.json'
import theme from '../../../theme'
import Header from './Header'

const App: FC = ({ children }) => (
  <IntlProvider locale="en" messages={messages}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </IntlProvider>
)

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <App>
          <Header />
        </App>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
