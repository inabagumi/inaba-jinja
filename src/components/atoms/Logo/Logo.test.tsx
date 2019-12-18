import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import Logo from './Logo'

const App: FC = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
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
