import { defineStore } from 'pinia'
import { getCityAPI } from '@/services'
const useCity = defineStore('city', {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAPI()
      this.allCities = res.data
    }
  },
  getters: {}
})
export default useCity
