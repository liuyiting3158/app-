// 实际上 如果不用Xbuild意义不大了 没有自动补全~
// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
const indexUrl = 'mp/';

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	const code2token = (code) => {
		return vm.$u.post('v2/code2token', {
			code,
			// #ifdef MP-WEIXIN
			platform: 'wx',
			// #endif

			// #ifdef MP-QQ
			platform: 'qq',
			// #endif
			// #ifdef MP-TOUTIAO
			platform: 'tt',
			// #endif
		});
	}

	const me = () => {
		return vm.$u.get('me');
	}

	const getCategory = (type) => {
		return vm.$u.get('category', {
			type
		});
	}

	const createCashFlow = (data) => {
		return vm.$u.post('cashflow', data);
	}
	const getCashflowList = (cashbook_id, year, month) => {
		return vm.$u.get('cashflow-list', {
			cashbook_id,
			year,
			month
		});
	}

	const getCashflowInfo = (id) => {
		return vm.$u.get(`cashflow/${id}`);
	}

	const updateProfile = (data) => {
		return vm.$u.put('profile', data);
	}

	const delCashflow = (id) => {
		return vm.$u.delete(`cashflow/${id}`);
	}
	const updateCashflow = (data) => {
		return vm.$u.put('cashflow', data);
	}
	const getCaptcha = () => {
		return vm.$u.get('captcha');
	}

	const login = (data) => {
		return vm.$u.post('login', data);
	}
	const register = (data) => {
		return vm.$u.post('register', data);
	}

	const getNotificationList = (params) => {
		return vm.$u.get('notifications', params);
	}

	const getNotificationInfo = (id) => {
		return vm.$u.get(`notification/${id}`);
	}

	const readNotification = (id) => {
		return vm.$u.put(`notification/${id}`);
	}

	const delNotification = (id) => {
		return vm.$u.delete(`notification/${id}`);
	}

	const delCategory = (id) => {
		return vm.$u.delete(`category/${id}`);
	}

	const updateCategory = (params) => {
		return vm.$u.put('category', params);
	}

	const createCategory = (params) => {
		return vm.$u.post('category', params);
	}

	// 按类型统计饼图
	const getStatisticData = (params) => {
		return vm.$u.get('statistic/type', params);
	}

	vm.$u.api = {
		code2token,
		me,
		getCategory,
		createCashFlow,
		getCashflowList,
		getCashflowInfo,
		updateProfile,
		delCashflow,
		updateCashflow,
		getCaptcha,
		login,
		register,
		getNotificationList,
		getNotificationInfo,
		readNotification,
		delNotification,
		createCategory,
		delCategory,
		updateCategory,
		getStatisticData
	};
}

export default {
	install
}
