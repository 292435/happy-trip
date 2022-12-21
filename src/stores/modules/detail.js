import { defineStore } from 'pinia'
import { getDetailInfosAPI } from '@/services'
const useDetailStore = defineStore('detail', {
  state: () => ({
    infos: {}
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfosAPI(houseId)
      console.log('res', res)
      this.infos = res.data
    }
  }
})

export default useDetailStore
