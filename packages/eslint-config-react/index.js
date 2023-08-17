const { defineConfig } = require('eslint-define-config')
const globalRules = require('../../rules/global')

module.exports = defineConfig({
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'plugins': [
    '@typescript-eslint',
    'react',
  ],
  'rules': {
    ...globalRules,
  },
})
