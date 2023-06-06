const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    commonjs: true,
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {},
})
