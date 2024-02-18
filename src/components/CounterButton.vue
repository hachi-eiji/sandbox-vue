<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

const localCounter = ref<number>(0)

const counterStore = useCounterStore()

function clickHandler() {
  counterStore.increment()
  localCounter.value++
}
</script>

<template>
  <div>Global {{ counterStore.count }}</div>
  <div>Local {{ localCounter }}</div>
  <button @click="clickHandler">ボタンですよ</button>
</template>
