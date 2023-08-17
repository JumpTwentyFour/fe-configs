const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    '@jump24/eslint-config-react',
  ],
  plugins: [
    'react-native',
  ],
})
