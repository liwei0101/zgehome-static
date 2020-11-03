<template>
    <div class="main-pagework">
        <div  v-show="showImg=='no'" class="scrolldiv">
            <vant-custom-list-refresh :autoLoad='false' :pageSize='20' pageSizeKey="pageSize" pageNoKey="pageNum" records="list" :param="vantCustomListRefreshParam" url="//zgeinteractiont800.systoon.com/api/api/news/getNewsList" @getData="getListdata">
                <div class="hairline-bottom mardiv" v-for="(  item,index  ) in data" @click="goUrl(item.id)">
                    <customer-news :title="item.title" :labelLeft="item.pubTime|filterDate" :showLeftImg='false' :showRightImg='false' :showLine='true' >
                        <span></span>
                    </customer-news>
                </div>
            </vant-custom-list-refresh>
        </div>
        <div class="imgdiv" v-show="showImg=='yes'">
            <img class="img" src="@/assets/loading.jpg" alt="">
        </div>
    </div>

</template>

<script>
  import {dateFormat} from '@/assets/utils/date.util.js'
  export default{
    components:{

    },
    props:{

    },
    data(){
      return {
        data: [],
        showImg: '',
        vantCustomListRefreshParam: {
          "articleType": 1,
          "articleTypeList": [
          ],
          "channelCode": "200",
          "columnId": 200,
          "endTime": 0,
          "keywords": "",
          "pageNum": 1,
          "pageSize": 20,
          "startTime": 0
        }
      }
    },
    mounted () {
      this.getData();
    },
    filters:{
      filterDate(val){
        return dateFormat('yyyy-MM-dd',val)
      }
    },
    methods:{
      getListdata(value){
        this.data = value;
      },
      getData(){
        this.showImg = 'yes';
        return this.$http.post("//zgeinteractiont800.systoon.com/api/api/news/getNewsList", this.vantCustomListRefreshParam)
          .then((res) => {
            this.showImg = 'no';
            this.data = res.data.list;
            return Promise.resolve(res)
          }).catch((e) => {

            return Promise.reject(e)
          })
      },
      goUrl(id) {
        window.location.href = 'http://zgeinteractiont800.systoon.com/staticapi/app/information/index.html#/detail?'+ 'channelDetailTitle=' + '&channelCode=200' + '&interactuser=OGrkTa3LDZtWrR3KLqnQM4G1RVjo85NpCKeYkCHBJa2CAJlroz0w043dyAJ7j6Tjxmt7dVVXBVg=' + '&id=' + id;
      }
    },
  }
</script>


<style lang="less"  scoped>

    .main-pagework {
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
        font-size:14px;
    }
    .div {
        padding:12px 10px 12px 16px;
        background-color:rgba(248,248,251,1);
    }
    .mardiv{
        margin-left: 16px;
    }
    .imgdiv{
        position: fixed;
        left: 0;
        top: 50px;
        right: 0;
        bottom: 0;
        .img{
            width: 32px;
            height: 32px;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-50%,-50%);
        }
    }
</style>

