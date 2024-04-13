<script setup lang="ts">

defineProps({
  name: {
    type: String
  },
  title: {
    type: String,
  }
})
defineEmits(['update:name', 'update:title'])

</script>

<template>
  <input type="text"
         :value="name"
         @input="$emit('update:name', $event.target.value)"
  />
  <input type="text"
         :value="title"
         @input="$emit('update:title', $event.target.value)"
  />
</template>

<style scoped>

</style>
