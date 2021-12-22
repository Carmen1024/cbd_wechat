import request from '../utils/request'

export const storeQuery = (data:object) => {
  return request({
    url: '/store/query',
    method: 'post',
    data
  })
}