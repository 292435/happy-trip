<template>
  <div class="home">
    <!-- 头部标题 -->
    <homeNavBarVue></homeNavBarVue>
    <!-- 头部图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <!-- 中间搜索块 -->
    <homeNavBoxVue :hotSuggestList="hotSuggests"></homeNavBoxVue>
    <!-- 分类列表 -->
    <HomeCategories></HomeCategories>
    <!-- 热门精选 -->
    <homeContentVue></homeContentVue>
    <div class="search-box" v-if="searchShow">
      <searchBarVue></searchBarVue>
    </div>
  </div>
</template>

<script setup>
import HomeCategories from './components/home-categories.vue'
import homeNavBarVue from './components/home-nav-bar.vue'
import homeNavBoxVue from './components/home-search-box.vue'
import homeContentVue from './components/home-content.vue'
import searchBarVue from '@/components/search-bar/search-bar.vue'
import { useScroll } from '@/hooks/useScroll'
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from '@vue/runtime-core'

const useHome = useHomeStore()
useHome.fetchHotSuggests()
useHome.fetchHomeCategories()
const { hotSuggests } = storeToRefs(useHome)
useHome.fetchHomeList()

const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue)
    useHome.fetchHomeList().then(() => {
      isReachBottom.value = false
    })
})
const searchShow = computed(() => {
  return scrollTop.value > 350
})
</script>

<style lang="less" scoped>
.home {
  margin-bottom: 50px;
  .search-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    text-align: center;
    padding: 10px 10px 6px;
  }
}
.banner {
  img {
    width: 100%;
  }
}
</style>
