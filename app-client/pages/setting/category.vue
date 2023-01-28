<template>
	<view class="category-list">
		<view class="type_selector">
			<u-subsection class="selector" :list="list" @change="typeChange" active-color="#fff" :current="type"
				mode="subsection">
			</u-subsection>
		</view>
		<u-cell-group v-show="type == 0">
			<u-cell-item v-for="(item,index) in out_list" :title="item.name" :arrow="false">
				<u-icon slot="icon" size="40" :name="item.icon"></u-icon>
				<u-icon slot="right-icon" @click="delCategory(item.id,index,0)" size="32" name="close"></u-icon>
			</u-cell-item>
		</u-cell-group>

		<u-cell-group v-show="type == 1">
			<u-cell-item v-for="(item,index) in in_list" :title="item.name" :arrow="false">
				<u-icon slot="icon" size="40" :name="item.icon"></u-icon>
				<u-icon slot="right-icon" @click="delCategory(item.id,index,1)" size="32" name="close"></u-icon>
			</u-cell-item>
		</u-cell-group>

		<view class="bottom_btn">
			<button class="add_btn" type="default">新增</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['支出', '收入'],
				type: 0,
				in_list: [],
				out_list: []
			}
		},
		methods: {
			typeChange(index) {
				this.type = index;
			},
			getCategory() {
				this.$u.api.getCategory(10).then(res => {
					// console.log(res)
					this.in_list = res.data
				})
				this.$u.api.getCategory(20).then(res => {
					// console.log(res)
					this.out_list = res.data
				})
			},
			delCategory(id, index, type) {
				this.$u.api.delCategory(id).then(res => {
					if (res.code == 1) {
						this.$u.toast(res.message);
						return
					}
					if (type == 0) {
						this.out_list.splice(index, 1)
					} else {
						this.in_list.splice(index, 1)
					}
					this.$u.toast('删除成功');
				})
			}
		},
		created() {
			this.getCategory()
		}
	}
</script>

<style lang="scss">
	.type_selector {
		width: 100%;
		background-color: $uni-theme-color;
		display: flex;
		justify-content: center;
		padding-bottom: 30rpx;

		.selector {
			width: 80%;
		}
	}

	.category-list {
		.bottom_btn {
			width: 100%;
			position: fixed;
			bottom: 50rpx;

			.add_btn {
				width: 80%;
				background-color: $uni-theme-color;
				color: $uni-text-color-inverse;
			}
		}

	}
</style>
