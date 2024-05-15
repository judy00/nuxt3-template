import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      }
    }],
    '@stylistic/comma-dangle': ['error', 'never']
  }
})
