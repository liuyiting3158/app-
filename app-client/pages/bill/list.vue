<template>
	<view class="container">
		<view class="h">
			<view class="u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-30 bg-color" style="position:ablative;overflow: hidden;">
				<view class="u-m-r-10" style="float: left;">
					<view class="header-content">
						<view class="header-children" @click="clickDate">
							<view class="header-children">{{show_time}} 年</view>
							<view class="header-children">
								<u-icon class="header-children header-icon" name="arrow-down-fill" color="#fff"
									size="30"></u-icon>
							</view>
						</view>
					</view>
				</view>
				<view class="u-m-r-10"
					style="position:absolute;left:50%;top:4%;transform:translate(-50%,-50%);font-size: 28rpx;color: #909399;">
					<view class="header-children"> {{title}} </view>
				</view>
			</view>
			<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 bg-color" style="text-align: center;">
				<view class="u-flex-1">
					<view class="balance_int">{{balance_int}}</view>
					<view class="balance_decimal">.{{balance_decimal}}</view>
				</view>
			</view>

			<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 bg-color" style="text-align: center;">

				<view class="u-m-r-10 u-flex-1">
					<view>
						<view class="t-l t-t">收入</view>
						<view class="t-l t-i"> {{income_int}} </view>
						<view class="t-l t-d"> .{{income_decimal}} </view>
					</view>
				</view>
				<view class="" style="margin: 0;
				border-right-width: 1px;
				border-right-style: solid;
				height: 40rpx;
				transform: scaleX(0.5);
				border-color: #fff;">

				</view>

				<view class="u-m-r-10 u-flex-1">
					<view>
						<view class="t-l t-t">支出</view>
						<view class="t-l t-i"> {{expenditure_int}} </view>
						<view class="t-l t-d"> .{{expenditure_decimal}} </view>
					</view>
				</view>
			</view>

			<view class="u-flex u-p-l-20 u-p-r-20">
				<view class="u-m-r-10 u-flex-1 list-title">
					月份
				</view>
				<view class="u-m-r-10 u-flex-1 list-title">
					收入
				</view>
				<view class="u-m-r-10 u-flex-1 list-title">
					支出
				</view>
				<view class="u-m-r-10 u-flex-1 list-title">
					结余
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true" :style="{height:scroll_view_height+'px'}" refresher-enabled="true"
			:refresher-triggered="refresherTriggered" @refresherrefresh="refresher()"
			@refresherrestore="refresherrestore()" @refresherabort="refresherabort()">
			<view class="u-flex u-p-l-20 u-p-r-20 list-item" v-for="(item, index) in list" :key="index">
				<view class="u-m-r-10 u-flex-1 list-title">{{item.month}}</view>
				<view class="u-m-r-10 u-flex-1 list-title">{{item.income}}</view>
				<view class="u-m-r-10 u-flex-1 list-title">{{item.expenditure}}</view>
				<view class="u-m-r-10 u-flex-1 list-title">{{item.balance}}</view>
			</view>
		</scroll-view>
		<u-picker mode="time" v-model="picker_show" :params="picker_params" :default-time="picker_time"
			@confirm="pickerConfirm"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picker_params: {
					year: true,
					month: false,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				picker_show: false,
				picker_time: "",

				phone_height: "0", // default:624
				scroll_view_height: "0", // default:450

				refresherTriggered: false,
				_refresherTriggered: false,

				show_time: "",
				title: "结余",

				balance: "0.00",
				balance_int: "0",
				balance_decimal: "00",

				// 收入
				income: "0.00",
				income_int: "0",
				income_decimal: "00",

				expenditure: "0.00",
				expenditure_int: "0",
				expenditure_decimal: "00",

				list: [{
						month: "12月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "11月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "10月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "09月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "08月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "07月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "06月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "05月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "04月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "03月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "02月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
					{
						month: "01月",
						income: "0.00",
						expenditure: "0.00",
						balance: "0.00"
					},
				],
				reload: false,
			}
		},
		methods: {
			clickDate() {
				this.picker_show = true;
			},
			pickerConfirm(e) {
				this.picker_time = e.year + "-" + "01";
				this.show_time = e.year;
			},

			refresher() {
				console.log('下拉刷新');
				if (this._refresherTriggered) {
					return;
				}
				this._refresherTriggered = true;
				if (!this.refresherTriggered) {
					this.refresherTriggered = true;
				}
			},
			refresherrestore() {
				console.log("自定义下拉刷新被复位");
				this.refresherTriggered = false;
				this._refresherTriggered = false;
			},
			refresherabort() {
				console.log("自定义下拉刷新被中止");
				this.refresherTriggered = false;
				this._refresherTriggered = false;
			},
			formatSum() {
				let income_sum_arr = this.income.split('.');
				this.income_int = income_sum_arr[0];
				this.income_decimal = income_sum_arr[1];

				let expenditure_sum_arr = this.expenditure.split('.');
				this.expenditure_int = expenditure_sum_arr[0];
				this.expenditure_decimal = expenditure_sum_arr[1];

				let balance_sum_arr = this.balance.split('.');
				this.balance_int = balance_sum_arr[0];
				this.balance_decimal = balance_sum_arr[1];
			}
		},
		onShow() {

		},
		onLoad(options) {
			// 计算scroll-view高度
			let _this = this;
			uni.getSystemInfo({
				success(res) {
					_this.phone_height = res.windowHeight

					let v = uni.createSelectorQuery().select(".h");
					v.boundingClientRect(data => {
						_this.scroll_view_height = _this.phone_height - data.height;
					}).exec();
				}
			})

			let t = new Date().toISOString().slice(0, 10);
			let t_a = t.split("-");
			this.picker_time = t_a[0] + "-" + t_a[1];

			this.show_time = t_a[0];
		}
	}
</script>

<style>
	.container {
		background-color: #ffffff;
	}

	.bg-color {
		background-color: $uni-theme-color;
	}

	.user-box,
	.header-children {
		color: #fff;
	}

	.header-children,
	.t-l {
		display: initial;
	}

	.header-icon {
		padding: 15rpx;
	}

	.balance_int {
		display: initial;
		font-size: 50rpx;
	}

	.balance_decimal {
		display: initial;
		font-size: 40rpx;
	}

	.t-t {
		font-size: 28rpx;
		padding-right: 20rpx;
	}

	.t-i {
		font-size: 35rpx;
	}

	.t-d {
		font-size: 30rpx;
	}

	.list-title {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		text-align: center;
		color: #909399;
	}

	.list-item {
		height: 90rpx;
		border-top: 1px solid #d8d8d8;
	}
</style>
