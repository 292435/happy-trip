import HYRequest from '@/services/request/index'
export function getHomeCategoriesAPI() {
  return HYRequest.get({
    url: '/home/categories'
  })
}
// 获取房屋列表
export function getHomeListAPI(page = 1, offset = 0) {
  return HYRequest.get({
    url: '/home/houselist',
    params: {
      page: page
    }
  })
}
