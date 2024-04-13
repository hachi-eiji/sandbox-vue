<script setup lang="ts">
import { ref } from 'vue'
import UserForm from '@/components/UserForm.vue'

const name = ref('')
const title = ref('')

const show = () => {
  console.log('name', name.value, title.value)
};

</script>

<template>
  <UserForm v-model:name="name" v-model:title="title" />
  <button @click="show">test</button>
</template>

<style scoped>

</style>
