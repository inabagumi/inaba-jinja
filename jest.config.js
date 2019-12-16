module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/.next/', '/node_modules/'],
  moduleNameMapper: {
    '\\.(?:jpe?g|webp)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.ts'
  }
}
