/*!
 * 日期工具类
 * 
 * Author chenshaobo
 * Copyright (c) 2018
 * 
 */

/**
 * 格式化日期 
 * new Date().Format("yyyy-MM-dd")  \\   new Date().Format("yyyy-MM-dd hh:mm:ss")
 * @param {Object} fmt
 * @param {Object} timestamp
 */
export function dateFormat(fmt, timestamp) {
	var _data = new Date(parseInt(timestamp));
	var o = {
		"M+": _data.getMonth() + 1, //月份
		"d+": _data.getDate(), //日
		"h+": _data.getHours(), //小时
		"m+": _data.getMinutes(), //分
		"s+": _data.getSeconds(), //秒
		"q+": Math.floor((_data.getMonth() + 3) / 3), //季度
		"S": _data.getMilliseconds() //毫秒
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_data.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

/**
 * 时间戳转换为友好的时间日期格式
 * 输出格式：刚刚，3分钟前，21小时前
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export function dateStr(date) {
	//获取js 时间戳
	var time = new Date().getTime();
	var _data = new Date(parseInt(date));
	//去掉 js 时间戳后三位，与php 时间戳保持一致
	time = parseInt((time - date) / 1000);
	//存储转换值
	var s;
	if(time < 60 * 1) { //1分钟内
		return '刚刚';
	} else if((time < 60 * 60) && (time >= 60 * 1)) {
		//超过十分钟少于1小时
		s = Math.floor(time / 60);
		return s + "分钟前";
	} else if((time < 60 * 60 * 24) && (time >= 60 * 60)) {
		//判断是否为昨天
		//下个月
		if(_data.getMonth() < (new Date().getMonth())) {
			return "昨天 "
		} else if(_data.getDate() < (new Date().getDate())) {
			return "昨天 "
		}
		//超过1小时少于24小时
		s = Math.floor(time / 60 / 60);
		return s + "小时前";
	} else if((time < 60 * 60 * 24 * 2) && (time >= 60 * 60 * 24)) {
		//昨天
		return "昨天 "
	} else {
		return false;
	}
}



//全部导出
export default Object.assign(
	dateStr ,
	dateFormat 
)