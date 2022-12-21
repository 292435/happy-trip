<template>
  <div class="tabBar">
    <van-tabbar v-model="active" active-color="#E87940" route>
      <van-tabbar-item name="home" to="/home" icon="home-o"
        ><span>首页</span>
        <template #icon> <i class="iconfont icon-shouye"></i> </template
      ></van-tabbar-item>
      <van-tabbar-item name="search" to="/favor" icon="like-o"
        >收藏</van-tabbar-item
      >
      <van-tabbar-item name="friends" to="/order" icon="orders-o"
        >订单</van-tabbar-item
      >
      <van-tabbar-item name="setting" to="/message" icon="chat-o"
        >消息</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref('home')
</script>

<style lang="less" scoped>
.icon-shouye {
  font-size: 21px;
}
:deep(.van-tabbar-item__icon) {
  font-size: 23px;
}
</style>
