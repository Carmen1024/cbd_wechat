import { getContent, getDataParams,getPageParams,getPageTotal,getCount,getExtData } from '../../../utils/dataParams'
import { storeQuery,storeQueryList } from '../../../api/store'
import { materialQuery } from '../../../api/material'
import { formatDate } from '../../../utils/util'


// pages/region/info/info.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
      u_name:'',
      u_region:'四川省成都市高新区',
      storeCount:0,
      materialCount:0,
      // <!-- totalList print_count-打印总数  finish_count-已用完数 break_count-报损数量 -->
      totalList:{
        print_count:0,
        finish_count:0,
        break_count:0
      }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      const parmas = getPageParams({},{},1,0,false)
      storeQuery(parmas).then(response=>{
        this.setData({
          storeCount:getPageTotal(response),
        })
      })
      const dataParams = getDataParams({},{});
      materialQuery(dataParams).then(response=>{
        this.setData({
          materialCount:getCount(response),
        })
      })
      this.getList();
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getList(){
      let timeData = {
        is_his:false,
        createTime:formatDate(new Date(),"YYYY-MM-DD")+" 00:00:00",
        endTime:formatDate(new Date(),"YYYY-MM-DD")+" 23:59:59",
      }
      let parmas = getPageParams(
        {"#eq":["is_his"],"#gte":["pt_h_time"],"#lte":["pt_h_time"]},
        timeData,1,0,false);
        storeQueryList(parmas).then(response=>{
          const { print_count=0,finish_count=0,break_count=0} = getExtData(response);
          this.setData({
            totalList:{print_count,finish_count,break_count}
          })
      })
    },
    toStoreList(){
      wx.switchTab({
        url: '../store/list/list'
      })
    },
    toMaterialList(){
      wx.switchTab({
        url: '../material/list/list'
      })
    },
    toList(){
      wx.navigateTo({
        url: '../material/all_info/info'
      })
    },
    mapContext(){
      // const u_region = this.data.userInfo.u_region;
      wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          wx.openLocation({
            latitude,
            longitude,
            scale: 18,
            name:"您现在所在位置"
          })
        }
       })
    }
  }
})
