<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  margin-top: 6px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 70px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
