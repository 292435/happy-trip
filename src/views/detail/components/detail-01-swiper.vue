<template>
  <div class="swiper">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :lazy-render="false"
    >
      <template v-for="(item, index) in swiperData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swiperGroup" :key="key">
            <span
              class="item"
              :class="{
                active: swiperData[active]?.enumPictureCategory == key
              }"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span
                class="count"
                v-if="swiperData[active]?.enumPictureCategory == key"
                >{{
                  getCategoryIndex(swiperData[active]) + '/' + value.length
                }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed, ref, watch } from '@vue/runtime-core'

const props = defineProps({
  swiperData: {
    type: Array,
    default: () => []
  }
})
const swiperGroup = {}

watch(
  () => props.swiperData,
  () => {
    for (const item of props.swiperData) {
      // console.log('swiperGroup', swiperGroup)
      let valueArray = swiperGroup[item.enumPictureCategory]
      if (!valueArray) {
        valueArray = []
        swiperGroup[item.enumPictureCategory] = valueArray
      }
      valueArray.push(item)
    }
    // console.log('swiperGroup', swiperGroup)
  }
)

// 定义转换数据的方法
const nameReg = /【(.*?)】/i
const getName = (name) => {
  const results = nameReg.exec(name)
  // console.log(results)
  return results[1]
}
// 获取当前轮播图的下标
const getCategoryIndex = (item) => {
  console.log('item', item)
  const swiperArray = swiperGroup[item?.enumPictureCategory]
  return swiperArray.findIndex((data) => data === item) + 1
}
</script>

<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
  }
  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    .item {
      margin: 0 5px;
      &.active {
        background-color: #fff;
        color: #333;
        padding: 0 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>
