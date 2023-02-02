<template>

    <van-nav-bar
        title="用户登陆"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />


    <van-form @submit="onSubmit" class="login-form">
        <van-cell-group inset>
            <van-field class="login-form-username"
                       v-model="username"
                       name="用户名"
                       label="用户名"
                       placeholder="请输入用户名"
                       :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                登陆
            </van-button>
        </div>
    </van-form>

    <!--    用户注册，忘记密码-->
    <div class="text">
        <div class="text-left">
            没有账号？<a @click="toRegister" >立即注册</a>
        </div>
        <div class="text-right">
            <a href="/forget">忘记密码</a>
        </div>
    </div>


    <van-divider class="three-party">第三方登陆</van-divider>
    <div class="three">
        <van-icon name="qq" />
        <van-icon name="wechat" />
        <van-icon name="weibo" />
    </div>


</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const username = ref('');
const password = ref('');
const onSubmit = (values) => {
    console.log('submit', values);
};

const onClickLeft = () => {
    router.push("/user")
}

const toRegister = () => {
    router.push("/user/register")
}

</script>

<style scoped lang="less">

.login-form {
    //距离顶部的距离
    margin-top: 50px;

    .login-form-username {
        margin-bottom: 30px;
    }

}

.text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .text-left {
        margin-right: 20px;
        text-align: center;
        line-height: 50px;
    }
    .text-right {
        flex: 1;
        text-align: right;
    }
}


.three-party {
    margin-top: 100px;
}

.three{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //图标变大
    font-size: 30px;
    //左右边距
    padding: 0 100px;
}

</style>
