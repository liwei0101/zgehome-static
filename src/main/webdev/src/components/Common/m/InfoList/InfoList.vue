<!--  page : InfoList -->
<template>
	<div>
		<ul class="list-boxs">
			<!--第一层 template 处理 for 循环 -->
			<!--第二层 template 处理 if 判断 -->
			<template v-for="(item, index) in infolistData">
				<!--1：视频模式-->
				<template v-if="item.listStyle == 1 && item.articleType == 7">
					<li class="hairline-bottom" @click.stop="clickItem(item)">
						<div class="type-intro">
							<p class="title" style="padding-bottom:7px;">
								<i v-if="item.top == 1" class="special"></i>
								<i v-if="item.hotSpot == 1" class="hot-topic"></i>
								<span id="videoTitle" :class="item.readFlag == 0 ? 'unread' : 'read'">{{ item.title }}</span>
							</p>
							<div class="listPicImg">
								<img class="btn" src="./images/bofang.png" alt="" />
								<img :src="item.listPic" alt="" />
							</div>
							<!--<p class="tag">-->
								<!--<span>{{ item.commentCount | formatComment }}</span>-->
								<!--评论-->
							<!--</p>-->
							<p class="time">{{ item.pubTime | filterDate }}</p>
						</div>
					</li>
				</template>
				<!--1：专题-->
				<template v-if="item.listStyle == 1 && item.articleType == 3">
					<li class="item hairline-bottom" @click.stop="clickItem(item)">
						<div class="news-content">
							<img :src="item.listPic ? item.listPic : user" alt />
							<span class="news-text">{{ item.title }}</span>
						</div>
						<!-- <div class="rightItem" >
							<div class="joinBox">
								<img src="./images/canyu.png" alt />
								<div class="participate">参与</div>
							</div>
						</div> -->
					</li>
				</template>
				<!--1：纯文字简介模式-->
				<template v-if="item.listStyle == 0">
					<li class="type-intro hairline-bottom" @click.stop="clickItem(item)">
						<!--标题，标签，时间-->
						<div class="intro-box">
							<p class="title" style="padding-bottom:23px;">
								<i v-if="item.top == 1" class="special"></i>
								<i v-if="item.hotSpot == 1" class="hot-topic"></i>
								<span id="wordTitle" :class="item.readFlag == 0 ? 'unread' : 'read'">{{ item.title }}</span>
							</p>
							<!--<p class="tag">-->
								<!--<span>{{ item.commentCount | formatComment }}</span>-->
								<!--评论-->
							<!--</p>-->
							<p class="time">{{ item.pubTime | filterDate }}</p>
						</div>
					</li>
				</template>

				<!--2：简介加一张图模式-->
				<template v-if="item.listStyle == 1 && item.articleType == 1">
					<li class="type-thumbnail-1 hairline-bottom" @click.stop="clickItem(item)">
						<div class="intro-box">
							<p class="title">
								<i v-if="item.top == 1" class="special"></i>
								<i v-if="item.hotSpot == 1" class="hot-topic"></i>
								<span id="picTitle" :class="item.readFlag == 0 ? 'unread' : 'read'">{{ item.title }}</span>
							</p>
							<!--<p class="tag">-->
								<!--<span>{{ item.commentCount | formatComment }}</span>-->
								<!--评论-->
							<!--</p>-->
							<p class="time">{{ item.pubTime | filterDate }}</p>
						</div>
						<div class="images">
							<span class="cover-img">
								<img class="playPic" v-if="item.articleType == 7" src="./images/bofang.png" alt="" />
								<img class="listPic" :src="item.listPic" alt />
							</span>
						</div>
					</li>
				</template>

				<!--3：简介加3张图模式 start-->
				<template v-if="item.listStyle == 3">
					<li class="type-thumbnail-3 hairline-bottom" @click.stop="clickItem(item)">
						<div class="intro-box">
							<p class="title">
								<i v-if="item.top == 1" class="special"></i>
								<i v-if="item.hotSpot == 1" class="hot-topic"></i>
								<span id="morePicTitle" :class="item.readFlag == 0 ? 'unread' : 'read'">{{ item.title }}</span>
							</p>
							<!--<p class="tag">-->
								<!--<span>{{ item.commentCount | formatComment }}</span>-->
								<!--评论-->
							<!--</p>-->
							<p class="time">{{ item.pubTime | filterDate }}</p>
						</div>
						<div class="images">
							<!-- <template v-for="(imgUrl, index ) in item.listPic.split(',')[0]" v-if="index<3"> -->
							<span class="cover-img"><img class="listPic" :src="item.listPic.split(',')[0]" alt /></span>
							<!-- </template> -->
						</div>
						<div></div>
					</li>
				</template>
			</template>
		</ul>
	</div>
</template>

<!--使用scss模式，组件须定义scoped 作用域-->
<style lang="scss" scoped="scoped">
// 未读
.unread {
	color: #222;
}
.read {
	color: #8e8e93;
}
/* 将一个区域拆分为多个盒子 - 使用 xxx-box */
/* 列表区域 */
.list-boxs {
	background: #fff;
	img {
		border-radius: 2px;
	}
	/*列表项 - 基础样式 */
	li {
		padding: 12px 0 9px;
		margin: 0 15px;
		overflow: hidden;

		/*简介容器*/
		.intro-box {
			width: 100%;
		}

		/*标题*/
		.title {
			font-family: PingFangSC-Regular;
			font-size: 16px;
			color: #222222;
			overflow: hidden;
			display: -webkit-box;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			/*! autoprefixer: off */
			box-orient: vertical;
			-moz-box-orient: vertical;
			-webkit-box-orient: vertical;
			i {
				display: inline-block;
				width: 28px;
				height: 16px;
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}

			.hot-topic {
				background-image: url(./images/hot-topic.png);
			}

			.special {
				background-image: url(./images/top.png);
			}
		}

		/*标签*/
		.tag {
			font-family: PingFangSC-Light;
			font-size: 11px;
			color: #8e8e93;
			float: left;
			max-width: 140px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-top: 8px;
			span {
				vertical-align: top;
				font-family: PingFangSC-Light;
				font-size: 12px;
				color: #007aff;
				padding-right: 4px;
			}
		}

		/*时间*/
		.time {
			font-family: arial;
			font-size: 11px;
			color: #8e8e93;
			margin-top: 8px;
			float: right;
		}

		/*图片容器*/
		.cover-img {
			position: relative;
			display: block;
			float: left;
			width: 111px;
			height: 75px;
			.playPic {
				width: 40px;
				height: 40px;
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				top: 0;
				margin: auto;
			}
			.listPic {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	.item {
		height: 82px;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		align-items: center;
		-webkit-align-items: center;
		.news-content {
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			justify-content: space-between;
			-webkit-justify-content: space-between;
		}
		.rightItem {
			height: 82px;
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			.joinBox {
				display: flex;
				display: -webkit-flex;
				flex-direction: column;
				-webkit-flex-direction: column;
				align-items: center;
				-webkit-align-items: center;
				justify-content: center;
				-webkit-justify-content: center;
				padding-right: 20px;
				img {
					width: 20px;
					height: 20px;
					margin-bottom: 4px;
				}
				.participate {
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #8e8e93;
					text-align: center;
				}
			}
		}
		img {
			width: 50px;
			height: 50px;
			float: left;
			margin-left: 6px;
			margin-right: 8px;
		}
		.news-text {
			width: 205px;
			font-family: PingFangSC-Regular;
			font-size: 17px;
			color: #383838;
			letter-spacing: 0;
			line-height: 22px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			/*! autoprefixer: off */
			box-orient: vertical;
			-moz-box-orient: vertical;
			-webkit-box-orient: vertical;
		}
		.new-time {
			font-size: 12px;
			color: #777e8c;
			line-height: 12px;
		}
	}

	/*视频版 */
	.listPicImg {
		width: 345px;
		height: 194px;
		position: relative;
		text-align: center;
		background: #000;
		.btn {
			width: 40px;
			height: 40px;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;
		}
		img {
			width: auto;
			height: 100%;
		}
	}
	/*无图版 */
	li.type-intro {
		.title {
			height: 56px;
		}
	}

	/*一张缩略图版 */
	li.type-thumbnail-1 {
		.title {
			height: 52px;
		}

		.intro-box {
			width: 219px;
			float: left;
		}

		.tag,
		.time {
			margin-top: 8px;
		}

		.images {
			float: right;
			width: 111px;
			height: 75px;
		}
	}

	/*三张缩略图版 */
	li.type-thumbnail-3 {
		.title {
			height: 52px;
		}

		.intro-box {
			width: 219px !important;
			float: left;
		}

		.tag,
		.time {
			margin-top: 8px;
		}

		.images {
			float: right;
			width: 111px;
			height: 75px;
		}
	}
}
</style>

<script>
	import {dateFormat} from '@/assets/utils/date.util.js'
export default {
	name: 'InfoList',
	props: ['infolistData', 'clicked'],
	data() {
		return {};
	},
	methods: {
		clickItem(item) {
			this.$emit('clickItem', item);
			item.readFlag = 1;
		}
	},
	filters:{
		filterDate(val){
			return dateFormat('yyyy-MM-dd',val)
		},
		formatComment(count) {
			if (count > 9999) {
			  return (count/10000).toFixed(1) + '万'
			}
			return count
		}
	},
	mounted() {},
	//组件
	components: {}
};
</script>
