<template>
    <!--    顶部标题-->
    <van-nav-bar title="我的"/>


    <!--    标题下方我的-->
    <div class="content" @click="toLogin">
        <div class="left">
            <van-icon name="user-o"/>
        </div>
        <div class="right">
            <text>登陆</text>
        </div>
    </div>

    <!--    我的下方的功能-->
    <van-cell title="系统消息" is-link url="https://github.com"/>
    <van-cell title="设置" is-link to="/Deal"/>
    <van-cell title="退出登陆" is-link to=""/>
</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: "User",
    data() {
        return {
            router: useRouter()
        }
    },
    methods: {
        toLogin() {
            this.router.push("/user/login")
        }
    }
}

</script>

<style scoped lang="less">
//我的
.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    //浅绿色背景色
    background-color: #8cbb67;

    .left {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 20px;
        //字体居中
        text-align: center;
        line-height: 50px;
    }

    .right {
        flex: 1;
        text-align: left;
    }
}
</style>
