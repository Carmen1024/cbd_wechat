// pages/store/info/info.ts
import { formatDate } from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeId:"",
    storeName:"某个门店名字",
    //日 0，周 1，月 3
    dateType:0,
    dateTypeOption: [
      { text: '日', value: 0 },
      { text: '周', value: 1 },
      { text: '月', value: 2 },
    ],
    weekOption: [
      { text: '本周', value: 0 },
      { text: '上周', value: 1 },
    ],
    monthOption: [
      { text: '本月', value: 0 },
      { text: '上月', value: 1 },
    ],
    dayDate:formatDate(new Date(),"YYYY-MM-DD"),
    dateShow:false,
    monthDate:0,
    weekDate:0,
    currentDate: new Date().getTime(),
    maxDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return `${value}日`;
    },
    //       <text>今日打印总数:</text>
      // <text>10000</text>
      // <van-progress :percentage="100" stroke-width="8" />
      // 今日打印总数，今日报损总数，今日已用完总数。
      // 2.物料：今日物料总数，今日物料报损总数，今天已用完物料总数
    printList:[
      {label:'总数',value:'10000',percent:100},
      {label:'报损总数',value:'1000',percent:10},
      {label:'已用完总数',value:'9000',percent:90},
    ],
    materielList:[
      {label:'总数',value:'10000',percent:100},
      {label:'报损总数',value:'1000',percent:10},
      {label:'已用完总数',value:'6000',percent:60},
    ],
    detailList:[
      {
        "m_name": "全部",
        "clf_name": "",
        percent1:100,
        percent2:10,
        percent3:90,
        value1:100,
        value2:10,
        value3:90
      },
      {
        "m_name": "葡萄",
        "clf_name": "水果类",
        percent1:100,
        percent2:10,
        percent3:90,
        value1:100,
        value2:10,
        value3:90
      },
      {
        "m_name": "佛手",
        "clf_name": "水果类",
        percent1:100,
        percent2:10,
        percent3:90,
        value1:100,
        value2:10,
        value3:90
      },
      {
        "m_name": "香茅",
        "clf_name": "水果类",
        percent1:100,
        percent2:10,
        percent3:90,
        value1:100,
        value2:10,
        value3:90
      }
    ]
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
  },
  resetDate(event) {
    this.setData({
      currentDate: event.detail,
      dayDate:formatDate(event.detail,"YYYY-MM-DD"),
      dateShow: false
    });
  },
  chooseDate(){
    this.setData({
      dateShow:true,
    })
  },
  // 关闭时间浮层
  onCloseDate() {
    this.setData({ dateShow: false });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})