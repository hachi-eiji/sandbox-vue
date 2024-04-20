<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('');
const books = ref<string[]>(['']);

const emit = defineEmits<{
  register: [author: string, titles: string[]]
}>();


const registerHandler = () => {
  console.log(name.value, books.value);
  emit('register', name.value, [...books.value]);
};

const addRow = () => {
  books.value.push('');
};

const inputName = ($event: Event) => {
  name.value = ($event.target as HTMLInputElement).value;
};

const inputBook = ($event: Event, index: number) => {
  books.value[index] = ($event.target as HTMLInputElement).value;
};

</script>

<template>
  <div>
    <div>著者</div>
    <input type="text" :value="name" @input="inputName($event)"/>
  </div>
  <div>タイトル
    <button @click="addRow">追加する</button>
  </div>
  <div v-for="(book, i) in books.values()" :key="i">
    <input type="text" :value="book" @input="inputBook($event,i)"/>
  </div>
  <button type="button" @click="registerHandler">登録</button>
</template>

<style scoped>

</style>
