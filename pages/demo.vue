<template>
  <div>
    Page: demo
    <h3>SCSS</h3>
    <div class="scss-text">Test 文字</div>
    <hr>
  </div>
</template>

<script lang="ts" setup>
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
