import nextJest from 'next/jest.js'

const createJestConfig = nextJest()

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testURL: 'https://inaba-jinja.test'
}

export default createJestConfig(jestConfig)
