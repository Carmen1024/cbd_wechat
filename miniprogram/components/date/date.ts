// components/time/time.ts、
import { formatDate,weekDate,lastWeekDate,monthDate,lastMonthDate } from '../../utils/util'

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
    minDate:new Date(new Date().setFullYear((new Date().getFullYear()-1))).getTime(),
    maxDate:new Date().getTime(),
    dayDate:formatDate(new Date(),"YYYY-MM-DD"),
    dateShow:false,
    monthDate:0,
    weekDate:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
      this.reset();

    },
    reset(){
      let createTime = formatDate(new Date(),"YYYY-MM-DD") + " 00:00:00";
      let endTime = formatDate(new Date(),"YYYY-MM-DD") + " 23:59:59";
      let timeParams = { createTime,endTime }
      if(this.data.dateType==0){
        createTime = this.data.dayDate + " 00:00:00";
        endTime = this.data.dayDate + " 23:59:59";
        timeParams = { createTime,endTime }
      }else if(this.data.dateType==1){
        //weekDate 本周0 上周1
        timeParams = (this.data.weekDate ==0 ? weekDate() : lastWeekDate());
      }else if(this.data.dateType==2){
        //monthDate 本周0 上周1
        timeParams = (this.data.monthDate ==0 ? monthDate() : lastMonthDate());
      }
      this.triggerEvent('reSetTime', timeParams);
    },
    setWeekOption(){

    },
    setMonthOption(){

    },
  }
})
