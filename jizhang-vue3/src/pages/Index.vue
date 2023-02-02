<template>
    <!--头部    -->
    <van-nav-bar title="记账APP" >
        <template #right>
            <van-icon name="search" @click="search"/>
        </template>
    </van-nav-bar>
    <index-header/>
    <div class="recent-bill">近日账单</div>
    <Bill/>
    <Bill/>
    <Bill/>
    <Bill/>
    <Bill/>
    <Bill/>

    <van-icon class="bottom-add" name="add" @click="goDeal"/>

</template>

<script setup>
import IndexHeader from "../components/Index-header.vue";
import Bill from "../components/Bill.vue";
import {useRouter} from "vue-router";

const router = useRouter();


const search = () => {
    console.log("search");
    router.push("/search");
}

const goDeal = () => {
    router.push("/deal");
}

</script>

<style scoped lang="less">

.bottom-add {
    font-size: 50px;
    color: #84B585;
    position: fixed;
    //到屏幕右侧的距离10px
    right: 10px;
    //到屏幕底部的距离70px
    bottom: 70px;
    //大小
    width: 50px;
    height: 50px;


}

.recent-bill {
    font-size: 14px;
    margin-top: 10px;
    margin-left: 10px;
}


</style>
