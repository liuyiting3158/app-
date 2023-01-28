const user = {
	state: {
		user: uni.getStorageSync('UserInfo'),
		user_token: uni.getStorageSync('UserToken'),
		cur_cashbook: uni.getStorageSync('curCashbook'),
		unread_count: 0
	},
	mutations: {
		setToken: (state, token) => {
			state.user_token = token
		},
		setUserInfo: (state, user_info) => {
			state.user = user_info
		},
		setUnreadCount: (state, count) => {
			state.unread_count = count
		},
		setCurCashbook: (state, curCashbook) => {
			uni.setStorageSync('curCashbook', curCashbook)
			state.cur_cashbook = curCashbook
		},
	},
	actions: {
		code2token({
			commit
		}, code) {
			return new Promise((resolve, reject) => {
				uni.$u.api.code2token(code).then(res => {
					uni.setStorageSync('UserToken', res.data.token)
					commit('setToken', res.data.token)
					resolve(res)
				}).catch((err) => {
					reject(err)
				});
			})
		},
		login({
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				uni.$u.api.login(data).then(res => {
					if (res.code == 0) {
						uni.setStorageSync('UserToken', res.data.token)
						commit('setToken', res.data.token)
					}
					resolve(res)
				}).catch((err) => {
					reject(err)
				});
			})
		},
		getUserInfo({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				uni.$u.api.me().then(res => {
					uni.setStorageSync('UserInfo', res.data)
					commit('setUserInfo', res.data)
					commit('setCurCashbook', res.data.default_cashbook)
					commit('setUnreadCount', res.data.unread_count)
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			})
		},
		// 退出登录
		logout({
			commit,
			state
		}) {
			commit('setToken', {})
			commit('setUserInfo', {})
			uni.clearStorageSync()
		}
	}
}

export default user
