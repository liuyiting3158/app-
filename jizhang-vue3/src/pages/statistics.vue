<template>
    <van-nav-bar title="账单详情" left-text="返回" left-arrow>
        <template #right>
            <van-icon name="calendar-o" size="25" value="{{ date }}" bind:click="onDisplay"/>
            <van-calendar show="{{ show }}" type="range" bind:close="onClose" bind:confirm="onConfirm"></van-calendar>
        </template>
    </van-nav-bar>
    
</template>

<script >
import {useRouter} from "vue-router";

export default {
    name: "Deal",
    data(){
        return {
            date:'',
            show:false,
            router: useRouter()
        }
    },
    
    methods: {
        toBack() {
            this.router.back();
        },
        onDisplay() {
            this.show = true;
        },
        onClose() {
            this.show = false;
        },
        onConfirm(event) {
            this.show = false;
            this.date = event.detail;
        },
        
    }
}

</script>
<style lang="less" >
.van-nav-bar {
    background-color: #84B585;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    .van-nav-bar__left {
        position: absolute;
        top: 0;
        left: 0;
        height: 44px;
        line-height: 44px;
        color: #000;
        font-size: 16px;
        .van-icon {
            margin-left: 10px;
        }
    }
    .van-nav-bar__title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .van-nav-bar__right {
        position: absolute;
        top: 0;
        right: 0;
        height: 44px;
        line-height: 44px;
        color: #000;
        font-size: 16px;
        .van-icon {
            margin-right: 5px;
        }
    }
}
</style>
