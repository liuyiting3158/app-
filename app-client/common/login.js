import store from '@/store'

export function getCode() {
	uni.login({
		success: (data) => {
			loginHandle(data.code)
		}
	})
}

export function loginHandle(code) {
	store.dispatch('code2token', code).then(response => {
		store.dispatch('getUserInfo')
	})
}
