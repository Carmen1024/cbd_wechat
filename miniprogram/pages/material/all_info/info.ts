// pages/store/list/list.ts

import { formatDate } from '../../../utils/util'
import { storeQueryList } from '../../../api/store'
import { getContent, getDataParams,getPageParams,getPageTotal,getExtData } from '../../../utils/dataParams'
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    wx.setNavigationBarTitle({
      title: '所有物料使用情况'
    })
    this.storeSelect();
  },
  //获取所有数据-没有选择物料的时候
  storeSelect(){
    let pageIndex = this.data.pageIndex;
    const pageSize=10;
    let timeData = {
      createTime:this.data.createTime,
      endTime:this.data.endTime,
    }
    let parmas = getPageParams(
      {"#gte":["pt_h_time"],"#lte":["pt_h_time"]},timeData,pageSize,pageIndex,false);
    storeQueryList(parmas).then(response=>{
      if(this.data.pageIndex==0){
        ////print_count-打印总数量  finish_count-用完总数量 break_count-报损总数量
        const { print_count=0,finish_count=0,break_count=0} = getExtData(response);
        const all = {"s_name":"全部",print_count,finish_count,break_count};
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
  chooseDate(){
    this.setData({
      dateShow:true,
    })
  },
  onClose() {
    this.setData({ dateShow: false });
  },
  onConfirm(event) {
    this.setData({
      dateShow: false,
      dayDate: formatDate(new Date(event.detail),"YYYY-MM-DD"),
    });
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