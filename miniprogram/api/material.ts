import request from '../utils/request'

export const materialQuery = (data:object) => {
  return request({
    url: '/material/query_all_valid',
    method: 'post',
    data
  })
}