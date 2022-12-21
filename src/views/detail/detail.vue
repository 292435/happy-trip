<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <detailSwiperVue
    :swiper-data="mainPart?.topModule?.housePicture?.housePics"
  ></detailSwiperVue>
  <detailInfosVue :top-infos="mainPart?.topModule"></detailInfosVue>
  <detailFacilityVue
    :house-facility="mainPart?.dynamicModule?.facilityModule?.houseFacility"
  ></detailFacilityVue>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import detailSwiperVue from './components/detail-01-swiper.vue'
import detailInfosVue from './components/detail-02-infos.vue'
import detailFacilityVue from './components/detail-03-facility.vue'
import useDetailStore from '@/stores/modules/detail'
import { computed } from '@vue/runtime-core'

// 页面返回按钮
const router = useRouter()
const route = useRoute()
const onClickLeft = () => {
  router.back()
}
// 获取数据
const houseId = route.params.id
const detailStore = useDetailStore()
// 先获取数据
detailStore.fetchDetailInfos(houseId)
// 后保存数据
const mainPart = computed(() => detailStore.infos?.mainPart)
</script>

<style lang="less" scoped></style>
