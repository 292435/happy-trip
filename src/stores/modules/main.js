import { defineStore } from 'pinia'
const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)
const useMainStore = defineStore('main', {
  state: () => ({
    //入住时间和离店时间
    startDate: startDate,
    endDate: endDate,
    // 请求加载标识
    loading: false
  })
})
export default useMainStore
