<template>
	<view class="nexbox">
		<view class="pic">
			<image src="../../static/imagers/icon/飞机.png" mode="aspectFill"></image>
		</view>
		<view class="text">
			<view class="title">
				<text>消费类型</text>
				<text>消费金额</text>
			</view>
			<view class="info">
				<text>备注</text>
				<text>消费商家</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"box",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.nexbox{
	display: flex;
	.pic{
		width: 100rpx;
		height: 100rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		flex:1;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: 36rpx;
			color: #333;
			text-overflow: -o-ellipsis-lastline;
				overflow: hidden;				//溢出内容隐藏
				text-overflow: ellipsis;		//文本溢出部分用省略号表示
				display: -webkit-box;			//特别显示模式
				-webkit-line-clamp: 2;			//行数
				line-clamp: 2;					
				-webkit-box-orient: vertical;	//盒子中内容竖直排列
			text{
				padding-right: 60rpx;
			}
			}
		.info{
			font-size: 26rpx;
			color: #999;
			text{
				padding-right: 150rpx;
			}
		}
	}
}
</style>