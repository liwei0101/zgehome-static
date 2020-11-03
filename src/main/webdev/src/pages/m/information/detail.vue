<template>
    <div class="main-pagedetail">
        <div class="div1">
			<span class="goText">
				{{data.orgName}}
			</span>
            <div class="div">
				<span class="goText1">
					{{data.siteName}}
				</span>
                <span class="goText2">
					{{data.pubDate}}
				</span>
            </div>
            <div v-html="data.content"></div>
        </div>
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
		data: {}
      }
    },
	created(){
      this.data = JSON.parse(this.$route.query.item);
      console.log(this.data);
	},
    methods:{

    },
  }
</script>


<style lang="less">

    .main-detail {

    }
    .goText {
        font-size:24px;
        color: #222;
    }
    .goText1 {
        font-size: 13px;
        color:#5c5c5c;
    }
    .goText2 {
        font-size: 13px;
        padding:0px 0px 0px 15px;
        color:#8E8E93;
    }
    .div {
        padding:10px 10px 10px 0px;
    }
    .div1 {
        padding:12px 16px 12px 16px;
    }

    .main-pagedetail{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        .div1{
            height: 100%;
            overflow: scroll;
            overflow-scrolling: touch;
        }
        p{
            display: block!important;
            font-size: 16px!important;
            color: #222!important;
            margin-bottom: 10px!important;
        }
    }
</style>
