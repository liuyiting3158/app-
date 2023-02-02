<template>
    <div class="content">
        <div class="content-left">
            <!-- 可以使用 CellGroup 作为容器 -->
            <van-cell-group inset>
                <van-field
                    v-model="value"
                    label="请输入金额"
                    placeholder="请输入金额"
                />
            </van-cell-group>

        </div>
        <div class="content-right">
            <van-icon name="photograph"/>
        </div>
    </div>
    <van-divider/>

</template>

<script setup>

import {ref} from "vue";

const value=ref(0);

</script>

<style scoped lang="less">

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

    .content-left {
        font-size: 30px;
        color: #84B585;
    }

    .content-right {
        font-size: 30px;
        color: #84B585;
        //居中
        align-self: center;
    }
}

</style>
