<template>
  <div class="home">
    <homeNavBarVue></homeNavBarVue>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home//icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import homeNavBarVue from './components/home-nav-bar.vue'
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
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
