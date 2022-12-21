import { defineStore } from 'pinia'
import { getCityAPI } from '@/services'
const useCity = defineStore('city', {
  state: () => ({
    allCities: {},
    currentCity: {
      cityId: 10,
      cityName: '成都',
      gangAoTai: false,
      hot: false,
      latitude: '30.6571',
      longitude: '104.082',
      pinYin: 'chengdu'
    }
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
