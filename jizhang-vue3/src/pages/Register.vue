<template>
    <!--    注册标题-->
    <van-nav-bar
        title="用户注册"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <!--    用户注册填写框-->
    <van-cell-group class="register-form">
        <van-field class="register-form-area"
                   v-model="username"
                   label="用户名"
                   placeholder="请输入用户名"
                   clearable
                   required
        />
        <van-field class="register-form-area"
                   v-model="phone"
                   label="手机号"
                   placeholder="请输入邮箱"
                   clearable
                   required
                   type="email"
        />
        <van-field class="register-form-area"
                   v-model="password"
                   label="密码"
                   placeholder="请输入密码"
                   clearable
                   required
                   type="password"
        />
        <van-field class="register-form-area"
                   v-model="password2"
                   label="确认密码"
                   placeholder="请再次输入密码"
                   clearable
                   required
                   type="password"
        />

        <!--        注册按钮-->
        <van-button
            class="register-button"
            type="primary"
            round block
            @click="onSubmit"
        >
            注册
        </van-button>
    </van-cell-group>
</template>

<script >
import {useRouter} from "vue-router";
import {ref} from "vue";

export default {
    name: "Register",
    data() {
        return {
            username: "",
            password: "",
            password2: "",
            phone: "",
            router: useRouter(),
        }
    },
    methods: {
        onClickLeft() {
            this.router.back();
        },
        onSubmit() {
            if (this.password !== this.password2) {
                alert("两次密码不一致");
                return;
            }
            if (this.username === "") {
                alert("用户名不能为空");
                return;
            }
            if (this.phone === "") {
                alert("手机号不能为空");
                return;
            }
            if (this.password === "") {
                alert("密码不能为空");
                return;
            }
            if (this.password2 === "") {
                alert("确认密码不能为空");
            }
        }
    }
}




</script>


<style scoped lang="less">
.register-button {
    margin: 16px;
    //宽度
    width: 90%;

}

.register-form {
    .register-form-area {
        margin: 20px;
        //宽度
        width: 90%;
    }
}


</style>
