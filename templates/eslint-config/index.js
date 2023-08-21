const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },
})
