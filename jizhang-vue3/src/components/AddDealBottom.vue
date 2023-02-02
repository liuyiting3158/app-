<template>
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

<script setup>

import {ref} from "vue";

const date = ref('');
const show = ref(false);

const formatDate = (date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value) => {
    show.value = false;
    date.value = formatDate(value);
};


</script>

<style scoped lang="less">
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

</style>
