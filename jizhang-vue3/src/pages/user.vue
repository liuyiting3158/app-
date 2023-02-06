<template>
    <!--    顶部标题-->
    <van-nav-bar title="我的"/>

    <!--    标题下方我的-->
    <div class="content" @click="toLogin">
        <div class="left">
            <van-icon name="user-o"/>
        </div>
        <div class="right">
            <text>登陆</text>
        </div>
    </div>

    <!--    我的下方使用天数，总记账 天数，总记账笔数-->
    <van-grid :column-num="3">
        <van-grid-item text="使用天数:0"></van-grid-item>
        <van-grid-item text="总记账天数:0"></van-grid-item>
        <van-grid-item text="总记账笔数:0"></van-grid-item>
    </van-grid>

    <!--    我的下方的功能-->
    <van-cell title="系统消息" is-link url="https://github.com"/>
    <van-cell title="设置" is-link to="index"/>
    <van-cell title="退出登陆" is-link to=""/>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const toLogin = () => {
    router.push("/user/login")
    //路由跳转

}
</script>

<style scoped lang="less">
//我的
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    //浅绿色背景色
    background-color: #8cbb67;

    .left {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 20px;
        //字体居中
        text-align: center;
        line-height: 50px;
    }

    .right {
        flex: 1;
        text-align: left;
    }
}
</style>
