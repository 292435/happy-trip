<template>
  <div class="box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">
        {{ currentCity.cityName }}
      </div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home//icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="date-range bottom-gray-line" @click="show = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <span class="tip">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
    <!-- 展示日期区间 -->
    <van-calendar
      :show-confirm="false"
      :round="false"
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
    />
    <!-- 价格、人数 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门推荐 -->
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggestList" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import useCity from '@/stores/modules/city'
import router from '@/router'
import { storeToRefs } from 'pinia'
import { formatDate, getDiffDays } from '@/utils/format-date'
import { ref } from '@vue/reactivity'
import useHomeStore from '@/stores/modules/home'
import useMainStore from '@/stores/modules/main'
import { computed } from '@vue/runtime-core'

defineProps({
  hotSuggestList: {
    type: Array,
    default: () => []
  }
})
// 日期区间
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatDate(startDate.value))
const endDateStr = computed(() => formatDate(endDate.value))
// console.log(startDateStr, endDateStr)
const show = ref(false)
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

// stayCount.value = ref(getDiffDays(nowDate, newDate))
// 位置选择页面
function cityClick() {
  router.push('/city')
}
// 获取定位
function positionClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  )
}
// 获取保存的位置信息
const useCityStore = useCity()
const { currentCity } = storeToRefs(useCityStore)
const onConfirm = (values) => {
  const [startTime, endTime] = values
  show.value = false
  mainStore.startDate = startTime
  mainStore.endDate = endTime
  stayCount.value = ref(getDiffDays(startTime, endTime))
}
// 开始搜索按钮
const searchClick = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.box {
  --van-calendar-popup-height: 100%;

  .location {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
    color: #999;
    height: 45px;
    .city {
      color: #666;
      font-weight: 500;
      flex: 1;
    }
    .position {
      width: 74px;
      display: flex;
      align-items: center;
      .text {
        margin-right: 8px;
        font-size: 12px;
        color: #666;
      }
      img {
        height: 18px;
        width: 18px;
        line-height: 45px;
      }
    }
  }
  .date-range {
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: #999;
    flex-wrap: wrap;
    .time {
      color: #333;
      margin-top: 3px;
    }
    .start {
      display: flex;
      align-items: center;
      height: 46px;
      flex: 1;
      .date {
        span {
          display: block;
        }
      }
      .stay {
        text-align: center;
        flex: 1;
        color: #666;
      }
    }
    .end {
      min-width: 30%;
      padding-left: 20px;
      span {
        display: block;
      }
    }
  }
  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    .start {
      flex: 1;
      display: flex;
      height: 44px;
      align-items: center;
    }
    .end {
      min-width: 30%;
      padding-left: 20px;
    }
  }
  .keyword {
    height: 44px;
  }
  .price-counter {
    height: 44px;
    .start {
      border-right: 1px solid #e1e1e3;
    }
  }
  .hot-suggest {
    margin: 10px 0;
    .item {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 14px;
      font-size: 12px;
    }
  }
  .search-btn {
    .btn {
      width: 342px;
      height: 38px;
      max-height: 50px;
      font-weight: 500;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      background-image: var(--them-gradient);
    }
  }
}
</style>
