<template>
    <div class="main-construction">
      <div>
        <img src="@/assets/construction.png" class="img"/>
      </div>
      <section class="classification">
        <div @click="goTab(1)">
          <img src="@/assets/education.png" alt="">
          <span>云教育</span>
        </div>
        <div @click="goTab(2)">
          <img src="@/assets/life.png" alt="">
          <span>组织生活</span>
        </div>
        <div @click="goTab(3)">
          <img src="@/assets/cloudcon.png" alt="">
          <span>云党建</span>
        </div>
        <!-- <div @click="goTab(4)">
          <img src="@/assets/library.png" alt="">
          <span>党建沙龙</span>
        </div> -->
      </section>
      <div class="black"></div>
      <vant-custom-tab @click="changeTab" ref="tebchange" :actived="indexi">
          <van-tab v-for="(item,index) in tabData" :key="index" :title="item.title" :name="item.id">
              <div class="scrolldiv">
                  <!-- <vant-custom-list-refresh :reguler="true" ref="listRefresh" :pageSize='20' pageSizeKey="pageSize" pageNoKey="pageNum" records="list" :param="vantCustomListRefreshParam" url="//t200bjinteraction.zhengtoon.com/api/news/getNewsList"  @getData="getListdata"> -->
                      <div v-show="datas.total != 0">
                          <div v-for="(items,index) in data" :key="index" class="paddiv hairline-bottom">
                              <customer-news v-if="items.pubTime" :title="items.title" :labelLeft="items.pubTime|filterDate" :showLeftImg='false' :showRightImg='false' :showLine='true' @click="goUrl(items.id)">
                                  <span></span>
                                  <!-- <span slot="label">
                                    <van-tag type="primary" :plain='false' :round='true' :mark='false' v-show="item.title == '党政要闻'"
                                             color="rgba(250,83,1,1)">
                                        <span>
                                            {{items.categoryName}}
                                        </span>
                                    </van-tag>
                                </span> -->
                              </customer-news>
                              <customer-news v-show="!items.pubTime" :title="items.title" :showLeftImg='false' :showRightImg='false' :showLine='true' @click="goUrl(items.id)">
                                  <span></span>
                                  <!-- <span slot="label">
                                    <van-tag type="primary" :plain='false' :round='true' :mark='false' v-show="item.title == '党政要闻'"
                                             color="rgba(250,83,1,1)">
                                        <span>
                                            {{items.categoryName}}
                                        </span>
                                    </van-tag>
                                </span> -->
                              </customer-news>
                          </div>
                      </div>
                  <!-- </vant-custom-list-refresh> -->
                  <div v-show="datas.total != 0" class="more-data">
                    <div @click="goList">
                      <span class="more-text">
                        查看更多
                      </span>
                      <img src="@/assets/right.png" class="more-img"/>
                    </div>
                  </div>
                  <div style="overflow: hidden" v-show="datas.total == 0">
                      <customer-no-data title="暂无数据" class="customerNoData"></customer-no-data>
                  </div>
              </div>
          </van-tab>
      </vant-custom-tab>
      
    </div>
</template>

<script>
  import Vue from 'vue'
  import {dateFormat} from '@/assets/utils/date.util.js'
  export default{
    components:{

    },
    props:{

    },
    data(){
      return {
        indexi: '', // 当前的tab角标
        tabData: [],
        data: [],
        datas: '',
        vantCustomListRefreshParam:{},
        tabJson: [
          {
            'title': "领导讲话",
            'id': 242
          },
          {
            'title': "党政要闻",
            'id': 196
          },
          {
            'title': "工作动态",
            'id': 243
          }
        ]
      }
    },
    created() {
      this.indexi = window.sessionStorage.getItem('indexi') || 0;
      this.getData();
    },
    filters:{
      filterDate(val){
        return dateFormat('yyyy-MM-dd hh:mm',val)
      }
    },
    methods:{
      changeTab (index) {
        this.indexi = index.index;
        this.vantCustomListRefreshParam.columnId = this.tabData[index.index].id;
        // this.$refs.listRefresh[0].onRefresh();
        // console.log(index)
        this.getList(this.tabData[index.index].id)
      },
      getData(){
        // let params = {
        //   "articleType": 3,
        //   "articleTypeList": [

        //   ],
        //   "channelCode": "200",
        //   "columnId": 203,
        //   "endTime": 0,
        //   "keywords": "",
        //   "pageNum": 1,
        //   "pageSize": 30,
        //   "startTime": 0
        // };
        // return this.$http.post("//zgeinteractiont800.systoon.com/api/api/news/getNewsList", params)
        //   .then((res) => {
        //     this.tabData = res.data.list;
        //     console.log(this.tabData[this.indexi]);
        //     this.getList(this.tabData[this.indexi].id);
        //     return Promise.resolve(res)
        //   }).catch((e) => {
        //     return Promise.reject(e)
        //   })
          
          this.tabData = this.tabJson
          this.getList(this.tabData[this.indexi].id);
      },
      getList(id){
        // this.vantCustomListRefreshParam = {
        //   "channelCode": "203",
        //   "newsId": id,
        //   "pageFlag": false,
        //   "pageNum": 1,
        //   "pageSize": 20
        // }
        // let params = this.vantCustomListRefreshParam;
        // return this.$http.post("//zgeinteractiont800.systoon.com/api/api/news/newsSubDetail", params)
        //   .then((res) => {
        //     this.datas = res.data;
        //     this.data = res.data.news.list;
        //     return Promise.resolve(res)
        //   }).catch((e) => {
        //     return Promise.reject(e)
        //   })

          this.vantCustomListRefreshParam = {
            'articleType': 1,
            'articleTypeList': [],
            'channelCode': "200",
            'columnId': id,
            'endTime': 0,
            'keywords': "",
            'pageNum': 1,
            'pageSize': 5,
            'startTime': 0
        }
        // t200bjinteraction.zhengtoon.com/api/news/getNewsList
        let params = this.vantCustomListRefreshParam;
        return this.$http.post("https://zgeinteractiont800.systoon.com/api/api/news/getNewsList", params)
          .then((res) => {
            this.datas = res.data;
            this.data = res.data.list;
            return Promise.resolve(res)
          }).catch((e) => {
            return Promise.reject(e)
          })
      },
      getListdata(value,datas){
        this.data = value;
        this.datas = datas;
      },
      goUrl(id) {
        window.sessionStorage.setItem('indexi',this.indexi);
        window.location.href = 'https://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/detail?'+ 'channelDetailTitle=' + '&channelCode=200' + '&interactuser=OGrkTa3LDZtWrR3KLqnQM4G1RVjo85NpCKeYkCHBJa2CAJlroz0w043dyAJ7j6Tjxmt7dVVXBVg=' + '&id=' + id;
      },
      goTab (index) {
        switch(index) {
          case 1:
            window.location.href = 'https://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/?channelTitle=&channelDetailTitle=&channelCode=200&serviceCode=yunjiaoyu'
            // window.location.href = 'http://t100static.zhengtoon.com/zhengtong-interaction/app/information/index.html#/?channelTitle=&channelDetailTitle=&channelCode=200&serviceCode=yunjiaoyu'
            break;
          case 2:
            window.location.href = 'https://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/?channelTitle=&channelDetailTitle=&channelCode=200&serviceCode=yunjiaoyu'
            // window.location.href = 'http://t100static.zhengtoon.com/zhengtong-interaction/app/information/index.html#/?channelTitle=&channelDetailTitle=&channelCode=200&serviceCode=zuzhishenghuo'
            break;
          case 3:
            window.location.href = 'http://www.12371.cn/special/dzby/'
            break;
        }
        
      },
      goList () {
        this.$router.push({
          name: 'constructionList',
          query: {id: this.tabData[this.indexi].id}
        })
      }
    },
  }
</script>

<style>
    .van-cell--clickable:active {
     background-color: #fff!important;
    }
    .main-construction .van-tabs--line {
      height: auto;
    }
    .main-construction .van-tabs__content {
      position: initial;
    }
    .main-construction .customerNoData {
      margin-top: 60px !important;
    }
    .main-construction .news-text-title {
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      display: -webkit-box !important;
      -webkit-line-clamp: 2 !important;
      -webkit-box-orient: vertical !important;
      white-space: initial !important;
    }
</style>
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
    .main-construction {
        // overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .scrolldiv{
        overflow: scroll;
        height: 100%;
        -webkit-overflow-scrolling: touch!important;
    }
    .goText {
        text-align:left;
        font-size:18px;
        padding:0px 0px 0px 16px;
        .goTextred{
            color: #df3031;
        }
    }
    .vantCustomSelectData {
        width:40%;
        right:0;
        position:absolute;
        top:0;
    }
    .divdata {
        position:relative;
        height:44px;
        line-height:44px;
        border-top: 3px solid #f8f8fb;
    }
    .goText1 {
        text-align:left;
        font-size:18px;
        padding:0px 0px 0px 16px;
    }
    .vantCustomSelectData1 {
        width:40%;
        right:0;
        position:absolute;
        top:0;
    }
    .div1 {
        position:relative;
        height:44px;
        line-height:44px;
    }
    .goText2 {
        text-align:left;
        font-size:18px;
        padding:0px 0px 0px 16px;
    }
    .vantCustomSelectData2 {
        width:40%;
        right:0;
        position:absolute;
        top:0;
    }
    .customerNoData{
        margin-top: 150px;
    }
    .paddiv{
        margin-left: 16px;
    }
    .van-tab__pane{
        height: 100%;
    }

    .more-data {
      width: 100%;
      line-height: 46px;
	    text-align:center; 
    }
    .more-text {
      	font-size:14px;
        color:#222222;
        margin:0px 8px 0px 0px; 
    }
    .more-img {
      max-width:100%;
      width:6px;
      height:10px; 
    }

    .classification {
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
        span {
          padding-top: 12px;
        }
      }
    }
    .black {
      width: 100%;
      height: 10px;
      background: #f8f8fb;
    }
</style>

