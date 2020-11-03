<template>
	<div class="main-page">
		<div v-if="tyle" class="div3">
			<span class="span">{{ title }}</span>
			<div class="div2">
				<div v-if="listArr" v-for="(item, index) in listArr" @click="clickItem(item)" class="div1">
					<div class="div">
						<span class="span1">{{ item.title }}</span>
						<span class="span2">{{ item.subTitle }}</span>
					</div>
					<img :src="item.image" class="imgimg" />
				</div>
			</div>
		</div>
		<div v-else class="div7">
			<span class="span3">{{ title }}</span>
			<div class="div6">
				<div v-if="listArr" v-for="(item, index) in listArr" @click="clickItem(item)" class="div5">
					<img :src="item.image" class="img1" />
					<div class="div4">
						<span class="span4">{{ item.title }}</span>
						<span class="span5">{{ item.subTitle }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	props: ['title', 'tyle', 'list'],
	data() {
		return {
			listArr: null
		};
	},

	mounted() {
		this.initList();
	},
	methods: {
		/**
		 * 初始化list
		 */
		initList() {
			this.listArr = this.list;
		},
		/**
		 * 点击一项
		 */
		clickItem(item) {
			console.log(item);
			this.$emit('clickItem', item);
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
.imgimg {
	max-width: 100%;
	width: 60px;
	height: 60px;
	position: absolute;
	right: 0;
	z-index: -1;
}
.span1 {
	display: block;
	color: #5b5b5b;
	letter-spacing: 0;
	ilne-height: 24px;
	font-size: 17px;
}
.span2 {
	font-size: 12px;
	color: #9c9c9c;
	letter-spacing: 0;
}
.div {
	flex: 1;
}
.div1 {
	padding: 10px;
	width: 50%;
	display: inline-flex;
	display: -webkit-inline-flex;
	align-items: center;
	height: 61px;
	position: relative;
}
.div2 {
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
}
.div3 {
	padding: 9px 16px;
}
.span3 {
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
.img1 {
	max-width: 100%;
	width: 90px;
	height: 60px;
	position: absolute;
	right: 16px;
	background-color: rgba(255, 255, 255, 1);
	z-index: -1;
}
.span4 {
	display: block;
	color: #5b5b5b;
	letter-spacing: 0;
	ilne-height: 24px;
	font-size: 17px;
}
.span5 {
	font-size: 12px;
	color: #9c9c9c;
	letter-spacing: 0;
}
.div4 {
	flex: 1;
}
.div5 {
	width: 50%;
	display: inline-flex;
	display: -webkit-inline-flex;
	align-items: center;
	height: 84px;
	position: relative;
}
.div6 {
	display: flex;
	display: -webkit-flex;
	flex-wrap: wrap;
}
.div7 {
	padding: 9px 0px 9px 16px;
}
</style>

<style lang="less" scoped></style>
