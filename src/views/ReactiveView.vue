<script setup lang="ts">
import { reactive } from 'vue';
import BookAuthorForm from '@/components/BookAuthorForm.vue';

export interface BookAuthor {
  name: string,
  books: string[],
}

const author = {
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
};

const bookAuthors = reactive([author]);

const handleEvent = (author: string, titles: string[]) => {
  console.log(author, titles);
  const newAuthor: BookAuthor = {
    name: author,
    books: titles
  };
  bookAuthors.push(newAuthor);
};

</script>

<template>
  <div v-for="(bookAuthor,id) in bookAuthors" :key="id">
    <div>{{ bookAuthor.name }}</div>
    <ul>
      <li v-for="(book, index) in bookAuthor.books" :key="index">{{ book }}</li>
    </ul>
  </div>
  <BookAuthorForm @register="handleEvent"/>
</template>

<style scoped>

</style>
