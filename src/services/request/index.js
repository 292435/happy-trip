import axios from 'axios'
// import { useLoadingStore } from '@/store/modules/loading'
import { baseURL, TIMEOUT } from './config'
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { loading } = storeToRefs(mainStore)
// const loadingStore = useLoadingStore()
class HYRequest {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT
    })
    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        loading.value = true
        console.log('进入请求拦截')
        return config
      },
      (error) => {
        loading.value = false
        Promise.reject(error)
      }
    )
    // 响应拦截
    this.instance.interceptors.response.use(
      (response) => {
        console.log('进入响应拦截')
        loading.value = false
        return response
      },
      (error) => {
        //请求失败
        loading.value = false
        Promise.reject(error)
      }
    )
  }
  request(config) {
    // loadingStore.changeLoading(true)
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          console.log('request err:', err)
          reject(err)
        })
        .finally(() => {
          // loadingStore.changeLoading(false)
        })
    })
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new HYRequest(baseURL)
