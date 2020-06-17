import { render, screen } from '@testing-library/react'
import React from 'react'

import Logo from '../Logo'

import '@testing-library/jest-dom/extend-expect'

describe('Logo', () => {
  it('basic', () => {
    render(<Logo />)

    expect(screen.getByTestId('svg-mock')).not.toHaveClass('logo--vertical')
  })

  it('vertical attribute is given', () => {
    render(<Logo vertical />)

    expect(screen.getByTestId('svg-mock')).toHaveClass('logo--vertical')
  })
})
