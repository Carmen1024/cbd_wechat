// index.ts
// "navigationBarTitleText": "蜀信云茶",
// "navigationBarTextStyle":"white",
// "navigationBarBackgroundColor":"#005bac",
// 获取应用实例
const app = getApp<IAppOption>()

import {loginout} from '../../api/user'
import {removeToken} from '../../utils/auth'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    menuBottom:wx.getMenuButtonBoundingClientRect()['bottom'],
    menuTop:wx.getMenuButtonBoundingClientRect()['top'],
    menuHeight:wx.getMenuButtonBoundingClientRect()['height'],
    // menuClient(type:string):string{
    //   return wx.getMenuButtonBoundingClientRect()[type] + "px";
    // }
  },
  // 事件处理函数
  onLoad() {
    // wx.showToast({
    //   title:'',
    //   icon:'loading',
    //   duration:10000
    // })
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
        show:true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  logout(){
    wx.showModal({
      title: '是否确认退出',
      content: '重新授权手机号之后，需再次激活',
      confirmColor:'#005bac',
      confirmText:'退出',
      cancelText:'返回',
      cancelColor:'#666666',
      success (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          loginout().then(response=>{
            //督导
            // console.log(response);
            removeToken();
            wx.reLaunch({
              url: '../login/login',
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
