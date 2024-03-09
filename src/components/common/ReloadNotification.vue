<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const reloadFlag = ref(false)

const preloadErrorListener = () => {
  reloadFlag.value = true
}
const addPreloadError = () => {
  window.addEventListener('vite:preloadError', preloadErrorListener)
}
const removePreloadError = () => {
  window.removeEventListener('vite:preloadError', preloadErrorListener)
}

onMounted(addPreloadError)
onUnmounted(removePreloadError)
</script>

<template>
  <div class="notify" v-if="reloadFlag">
    画面が更新されました。再読み込みをお願いします。
  </div>
</template>

<style scoped>
.notify {
  background-color: aquamarine;
  text-align: center;
  width: fit-content;
  margin: 16px auto;
  padding: 16px 100px;
  border: 2px solid #67cbaa;
  border-radius: 8px;
}
</style>
