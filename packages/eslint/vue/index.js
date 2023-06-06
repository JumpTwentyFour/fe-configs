const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: ['@jump24/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
  rules: {},
})
