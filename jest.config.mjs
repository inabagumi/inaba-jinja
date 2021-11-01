import { defaults } from 'jest-config'

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '/.next/'],
  testURL: 'https://inaba-jinja.test',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default jestConfig
