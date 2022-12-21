<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">
          {{ itemData.summaryText }}
        </div>
        <div class="name">
          {{ itemData.houseName }}
        </div>
        <div class="final">
          <div class="comment">
            <van-rate
              :model-value="commentScore"
              color="#ffffff"
              size="10px"
              readonly
              allow-half
            />
            <!-- {{ itemData.commentScore }} -->
          </div>
          <div class="finalPrice">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})
const commentScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item {
  position: relative;
  width: 50%;
  .item-inner {
    margin: 5px;

    .cover {
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .info {
      color: #fff;
      font-weight: 500;
      position: absolute;
      padding: 0 5px 5px;
      bottom: 3%;
      .summary {
        font-size: 12px;
      }
      .name {
        line-height: 1.2;
        font-size: 14px;
        margin: 6px auto;
        overflow: hidden; //超出隐藏
        text-overflow: ellipsis; //溢出显示省略号
        white-space: normal; //常规默认，会折行
        display: -webkit-box;
        -webkit-box-orient: vertical; //子元素排列 vertical（竖排）orhorizontal（横排）
        -webkit-line-clamp: 2; /*内容限制的行数 需要几行写几就行*/
      }
      .final {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
      }
    }
  }
}
</style>
