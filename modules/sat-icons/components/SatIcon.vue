<template>
  <span class="sat-icon" v-html="icon" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from '#imports'

const props = withDefaults(defineProps<{
  name: string;
  filled?: boolean
}>(), { filled: false })

const icon = ref<string | Record<string, any>>('')

async function getIcon () {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      eager: false,
      query: '?raw',
      import: 'default'
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    icon.value = rawIcon
  } catch {
    console.error(
      `[sat-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    )
  }
}

await getIcon()

watchEffect(getIcon)
</script>

<style>
.sat-icon svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
  fill: currentColor;
}
</style>
