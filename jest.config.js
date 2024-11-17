module.exports = {

   testEnvironment: "jsdom",

    transform: {

      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',

    },
        moduleNameMapper: {
          "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
        },

    setupFilesAfterEnv: ['@testing-library/jest-dom'],

  };