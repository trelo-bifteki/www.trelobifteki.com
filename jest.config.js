module.exports = {
  reporters: [
    'default',
    'jest-junit'
  ],

  collectCoverageFrom: [
    'src/**/*.vue',
    'src/**/*.js',
    '!**/node_modules/**',
    '!test/**',
    '!dist/**'
  ],

  coverageReporters: [
    'text',
    'cobertura'
  ],

  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
}
