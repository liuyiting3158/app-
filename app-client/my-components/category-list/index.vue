<template>
	<view class="category">
		<view class="category-item" v-for="(item, index) in list" :key="index" @click="setCurCategory(item)">
			<view class="list-box" :class="[curId == item.id ? 'select-item':'']">
				<u-icon :name="item.icon" class="icon"></u-icon>
			</view>
			<view class="box-text">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array
			},
			value: {
				type: Number | null
			}
		},
		data() {
			return {
				curId: null
			}
		},
		created() {
			this.curId = this.value
		},
		watch: {
			value(val) {
				this.curId = val
				console.log('改变了')
			}
		},
		methods: {
			setCurCategory(item) {
				// console.log('点击了', id)
				if (item.is_set) {
					this.$emit('openSet')
				} else {
					this.curId = item.id
					this.$emit('change', item.id)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.category {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;

		.category-item {
			text-align: center;
			width: 20%;
		}
	}

	.list-box {
		background-color: #f7f7f7;
		border-radius: 100%;
		box-sizing: border-box;
		margin: 0 auto;
		width: 100rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		&.select-item {
			background-color: $uni-theme-color;
		}

		.icon {
			width: 100%;
			font-size: 50rpx;
			align-items: center;
			justify-content: center;
		}
	}

	.box-text {
		font-size: 25rpx;
		color: #606266;
	}
</style>
