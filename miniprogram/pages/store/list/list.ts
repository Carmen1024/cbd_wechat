import { storeQuery } from '../../../api/store'
import { getContent, getDataParams,getPageParams,getPageTotal } from '../../../utils/dataParams'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    s_name:"",
    storeList:[],
    pageIndex:0,
    total:0,
    showFoot:false,
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    menuWidth:wx.getMenuButtonBoundingClientRect()['width']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.storeSelect();
  },
  storeSelect(){
    const refresh = this.data.s_name ? true:false;
    let pageIndex = this.data.pageIndex;
    const pageSize=10;
    const parmas = getPageParams({["#like"]:["s_name"]},{"s_name":this.data.s_name},pageSize,pageIndex,refresh)
    storeQuery(parmas).then(response=>{
      const newList:never[] = getContent(response);
      this.setData({
        storeList:[...this.data.storeList,...newList],
        total:getPageTotal(response),
        pageIndex:++pageIndex,
        showFoot : newList.length < pageSize ? true:false
      })
    })
  },
  onChange(e) {
    this.setData({
      s_name: e.detail,
    });
  },
  onSearch(){
    console.log('搜索' , this.data.s_name);
    this.setData({pageIndex:0,storeList:[]});
    this.storeSelect();
  },
  toInfo(e){
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `../info/info?id=${item._id}&name=${item.s_name_k}`,
    })
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onReachBottom() {
    if(this.data.storeList.length<this.data.total){
      this.storeSelect();
    }else{
      this.setData({
        showFoot : true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})