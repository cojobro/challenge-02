// jest.config.js
module.exports = {
    // The test environment JSDOM (browser-like) is used by default,
    // but explicitly setting it is good practice.
    testEnvironment: 'jest-environment-jsdom',
  
    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,
  
    // A list of paths to modules that run some code to configure or set up the
    // testing framework before each test file in the suite is executed.
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Optional: Or directly import '@testing-library/jest-dom' here
  
    // A map from regular expressions to paths to transformers.
    // Tells Jest to use Babel for JS/JSX files.
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
      // If you were using TypeScript: '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  
     // An array of regexp pattern strings that are matched against all source file paths before transformation.
     // Ignore node_modules except for specific ones if needed (usually handled by Babel/transform).
     // transformIgnorePatterns: [
     //   '/node_modules/',
     //   '\\.pnp\\.[^\\/]+$'
     // ],
  
  
    // A map from regular expressions to module names or to arrays of module names
    // that allow to stub out resources with a single module.
    moduleNameMapper: {
      // Mock CSS Modules: return class names themselves.
      '\\.module\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      // Mock static assets if you import them in components
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Example mock
    },
  
     // Indicates whether each individual test should be reported during the run.
    verbose: true, // Optional: Provides more detailed test output
  };