<style lang="scss">
	@import "uview-ui/index.scss";
</style>

<script>
	import {
		getCode
	} from '@/common/login.js'
	export default {
		onLaunch: function() {

		},
		onShow: function() {
			let token = uni.getStorageSync('UserToken')
			if (!token) {
				// #ifdef MP
				// getCode()
				// #endif
			} else {
				this.$store.dispatch('getUserInfo')
			}
		},
		onHide: function() {
			//console.log('App Hide');
		},
		methods: {

		}
	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>
<style lang='scss'>
	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
</style>
