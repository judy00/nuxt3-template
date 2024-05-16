import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

/**
 * 此自定義模組是基於 https://github.com/gitFoxCode/nuxt-icons 修改而來。
 *
 * 修改主因是原始碼中使用了 Vite 已棄用語法導致報錯。
 * 為了避免相關警告，所以透過自訂模組進行調整。
 */

export default defineNuxtModule({
  meta: {
    name: 'sat-icons',
    configKey: 'satIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addComponent({
      name: 'sat-icon',
      global: true,
      filePath: resolve('./components/SatIcon.vue')
    })
  }
})
