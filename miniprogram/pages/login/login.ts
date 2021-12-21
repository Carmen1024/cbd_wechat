// pages/login/login.ts
import { getToken,setToken } from '../../utils/auth';
import { login,loginByPhone,loginByWxPhone } from '../../api/user'
import { getContent, getDataParams } from '../../utils/dataParams';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:0,//0未知身份 1已登录未获取手机号 2 已获取手机号但是不是督导身份
    phone:"13799999999",
    mobileLogin:false,
    access_token:""
  },
  mobile(){
    this.setData({
      mobileLogin:true
    })
  },
  // 授权微信手机号登录
  getPhoneNumber (e) {
    console.log("手机code：",e.detail.code);
    const params = getDataParams({"#eq":["access_token"]},{access_token:this.data.access_token});
    loginByWxPhone(params).then(response=>{
      const data = getContent(response)
      console.log(data);
      // wx.switchTab({
      //   url: '../index/index',
      // })
    })
  },
  // 自主填写手机号登录
  nativeLogin(){
    console.log("手机号登录",this.data.phone);
    const params = getDataParams(
      {"#eq":["access_token","phone_num"]},
      {access_token: this.data.access_token,phone_num:this.data.phone}
    );
    loginByPhone(params).then(response=>{
      const data = getContent(response)
      this.setData({
        flag:data.access_flag
      });
      if(data.token){
        setToken(data.token);
        //督导
        wx.switchTab({
          url: '../index/index',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //发送请求确认用户状态
    // test
    // wx.switchTab({
    //   url: '../index/index',
    // })
    //1.有token，是督导身份，直接进入首页
    if(getToken()){
      wx.switchTab({
        url: '../index/index',
      })
    }
    // 登录
    wx.login({
      success: res => {
        console.log("登录了微信：",res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // code2Session
        if (res.code) {
          const params = getDataParams({"#eq":["js_code"]},{js_code: res.code});
          // 发起网络请求
          login(params).then(response=>{
            const data = getContent(response)
            this.setData({
              access_token:data.access_token,
              flag:data.access_flag
            });
            if(data.token){
              setToken(data.token);
              //督导
              wx.switchTab({
                url: '../index/index',
              })
            }
          })
        } else {
          console.log('微信登录失败！' + res.errMsg)
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.hideHomeButton();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})