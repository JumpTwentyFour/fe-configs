const { defineConfig } = require('eslint-define-config')
const globalRules = require('../../rules/global')

module.exports = defineConfig({
  root: true,
  'rules': {
    ...globalRules,
  },
})
