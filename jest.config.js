/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/jest-with-ts',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/index.ts', '!src/**/*.test.ts'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  resetMocks: true
}
