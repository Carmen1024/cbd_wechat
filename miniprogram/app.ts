// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.removeStorageSync('active');
    // 登录
    wx.login({
      success: res => {
        console.log("登录了：",res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //code2Session
        // if (res.code) {
        //   //发起网络请求
        //   wx.request({
        //     url: 'https://example.com/onLogin',
        //     data: {
        //       code: res.code
        //     },
        //     success (res) {
        //       //跳转到登录页
        //       wx.navigateTo({
        //         url: '../login/login',
        //       })
        //       console.log(res.data)
        //     }
        //   })
        // } else {
        //   console.log('登录失败！' + res.errMsg)
        // }
      },
    })
  },
})