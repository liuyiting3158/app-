<template>
    <van-nav-bar title="账单详情" left-text="返回" left-arrow @click="toBack">
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>


</template>

<script setup>


import {useRouter} from "vue-router";

const router = useRouter();
const toBack = () => {
    //路由跳转
    router.back();

}


</script>

<style scoped>

</style>
