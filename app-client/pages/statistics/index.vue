<template>
	<view v-if="!hasLogin" class="no-login">
		<u-empty text="未登录" mode="permission">
			<button size="mini" slot="bottom" class="go-to-login" @click="toLogin()">立即登录</button>
		</u-empty>
	</view>
	<view v-else class="container">
		<view class="header">
			<u-subsection :list="typeList" @change="typeChange" :animation="false" active-color="#ffffff"
				:current="formData.type" mode="subsection" style="width: 200rpx;" height="60" font-size="25">
			</u-subsection>
		</view>
		<view class="charts">
			<view class="title">
				<text class="text" @click="datePicker.picker_show = true">
					按{{formData.queryType === 0 ? '月' : '年'}}统计: <text>{{datePicker.year}} 年 </text><text
						v-show="formData.queryType === 0">
						{{datePicker.month}} 月 </text>
				</text>
				<u-subsection class="query-type" :list="queryTypeList" @change="queryTypeListChange" :animation="false"
					:active-color="scss.uniThemeColor" :current="formData.queryType" height="60" font-size="25">
				</u-subsection>
			</view>
			<StatisticLeiXingBingTu :list="statisticTypeData">
			</StatisticLeiXingBingTu>
			<!--<view class="title">
				<text class="text">
					按月统计收支
				</text>
			</view>
			<StatisticShouZhiZhuZhuangTu></StatisticShouZhiZhuZhuangTu> -->
		</view>


		<u-picker mode="time" v-model="datePicker.picker_show" :default-time="datePicker.picker_time"
			:params="pickerParams" @confirm="pickerConfirm">
		</u-picker>
	</view>
</template>

<script>
	import scss from '@/uni.scss'
	import StatisticLeiXingBingTu from '@/my-components/charts/statistic-lei-xing-bing-tu.vue'
	// import StatisticShouZhiZhuZhuangTu from '@/my-components/charts/statistic-shou-zhi-zhu-zhuang-tu.vue'
	import dayjs from '@/dayjs.min.js'
	import {
		getCode
	} from '@/common/login.js'
	export default {
		components: {
			StatisticLeiXingBingTu,
			// StatisticShouZhiZhuZhuangTu
		},
		data() {
			return {
				scss,
				typeList: ['支出', '收入'],
				queryTypeList: ['月', '年'],
				datePicker: {
					picker_show: false,
					picker_time: "",
					year: "",
					month: "",
				},
				formData: {
					queryType: 0,
					type: 0,
				},
				statisticTypeData: []
			}
		},
		computed: {
			pickerParams() {
				return {
					year: true,
					month: this.formData.queryType === 0,
					day: false,
					hour: false,
					minute: false,
					second: false
				}
			},
		},
		methods: {
			typeChange(index) {
				this.formData.type = index
				this.getStatisticData()
			},
			queryTypeListChange(index) {
				this.formData.queryType = index
				this.getStatisticData()
			},
			getStatisticData() {
				if (!this.hasLogin) {
					return
				}
				let params = {
					cashbook_id: this.$store.getters.cur_cashbook.id,
					type: this.formData.type === 0 ? 20 : 10,
					query_type: this.formData.queryType === 0 ? 'month' : 'year',
					year: Number(this.datePicker.year),
				}

				if (this.formData.queryType === 0) {
					params.month = Number(this.datePicker.month)
				}
				this.$u.api.getStatisticData(params).then(res => {
					this.statisticTypeData = res.data ?? []
				})
			},
			pickerConfirm(e) {
				if (this.pickerParams.year) this.datePicker.year = e.year;
				if (this.pickerParams.month) this.datePicker.month = e.month;
				this.datePicker.picker_time = this.datePicker.year + "-" + this.datePicker.month;
				this.getStatisticData()
			},
			dateReset() {
				let d = dayjs()
				this.datePicker = {
					picker_show: false,
					picker_time: d.format('YYYY-MM'),
					year: d.format('YYYY'),
					month: d.format('MM'),
				}
			},
			toLogin() {
				// #ifndef MP
				this.goToLoginPage()
				// #endif

				// #ifdef MP
				getCode()
				// #endif
			}
		},
		onShow() {
			this.dateReset()
			this.getStatisticData()
		},
		onLoad(options) {

		}
	}
</script>

<style lang="scss">
	.no-login {
		width: 100%;
		height: 100vh;
		background-color: #f7f7f7;

		.go-to-login {
			border-radius: 10rpx;
			background: $uni-theme-color;
			color: #fff;
		}
	}

	.container {
		background-color: #ffffff;
		margin-bottom: 80rpx;

		.header {
			width: 100%;
			z-index: 100;
			display: flex;
			justify-content: space-between;

			background-color: $uni-theme-color;
			padding: 20px 20px 20px 20px;
		}

		.charts {
			width: 100%;

			.empty {
				margin-top: 200rpx;
			}

			.title {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding-left: 15px;
				height: 40px;
				background-color: $uni-bg-color-grey;
				font-weight: normal;
				color: $uni-text-color;

				.text {
					font-size: $uni-font-size-base;
					color: $uni-text-color;
					flex: 1;
				}

				.query-type {
					margin-right: 10px;
					width: 200rpx;
				}
			}
		}
	}
</style>
