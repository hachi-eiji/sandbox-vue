<script setup lang="ts">
import { RouterView } from 'vue-router'
import ReloadNotification from '@/components/common/ReloadNotification.vue'
import Menu from '@/components/common/Menu.vue'
</script>

<template>
  <div class="container">
    <Menu />
    <ReloadNotification />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin-top: 16px;
  margin-left: 16px;
}
</style>
