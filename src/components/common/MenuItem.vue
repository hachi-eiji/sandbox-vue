<script setup lang="ts">

</script>

<template>
  <div class="menus">
    <router-link to="/about">About</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/pokemon">Pokemon</router-link>
    <router-link to="/reactive">Reactive</router-link>
  </div>
</template>

<style scoped>
.menus {
  display: flex;
  gap: 8px;
}
</style>
