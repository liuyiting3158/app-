

<template>
    <!--主体内容:这里通过路由跳转页面-->
    <div class="content">
        <router-view/>
    </div>

    <!--底部-->
    <van-tabbar v-model="active" >
        <van-tabbar-item icon="wap-home-o" name="index" to="/" >
            主页
        </van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" name="statistics" to="/statistics" >
            统计
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="mine" to="/user" >
            我的
        </van-tabbar-item>
    </van-tabbar>
</template>


<script  lang="ts">
import Home from "./pages/Home.vue";
import Statistics from "./pages/statistics.vue";
import User from "./pages/user.vue";
import {showToast} from "vant";

export default {
    name: "App",
    data() {
        return {
            active: 0,
        }
    },
    components: {
        Index: Home,
        Statistics,
        User,
    },
    methods: {
        onClickLeft() {
            history.back();
        },
        onClickRight() {
            showToast('按钮');
        }
    },
    mounted() {

    }
}

</script>

<style scoped lang="less">
//背景颜色灰色
body {
    background-color: #aaa;
}

</style>
