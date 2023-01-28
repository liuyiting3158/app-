<template>
	<view class="container">
		<view class="wrapper">
			<view class="title">
				用户登录
			</view>
			<view class="input-content">
				<u-form :model="form" ref="uForm">
					<u-form-item>
						<u-input placeholder="请输入用户名" v-model="form.account" />
					</u-form-item>
					<u-form-item>
						<u-input type="password" placeholder="请输入密码" v-model="form.password" />
					</u-form-item>
					<u-form-item class="captcha_box">
						<u-input v-model="form.captcha_code" placeholder="请输入验证码" class="input" />
						<image slot="right" class="captcha" @click="getCaptcha()" :src="captcha.img" mode=""></image>
					</u-form-item>
				</u-form>
			</view>
			<button class="confirm-btn" @click="login()">登录</button>

			<!-- 			<view class="forget-section">
				忘记密码?
			</view> -->
		</view>
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">马上注册</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					account: '',
					password: '',
					captcha_key: '',
					captcha_code: '',
				},
				captcha: {

				},
				mobile: '',
				password: '',
			}
		},
		onLoad() {
			this.getCaptcha()
		},
		methods: {
			toRegist() {
				uni.navigateTo({
					url: '/pages/login/register'
				})
			},
			login() {
				let data = {
					...this.form
				}
				data.captcha_key = this.captcha.key
				this.$store.dispatch('login', data).then(res => {
					if (res.code == 1) {
						this.$u.toast(res.message);
						this.getCaptcha()
					} else {
						this.$u.toast('登录成功');
						this.$store.dispatch('getUserInfo')
						uni.navigateBack()
					}
				})
			},
			getCaptcha() {
				this.$u.api.getCaptcha().then(res => {
					this.captcha = res.data.captcha
				})
			}
		},
	}
</script>

<style lang='scss'>
	.container {
		padding-top: 50px;
		width: 100vw;
		height: 100vh;
		background: #fff;
	}

	.wrapper {
		background: #fff;
		padding-bottom: 40upx;
	}


	.title {
		text-align: center;
		margin-bottom: 100rpx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30upx;
		background: $page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}

		input {
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-theme-color;
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		font-size: $font-sm+2upx;
		color: $uni-theme-color;
		text-align: center;
		margin-top: 40upx;
	}

	.register-section {
		position: absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;

		text {
			color: $uni-theme-color;
			margin-left: 10upx;
		}
	}

	.captcha_box {
		.input {}

		.captcha {
			width: 240rpx;
			height: 72rpx;
		}
	}
</style>
