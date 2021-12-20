Component({
  data: {
    show:false,
    selected: 0,
    color: "#999999",
    selectedColor: "#152a7d",
    backgroundColor:'#fafafa',
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/index.png",
      selectedIconPath: "/images/index_active.png",
      text: "首页"
    }, {
      pagePath: "/pages/store/list/list",
      iconPath: "/images/store.png",
      selectedIconPath: "/images/store_active.png",
      text: "门店"
    }, {
      pagePath: "/pages/material/list/list",
      iconPath: "/images/material.png",
      selectedIconPath: "/images/material_active.png",
      text: "物料"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})