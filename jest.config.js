module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svgMock.tsx'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/'],
  testURL: 'https://inaba-jinja.test'
}
