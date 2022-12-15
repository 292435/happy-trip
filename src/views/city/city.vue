<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        show-action
        clearable
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="searchCancel"
      />
      <van-tabs v-model:active="active">
        <van-tab
          v-for="(value, key, index) in allCities"
          :key="key"
          :name="key"
          :title="value.title"
        ></van-tab>
      </van-tabs>
    </div>
    <template v-for="(value, key, index) in allCities" :key="index">
      <!-- <div class="title" v-show="active === key">{{ value }}</div> -->
      <cityGroupVue v-show="active === key" :group-data="value"></cityGroupVue>
    </template>
  </div>
</template>

<script setup>
import cityGroupVue from './components/city-group.vue'
import useCity from '@/stores/modules/city'
import { computed, ref } from 'vue'
import router from '@/router'
import { storeToRefs } from 'pinia'
// 存储搜索框数据
const searchValue = ref()
const active = ref()
// 获取城市分类接口数据
const cityStore = useCity()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[active.value])

// 搜索框取消按钮
function searchCancel() {
  router.back()
}
</script>

<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}
/deep/.van-search__action {
  margin-left: 5px;
}
.city {
}
</style>
