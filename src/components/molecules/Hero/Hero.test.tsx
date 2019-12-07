/* eslint-env jest */

import { ThemeProvider } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import theme from '../../../theme'
import Hero from './Hero'

const App: FC = ({ children }) => (
  <IntlProvider locale="en">
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </IntlProvider>
)

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <App>
          <Hero />
        </App>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
