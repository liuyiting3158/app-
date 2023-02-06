<template>
    <van-nav-bar title="账单详情"   >
        <template #right>
            <van-icon name="search" size="18" @click="toSearch" />
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
    }
}



</script>

<style scoped>

</style>
