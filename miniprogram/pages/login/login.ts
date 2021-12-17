// pages/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false
  },
  getPhoneNumber (e) {
    console.log(e.detail.code);
    wx.setStorageSync("active",true);
    wx.switchTab({
      url: '../index/index',
    })
    //接口还没有，先这样把
    //登录完自动回到首页
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //发送请求确认用户状态
    // this.setData({
    //   loading:false
    // })
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