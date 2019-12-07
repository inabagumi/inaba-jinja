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
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
