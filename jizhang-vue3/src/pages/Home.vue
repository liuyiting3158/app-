<template>
    <!--头部    -->
    <van-nav-bar title="记账APP">
        <template #right>
            <van-icon name="search" @click="search"/>
        </template>
    </van-nav-bar>


    <!--    标题下方-->
    <div class="header">
        <div class="top">本月支出(元)</div>
        <div class="second">¥{{ data[0].expend }}元</div>
        <div class="third">
            <div class="left">
                本月收入: <span>¥{{ data[0].income }}元</span>
            </div>
            <div class="right">
                月结余: <span> ¥{{ balance }}元</span>
            </div>
        </div>
    </div>
    <div class="recent-bill">近日账单</div>


    <!--账单组件    -->
    <Bill/>


    <!--    按钮-->
    <van-icon class="bottom-add" name="add" @click="goDeal"/>

</template>

<script setup>
import Bill from "../components/Bill.vue";
import {useRouter} from "vue-router";

const router = useRouter();

//向上传递数据props
import {computed, ref} from "vue";

const income = ref(100.0);

const data = [
    {
        income: 11000.0,
        expend: 320.0,
    }
]

const balance = computed(() => {
    return data[0].income - data[0].expend;
})


const search = () => {
    console.log("search");
    router.push("/search");
}

const goDeal = () => {
    router.push("/deal");
}

</script>
<!--//#84B585-->

<style scoped lang="less">
//标题下方的样式开始
.header {
    background-color: #84B585;
    //字体灰色
    color: #dedbdb;
    padding: 10px 10px;

    .top {
        font-size: 12px;
        text-align: left;
        padding-top: 10px;
    }

    .second {
        //黑色字体
        color: #262626;
        font-size: 30px;
        font-weight: bold;
        text-align: left;
        margin-top: 5px;
    }

    .third { //横着的两个div
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;

        .left {
            text-align: left;
        }

        .right {
            text-align: right;
        }

        span {
            color: #262626;
            font-size: 10px;
            font-weight: bold;
        }

    }

}
//标题下方的样式结束


//底部按钮样式开始
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

//底部按钮样式结束

</style>
