Component({
  data: {
    show:false,
    selected: 0,
    color: "#7A7E83",
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
      pagePath: "/pages/user/user",
      iconPath: "/images/user.png",
      selectedIconPath: "/images/user_active.png",
      text: "我的"
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