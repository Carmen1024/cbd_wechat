import { getToken } from '../utils/auth'

// 封装微信请求
const request = ({ url, method, data })=> {

  data = data ? (data["#content"]!=undefined ? data : {"#content":data}) : {"#content":{}};
  if (getToken()) {
    // config.headers['token'] = getToken(); 暂时没有用
    data["#token"] = getToken();
  }
  url = "https://bq.shuxinyc.com" + url;
  return new Promise((resolve, reject) => {
      wx.request({
          data:data,
          method:method,
          url: url,
          success: function (res) {
              if (res.data["#code"] == "0000") {
                console.log("接口返回成功",res.data)
                resolve(res.data);
              } else {
                wx.showToast({
                  title: (res.data["#desc"] || 'Error'),
                  icon: 'error',
                  duration: 3000
                })
                reject(res.data)
              }
          },
          fail:function (err) {
            wx.showToast({
              title: "服务器出现异常，请稍后再试",
              icon: 'error',
              duration: 3000
            })
            reject(err);
          }
      })
  })
}

export default request