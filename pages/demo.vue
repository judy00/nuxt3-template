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
      <input v-model.number="myCount" type="text">
      <button @click="counterStore.setCount(myCount)">Set Count</button>
    </div>
    <hr>

    <h3>Day.js</h3>
    <div>{{ $dayjs('2024-02-11').utc().toString() }}</div>
    <div>currentYear: {{ currentYear }}</div>
    <div>format 時長 3725 秒等於: {{ formatDuration(3725) }} </div>
    <hr>

    <h3>Element Plus</h3>
    <el-button size="small" type="primary">
      藍色按鈕 小
    </el-button>
    <el-button type="primary">
      藍色按鈕 一般
    </el-button>
    <el-button size="large" type="primary">
      藍色按鈕 大
    </el-button>
    <el-button type="primary" disabled>
      藍色按鈕 禁用
    </el-button>
    <hr>

    <el-button size="small" type="info">
      黑色按鈕 小
    </el-button>
    <el-button type="info">
      黑色按鈕 一般
    </el-button>
    <el-button size="large" type="info">
      黑色按鈕 大
    </el-button>
    <el-button type="info" disabled>
      黑色按鈕 禁用
    </el-button>
    <br>

    <el-button size="small" type="primary" plain>
      藍色線框按鈕 小
    </el-button>
    <el-button type="primary" plain>
      藍色線框按鈕 一般
    </el-button>
    <el-button size="large" type="primary" plain>
      藍色線框按鈕 大
    </el-button>
    <el-button type="primary" plain disabled>
      藍色線框按鈕 禁用
    </el-button>
    <br>
    <el-button size="small" type="info" plain>
      黑色框按鈕 小
    </el-button>
    <el-button type="info" plain>
      黑色框按鈕 一般
    </el-button>
    <el-button size="large" type="info" plain>
      黑色框按鈕 大
    </el-button>
    <el-button type="info" plain disabled>
      黑色框按鈕 禁用
    </el-button>
    <br>

    <el-button text>
      文字按鈕
    </el-button>
    <el-button text class="text-btn__underline">
      文字底線按鈕
    </el-button>

    <button @click="successMsg('成功訊息', 0)">
      successMsg
    </button>
    <button @click="errorMsg('錯誤訊息', 0)">
      errorMsg
    </button>
    <button @click="warningMsg('警告訊息', 0)">
      warningMsg
    </button>
    <button @click="showConfirmMsg">
      showConfirmMsg
    </button>
    <hr>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { successMsg, warningMsg, errorMsg, confirmMsg } from '@/utils/message'

// Pinia
const counterStore = useCounterStore()
const myCount = ref(0)

// Day.js
const dayjs = useDayjs()
const currentYear = computed(() => dayjs().year())
const formatDuration = (seconds) => {
  const duration = dayjs.duration(seconds, 'seconds')
  return `${Math.floor(duration.asHours())} 時 ${duration.minutes()} 分`
}

// Element Plus Message Box
async function showConfirmMsg() {
  try {
    await confirmMsg('確認訊息', {
      confirmButtonText: '確定'
    })

    console.log('點擊確定')
  }
  catch (error) {
    console.log('點擊取消')
  }
}
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
