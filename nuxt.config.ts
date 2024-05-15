// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-TW'
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap'
        }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    'dayjs-nuxt'
  ],
  eslint: {
    config: {
      stylistic: {
        'comma-dangle': 'never'
      }
    }
  },
  image: {
    screens: {
      md: 767,
      lg: 991
    },
    provider: 'imgix',
    imgix: {
      baseURL: 'https://sat-knowledge.imgix.net',
      modifiers: {
        fit: 'crop',
        auto: 'format'
      }
    }
  },
  dayjs: {
    locales: ['zh-tw'],
    defaultLocale: 'zh-tw',
    plugins: ['duration']
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
