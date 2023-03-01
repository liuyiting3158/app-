import {createApp} from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import routes from "./config/route";
import './style/baseColor.css'
// 引入echarts
import 'echarts/lib/chart/pie'
// @ts-ignore
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/legend/legendAction'
import 'echarts/lib/component/legend/legendFilter'
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.use(router)
app.mount('#app')


