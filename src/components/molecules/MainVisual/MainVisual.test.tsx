import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import renderer from 'react-test-renderer'
import MainVisual from './MainVisual'

const App: FC = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
)

describe('MainVisual', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <App>
          <MainVisual />
        </App>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
