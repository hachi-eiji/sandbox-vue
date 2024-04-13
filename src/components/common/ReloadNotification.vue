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

const checkIndexFile = async () => {
  const scripts = document.querySelectorAll<HTMLScriptElement>('script')
  if (scripts?.length > 0) {
    const src = scripts[0].src
    console.log(src)
    const response = await fetch(src, { method: 'head', cache: 'no-store' })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = response.body // memory leakを防ぐためで実際は使わない
    if (!response.ok) {
      reloadFlag.value = false
    }
  }
}

onMounted(addPreloadError)
onMounted(checkIndexFile)
onUnmounted(removePreloadError)
onUnmounted(checkIndexFile)
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
