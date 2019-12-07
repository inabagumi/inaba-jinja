/* eslint-env jest */

import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import theme from '../../../theme'
import Logo from './Logo'

const App: FC = ({ children }) => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </IntlProvider>
)

describe('Logo', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <App>
          <Logo />
        </App>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
