// pages/store/list/list.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectName:"",
    storeList:[
      {
        "value": 427,
        "store_id": "3611",
        "name": "茶百道上海长岛路店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 403,
        "store_id": "681",
        "name": "茶百道上海大木桥路店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 399,
        "store_id": "441",
        "name": "茶百道北京魏公村店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 368,
        "store_id": "390",
        "name": "茶百道上海中原欧尚店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 359,
        "store_id": "3118",
        "name": "茶百道哈尔滨乐松广场店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 356,
        "store_id": "561",
        "name": "茶百道上海绿地缤纷城店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 352,
        "store_id": "504",
        "name": "茶百道上海惠南二店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 342,
        "store_id": "385",
        "name": "茶百道曹杨路地铁站店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 336,
        "store_id": "307",
        "name": "茶百道上海福州路店",
        "addr": "茶百道上海长岛路店地址"
      },
      {
        "value": 328,
        "store_id": "592",
        "name": "茶百道广州GOGO新天地店",
        "addr": "茶百道上海长岛路店地址"
      }
    ],
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    menuWidth:wx.getMenuButtonBoundingClientRect()['width']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  onChange(e) {
    this.setData({
      selectName: e.detail,
    });
  },
  onSearch(){
    console.log('搜索' , this.data.selectName);
  },
  toInfo(e){
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `../info/info?id=${item.store_id}&name=${item.name}`,
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
        show:true
      })
    }
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