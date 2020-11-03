<template>
    <div class="main-pageopen">
        <vant-custom-tab @click="changeTab" :actived="tabindex">
            <van-tab v-for="(item,index) in tabData" :key="index" :title="item.title" :name="item.id">
                <div v-show="datas.articleCount != 0" class="scrolldiv">
                    <div class="hairline-bottom divcon">
                        <span class="goText">
                            共有<span class="goTextred">{{datas.articleCount}}</span>项内容
                        </span>
                    </div>
                    <vant-custom-list-refresh :reguler="true" ref="listRefresh" :pageSize='20' pageSizeKey="pageSize" pageNoKey="pageNum" records="list" :param="vantCustomListRefreshParam" url="//zgeinteractiont800.systoon.com/api/api/news/newsSubDetail" @getData="getListdata">
                        <div>
                            <div v-for="(items,index) in data" :key="index" class="paddiv hairline-bottom">
                                <customer-news :title="items.title" :labelLeft="items.pubTime|filterDate" :showLeftImg='false' :showRightImg='false' :showLine='true'  @click="goUrl(items.id)">
                                    <span></span>
                                    <span slot="label">
                                    <van-tag type="primary" :plain='false' :round='true' :mark='false' v-show="item.title == '财政公开'"
                                             color="rgba(250,83,1,1)">
                                        <span>
                                            {{items.categoryName}}
                                        </span>
                                    </van-tag>
                                </span>
                                </customer-news>
                            </div>
                        </div>
                    </vant-custom-list-refresh>
                </div>
                <div style="overflow: hidden" v-show="datas.articleCount == 0">
                    <customer-no-data title="暂无数据" class="customerNoData"></customer-no-data>
                </div>
            </van-tab>
        </vant-custom-tab>
    </div>
</template>

<script>
  import {dateFormat} from '@/assets/utils/date.util.js'
  export default {
    components: {},
    props: {},
    data() {
      return {
        tabindex: '', // tab切换角标
        tabData: [],
        data: '',
        datas: '',
        vantCustomListRefreshParam: {}
      }
    },
    created() {
      this.tabindex = window.sessionStorage.getItem('tabindex') || 0;
      this.getData();
    },
    filters:{
      filterDate(val){
        return dateFormat('yyyy-MM-dd',val)
      }
    },
    methods: {
      changeTab (index) {
        this.tabindex = index.index;
        this.vantCustomListRefreshParam.newsId = this.tabData[index.index].id;
        this.$refs.listRefresh[0].onRefresh();
      },
      getData(){
        let params = {
          "articleType": 3,
          "articleTypeList": [

          ],
          "channelCode": "200",
          "columnId": 201,
          "endTime": 0,
          "keywords": "",
          "pageNum": 1,
          "pageSize": 30,
          "startTime": 0
        };
        return this.$http.post("//zgeinteractiont800.systoon.com/api/api/news/getNewsList", params)
          .then((res) => {
            this.tabData = res.data.list;
            this.getList(this.tabData[this.tabindex].id);
            return Promise.resolve(res)
          }).catch((e) => {
            return Promise.reject(e)
          })
      },
      getList(id){
        this.vantCustomListRefreshParam = {
          "channelCode": "200",
          "newsId": id,
          "pageFlag": false,
          "pageNum": 1,
          "pageSize": 20
        }
        let params = this.vantCustomListRefreshParam;
        return this.$http.post("//zgeinteractiont800.systoon.com/api/api/news/newsSubDetail", params)
          .then((res) => {
            this.datas = res.data;
            this.data = res.data.news.list;
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
        window.sessionStorage.setItem('tabindex',this.tabindex);
        window.location.href = 'http://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/detail?'+ 'channelDetailTitle=' + '&channelCode=200' + '&interactuser=OGrkTa3LDZtWrR3KLqnQM4G1RVjo85NpCKeYkCHBJa2CAJlroz0w043dyAJ7j6Tjxmt7dVVXBVg=' + '&id=' + id;
      }
    },
  }
</script>

<style>
    .van-cell--clickable:active {
        background-color: #fff !important;
    }
</style>
<style lang="less" scoped>

    .main-pageopen {
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
