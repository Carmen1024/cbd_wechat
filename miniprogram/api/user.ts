import request from '../utils/request'

export const login = (data:object) => {
  return request({
    url: '/login/login_with_wechat',
    method: 'post',
    data
  })
}

// 微信手机号授权登录
export const loginByWxPhone = (data:object) => {
  return request({
    url: '/login/login_with_phone_num',
    method: 'post',
    data
  })
}

//自主填写手机号登录
export const loginByPhone = (data:object) => {
  return request({
    url: '/login/login_with_phone_num_temp',
    method: 'post',
    data
  })
}