const { defineConfig } = require('eslint-define-config')
const globalRules = require('../../rules/global')

module.exports = defineConfig({
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'eslint:recommended',
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
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    ...globalRules,
  },
})
