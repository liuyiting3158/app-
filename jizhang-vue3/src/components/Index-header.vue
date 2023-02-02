<template>
    <div class="header">
        <div class="top">本月支出(元)</div>
        <div class="second">¥{{ data[0].expend }}元</div>
        <div class="third">
            <div class="left">
                本月收入: <span>¥{{ data[0].income }}元</span>
            </div>
            <div class="right">
                月结余: <span> ¥{{ balance}}元</span>
            </div>
        </div>
    </div>
</template>

<script setup>

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

//#84B585
</script>

<style scoped lang="less">
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

    .third{//横着的两个div
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        .left{
            text-align: left;
        }
        .right{
            text-align: right;
        }

        span {
            color:#262626;
            font-size: 10px;
            font-weight: bold;
        }

    }

}

</style>
