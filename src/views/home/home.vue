<template>
  <div class="home">
    <homeNavBarVue></homeNavBarVue>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeNavBoxVue></homeNavBoxVue>
  </div>
</template>

<script setup>
import homeNavBarVue from './components/home-nav-bar.vue'
import homeNavBoxVue from './components/home-search-box.vue'
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
