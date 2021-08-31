module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.tsx'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/'],
  testURL: 'https://inaba-jinja.test'
}
