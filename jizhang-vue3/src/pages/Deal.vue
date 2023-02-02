<template>
    <van-nav-bar title="添加交易" left-text="返回" left-arrow
                 @click-left="onClickLeft">
        <template #right>
            <van-icon name="success" size="18"/>
        </template>
    </van-nav-bar>

    <van-tabs v-model:active="active" type="card" class="card">
        <van-tab title="支出">
            <AddDeal/>
            请选择分类：
            <Expend/>
        </van-tab>
        <van-tab title="收入">
            <AddDeal/>
            请选择分类：
            <InCome/>
        </van-tab>
    </van-tabs>
    <AddDealBottom/>





</template>

<script setup>

import {ref} from "vue";
import AddDeal from "../components/AddDeal.vue";
import Expend from "../components/Expend.vue";
import InCome from "../components/InCome.vue";
import AddDealBottom from "../components/AddDealBottom.vue";

const onClickLeft = () => {
    history.back();
}
const active = ref(0);




</script>

<style scoped lang="less">

van-tabs {
    .card {
        margin-top: 10px;
        //圆角
        border-radius: 10px;
    }
}

</style>
