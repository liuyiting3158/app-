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
    <!--    底部 -日期-商家-备注-->
    <div class="bottom">
        <div class="time">
            <van-cell title="日期：" :value="date" @click="show = true"/>
            <van-calendar v-model:show="show" @confirm="onConfirm"/>
        </div>
        <div class="type">
            <div class="text">商家：</div>
            <div class="type-content">
                <input type="text" class="type-content-input">
            </div>
        </div>
        <div class="type">
            <div class="text">备注：</div>
            <div class="type-content">
                <input type="text" class="type-content-input">
            </div>

        </div>
    </div>


</template>

<script >

import AddDeal from "../components/AddDeal.vue";
import Expend from "../components/Expend.vue";
import InCome from "../components/InCome.vue";
import {useRouter} from "vue-router";

export default {
    name: "Deal",
    components: {
        AddDeal,
        Expend,
        InCome
    },
    data() {
        return {
            active: 0,
            date: '',
            show: false,
            router: useRouter(),
        }
    },
    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(value) {
            this.show = false;
            this.date = this.formatDate(value);
        },
        onClickLeft() {
            this.router.back();
        }
    }
}





</script>

<style scoped lang="less">

van-tabs {
    .card {
        margin-top: 10px;
        //圆角
        border-radius: 10px;
    }
}

// 底部 -日期-商家-备注开始
.type {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    //下边框
    border-bottom: 1px solid #e5e5e5;
    height: 40px;

    .text {
        line-height: 40px;
        text-align: center;
        margin-left: 17px;
        font-size: 14px;
    }

    .type-content {
        flex: 1;

        .type-content-input {
            width: 90%;
            height: 35px;
            margin-right: 10px;
            font-size: 14px;
            padding-left: 10px;
            border: none;
            //文字右对齐

            text-align: right;
            color: #969799;
        }
    }

}

// 底部 -日期-商家-备注结束

</style>
