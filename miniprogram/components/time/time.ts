import { formatDate,weekDate,lastWeekDate,getDateByMonth } from '../../utils/util'

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
    //选择的年份
    yearType:new Date().getFullYear(),
    //当天
    dayDate:formatDate(new Date(),"YYYY-MM-DD"),
    //日 0，周 1，月 3
    dateType:0,
    yearTypeOption: [
      { text: (new Date().getFullYear()-1), value: new Date().getFullYear()-1 },
      { text: new Date().getFullYear(), value: new Date().getFullYear() },
    ],
    dateTypeOption: [
      { text: '日', value: 0 },
      { text: '周', value: 1 },
      { text: '月', value: 2 },
    ],
    weekOption: [],
    weekJson:{},
    monthOption: [],
    // weekColumns:['本周','上周'],
    // monthCount:0,
    minDate:new Date(new Date().getFullYear(),0,1).getTime(),
    maxDate:new Date().getTime(),
    dayCreateDate:formatDate(new Date(),"MM-DD"),
    dayEndDate:formatDate(new Date(),"MM-DD"),
    defaultDate:[new Date().getTime(),new Date().getTime()],
    dateShow:false,
    weekShow:false,
    monthShow:false,
    monthDate:0,
    weekDate:0,
    weekButtonList:[],
    monthButtonList:[],
    buttonIndex:`0_${formatDate(new Date(),"YYYY-MM-DD")}_${formatDate(new Date(),"YYYY-MM-DD")}`,
  },
  lifetimes: {
    attached: function() {
      this.setWeekOption();
      this.setMonthOption();
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 重置年份
    resetYear(){
      const nowYear = new Date().getFullYear();
      const minDate = new Date(this.data.yearType,0,1).getTime();
      const maxDate = nowYear == this.data.yearType ?  
                      new Date().getTime() : new Date(nowYear,0,0).getTime()
      this.setData({
        minDate,maxDate
      })
      this.setWeekOption();
      this.setMonthOption();
      this.reset();
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
      const [start, end] = event.detail;
      this.setData({
        dateShow: false,
        dayCreateDate: formatDate(start,"MM-DD"),
        dayEndDate: formatDate(end,"MM-DD"),
      });
      this.reset();
    },
    reset(){
      let createTime = "",endTime = ""
      let timeParams = { createTime,endTime }
      const dateType = this.data.dateType
      let buttonIndex = `${dateType}_`;
      if(dateType==0){
        // buttonIndex += this.data.dayDate;
        // createTime = this.data.dayDate + " 00:00:00";
        // endTime = this.data.dayDate + " 23:59:59";
        buttonIndex += this.data.dayCreateDate+'_'+this.data.dayEndDate;
        createTime = `${this.data.yearType}-${this.data.dayCreateDate} 00:00:00`;
        endTime = `${this.data.yearType}-${this.data.dayEndDate} 23:59:59`;
        timeParams = { createTime,endTime }
      }else if(dateType==1){
        //weekDate 本周0 上周1
        buttonIndex += this.data.weekDate;
        // timeParams = (this.data.weekDate ==0 ? weekDate() : lastWeekDate());
        timeParams = this.data.weekJson[buttonIndex];
      }else if(dateType==2){
        //monthDate 本月0 上周1
        buttonIndex += this.data.monthDate;
        timeParams = getDateByMonth(this.data.yearType,this.data.monthDate);
      }
      // console.log(buttonIndex,timeParams,this.data.weekJson);
      this.setData({buttonIndex})
      this.triggerEvent('reSetTime', timeParams);
    },
    shortcutSet(e){
      const item = e.currentTarget.dataset.item;
      const {dateType,date} = item;
      if(dateType==1){
        this.setData({ dateType,weekDate:date });
      }else if(dateType==2){
        this.setData({ dateType,monthDate:date });
      }else{
        this.setData({ dateType,createTime:item.createTime,endTime:item.endTime })
      }
      this.reset();
    },
    // 设置当年周选项
    setWeekOption(){
      let yearDays:number;
      const nowDate = new Date();
      //元旦为第一周 不足7天也算第一周
      //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
      const day1_1 = new Date(this.data.yearType,0,1)
      let day1_1Day = day1_1.getDay();
      const day1_1Time = day1_1.getTime();
      //当年的最后一天
      let lastDay = nowDate;
      if(nowDate.getFullYear() != this.data.yearType){
        //不是今年
        lastDay = new Date(this.data.yearType,11,31)
      }
      //当年已过的所有天数
      yearDays = Math.ceil((lastDay.getTime() - day1_1Time) / (24 * 60 * 60 * 1000));

      //计算当年有多少周（今年就到到最后一天为止）
      var total = Math.ceil((yearDays + day1_1Day - 1) / 7);
      // console.log("计算当年有多少周",total);
      // console.log("元旦为第一周",day1_1Day);
      // console.log("当年已过的所有天数",yearDays);
      let countdays = 0;
      let weekJson={},weekOption=[],weekButtonList=[];
      for(let i=1;i<=total;i++){
        let weekDays;
        if(i==1){
          day1_1Day = day1_1Day || 7;
          //元旦 0 1
          weekDays = 7 - day1_1Day;
        }else if(i==total){
          weekDays = lastDay.getDay() || 7;
        }else{
          weekDays = 7
        }
        let createTime = formatDate(
          new Date(day1_1Time+1000*60*60*24*(i==1?0:countdays+1)),"YYYY-MM-DD")+" 00:00:00"
        //叠加天数。
        countdays+=weekDays;
        const endTime = formatDate(
          new Date(day1_1Time+1000*60*60*24*countdays),"YYYY-MM-DD")+" 23:59:59"
        console.log(`当年已过去：${countdays}天`,`第${i}周`,createTime,endTime);
        weekJson[`1_${i}`]={createTime,endTime};
        weekOption.push({ text: `第${i}周`, value: i })
        if(i==total || i==total-1){
          weekButtonList.push(
            {dateType:1,date:i,label:`第${i}周`,buttonIndex:`1_${i}`}
          )
        }

      }
      this.setData({weekOption,weekButtonList,weekDate:total,weekJson});
    },
    setMonthOption(){
      let monthDate = 12;
      const nowDate = new Date();
      if(nowDate.getFullYear() == this.data.yearType) monthDate = nowDate.getMonth() + 1;
      let monthButtonList=[];
      let i=1,monthOption=[];
      while(i<=monthDate){
        monthOption.push({ text: `${i<10?'0'+i:i}月`, value: i++ })
        if(i==monthDate || i==monthDate-1){
          monthButtonList.push(
            {dateType:2,date:i,label:`${i}月`,buttonIndex:`2_${i}`} 
          )
        }
      }
      // console.log(monthOption);
      this.setData({monthOption,monthDate,monthButtonList});
    },

  }
})
