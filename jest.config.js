module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.js'],
  moduleDirectories: ['node_modules', '<rootDir>/client/src'],
};
