// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.js', '**/*.vue'],
    rules: {
      'max-len': ['error', { code: 150, "tabWidth": 2 },],
      'vue/html-self-closing': 'off',
      'indent': ['error', 2],
    },
  }
)