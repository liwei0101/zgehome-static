
<template>
	<div id="policeHome">
		<div>
			<div style="min-height:156px">
				<img src="@/assets/banner.png" class="img"/>
			</div>
			<div>
				<div @click="goPhone">
					<customer-form-itemA title="派出所电话" subTitle="可查询辖区内各派出所电话号码" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc1 @click="goPhone">
						<span></span>
					</customer-form-itemA>
				</div>
				<!-- <div @click="goCar">
					<customer-form-itemA title="机动车违章查询" subTitle="查询机动车违章信息" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc2>
						<span></span>
					</customer-form-itemA>
				</div>
				<div @click="goPeople">
					<customer-form-itemA title="驾驶人违章查询" subTitle="查询驾驶人违章信息" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc3>
						<span></span>
					</customer-form-itemA>
				</div> -->
				<div @click="goOutEvil">
					<customer-form-itemA title="扫黑除恶" subTitle="查看扫黑除恶资讯" :showLine='true' :round='true' iconType="ios-arrow-forward" :imgSrc=imgSrc4>
						<span></span>
					</customer-form-itemA>
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
              imgSrc1:require('@/assets/phone.png'),
              imgSrc2:require('@/assets/car.png'),
              imgSrc3:require('@/assets/person.png'),
              imgSrc4:require('@/assets/black.png')
			}
		},
        
		methods:{
			/**
			* 跳转 : phone
			*/
			goPhone (   )
			{
				console.log('跳转')
        		this.$router.push({
        			name:"phone",
        			query:{}
        		})
			},
			/**
			* 便民查询-机动车违章查询
			*/
			goCar (   )
			{
				console.log("便民查询-机动车违章查询")
        		window.location.href='http://218.21.213.91:9081/ordosww/veh/wzcx/wzcx.jsp?nsukey=WIVrH9RMwVoC3Uqqru7KqwumWl2Sn3iUk9nppKYd532os9Q6wMnXtBtMuf%2BA4gg5JN%2BoBxtmYX8l031NyaYCJiVcCPglRh%2Bqf5JHgi2RRNMC3ZVgXcfwt1ouQwtQxpG%2B8jcIF2QxIHInglyan4pep0TIXQzKvx04QdcXT81ZCv%2FK9rb5F1FWwcMQQ87sVzUMb91co2%2B4kz47kXS0hSVl3Q%3D%3D'
			},
			/**
			* 便民查询-驾驶人违章查询
			*/
			goPeople (   )
			{
				console.log("便民查询-驾驶人违章查询");
        		window.location.href='http://218.21.213.91:9081/ordosww/drv/jfcx/jfcx.jsp?nsukey=Sgm%2BZg4Y8UWkO32H5egiIN0DbVRu0IYFfOlu5an%2FsFiIE87DmR4IdVUOLS4Sar0VVoJR64ZxA%2FxnA%2BvqeHKE1kEbHCAxWR0Gj3RWK9nkVh%2BDKmyyQX2cWIBqzkFw4cdRhxnOVovLH2CX4oxE9B6VQvRgErwnCMR%2Br3%2F3pSatRrZhmveLArvhi6G0UGHDNxPP%2Folqh4Ws1aDIH6g1LzFbig%3D%3D';
			},
			/**
			* 跳转 : outEvil
			*/
			goOutEvil (   )
			{
				this.$router.push({
        			name:"outEvil",
        			query:{}
        		})
			},
			
		},
	}
</script>

<style lang="less">
	#policeHome{
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

.main-page { 
	 
}
.img {
	width:100%;
	display:block; 
}


</style>
