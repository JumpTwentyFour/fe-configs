const { defineConfig } = require('eslint-define-config')
const globalRules = require('../../rules/global')

module.exports = defineConfig({
  root: true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
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
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    ...globalRules,
  },
})
