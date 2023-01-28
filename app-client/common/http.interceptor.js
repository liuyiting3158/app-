import constConfig from '@/const.js'
import {
	getCode
} from '@/common/login.js'
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
			baseUrl: constConfig.baseUrl, // 请求的本域名
			method: 'POST',
			// 设置为json，返回后会对数据进行一次JSON.parse()
			dataType: 'json',
			showLoading: false, // 是否显示请求中的loading
			loadingText: '正在加载...', // 请求loading中的文字提示
			loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
			originalData: true, // 是否在拦截器中返回服务端的原始数据
			loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
			// 配置请求头信息
			header: {
				'content-type': 'application/json;charset=UTF-8'
			},
		}),
		// 请求拦截部分，如配置，每次请求前都会执行
		Vue.prototype.$u.http.interceptor.request = (config) => {
			config.header.Authorization = 'Bearer ' + vm.$store.getters.user_token;
			// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
			if (config.url == 'code2token') config.header.noToken = true;
			// 最后需要将config进行return
			return config;
			// 如果return一个false值，则会取消本次请求
			// if(config.url == '/user/rest') return false; // 取消某次请求
		},
		// 响应拦截，如配置，每次请求结束都会执行本方法
		Vue.prototype.$u.http.interceptor.response = (res) => {
			// console.log(res,'xx')
			if (res.statusCode > 300 && res.statusCode != 401) {
				// 如果返回false，则会调用Promise的reject回调，
				// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
				if (res.data.message) {
					vm.$u.toast(res.data.message);
				}
				return false;
			} else if (res.statusCode == 401) {
				console.log('执行了 401')
				// 退出登录 清理本地缓存
				vm.$store.dispatch('logout')
				return false;
			} else {
				return res.data
			}
		}
}

export default {
	install
}
