<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in homeList" :key="index">
        <houseItemV3
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
          @click="clickHouseItem(item.data)"
        ></houseItemV3>
        <houseItemV9
          v-else-if="item.discoveryContentType === 9"
          @click="clickHouseItem(item.data)"
          :itemData="item.data"
        ></houseItemV9>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const homeStore = useHomeStore()
const { homeList } = storeToRefs(homeStore)
// 点击进入详情页
const router = useRouter()
const clickHouseItem = (item) => {
  console.log(item.houseId)
  console.log(router)
  router.push(`/detail/${item.houseId}`)
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;
  line-height: 1;
  .title {
    font-size: 22px;
    padding: 5px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f7f9;
  }
}
</style>
