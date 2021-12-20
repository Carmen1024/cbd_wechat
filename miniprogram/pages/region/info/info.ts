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
    userInfo:{
      u_name:'',
      u_region:'四川省成都市天府新区',
      u_store:16,
      materialCount:79
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    toList(e){
      const type = e.currentTarget.dataset.type;
      console.log(type);
      wx.navigateTo({
        url: '../region/list/list?type='+type
      })
    },
    mapContext(){
      const u_region = this.data.userInfo.u_region;
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
