import HYRequest from '@/services/request'
export function getDetailInfosAPI(id) {
  return HYRequest.get({
    url: 'detail/infos',
    params: {
      houseId: id
    }
  })
}
