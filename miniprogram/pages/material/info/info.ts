// pages/store/list/list.ts

import { formatDate } from '../../../utils/util'
import { materialQueryDetail } from '../../../api/material'
import { getContent, getDataParams,getPageParams,getPageTotal,getExtData } from '../../../utils/dataParams'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    m_Id:'',
    m_name:'',
    storeList:[],
    pageIndex:0,
    total:0,
    showFoot:false,
    createTime:formatDate(new Date(),"YYYY-MM-DD")+" 00:00:00",
    endTime:formatDate(new Date(),"YYYY-MM-DD")+" 23:59:59"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      m_Id : options.id || '',
      m_name : options.name || '所有物料'
    })
    wx.setNavigationBarTitle({
      title: this.data.m_name+'使用情况'
    })
    this.storeSelect();
  },
  //获取所有数据-没有选择物料的时候
  storeSelect(){
    let pageIndex = this.data.pageIndex;
    const pageSize=10;
    let timeData = {
      m_id:this.data.m_Id,
      createTime:this.data.createTime,
      endTime:this.data.endTime,
    }
    let parmas = getPageParams(
      {"#eq":["m_id"],"#gte":["pt_h_time"],"#lte":["pt_h_time"]},
      timeData,pageSize,pageIndex,false);
    materialQueryDetail(parmas).then(response=>{
      if(this.data.pageIndex==0){
        ////print_count-打印总数  finish_count-已用完数 break_count-报损数量
        const { print_count=0,finish_count=0,break_count=0} = getExtData(response);
        const all = {all:true,s_name:"门店总和",print_count,finish_count,break_count};
        this.setData({
          storeList:[all]
        })
      }
      const newList:never[] = getContent(response);
      this.setData({
        storeList:[...this.data.storeList,...newList],
        total:getPageTotal(response),
        pageIndex:++pageIndex,
        showFoot : newList.length < pageSize ? true:false
      })
    })
  },
  toInfo(e){
    const item = e.currentTarget.dataset.item;
    if(item.s_id){
      wx.navigateTo({
        url: `../../store/info/info?id=${item.s_id}&name=${item.s_name}`,
      })
    }
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
  reSelect(e){
    console.log(e.detail);
    this.setData({
      createTime:e.detail.createTime,
      endTime:e.detail.endTime,
      storeList:[],
      total:0,
      pageIndex:0,
      showFoot : false
    })
    this.storeSelect();
  },
})