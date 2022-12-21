import { defineStore } from 'pinia'
import {
  getHotSuggestAPI,
  getHomeCategoriesAPI,
  getHomeListAPI
} from '@/services/index'
const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    homeList: [],
    currentPage: 1
  }),
  actions: {
    // 获取热门推荐数据
    async fetchHotSuggests() {
      const res = await getHotSuggestAPI()
      this.hotSuggests = res.data
    },
    // 获取分类数据
    async fetchHomeCategories() {
      const res = await getHomeCategoriesAPI()
      // console.log('11', res.data)
      this.categories = res.data
    },
    // 获取房屋列表数据
    async fetchHomeList() {
      const res = await getHomeListAPI(this.currentPage++)
      this.homeList = [...this.homeList, ...res.data]
    }
  }
})
export default useHomeStore
