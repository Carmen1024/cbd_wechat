import request from '../utils/request'

// export const storeQuery = (data:object) => {
//   return request({
//     url: '/store/query',
//     method: 'post',
//     data
//   })
// }
//督导管辖门店列表查询（统计)
export const storeQuery = (data:object) => {
  return request({
    url: '/superv_statistics/query_store_valid',
    method: 'post',
    data
  })
}

export const storeQueryDetail = (data:object) => {
  return request({
    url: '/superv_statistics/query_store_detail',
    method: 'post',
    data
  })
}

export const storeQueryList = (data:object) => {
  return request({
    url: '/superv_statistics/query_store_list',
    method: 'post',
    data
  })
}