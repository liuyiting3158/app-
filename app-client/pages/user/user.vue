<template>
	<view class="container">
		<fab></fab>
		<view class="user-section">
			<view class="bg"></view>
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" :src="userInfo.avatar || '/static/missing-face.png'">
					</image>
				</view>
				<view class="info-box">
					<view v-if="hasLogin">
						<!-- #ifdef MP-WEIXIN -->
						<text class="username" @click="getUserInfoWx()">{{userInfo.nick_name || '游客'}}</text>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<text class="username">{{userInfo.nick_name || '游客'}}</text>
						<!-- #endif -->
						<!-- #ifdef MP-QQ -->
						<button type="default" class="username qq_login_btn" open-type="getUserInfo" lang="zh_CN"
							@getuserinfo="onGetUserInfo">{{userInfo.nick_name || '游客'}}</button>
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<text class="username" @click="getUserInfoTt()">{{userInfo.nick_name || '游客'}}</text>
						<!-- #endif -->

					</view>
					<view v-else>
						<!-- #ifdef MP -->
						<text class="username" @click="getCode()">点击登录</text>
						<!-- #endif -->
						<!-- #ifndef MP -->
						<text class="username" @click="goToLoginPage()">点击登录</text>
						<!-- #endif -->

					</view>
				</view>
				<!-- 				<view class="select_bill" @click="selectBill()">
					{{bill_title}}
					<u-icon name="arrow-right"></u-icon>
				</view> -->
			</view>
		</view>
		<view class="tj-sction">
			<view class="tj-item">
				<text class="num">{{userData.sign_in_day || 0}}</text>
				<text>使用天数</text>
			</view>
			<view class="tj-item">
				<text class="num">{{userData.all_bill_day || 0}}</text>
				<text>总记账天数</text>
			</view>
			<view class="tj-item">
				<text class="num">{{userData.all_bill_count || 0}}</text>
				<text>总记账笔数</text>
			</view>
		</view>
		<view class="menu-container">
			<view class="menu-list">
				<u-cell-group>
					<!-- 					<u-cell-item title="账单设置">
					</u-cell-item> -->
					<!-- 					<u-cell-item title="类别设置">
					</u-cell-item> -->
					<u-cell-item @click="goto('xtxx')" title="系统消息">
						<u-badge v-show="hasLogin && unreadCount > 0" :count="unreadCount" :absolute="false"
							slot="right-icon">
						</u-badge>
					</u-cell-item>
					<u-cell-item @click="wkf()" title="数据导出">
					</u-cell-item>
					<u-cell-item @click="categorySet()" title="收支类型">
					</u-cell-item>
					<!-- #ifdef MP-WEIXIN -->
					<button type="default" open-type="contact" class="list-item">
						<u-cell-item title="联系客服">
						</u-cell-item>
					</button>
					<!-- #endif -->
					<button type="default" open-type="share" class="list-item">
						<u-cell-item title="推荐好友">
						</u-cell-item>
					</button>
					<u-cell-item v-if="hasLogin" @click="logout()" title="注销登录">
					</u-cell-item>
				</u-cell-group>
			</view>
		</view>


		<u-select @click="select_bill_show = true" :default-value="default_bill_index" mode="single-column"
			v-model="select_bill_show" :list="bill_list" @confirm="billConfirm"></u-select>
	</view>
</template>

<script>
	import fab from '@/my-components/fab/index.vue'
	import {
		getCode
	} from '@/common/login.js'
	export default {
		components: {
			fab
		},
		data() {
			return {
				userData: {},
				phone_height: "0",
				scroll_view_height: "100",

				border_bottom: false,
				bill_title: "默认账单",

				select_bill_show: false,
				default_bill_index: [0],
				bill_list: [{
					value: '0',
					label: '默认账单',
					extra: '0'
				}],
				paths: {
					xtxx: '/pages/notification/index'
				}
			}
		},
		computed: {
			userInfo() {
				return this.$store.getters.user
			},
			unreadCount() {
				return this.$store.getters.unread_count || 0
			}
		},
		methods: {
			// #ifdef MP
			getCode,
			// #endif
			share() {
				console.log('非小程序分享')
			},
			// 点击选择账单
			selectBill() {
				this.select_bill_show = !this.select_bill_show;
			},
			// 选择账单回调
			billConfirm(e) {
				console.log(e);
			},

			message() {},
			pickerConfirm() {

			},
			logout() {
				this.$store.dispatch('logout')
			},
			wkf() {
				this.$u.toast('该功能暂未开放');
			},
			categorySet() {
				uni.navigateTo({
					url: "/pages/setting/category"
				})
			},
			// #ifdef MP-WEIXIN
			getUserInfoWx() {
				wx.getUserProfile({
					desc: '获取头像信息，用于展示',
					lang: 'zh_CN',
					success: (res) => {
						let info = res.userInfo
						let data = {
							avatar: info.avatarUrl,
							city: info.city,
							country: info.country,
							gender: info.gender,
							nick_name: info.nickName,
							province: info.province,
						}
						this.updateProfile(data)
					}
				})
			},
			// #endif
			// #ifdef MP-TOUTIAO
			getUserInfoTt() {
				tt.getUserInfo({
					desc: '获取头像信息，用于展示',
					lang: 'zh_CN',
					success: (res) => {
						let info = res.userInfo
						let data = {
							avatar: info.avatarUrl,
							city: info.city,
							country: info.country,
							gender: info.gender,
							nick_name: info.nickName,
							province: info.province,
						}
						this.updateProfile(data)
					}
				})
			},
			// #endif
			onGetUserInfo(e) {
				let info = e.detail.userInfo
				let data = {
					avatar: info.avatarUrl,
					city: info.city,
					country: info.country,
					gender: info.gender,
					nick_name: info.nickName,
					province: info.province,
				}
				this.updateProfile(data)
			},
			updateProfile(data) {
				this.$u.api.updateProfile(data).then(res => {
					this.$store.dispatch('getUserInfo')
				})
			},
			goto(key, auth = true) {
				if (auth && !this.hasLogin) {
					this.$u.toast('请登录后查看');
					return
				}
				uni.navigateTo({
					url: this.paths[key]
				})
			}
		},
		onLoad(options) {},
		onShow() {
			if (this.hasLogin) {
				this.$store.dispatch('getUserInfo')
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #f5f5f5;
		height: 100vh;
	}

	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.user-section {
		padding: 100upx 30upx 0;
		position: relative;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: $uni-theme-color;
		}
	}

	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;

		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}

		.username {
			font-size: 30rpx;
			color: #fff;
			margin-left: 20rpx;

			&.qq_login_btn {
				background-color: $uni-theme-color;
			}
		}
	}

	.menu-container {
		background-color: #f5f5f5;
		position: relative;
		padding-bottom: 20rpx;
	}

	.tj-sction {
		@extend %section;

		background-color: #fff;

		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: $uni-text-color-grey;
		}

		.num {
			font-size: 40rpx;
			color: $uni-text-color;
			margin-bottom: 8upx;
		}
	}

	.menu-list {
		margin-top: 30upx;
		background: #fff;
		border-radius: 10upx;

		switch {
			transform: scale(0.7, 0.7)
		}
	}

	.list-item {
		width: 100%;
		padding: 0rpx;
		background-color: #FFFFFF !important;
		border: initial;
		text-align: initial;
	}

	.list-item::after {
		border: initial;
	}

	.select_bill {
		flex: 1;
		margin-right: 10px;
		text-align: right;
		color: #FFFFFF;
	}
</style>
