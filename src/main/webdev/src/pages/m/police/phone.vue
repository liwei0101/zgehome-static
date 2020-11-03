
<template>
	<div class="main-page">
		<div>
			<div v-for="(  item,index  ) in data" class="div">
				<div class="phone-item hairline-bottom">
					<span class="phone-title goText">
						{{item.title}}
					</span>
					<span class="phone-number goText1">
						{{item.phoneNum}}
					</span>
					<a :href="item.cal" class="a">
						<img src="@/assets/phonered.png" class="img"/>
					</a>
				</div>
			</div>
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
				data:[
				  {"title":"薛家湾第一派出所","phoneNum":"0477-4705110","cal":"tel:0477-4705110"},
				  {"title":"薛家湾第二派出所","phoneNum":"0477-4211987","cal":"tel:0477-4211987"},
				  {"title":"薛家湾第三派出所","phoneNum":"0477-4668112","cal":"tel:0477-4668112"},
				  {"title":"薛家湾第四派出所","phoneNum":"0477-4894064","cal":"tel:0477-4894064"},
				  {"title":"乌兰小区派出所","phoneNum":"0477-4320110","cal":"tel:0477-4320110"},
				  {"title":"露天矿派出所","phoneNum":"0477-4896110","cal":"tel:0477-4896110"},
				  {"title":"沙圪堵派出所","phoneNum":"0477-4630064","cal":"tel:0477-4630064"},
				  {"title":"纳日松第一派出所","phoneNum":"0477-4705110","cal":"tel:0477-4705110"},
				  {"title":"纳日松第二派出所","phoneNum":"0477-4762064","cal":"tel:0477-4762064"},
				  {"title":"准格尔召派出所","phoneNum":"0477-4921064","cal":"tel:0477-4921064"},
				  {"title":"大路第一派出所","phoneNum":"0477-4890110","cal":"tel:0477-4890110"},
				  {"title":"大路第二派出所","phoneNum":"0477-4853071","cal":"tel:0477-4853071"},
				  {"title":"龙口派出所","phoneNum":"0477-4871017","cal":"tel:0477-4871017"},
				  {"title":"魏家峁派出所","phoneNum":"0477-4672064","cal":"tel:0477-4672064"},
				  {"title":"暖水派出所","phoneNum":"0477-4758063","cal":"tel:0477-4758063"},
				  {"title":"布尔陶亥派出所","phoneNum":"0477-2227064","cal":"tel:0477-2227064"},
				  {"title":"十二连城派出所","phoneNum":"0477-4720110","cal":"tel:0477-4720110"}
				]
			}
		},
        
		methods:{
			
		},
	}
</script>


<style lang="less"  scoped>

.main-page { 
	 
}
.goText { 
	display:block; 
}
.goText1 { 
	display:block; 
}
.img { 
	max-width:100%;
	width:28px;
	height:28px;
	position: relative;
	top: 3px;
}
.a { 
	display:inline-block;
	position:absolute;
	top:50%;
	transform:translateY(-50%);
	right:16px; 
}
.div { 
	padding:0px 0px 0px 16px; 
}

.main-page {
    .phone-item{
        padding: 12px 16px 12px 0;
        position: relative;
    }
    .phone-title{
        font-size: 16px;
        color: #222222;
        line-height: 22px;
    }
    .phone-number{
        margin-top: 4px;
        line-height: 20px;
        font-size: 14px;
        color: #8E8E93;
    }
}
</style>
