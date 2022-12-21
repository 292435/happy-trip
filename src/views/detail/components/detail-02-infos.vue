<template>
  <div class="infos">
    <div class="name">{{ topInfos?.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos?.houseTags" :key="index">
        <span
          class="text"
          v-if="item.tagText"
          :style="{
            color: item.tagText?.color,
            background: item.tagText?.background?.color
          }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">{{ topInfos?.commentBrief?.overall }}</span>
        <span class="title">{{ topInfos?.commentBrief?.scoreTitle }}</span>
        <span class="brief">{{
          '"' + topInfos?.commentBrief?.commentBrief + '"'
        }}</span>
      </div>
      <div class="right">
        <span class="count"
          >{{ topInfos?.commentBrief?.totalCount }}条评论&nbsp;&gt;</span
        >
      </div>
    </div>
    <div class="position">
      <div class="left">
        <span class="address">{{ topInfos?.nearByPosition?.address }}</span>
      </div>
      <div class="right">
        <span>地图·周边&nbsp;&gt;</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 10px;
  display: flex;
  flex-direction: column;
  .name {
    font-size: 21px;
    font-weight: 600;
  }
  .tags {
    margin: 8px 0;
    .text {
      padding: 0 2px;
      margin: 0 2px;
      font-size: 13px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    height: 40px;
    line-height: 40px;
    background: #f2f3f3;
    border-radius: 5px;
    .left {
      flex-shrink: 1;
      .score {
        font-size: 20px;
      }
      .title {
        font-weight: 700;
      }
      .brief {
        margin: 0 2px;
        color: #999;
      }
    }
    .right {
      .count {
        color: #ff9645;
      }
    }
  }
  .position {
    margin-top: 8px;
    padding: 0 8px;
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #f2f3f3;
    border-radius: 5px;
    justify-content: space-between;
    .left {
      font-size: 15px;
      font-weight: 700;

      .address {
        display: inline-block;
        width: 65vw !important;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .right {
      flex: 1;
      text-align: right;
      width: 70px;
      color: #ff9645;
    }
  }
}
</style>
