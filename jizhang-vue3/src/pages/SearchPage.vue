<template class="all">

    <!--最上方标题-->
    <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--    搜索条-->
    <form action="/">
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
    </form>

    <!--搜索的类别-->
    <van-tabs v-model:active="active" class="navbar">
        <van-tab title="类别">
            这里是类别的搜索结果
            <Bill/>
        </van-tab>
        <van-tab title="备注">
            这里是备注的搜索结果
            <Bill/>

        </van-tab>
        <van-tab title="商家">
            这里是商家的搜索结果
            <Bill/>
        </van-tab>
    </van-tabs>


</template>

<script>
import {ref} from "vue";
import {showToast} from "vant";
import {useRouter} from "vue-router";
import Bill from "../components/Bill.vue";

export default {
    name: "SearchPage",
    components: {
        Bill
    },
    data() {
        return {
            router: useRouter(),
            value: '',
            active: 0,
        }
    },
    methods: {
        onSearch(val) {
            showToast(val);
        },
        onCancel() {
            showToast('取消');
        },
        onClickLeft() {
            console.log("返回");
            this.router.back();
        }
    }
}

</script>

<style scoped lang="less">

.navbar {
    .search-bar {
        margin-bottom: 10px;
    }
}

</style>
