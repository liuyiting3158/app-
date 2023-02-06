<script setup lang="ts">
import {ref} from "vue";
import {showToast} from "vant";
import Index from "../pages/Home.vue";
import Statistics from "../pages/statistics.vue";
import Mine from "../pages/mine.vue";

const active = ref('index')

const onClickLeft = () => history.back();
const onClickRight = () => showToast('按钮');


</script>

<template>
    <!--主体内容-->
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




<style scoped lang="less">
//背景颜色灰色
body {
    background-color: #aaa;
}

</style>
