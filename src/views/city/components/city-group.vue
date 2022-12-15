<template>
  <div class="content">
    <div class="group-item">
      <van-index-bar highlight-color="#ff9645">
        <template v-for="(group, index) in groupData.cities" :key="index">
          <van-index-anchor :index="group.group" />
          <template v-for="(city, index) in group.cities" :key="index">
            <van-cell :title="city.cityName" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
defineProps({
  groupData: {
    type: String,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.content {
  height: calc(100vh - 100px);
  overflow-y: auto;
}
:deep(.van-index-bar__index) {
  font-weight: normal;
}
</style>
