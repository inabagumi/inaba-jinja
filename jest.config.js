module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/.next/', '/node_modules/'],
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react'
      }
    }
  },
  moduleNameMapper: {
    '\\.jpe?g$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
