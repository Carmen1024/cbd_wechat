// pages/store/list/list.ts
import { materialQuery } from '../../../api/material'
import { getContent, getDataParams } from '../../../utils/dataParams'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectName:"",
    m_name:"",
    pageIndex:0,
    total:0,
    materialList:[],
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    menuWidth:wx.getMenuButtonBoundingClientRect()['width'],
    menuTop:wx.getMenuButtonBoundingClientRect()['top'],
    menuBottom:wx.getMenuButtonBoundingClientRect()['bottom']+10,
    menuHeight:wx.getMenuButtonBoundingClientRect()['height'],
    showFoot:false,
  },
  // 查询物料
  materialSelect(){
    const dataParams = getDataParams({"#like":["m_name"]},{ m_name:this.data.m_name });
    materialQuery(dataParams).then(response=>{
      this.setData({
        materialList:getContent(response),
        showFoot:true
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.materialSelect();
  },
  onChange(e) {
    this.setData({
      m_name: e.detail,
    });
  },
  toInfo(e){
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `../info/info?id=${item._id}&name=${item.m_name}`,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
        show:true
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})