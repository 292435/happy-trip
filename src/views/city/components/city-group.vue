<template>
  <div class="content">
    <div class="group-item">
      <van-index-bar :index-list="indexList" highlight-color="#ff9645">
        <van-index-anchor index="热门" />
        <div class="list">
          <template v-for="(city, index) in groupData.hotCities" :key="index">
            <div class="item" @click="cityClick(city)">{{ city.cityName }}</div>
          </template>
        </div>
        <template v-for="(group, index) in groupData.cities" :key="index">
          <van-index-anchor :index="group.group" />
          <template v-for="(city, index) in group.cities" :key="index">
            <van-cell :title="city.cityName" @click="cityClick(city)" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCity from '@/stores/modules/city'
const props = defineProps({
  groupData: {
    type: String,
    default: () => ({})
  }
})
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  list.unshift('#')
  return list
})
// 选中城市事件
const router = useRouter()
const useCityStore = useCity()
function cityClick(cityValue) {
  console.log(cityValue)
  useCityStore.currentCity = cityValue
  router.back()
}
</script>

<style lang="less" scoped>
.content {
  height: calc(100vh - 100px);
  overflow-y: auto;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    background-color: #fff;
    .item {
      width: 70px;
      height: 28px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      margin: 10px 0;
      border-radius: 14px;
      background-color: #fff4ec;
    }
  }
}
:deep(.van-index-bar__index) {
  font-weight: normal;
}
</style>
