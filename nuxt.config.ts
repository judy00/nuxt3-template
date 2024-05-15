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
  hooks: {
    // disbale utils dir auto import
    'imports:dirs' (dirs) {
      const rules = ['utils']

      for (const rule of rules) {
        const index = dirs.findIndex(dir => dir.includes(rule))
        dirs.splice(index, 1)
      }
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    'dayjs-nuxt'
  ],
  dayjs: {
    locales: ['zh-tw'],
    defaultLocale: 'zh-tw',
    plugins: ['duration']
  },
  eslint: {
    config: {
      stylistic: {
        'comma-dangle': 'never'
      }
    }
  },
  elementPlus: {
    importStyle: 'scss'
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
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @use "@/assets/scss/_elementPlus.scss" as *;
          `
        }
      }
    }
  }
})
