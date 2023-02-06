<template>
	<view class="user">
		<view class="top">
			<image src="../../static/imagers/missing-face.png" mode=""></image>
			<div class="text">点击登录</div>
		</view>
		<view class="menu-container">
			<button class="button popuo-m" type="primary" @click="toggle('center')">
				<text class="button-text m-text">设置</text>
			</button>
			<view>
				<!-- 普通弹窗 -->
				<uni-popup ref="popup" background-color="#fff" @change="change">
					<view class="popup-content" :class="{ 'popup-height': type === 'left' || type === 'right' }">
						<text class="text">暂不开放</text>
					</view>
				</uni-popup>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'center'
			}
		},
		onReady() {},
		methods:{
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open(type)
			}
		}
	}
</script>

<style lang="scss">
	.user{
		background-color: #f5f5f5;
	}
	.top{
		padding-top: 40rpx;
		padding-bottom: 50rpx;
		padding-left: 30rpx;
		background: #42b479;
		color:#ffffff;
		display: flex;
		
		image{
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
			
		}
		.text{
			font-size: 50rpx;
			padding-left: 30rpx;
			padding-top: 40rpx;
		}
	
	.menu-container{
		display: flex;
		flex: 1;
		color: #fff;
		height: 100vh;
	}
	.popup-m {
		align-items: center;
		justify-content: left;
		flex: 1;
		height: 35px;
		color: #000000;
		background-color: #f5f5f5;
	}
	.button-text {
		color: #000000;
		font-size: 20spx;
	}
	.popup-content {
		flex: 1;
		align-items: center;
		justify-content: center;
		padding: 15px;
		height: 30px;
		background-color: #282c35;
		border-radius: 5px;
	}

	.popup-height {
		height: 100rpx;
		width: 200px;
	}
	
}
</style>
