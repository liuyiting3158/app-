<template>
	<view class="container">
		<view class="type_selector">
			<u-subsection class="selector" :animation="false" :list="list" @change="typeChange" active-color="#fff"
				:current="formData.type" mode="subsection">
			</u-subsection>
		</view>
		<view class="category-list">
			<view class="in-list" v-show="formData.type == 0">
				<swiper class="swiper" :indicator-dots="true">
					<swiper-item class="swiper-item" v-for="(list,index) in out_list" :key="index">
						<CategoryList @openSet="openSet" @change="categoryChnage" :value="formData.category_id"
							:list="list">
						</CategoryList>
					</swiper-item>
				</swiper>
			</view>
			<view class="out-list" v-show="formData.type == 1">
				<swiper class="swiper" :indicator-dots="true">
					<swiper-item class="swiper-item" v-for="(list,index) in in_list" :key="index">
						<CategoryList @openSet="openSet" @change="categoryChnage" :value="formData.category_id"
							:list="list">
						</CategoryList>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<view class="input_box">
			<view class="line">
				<input type="digit" :value="formData.amount" class="amount_input" placeholder="0.00" :focus="true"
					@input="onInput" @confirm="submit()" />
				<!-- <image slot="icon" @click="clickImg()" class="photo_icon" :src="img" mode=""></image> -->

				<!-- 			<view v-show="img != empty_img">
					<view class="del-btn" @click="delImg()">
						<uni-icons :color="iconclear.color" :size="iconclear.size" :type="iconclear.type" />
					</view>
				</view> -->
			</view>

			<u-line></u-line>

			<view class="line">
				<view class="date">
					<text class="popup_type">日期</text>
					<view style="font-size: 28rpx;font-weight: 600;" @click="picker_show = true">
						{{formData.date}}
						<u-icon name="arrow-right" class="u-icon-wrap u-cell__right-icon-wrap"></u-icon>
					</view>
				</view>

				<u-button class="save_btn" type="success" size="medium" @click="submit()">保存</u-button>
			</view>
			<view class="line">
				<text class="popup_type">备注</text>
				<input type="text" :value="formData.remark" @input="onRemarkInput" placeholder="添加备注"
					style="font-size: 28rpx;width: 70%;" />
			</view>
		</view>

		<u-picker mode="time" v-model="picker_show" :params="pickerOption" :default-time="formData.date"
			@confirm="pickerConfirm"></u-picker>
	</view>
</template>

<script>
	import dayjs from '@/dayjs.min.js'
	import CategoryList from '@/my-components/category-list/index.vue'
	import _ from 'lodash'
	export default {
		components: {
			CategoryList
		},
		props: {
			value: {
				type: Number,
				default: null
			}
		},
		data() {
			return {
				list: ['支出', '收入'],
				formData: {
					id: null,
					type: 0,
					amount: null,
					category_id: null,
					date: '',
					remark: '',
					image: null
				},
				pickerOption: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				picker_show: false,

				desc: "",
				cur_cotegry_name: "",

				out_list: [],
				in_list: [],

				empty_img: '../../static/empty-img.png',
				img: '',

				iconclear: {
					color: "red",
					size: '20',
					type: 'clear'
				},
			}
		},
		watch: {
			value(id) {
				if (id !== null) {
					this.getCashflowInfo(id)
				}
				console.log(id)
			}
		},
		methods: {
			typeChange(index) {
				this.formData.type = index;
				this.formData.category_id = null
			},
			getCategory() {
				this.$u.api.getCategory(10).then(res => {
					// console.log(res)
					this.in_list = this.listSet(res.data)
				})
				this.$u.api.getCategory(20).then(res => {
					// console.log(res)
					this.out_list = this.listSet(res.data)
				})
			},
			openSet() {
				console.log('打开设置页面')
				uni.navigateTo({
					url: "/pages/setting/category"
				})
			},
			listSet(list = []) {
				list.push({
					icon: "red-packet",
					name: "设置",
					is_set: true,
					id: 0
				})
				let arr = []
				let tmp = []
				for (let i = 0; i < list.length; i++) {
					if (i != 0 && (i % 10 == 0)) {
						arr.push(tmp)
						tmp = []
					} else {
						tmp.push(list[i])
					}
				}
				arr.push(tmp)
				tmp = []
				return arr
			},
			categoryChnage(id) {
				this.formData.category_id = id
			},
			pickerConfirm(e) {
				this.formData.date = e.year + '-' + e.month + "-" + e.day;
			},
			onInput(e) {
				let v = e.detail.value;
				v = v.replace(/^\D*([1-9]\d{0,6}\.?\d{0,2})?.*$/, '$1');
				this.formData.amount = v;
				return v;
			},
			onRemarkInput(e) {
				this.formData.remark = e.detail.value;
			},
			submit() {
				let data = {
					id: this.formData.id,
					type: this.formData.type == 0 ? 20 : 10, // 20支持 10 收入
					category_id: this.formData.category_id,
					amount: this.formData.amount,
					date: this.formData.date,
					image: null,
					remark: this.formData.remark,
					cashbook_id: this.$store.getters.cur_cashbook.id
				}
				this.$emit('submit', data)
			},
			clickImg() {
				if (this.img == this.empty_img) {
					this.uploadImg();
				} else {
					this.previewImg();
				}
			},
			delImg() {
				this.img = this.empty_img;
			},
			previewImg() {
				uni.previewImage({
					type: 0,
					urls: [this.formData.image]
				});
			},
			uploadImg() {
				let _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(res) {
						console.log('选择相册后的文件列表：', JSON.stringify(res.tempFilePaths));
					}
				});
			},
			getCashflowInfo(id) {
				this.$u.api.getCashflowInfo(id).then(res => {
					let data = res.data
					console.log(data.type)
					this.formData = {
						id: data.id,
						type: data.type == 20 ? 0 : 1,
						amount: data.amount,
						category_id: data.category_id,
						date: data.date,
						remark: data.remark,
						image: data.image,
					}
				})
			},
		},
		created() {
			this.getCategory()
			this.formData.date = dayjs().format('YYYY-MM-DD')
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #ffffff;

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
	}

	.input_box {
		padding: 30rpx;

		.del-btn {
			position: absolute;
			top: 5rpx;
			left: 645rpx;
			z-index: 10;

			border-radius: 100rpx;
			width: 44rpx;
			height: 44rpx;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			-webkit-box-pack: center;
			-webkit-justify-content: center;
			justify-content: center;

		}
	}

	.line {
		display: flex;
		align-items: center;
		padding: 26rpx 32rpx;
		font-size: 28rpx;
		line-height: 54rpx;
		color: #606266;
		background-color: #fff;

		.date {
			flex: 1;
			display: flex;
		}

		.save_btn {
			text-align: right;
		}

		.amount_input {
			font-size: 50rpx;
			min-height: 100rpx;
			height: 100rpx;
			width: 100%;
		}
	}


	.popup_type {
		font-size: 28rpx;
		padding-right: 30rpx;
	}

	.u-cell__right-icon-wrap {
		display: inline-flex;
		align-items: center;
		padding-left: 10rpx;
	}

	.photo_icon {
		width: 100rpx;
		height: 100rpx;
		margin-left: auto;
	}

	.category-list {
		padding-top: 50rpx;

		.swiper {
			width: 100%;
		}
	}
</style>
