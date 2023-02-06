<template>
    <van-nav-bar title="账单详情" left-text="返回" left-arrow>
        <template #right>
            <van-icon name="calendar-o" size="18" @click="time"/>
        </template>
    </van-nav-bar>


</template>

<script >

import {useRouter} from "vue-router";

export default {
    name: "Deal",
    data(){
        return {
            router: useRouter(),
        }
    },
    methods: {
        toBack() {
            this.router.back();
        },
        toSearch() {
            this.router.push("/search");
        },
        time(){
            
            this.router.push("/time");
        }
    }
}



</script>

<style scoped>

</style>
