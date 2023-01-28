import Vue from 'vue'
import App from './App'
import store from './store'

import uView from "uview-ui";
import constConfig from './const.js'

Vue.use(uView);

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare);
// 判断是否登录
let hasLogin = require('@/mixins/hasLogin.js');
Vue.mixin(hasLogin);

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

Vue.prototype.$const = constConfig

const app = new Vue({
	...App
})

// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入'app'对象(也即页面的'this'实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from './common/base.js'
Vue.use(httpApi, app)

app.$mount()
