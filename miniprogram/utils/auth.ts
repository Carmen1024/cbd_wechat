// token

//获取token
export const getToken = () =>{
  return wx.getStorageSync('token') || false;
}

export const setToken = (token:String) =>  wx.setStorageSync('token',token)

