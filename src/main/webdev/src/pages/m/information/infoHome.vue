<template>
    <div class="main-pageinhome" id="infoHome">
        <div>
            <div style="height: 156px">
                <img src="@/assets/infobanner.png" class="img"/>
            </div>
            <customer-form-itemA title="工作报告" subTitle="可查看政府公开的历年政府报告" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc1 @click="goWorkReport">
                <span></span>
            </customer-form-itemA>
            <customer-form-itemA title="数据统计" subTitle="可查询旗政府公开的数据分析和统计报告" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc2 @click="goDataStatistics">
                <span></span>
            </customer-form-itemA>
            <customer-form-itemA title="职能职责" subTitle="可查询旗政府各单位职能信息" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc3 @click="goDuty">
                <span></span>
            </customer-form-itemA>
            <customer-form-itemA title="公开信息" subTitle="可查询各单位公开信息内容" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc4 @click="goOpenInfo">
                <span></span>
            </customer-form-itemA>
        </div>
        <!--<day-picker type="date" :maxDate="maxDate" :minDate="minDate"></day-picker>-->
    </div>
</template>

<script>

  export default{
    components:{

    },
    props:{

    },
    data(){
      return {
        imgSrc1:require('@/assets/work.png'),
        imgSrc2:require('@/assets/data.png'),
        imgSrc3:require('@/assets/fun.png'),
        imgSrc4:require('@/assets/open.png'),
        maxDate: new Date(new Date().getFullYear()+1,11,31),
        minDate: new Date(new Date().getFullYear(),0,1)
      }
    },

    methods:{
      /**
       * 跳转 : workReport
       */
      goWorkReport (   )
      {
        this.$router.push({
          name:"workReport",
          query:{}
        })
      },
      /**
       * 跳转 : dataStatistics
       */
      goDataStatistics (   )
      {
        window.sessionStorage.removeItem('indexi');
        this.$router.push({
          name:"dataStatistics",
          query:{}
        })
      },
      /**
       * 跳转 : Duty
       */
      goDuty (   )
      {
        this.$router.push({
          name:"duty",
          query:{}
        })
      },
      /**
       * 跳转 : openInfo
       */
      goOpenInfo (   )
      {
        window.sessionStorage.removeItem('tabindexi');
        this.$router.push({
          name:"openInfo",
          query:{}
        })
      },

    },
  }
</script>

<style lang="less">
    #infoHome{
        .itemA-img{
            width: 44px;
            height: 44px;
        }
        .itemA-title{
            font-size: 16px;
        }
        .itemA-sub-title{
            font-size: 12px;
        }
    }
</style>
<style lang="less"  scoped>

    .main-pageinhome {

    }
    .img {
        max-width:100%;
        display:block;
        width:100%;
    }


</style>
