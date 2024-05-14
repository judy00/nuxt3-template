import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function setCount(value) {
    count.value = value
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    setCount
  }
}, {
  persist: {
    key: 'counter',
    paths: ['count'],
    storage: persistedState.cookiesWithOptions({
      path: '/',
      secure: true,
      maxAge: 24 * 60 * 60 * 7
    })
  }
})
