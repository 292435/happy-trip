import HYRequest from '../request'
export function getCityAPI() {
  return HYRequest.get({
    url: '/city/all'
  })
}
