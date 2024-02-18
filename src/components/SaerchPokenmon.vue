<script setup lang="ts">
const model = defineModel('search')
</script>

<template>
  <div>
    search pokemon
  </div>
  <div>
    <input type="search" v-model="model">
  </div>
</template>

<style scoped>

</style>
