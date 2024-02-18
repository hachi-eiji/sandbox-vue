<script setup lang="ts">
const props = defineProps<{ isLoading: boolean | undefined }>()
</script>

<template>
  <div v-show="props.isLoading">
    Loading...
  </div>
</template>

<style scoped>

</style>
