import fullPath from '../fullPath'

jest.mock('../../../package.json', () => ({
  homepage: 'https://example.com/'
}))

describe('fullPath', () => {
  it('path is given', () => {
    const url = fullPath('/favicon.ico')

    expect(url).toBe('https://example.com/favicon.ico')
  })

  it('external URL is given', () => {
    const url = fullPath('https://example.net/')

    expect(url).toBe('https://example.net/')
  })
})
