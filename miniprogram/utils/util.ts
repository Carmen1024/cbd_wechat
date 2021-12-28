export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

/**
 * 时间戳格式转换以及计算
 * */
export const formatDate = (time, format = 'YYYY-MM-DD hh:mm:ss') => {

  const now = new Date().getTime()

  if (!time) time = now

  while (time.toString().length < 13) time += '0'

  const date = new Date(time)

  /** 参数集 年-月-日 时:分:秒 */
  const year = date.getFullYear();
  let month = (date.getMonth() + 1)<10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  
  const arg = { year,month,day,hours,minutes,seconds }

  /** 判断有没有指定的时间格式 */
  switch (format) {
    case 'YYYY-MM-DD hh:mm:ss':
      return `${arg.year}-${arg.month}-${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'YYYY-MM-DD':
      return `${arg.year}-${arg.month}-${arg.day}`
    case 'MM-DD':
      return `${arg.month}-${arg.day}`
    case 'hh:mm:ss':
      return `${arg.hours}:${arg.minutes}:${arg.seconds}`
    case 'hh:mm':
      return `${arg.hours}:${arg.minutes}`
    case 'computed':			//判断是不是需要进行计算
      if (now > time) {
        const dt = Math.abs(time - now),    //时间已过去多少毫秒
          S = dt / 1000,    //秒
          M = S / 60,  //分
          H = M / 60,  //小时
          D = H / 24,   //天
          W = D / 7    //周

		 
       /**
			~~ ==>表示取整数部分 类似与 parseInt
		*/
        if (~~W > 0 && W < 3) {
          return ~~W + '周前'
        } else if (D < 7 && ~~D > 0) {
          return ~~D + '天前'
        } else if (~~H > 0 && H < 24) {
          return ~~H + '小时前'
        } else if (~~M > 0 && M < 60) {
          return ~~M + '分钟前'
        } else if (~~S > 0 && S < 60) {
          return ~~S + '秒前'
        }
      } else {
        console.log('未来的时间')
      }
      return `${arg.year}-${arg.month}-${arg.day} ${arg.hours}:${arg.minutes}:${arg.seconds}`
  }
}
// 获取本周时间
export const weekDate = () =>{
  const time = new Date().getTime();
  return getWeekDate(time);
}

// 获取上周时间
export const lastWeekDate =()=>{
  const time = new Date().getTime()-1000*60*60*24*7;
  return getWeekDate(time);
}
//按照时间戳获取周一和周日时间
export const getWeekDate=(time:number)=>{
  //选中的时间戳
  const timestamp = time;
  const serverDate = new Date(time);

  //本周周日的的时间
  const sundayTiem = timestamp + ((7 - serverDate.getDay()) * 24 * 60 * 60 * 1000)
  const SundayData = new Date(sundayTiem);
  //年
  const endY = SundayData.getFullYear();
  //月
  const endM = (SundayData.getMonth() + 1 < 10 ? '0' + (SundayData.getMonth() + 1) : SundayData.getMonth() + 1);
  //日
  const endD = SundayData.getDate() < 10 ? '0' + SundayData.getDate() : SundayData.getDate();
    console.log('周日：  ' + endY + '-' + endM + '-' + endD);

  // 本周周一的时间
  const startTime = timestamp - ((serverDate.getDay() - 1) * 24 * 60 * 60 * 1000)
  const startData = new Date(startTime);
  //年
  const startY = startData.getFullYear();
  //月
  const startM = (startData.getMonth() + 1 < 10 ? '0' + (startData.getMonth() + 1) : startData.getMonth() + 1);
  //日
  const startD = startData.getDate() < 10 ? '0' + startData.getDate() : startData.getDate();
  //输出值
  const config = {
      createTime: startY + '-' + startM + '-' + startD + ' 00:00:00',
      endTime: endY + '-' + endM + '-' + endD + ' 23:59:59'
  }
  return config;
}

// 获取本月时间
export const monthDate =()=>{
  const time = new Date().getTime();
  return getMonthDate(time);
}

// 获取上月时间
export const lastMonthDate =()=>{
  const time = new Date().getTime()-1000*60*60*24*30;
  return getMonthDate(time);
}

//按照时间戳获取月初和月末时间
export const getMonthDate=(time:number)=>{
  const nowDate = new Date(time);
  const fullYear = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
  const endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天
  const createTime = formatDate(nowDate.setDate(1),"YYYY-MM-DD")+" 00:00:00";//当月第一天
  const endTime = formatDate(nowDate.setDate(endOfMonth),"YYYY-MM-DD")+" 23:59:59";//当月最后一天
  return { createTime,endTime };
}

