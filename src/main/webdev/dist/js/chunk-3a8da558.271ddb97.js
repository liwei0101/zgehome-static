(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a8da558"],{"0121":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-pagework"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"no"==t.showImg,expression:"showImg=='no'"}],staticClass:"scrolldiv"},[i("vant-custom-list-refresh",{attrs:{autoLoad:!1,pageSize:20,pageSizeKey:"pageSize",pageNoKey:"pageNum",records:"list",param:t.vantCustomListRefreshParam,url:"//zgeinteractiont800.systoon.com/api/api/news/getNewsList"},on:{getData:t.getListdata}},t._l(t.data,(function(e,a){return i("div",{staticClass:"hairline-bottom mardiv",on:{click:function(a){return t.goUrl(e.id)}}},[i("customer-news",{attrs:{title:e.title,labelLeft:t._f("filterDate")(e.pubTime),showLeftImg:!1,showRightImg:!1,showLine:!0}},[i("span")])],1)})),0)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"yes"==t.showImg,expression:"showImg=='yes'"}],staticClass:"imgdiv"},[i("img",{staticClass:"img",attrs:{src:a("0d18"),alt:""}})])])},s=[],n=a("3c96"),o={components:{},props:{},data:function(){return{data:[],showImg:"",vantCustomListRefreshParam:{articleType:1,articleTypeList:[],channelCode:"200",columnId:200,endTime:0,keywords:"",pageNum:1,pageSize:20,startTime:0}}},mounted:function(){this.getData()},filters:{filterDate:function(t){return Object(n["a"])("yyyy-MM-dd",t)}},methods:{getListdata:function(t){this.data=t},getData:function(){var t=this;return this.showImg="yes",this.$http.post("//zgeinteractiont800.systoon.com/api/api/news/getNewsList",this.vantCustomListRefreshParam).then((function(e){return t.showImg="no",t.data=e.data.list,Promise.resolve(e)})).catch((function(t){return Promise.reject(t)}))},goUrl:function(t){window.location.href="http://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/detail?channelDetailTitle=&channelCode=200&interactuser=OGrkTa3LDZtWrR3KLqnQM4G1RVjo85NpCKeYkCHBJa2CAJlroz0w043dyAJ7j6Tjxmt7dVVXBVg=&id="+t}}},r=o,c=(a("16b6"),a("5511")),l=Object(c["a"])(r,i,s,!1,null,"663c4430",null);e["default"]=l.exports},"0d18":function(t,e,a){t.exports=a.p+"img/loading.c965e39d.jpg"},"16b6":function(t,e,a){"use strict";var i=a("6ca4"),s=a.n(i);s.a},"6ca4":function(t,e,a){}}]);