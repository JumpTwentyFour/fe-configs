const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    '@vue/eslint-config-typescript',
    'plugin:vuejs-accessibility/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', 'vuejs-accessibility', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 2,
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vuejs-accessibility/no-static-element-interactions': 0,
    'vuejs-accessibility/form-control-has-label': 0,
  },
})
