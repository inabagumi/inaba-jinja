module.exports = {
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/__tests__/*.ts'],
  testURL: 'https://neru-camera.test/',
  transform: {
    '\\.ts$': 'ts-jest',
    '\\.vue$': 'vue-jest'
  }
}
