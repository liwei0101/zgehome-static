<template>
    <div class="main-construction-list">
        <div v-show="datas.articleCount != 0" class="scrolldiv">
            <vant-custom-list-refresh :reguler="true" ref="listRefresh" :pageSize='20' pageSizeKey="pageSize" pageNoKey="pageNum" records="list" :param="vantCustomListRefreshParam" url="https://zgeinteractiont800.systoon.com/api/api/news/getNewsList">
                <div>
                    <div v-for="(items,index) in data" :key="index" class="paddiv hairline-bottom">
                        <customer-news v-if="items.pubTime" :title="items.title" :labelLeft="items.pubTime|filterDate" :showLeftImg='false' :showRightImg='false' :showLine='true'  @click="goUrl(items.id)">
                            
                        </customer-news>
                        <customer-news v-show="!items.pubTime" :title="items.title" :showLeftImg='false' :showRightImg='false' :showLine='true'  @click="goUrl(items.id)">
                            
                        </customer-news>
                    </div>
                </div>
            </vant-custom-list-refresh>
        </div>
        <div style="overflow: hidden" v-show="datas.articleCount == 0">
            <customer-no-data title="暂无数据" class="customerNoData"></customer-no-data>
        </div>
    </div>
</template>

<script>
  import {dateFormat} from '@/assets/utils/date.util.js'
  export default {
    components: {},
    props: {},
    data() {
      return {
        data: '',
        datas: '',
        vantCustomListRefreshParam: {},
        queryData: this.$route.query
      }
    },
    created() {
        if (this.queryData.id == '242') {
            document.title = '领导讲话'
        } else if (this.queryData.id == '196') {
            document.title = '党政要闻'
        } else {
            document.title = '工作动态'
        }
        this.getList();
    },
    filters:{
      filterDate(val){
        return dateFormat('yyyy-MM-dd hh:mm',val)
      }
    },
    methods: {
      getList(){
        this.vantCustomListRefreshParam = {
            'articleType': 1,
            'articleTypeList': [],
            'channelCode': "200",
            'columnId': this.queryData.id,
            'endTime': 0,
            'keywords': "",
            'pageNum': 1,
            'pageSize': 20,
            'startTime': 0
        }
        let params = this.vantCustomListRefreshParam;
        //t200bjinteraction.zhengtoon.com/api/news/getNewsList
        return this.$http.post("https://zgeinteractiont800.systoon.com/api/api/news/getNewsList", params)
          .then((res) => {
            this.datas = res.data;
            this.data = res.data.list;
            return Promise.resolve(res)
          }).catch((e) => {
            return Promise.reject(e)
          })
      },
      goUrl(id) {
        window.location.href = 'https://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/detail?'+ 'channelDetailTitle=' + '&channelCode=200' + '&interactuser=OGrkTa3LDZtWrR3KLqnQM4G1RVjo85NpCKeYkCHBJa2CAJlroz0w043dyAJ7j6Tjxmt7dVVXBVg=' + '&id=' + id;
      }
    },
  }
</script>

<style>
    .van-cell--clickable:active {
        background-color: #fff !important;
    }
    .main-construction-list .news-text-title {
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      display: -webkit-box !important;
      -webkit-line-clamp: 2 !important;
      -webkit-box-orient: vertical !important;
      white-space: initial !important;
    }
</style>
<style lang="less" scoped>

    .main-construction-list {
        overflow: hidden;
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
        text-align: left;
        font-size: 18px;
        padding: 0px 0px 0px 16px;
        .goTextred{
            color: #df3031;
        }
    }

    .vantCustomSelectData {
        width: 40%;
        right: 0;
        position: absolute;
        top: 0;
    }

    .divcon {
        position: relative;
        height: 44px;
        line-height: 44px;
        border-top: 3px solid #f8f8fb;
    }

    .goText1 {
        text-align: left;
        font-size: 18px;
        padding: 0px 0px 0px 16px;
    }

    .vantCustomSelectData1 {
        width: 40%;
        right: 0;
        position: absolute;
        top: 0;
    }

    .div1 {
        position: relative;
        height: 44px;
        line-height: 44px;
    }

    .goText2 {
        text-align: left;
        font-size: 18px;
        padding: 0px 0px 0px 16px;
    }

    .vantCustomSelectData2 {
        width: 40%;
        right: 0;
        position: absolute;
        top: 0;
    }

    .div2 {
        position: relative;
        height: 44px;
        line-height: 44px;
    }

    .goText3 {
        text-align: left;
        font-size: 18px;
        padding: 0px 0px 0px 16px;
    }

    .vantCustomSelectData3 {
        width: 40%;
        right: 0;
        position: absolute;
        top: 0;
    }

    .div3 {
        position: relative;
        height: 44px;
        line-height: 44px;
    }

    .goText4 {
        text-align: left;
        font-size: 18px;
        padding: 0px 0px 0px 16px;
    }

    .vantCustomSelectData4 {
        width: 40%;
        right: 0;
        position: absolute;
        top: 0;
    }

    .div4 {
        position: relative;
        height: 44px;
        line-height: 44px;
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
</style>
