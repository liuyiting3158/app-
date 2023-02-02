<template>
    <van-nav-bar title="我的"/>

    <my @click="toLogin"></my>


    <van-grid :column-num="3">
        <van-grid-item text="使用天数:0"></van-grid-item>
        <van-grid-item text="总记账天数:0"></van-grid-item>
        <van-grid-item text="总记账笔数:0"></van-grid-item>
    </van-grid>

    <van-cell title="系统消息" is-link url="https://github.com"/>
    <van-cell title="设置" is-link to="index"/>
    <van-cell title="退出登陆" is-link to=""/>
</template>

<script setup>
import My from "../components/my.vue";
import {useRouter} from "vue-router";

const router = useRouter();


const toLogin = () => {
    router.push("/user/login")
    //路由跳转

}
</script>

<style scoped>

</style>
