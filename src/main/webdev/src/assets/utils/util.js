
/*!
 * html/dom 工具函数
 * 主要涉及操作DOM ,获取浏览器信息等
 * 
 * Author chenshaobo
 * Copyright (c) 2018
 * 
 */




export  function loadJS(src, callback){
    var script = document.createElement('script');
    var head = document.getElementsByTagName('head')[0];
    script.src = src;
    head.appendChild(script);
    callback();
}

/**
 * 获取url参数
 * @param name
 * @returns {*}
 */
export function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r === null) {
        var reg2 = /^.*?[?]/;
        var r2 = window.location.hash.replace(reg2, "")
        r = r2.match(reg);
    }
    if (r != null) return r[2];
    return null;
}

/**
 * 设置页面标题
 * @param name
 * @returns {null}
 */
export function setTit(title) {
    if (!title) return;
    document.title = title;
    try {
        setTitle(title)
    } catch (e) {

    }
}
/**
 * 关闭 toon 窗口
 */
export function closeWindow() {
    var params = {
        "functionType": 1
    };
    window.location.href = "toon://mwap/window?params=" + JSON.stringify(params);
}


/**
 * 插入script
 */
export function insertScript(url, callback) {
    var thatScript = document.createElement('script');
    thatScript.type = 'text/javascript';
    thatScript.src = url;
    document.body.appendChild(thatScript);
    thatScript.onload = function () {
        return callback && callback();
    }
}

/**
 * 下载  
 * @param {Object} url
 */
function DownURL(url) {
    try {
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
    } catch (e) {
        console.log('下载失败')
    }
}


/**
 * confirm组件 - 建议组件化
 * @param {Object} param
 */
export function confirm(param) {
    var componentsAlert = document.getElementById("componentsAlert") || false;
    //if(!param ){componentsAlert.style={display : "none"}}
    if (!param && componentsAlert.parentNode) {
        componentsAlert.parentNode.removeChild(componentsAlert);
    }
    var param = param || {};
    param.show = param.show || true; //默认显示
    param.title = param.title || "";
    param.message = param.message || "可能是网络环境不稳定引起的系统异常，请新打开页面后重试！";
    param.btnEsc = param.btnEsc == '' ? '' : param.btnEsc || "取消";
    param.btnOk = param.btnOk || "确定";
    param.btnOkFun = param.btnOkFun || function () {};
    param.btnEscFun = param.btnEscFun || function () {};
    param.input = param.input || false;
    param.class = param.class || "";
    if (!componentsAlert) {
        var style = '<style>';
        style +=
            '.componentsAlert {z-index: 999;position: fixed;top:0%;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.7); }\
								.componentsAlert .content{color: #030303;position: fixed;top:50%;left: 50%; -webkit-transform: translate(-50%,-50%);width:270px;background: rgba(255,255,255,0.90);border-radius: 5px;text-align: center;}\
								.componentsAlert .title{padding:20px 0 0 0 ;}\
								.componentsAlert .message{font-size: 13px;line-height: 150%;#color:#030303;padding:24px 15px 15px 15px;}\
								.componentsAlert .btnGroup{line-height: 43px;height: 43px; font-size: 0; }\
								.componentsAlert .btnGroup .btn {display:none; font-size:17px }\
								.componentsAlert .btnGroup.esc.ok .btn {width: 50%;display: inline-block;}\
								.componentsAlert .btnGroup.ok .btn.btnOk {width: 50%;display: inline-block;}\
								.componentsAlert .btnGroup .btnOk{color: #007AFF;}\
								.componentsAlert .btnGroup .btnEsc{color: #007AFF;}\
								.componentsAlert .lsh-confirm-pwd{margin: 0 auto 15px auto;width: 240px;height: 24px;padding-left: 6px;}\
								.componentsAlert .lsh-confirm-pwd::after{border-radius: 2px;}\
								.componentsAlert .lsh-confirm-input{width: 240px;height: 24px;position:absolute;z-index:99;left:6px;top:2px;line-height: 24px;font-size: 13px;color: #000;}\
								'
        style += '</style>';

        var html = '<div class="componentsAlert  ' + param.class + ' "  style="display:none;" id="componentsAlert">';
        html += '<div class="content">';
        html += param.title ? '<p class="title" > ' + param.title + '</p>' : '';
        html += '<p  class="message"  >';
        html += param.message;
        html += '</p>';
        html += param.input ?
            '<div class="lsh-confirm-pwd hairline"><input maxlength="18" id="textPwd" type="password" class="lsh-confirm-input" placeholder="输入实名认证密码"></div>' :
            '';
        html += '<p class="btnGroup ' + (param.btnEsc != "" ? "esc" : "") + ' ok hairline-top">';
        html += '<span  class="btn btnEsc hairline-right" id="AlertBtnEsc" >' + param.btnEsc + '</span>';
        html += '<span class="btn btnOk "  id="AlertBtnOk"  > ' + param.btnOk + '</span>';
        html += '</p>';
        html += '</div></div>';
        var alertDiv = document.createElement("div");
        alertDiv.innerHTML = style + html;
        document.body.appendChild(alertDiv);
        componentsAlert = document.getElementById("componentsAlert");
        //绑定事件
        document.getElementById("AlertBtnEsc").addEventListener('click', function () {
            param.btnEscFun();
            componentsAlert.style.display = "none";
            if (componentsAlert.parentNode) {
                componentsAlert.parentNode.removeChild(componentsAlert);
            }
        }, false);
        document.getElementById("AlertBtnOk").addEventListener('click', function () {
            param.btnOkFun();
            componentsAlert.style.display = "none";
            if (componentsAlert.parentNode) {
                componentsAlert.parentNode.removeChild(componentsAlert);
            }
        }, false);
    }
    if (param.show) {
        componentsAlert.style.display = "block";
    } else {
        componentsAlert.style.display = "none";
    }
}

/*!
 * 对象/变量 - 常用工具
 * 主要涉及操作DOM ,获取浏览器信息等
 * 
 * Author chenshaobo
 * Copyright (c) 2018
 * 
 */


/**
 * 对象转换成url键值对
 * @param {Object} url
 * @param {Object} data
 */
export function objTurnToKeyValue(url, data) {
    if (typeof (url) == 'undefined' || url == null || url == '') {
        return '';
    }
    if (typeof (data) == 'undefined' || data == null || typeof (data) != 'object') {
        return '';
    }
    url = (url.indexOf("?") != -1) ? "" : "?";
    for (var k in data) {
        url = ((url.indexOf("=") != -1) ? "?" : "") + k + "=" + encodeURI(data[k]);
        console.log(url);
    }
    return url;
}
/**
 * 深拷贝 
 * @param {Object} source
 */
export function deepCopy(source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key];
    }

    return result;
}


/**
 * 字符串去左右空格 
 * @param {Object} s
 */
export function trim(s) {
    if (typeof s === "string") {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        return s;
    }
}


 
 
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





/*!
 * 前端存储类工具函数
 * 
 * Author chenshaobo
 * Copyright (c) 2018
 * 
 */

/**
 * 全局windows 
 * @param {Object} GKey
 * @param {Object} GValue
 */
 export function winData(GKey, GValue) {
	window.GData = window.GData || {};
	if(GValue != undefined) {
		window.GData[GKey] = GValue;
	} else {
		return window.GData[GKey];
	}
}

/**
 *会话级存储	  
 * @param {Object} key
 * @param {Object} value
 */
export function sessionData(key, value) {
	if(value) {
		value = JSON.stringify(value);
		sessionStorage.setItem(key, value)
	} else {
		let value = sessionStorage.getItem(key);
		value = JSON.parse(value);
		return value;
	}
}

/**
 * 本地长期存储 
 * @param {Object} key
 * @param {Object} value
 */
 export function localData(key, value) {
	if(value) {
		value = JSON.stringify(value);
		localStorage.setItem(key, value)
	} else {
		let value = localStorage.getItem(key);
		value = JSON.parse(value);
		return value;
	}
}

/**
 * 设置cookie
 * @param {Object} name
 * @param {Object} value
 * @param {Object} iDay
 */
 export function setCookie(name, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = name + '=' + value + ';expires=' + oDate;
};

/**
 * 获取cookie
 * @param {Object} name
 */
export function getCookie(name) {
	var arr = document.cookie.split('; ');
	for(var i = 0; i < arr[i].length; i++) 
	{
		var arr2 = arr[i].split('='); 
		if(arr2[0] == name) 
		{
			return arr2[1]; 
		}
		return ''; 
	}
};

/**
 * 删除cookie
 * 使用方法：getCookie('user')
 * @param {Object} name
 */
export function removeCookie(name) {
	setCookie(name, 1, -1); 
};
