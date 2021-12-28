import request from '../utils/request'

export const materialQuery = (data:object) => {
  return request({
    url: '/material/query_all_valid',
    method: 'post',
    data
  })
}

export const materialQueryDetail = (data:object) => {
  return request({
    url: '/superv_statistics/query_material_detail',
    method: 'post',
    data
  })
}