const { resolve } = require('path');
const root = resolve(__dirname);
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig, // Usa as configurações do arquivo jest.config.js
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
