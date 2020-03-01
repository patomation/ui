module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    'material-icons': '<rootDir>/__mocks__/styleMock.js'
  },
  roots: [
    '<rootDir>/src'
  ],
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    // "\\\\node_modules\\\\",
    '\\\\depreciated\\\\',
    '\\\\demo\\\\',
    '\\\\temp\\\\'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
