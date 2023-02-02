<template class="all">


    <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />

    <van-tabs v-model:active="active" class="navbar">
        <van-tab title="类别">
            <search-bar class="search-bar"/>
            这里是类别的搜索结果
            <Bill/>
        </van-tab>
        <van-tab title="备注">
            <search-bar class="search-bar"/>
            这里是备注的搜索结果
            <Bill/>

        </van-tab>
        <van-tab title="商家">
            <search-bar class="search-bar"/>
            这里是商家的搜索结果
            <Bill/>

        </van-tab>
    </van-tabs>


</template>

<script setup>
import {ref} from "vue";
import {showToast} from "vant";
import SearchBar from "../components/search-bar.vue";
import {useRouter} from "vue-router";
import Bill from "../components/Bill.vue";

const router = useRouter();

const value = ref('');
const active = ref(0);
const onSearch = (val) => showToast(val);
const onCancel = () => showToast('取消');

const onClickLeft = () => {
    console.log("返回");
    router.back();
}
</script>

<style scoped lang="less">

.navbar {
    .search-bar {
        margin-bottom: 10px;
    }
}

</style>
