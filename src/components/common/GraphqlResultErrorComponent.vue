<script setup lang="ts">
const props = defineProps<{ error: Error | undefined, dataErrors: ({ message: string }[] | undefined) }>()
</script>

<template>
  <div v-if="props?.error">
    <div v-for="(e,index) in dataErrors" :key="index">
      {{ e.message }}
    </div>
  </div>
</template>

<style scoped>

</style>
