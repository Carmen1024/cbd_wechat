// pages/store/info/info.ts
import { formatDate } from '../../../utils/util'
import { storeQueryDetail } from '../../../api/store'
import { getContent, getDataParams,getPageParams,getExtData } from '../../../utils/dataParams'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeId:"",
    storeName:"某个门店名字",
    createTime:formatDate(new Date(),"YYYY-MM-DD")+" 00:00:00",
    endTime:formatDate(new Date(),"YYYY-MM-DD")+" 23:59:59",
    //打印数量-print_count  
    //报损数量-break_count  
    //用完数量-finish_count
    totalList:{
      print_count:10000,
      break_count:100,
      finish_count:100,
      break_percent:10,
      finish_percent:90,
    },
    totalList2:[
      {label:'打印总数',value:'10000',percent:100},
      {label:'报损数量',value:'1000',percent:10},
      {label:'已用完数',value:'9000',percent:90},
    ],
    materialList:[],
    pageIndex:0,
    total:0,
    showFoot:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    this.setData({
      storeId : options.id,
      storeName : options.name
    })
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.getStoreDetail();
  },
  getStoreDetail(){
    let pageIndex = this.data.pageIndex;
    const pageSize=10;
    let timeData = {
      // s_id:this.data.storeId,
      createTime:this.data.createTime,
      endTime:this.data.endTime,
      s_id:"9d95c038dfd94116b54471c6284625d1",
    }
    let parmas = getPageParams(
      {"#eq":["s_id"],"#gte":["pt_h_time"],"#lte":["pt_h_time"]},
      timeData,pageSize,pageIndex);
    storeQueryDetail(parmas).then(response=>{
      let newList:never[] = getContent(response);
      const { total=0,print_count=0,finish_count=0,break_count=0} = getExtData(response);
      if(this.data.pageIndex==0){
        const break_percent = Math.round(break_count / (break_count + finish_count) * 100)
        const finish_percent = Math.round(finish_count / (break_count + finish_count) * 100);
        const totalList={
          print_count,break_count,finish_count,
          break_percent : break_percent,
          finish_percent : finish_percent
        }
        this.setData({
          totalList,total
        });
      }
      if(newList.length>0){
        // "print_count": 14,
        //     "finish_count": 0,
        //     "break_count": 0,
        newList.forEach(item => {
          const {break_count,finish_count} = item;
          if(break_count==0 && finish_count==0){
            item.break_percent = 50;
            item.finish_percent = 50;
          }else{
            item.break_percent = Math.round((break_count / (break_count + finish_count)) * 100);
            item.finish_percent = Math.round((finish_count / (break_count + finish_count)) * 100); 
          }
        })
      }
      console.log(newList);
      this.setData({
        materialList:[...this.data.materialList,...newList],
        pageIndex:++pageIndex,
        showFoot : newList.length < pageSize ? true:false,
      })
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onReachBottom() {
    if(this.data.materialList.length<this.data.total){
      this.getStoreDetail();
    }else{
      this.setData({
        showFoot : true
      })
    }
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
  reSelect(e){
    console.log(e.detail);
    this.setData({
      createTime:e.detail.createTime,
      endTime:e.detail.endTime,
      materialList:[],
      total:0,
      pageIndex:0,
      showFoot : false
    })
    this.getStoreDetail();
  },
})