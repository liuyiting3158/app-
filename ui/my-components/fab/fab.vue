<template>
	<view v-if="hasLogin" class="write_btn" @click="onClickIcon()">
		<u-icon class="icon" name="edit-pen"></u-icon>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},

		methods: {
			onClickIcon() {
				uni.navigateTo({
					url: '/pages/bill/add'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.write_btn {
		position: fixed;
		bottom: 50rpx;
		right: 50rpx;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: #18B566;
		z-index: 100;
		display: flex;

		.icon {
			justify-content: center;
			width: 100%;
			color: #FFFFFF;
			font-size: 50rpx;
			/* #ifdef MP-TOUTIAO */
			// 头条小程序 没居中
			text-align: center;
			padding: 15rpx 0;
			/* #endif */
		}
	}
</style>
