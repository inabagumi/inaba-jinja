/* eslint-env jest */

import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import theme from '../../../theme'
import Footer from './Footer'

const App: FC = ({ children }) => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </IntlProvider>
)

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <App>
          <Footer />
        </App>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
