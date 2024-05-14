<template>
  <div>
    Page: demo
    <h3>SCSS</h3>
    <div class="scss-text">Test 文字</div>
    <hr>
    <h3>Pinia</h3>
    <div>
      <button @click="counterStore.increment">Increment</button>
      <div>Count: {{ counterStore.count }}</div>
      <div>doubleCount: {{ counterStore.doubleCount }}</div>
    </div>
    <hr>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<style lang="scss">
.scss-text {
  font-family: 'Noto Sans TC';
  border: 1px solid #000;
  @include font(#005CFF, 2, 500, 1.5);

  @include tablet {
    color: red;
  }

  @include mobile {
    color: orange;
  }
}
</style>
