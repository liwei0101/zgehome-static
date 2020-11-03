
<template>
	<div class="main-out" >
		<div style="position: relative"  @click="goUrl()">
			<img src="@/assets/outEvil.png" class="img"/>
			<div class="outEvil-notice">
				中共内蒙古自治区公安厅委员会扫黑除恶专项巡察公告
			</div>
		</div>
		<div class="outEvil-content">
			<div ref='scrollBox' v-if="islist" :class="!newsListParmas.keywords?'scroll-box':'scroll-box search-box'" v-infinite-scroll="loadMore" infinite-scroll-disabled="allLoad"
				 infinite-scroll-distance="20">

				<!-- 列表数据 -->
				<div v-if="listData&&listData.length">
					<InfoList @clickItem='clickItem' :infolistData='listData'></InfoList>
					<div class="loading" v-if="loading">
						正在努力加载中...
					</div>
					<div class="allLoad" v-if="allLoad">
						我也是有底线的
					</div>
				</div>
				<div class="nodata" v-if="listData&&listData.length==0&&!newsListParmas.keywords">
					<div></div>
					<p>暂无此类数据</p>
				</div>
				<div class="search-nodata" v-if="listData&&listData.length==0&&newsListParmas.keywords">
					<div></div>
					<p>抱歉，<span>资讯中</span>没有找到<span>“{{newsListParmas.keywords}}”</span>相关内容,可到<span>其他页签</span>查看搜索结果</p>
				</div>
			</div>
			<img v-if="!islist" class="imgloading" src="@/assets/loading.jpg" alt="">
		</div>
	</div>
</template>

<script>
  // import {
  // 	newsList,
  // 	columnInfo
  // } from '@/service/api/app.js'

  import Vue from 'vue'
  import { Toast } from 'vant';
  import {
    InfiniteScroll
  } from 'mint-ui';
  Vue.use(Toast);
  Vue.use(InfiniteScroll);
  export default {
    data() {
      return {
        tabList: [],
        activedTab: 1,
        newsListParmas: {
          "channelCode": 200,
          "articleType": 0,
          "articleTypeList": [1, 3, 7],
          "columnId": 199,
          "keywords": "",
          "pageNum": 1,
          "pageSize": 10
        },
        newsListData: null,
        listData: null,
		islist: false,
        //加载中
        loading: false,
        //全部加载完成
        allLoad: false,
        //防止多次加载，记录现在的页码
        LastPageNumber: 1,
      }
    },
    filters: {

    },
    computed: {

    },
    methods: {
      goUrl(){
        this.$router.push({
          name: 'detail'
        })
      },
      /**
       * 页面初始化
       */
      init() {
        // this.resetData('all')
        this.newsListFun();
        // if ($util.getQueryString('keyWords')) {
        // 	this.newsListParmas.keywords = decodeURI($util.getQueryString('keyWords'))
        // 	this.newsListFun()
        // } else {
        // 	this.newsListParmas.keywords = ''
        // 	this.columnInfoFun()
        // }


      },
      /**
       * 重置数据
       */
      resetData(n) {
        switch (n) {
          case "all":
        }
      },
      newsList(params) {
        // if(window.userId) setSession(window.userId);
        return this.$http.post('//zgeinteractiont800.systoon.com/api/api/news/getNewsList', params).then(function (res) {
          return Promise.resolve(res)
        }).catch(function (e) {
          return Promise.reject(e)
        })
      },
      /**
       * 新闻列表
       */
      newsListFun() {
        this.LastPageNumber = this.newsListParmas.pageNum;
        this.newsList(this.newsListParmas)
          .then((res) => {
            this.islist = true;
            if (res.meta.code == 0) {
              if (this.newsListParmas.pageNum == 1) {
                this.newsListData = res.data
                this.listData = res.data.list
              } else {
                this.newsListData = res.data
                this.listData = this.listData.concat(res.data.list)
              }
              this.allLoad = res.data.isLastPage;
              this.newsListParmas.pageNum++
            } else {
              Toast('服务器繁忙，请稍后重试')
            }

          })
          .catch((error) => {
            Toast('服务器繁忙，请稍后重试')
          })
      },
      /**
       * 栏目表
       */
      // columnInfoFun() {
      // 	columnInfo({
      // 			channelCode: window.channelCode
      // 		})
      // 		.then((res) => {
      // 			if (res.meta.code == 0) {
      // 				this.tabList = res.data
      // 				this.newsListParmas.columnId = this.tabList[0].id
      // 				this.newsListFun()
      // 			} else {
      // 				$util.Toast('服务器繁忙，请稍后重试')
      // 			}
      //
      // 		})
      // 		.catch((error) => {
      // 			$util.Toast('服务器繁忙，请稍后重试')
      // 		})
      // },
      /**
       * 点击tab
       */
      // clickTab(item, index) {
      // 	this.activedTab = index + 1
      // 	this.newsListParmas.columnId = item.id
      // 	this.newsListParmas.pageNum = 1
      //
      //
      // 	this.newsListFun()
      // },
      /**
       * 加载更多
       */
      loadMore() {
        if (this.allLoad) {
          Toast('已加载全部数据')
        }
        if (this.allLoad || this.LastPageNumber == this.newsListParmas.pageNum) return;
        this.newsListFun()
      },
      /**
       * 点击列表，跳转详情
       */
      clickItem(item) {
		window.location.href = 'http://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/detail?'+ 'channelDetailTitle=' + '&channelCode=200' + '&interactuser=OGrkTa3LDZtWrR3KLqnQM4G1RVjo85NpCKeYkCHBJa2CAJlroz0w043dyAJ7j6Tjxmt7dVVXBVg=' + '&id=' + item.id;
        // if(item.articleType==3){
        //   console.log(window.host+"/app/information/index.html#/subject?newsId=" + item.id + '&channelDetailTitle='+$util.getQueryString('channelDetailTitle')+ '&subjectTitle=' +
        //     $util.getQueryString('subjectTitle'))
        //   toongine.protocol.request({
        //     params: {
        //       scheme: 'toon',
        //       domain: 'tnwebappui',
        //       path: 'openapp',
        //       query: {
        //         appUrl: window.host+"/app/information/index.html#/subject?newsId=" + item.id + '&channelDetailTitle='+$util.getQueryString('channelDetailTitle')+ '&subjectTitle=' +
        //         $util.getQueryString('subjectTitle')
        //       }
        //     },
        //     callback: res => {
        //       console.log("res: " + res.data);
        //     }
        //   })
        // }else{
        //
        //   toongine.protocol.request({
        //     params: {
        //       scheme: 'toon',
        //       domain: 'tnwebappui',
        //       path: 'openapp',
        //       query: {
        //         appUrl: window.host+"/app/information/index.html#/detail?newsId=" + item.id + '&channelDetailTitle='+$util.getQueryString('channelDetailTitle')
        //       }
        //     },
        //     callback: res => {
        //       console.log("res: " + res.data);
        //     }
        //   })
        // }

      }
    },
    //路由进入之前
    beforeRouteEnter(to, from, next) {
      next();
    },
    //页面创建完成
    // activated() {
    //   this.init();
    // },

    //挂载结束状态
    mounted() {
      this.init();
      // if($util.getQueryString('channelTitle')){
      // 	$util.setTitle($util.getQueryString('channelTitle'))
      // }else{
      // 	$util.setTitle("资讯")
      // }

    },
    components: {

    }
  };

</script>


<style lang="less"  scoped>

.main-out {
	overflow: hidden;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.img {
	display: block;
	max-width:100%;
	width:100%; 
}
.outEvil-content{
	position: absolute;
	top: 156px;
	left: 0;
	right: 0;
	bottom: 0;
}
.outEvil-notice{
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
	position: absolute;
	bottom: 0;
	padding: 5px 8px;
	color: #fff;
	font-size: 15px;
	background: rgba(0,0,0,0.5);
}
.nodata {
	height: 100%;
	/*height: -webkit-calc(100% - 44px);*/
	background: #fff;
	overflow: hidden;
	div {
		width: 120px;
		height: 120px;
		margin: 121px auto 16px;
		background: url(../../../assets/nodata.png) no-repeat;
		background-size: 100% 100%;
	}

	p {
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #606060;
		letter-spacing: 0;
		line-height: 20px;
		text-align: center;
	}
}
.search-nodata{
	height: 100%;
	background: #fff;
	overflow: hidden;

	div {
		width: 120px;
		height: 120px;
		margin: 54px auto 30px;
		background: url(../../../assets/search-nodata.png) no-repeat;
		background-size: 100% 100%;
	}

	p {
		font-family: PingFangSC-Regular;
		margin: 0 auto;
		width: 294px;
		font-size: 15px;
		color: #606060;
		letter-spacing: 0;

		text-align: center;
		span{
			display: inline-block;
			font-family: PingFangSC-Regular;
			font-size: 15px;
			color: #FE674B;
			letter-spacing: 0;
			text-align: center;
			margin-top: -4px
		}
	}
}
.scroll-box{
	height: 100%;
	/*height: calc(100% - 44px);*/
	/*height: -webkit-calc(100% - 44px);*/
	background: #fff;
	overflow: scroll;
	-webkit-overflow-scrolling: touch ;
}
.scroll-box.search-box{
	height: 100%;
}
.loading,.allLoad{
	text-align: center;
	height: 44px;
	line-height: 44px;
	font-size: 15px;
	font-family: PingFangSC-Regular;
	background: #fff;
}
.imgloading{
	width: 44px;
	height: 44px;
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translate(-50%,-50%);
}
</style>
