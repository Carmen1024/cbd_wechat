// pages/login/login.ts
import { getToken,setToken,removeToken } from '../../utils/auth';
import { login,loginByPhone,loginByWxPhone,loginout } from '../../api/user'
import { getContent, getDataParams } from '../../utils/dataParams';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:0,//0未知身份 1已登录未获取手机号 2 已获取手机号但是不是督导身份
    loading:true,
    phone:"",
    mobileLogin:false,
    access_token:""
  },  /**
  * 生命周期函数--监听页面加载
  */
  onLoad() {
    //发送请求确认用户状态
    //1.有token，是督导身份，直接进入首页
    // if(getToken()){
    //   wx.switchTab({
    //     url: '../index/index',
    //   })
    //   return
    // }
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
            if(data.token){
              setToken(data.token);
              //督导
              wx.switchTab({
                url: '../index/index',
              })
              return
            }
            this.setData({
              access_token:data.access_token,
              flag:data.access_flag,
              loading:false
            });
          })
        } else {
          console.log('微信登录失败！' + res.errMsg)
        }
      },
    })
  },
  mobile(){
    this.setData({
      mobileLogin:true
    })
  },
  reset(){
    this.setData({
      flag:1
    })
  },
  // 授权微信手机号登录
  getPhoneNumber (e) {
    console.log("手机code：",e.detail.code);
    if(!e.detail.code){
      wx.showToast({
        icon:'error',
        title:'请升级微信版本',
        duration:3000
      })
      return;
    }
    const params = getDataParams(
      {"#eq":["access_token","js_code"]},
      {access_token:this.data.access_token,"js_code":e.detail.code}
    );
    loginByWxPhone(params).then(response=>{
      const data = getContent(response)
      console.log(data);
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
  resetPhone(){
    loginout().then(response=>{
      //督导
      // console.log(response);
      removeToken();
      wx.reLaunch({
        url: '../login/login',
      })
    })
  },
  // 自主填写手机号登录
  nativeLogin(){
    console.log("手机号登录",this.data.phone);
    const reg = this.data.phone.match(/^1[0-9]{10}/g);
    console.log(reg);
    if(!reg){
      wx.showToast({
        title:'手机号不正确',
        icon:'error'
      })
      return;
    }
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
})