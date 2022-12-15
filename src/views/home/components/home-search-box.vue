<template>
  <div class="location">
    <div class="city" @click="cityClick">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home//icon_location.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
function cityClick() {
  router.push('/city')
}
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
</script>

<style lang="less" scoped>
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
</style>
