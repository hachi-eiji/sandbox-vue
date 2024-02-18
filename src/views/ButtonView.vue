<script setup lang="ts">
import CounterButton from '@/components/CounterButton.vue'
</script>

<template>
  <div class="container">
    <div>
      <CounterButton />
    </div>
    <div>
      <CounterButton />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
