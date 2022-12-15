<template>
  <div class="app">
    <router-view></router-view>
    <tabBar v-if="!router.meta.hideTabBar"></tabBar>
  </div>
</template>

<script setup>
import tabBar from '@/components/TabBar/index.vue'
import { useRoute } from 'vue-router'
const router = useRoute()
</script>

<style lang="less" scoped></style>
