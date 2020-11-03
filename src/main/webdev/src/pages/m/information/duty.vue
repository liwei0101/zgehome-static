<template>
    <div class="main-pages">
        <div v-for="item in data" class="mainduty">
            <div class="hairline-bottom" style="padding-right: 50px">
                <div @click="goUrl(item)">
                    <customer-news :title="item.orgName" :labelLeftone="item.mobile" :labelLeftadress="item.address" :showLeftImg='false' :showRightImg='false' :showLine='true'>
                        <span></span>
                    </customer-news>
                </div>
                <a class="img" :href=item.phone><img src="@/assets/phonered.png" alt="" ></a>
            </div>
        </div>
    </div>
</template>

<script>
    import data from './function';
  export default{
    components:{

    },
    props:{

    },
    data(){
      return {
        data: []
      }
    },
    created(){
      this.data = data;
    },
    methods:{
      goUrl(item) {
        this.$router.push({
          name: 'dutyDetail',
          query: {
            item: JSON.stringify(item)
          }
        });
      },
    },
  }
</script>


<style lang="less">

    .main-pages {
        .mainduty{
            position: relative;
            padding: 0px 16px;
        }
        .img{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0px;
            img{
                width: 32px;
                height: 32px;
            }
        }
    }


</style>
