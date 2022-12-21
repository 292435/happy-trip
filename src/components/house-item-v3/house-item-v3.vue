<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">
          {{ itemData.houseName }}
        </div>
        <div class="summary">
          {{ itemData.summaryText }}
        </div>
        <div class="final">
          <span class="nowPrice">￥{{ itemData.finalPrice }}</span>
          <span class="oldPrice">￥{{ itemData.productPrice }}</span>
          <span class="tip">{{ itemData?.priceTipBadge?.text }}</span>
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
  width: 50%;
  .item-inner {
    height: 226px;
    background-color: #fff;
    border-radius: 5px;
    margin: 5px;
    .cover {
      img {
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      line-height: 1.2;
      padding: 5px 8px;
      .location {
        img {
          width: 12%;
        }
        span {
          font-size: 12px;
          color: #666;
          margin-left: 2px;
        }
      }
      .name {
        margin: 5px 0;
        font-size: 14px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .summary {
        margin-bottom: 5px;
        font-size: 12px;
        color: #666;
      }
      .final {
        .nowPrice {
          color: #ff9645;
          font-size: 14px;
        }
        .oldPrice {
          margin: 0 3px;
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }
        .tip {
          background-image: linear-gradient(270deg, #f66, #ff9f9f);
          color: #fff;
          padding: 0 6px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
