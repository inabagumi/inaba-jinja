import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import Footer from './Footer'

const App: FC = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
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
