<template>
	<div class="main-page">
		<div class="div">
			<span class="span">{{ title }}</span>
			<div> <vant-custom-swipe :heightLine='112' :borderRa='0' :autoplay='3000' :duration='500' :initial-swipe='0' :loop='true' :showIndicators='true' indicatorColor="#1989fa" :vertical='false' :touchable='true' :width='0' :height='112' :title='false' text="text" imageSrc="image" :images="image" @click="clickBanner"></vant-custom-swipe></div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {};
	},
	props: ['title','image'],
	methods: {
		/**
		 *
		 */
		clickBanner(data) {
			this.$emit('clickBanner', {
				url: data.url
			});
		}
	}
};
</script>

<style scoped>
.main-page {
}
.span {
	display: flex;
	display: -webkit-flex;
	border-left: 3px solid #df3031;
	font-size: 16px;
	color: #000000;
	padding: 0px 0px 0px 4px;
	height: 14px;
	align-items: center;
	margin: 3px 0px 13px 0px;
}
.img {
	max-width: 100%;
	width: 100%;
	min-height: 60px;
	background-color: #f8f8fb;
}
.div {
	padding: 9px 16px;
}
</style>

