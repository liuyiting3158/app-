<template>
    <div class="content" >
        <div class="left">
            <van-icon name="user-o" />
        </div>
        <div class="right">
            <text>登陆</text>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped lang="less">
.content{
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
