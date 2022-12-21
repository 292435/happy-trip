import HYRequest from '../request'
// 获取定位选择的城市列表
export function getCityAPI() {
  return HYRequest.get({
    url: '/city/all'
  })
}
// 获取热门建议列表
export function getHotSuggestAPI() {
  return HYRequest.get({
    url: '/home/hotSuggests'
  })
}
