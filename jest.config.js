module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|scss)$': 'jest-css-modules-transform',
  },
};
