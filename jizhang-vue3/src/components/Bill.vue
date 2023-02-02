<template>
        <!-- 使用 title 插槽来自定义标题 -->
        <div  class="bill">
            <div class="left">
                <div class="top">
                    <van-tag type="primary">飞机</van-tag>
                    <van-tag type="primary">火车</van-tag>
                    <van-tag type="primary">坦克</van-tag>
                </div>
                <div class="bottom">备注：</div>
            </div>
            <div class="right">
                ¥100元
            </div>
        </div>

</template>

<script setup>

</script>

<style scoped lang="less">
.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}

.bill {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: #fff;
    //圆角
    border-radius: 15px;
    .left {
        display: flex;
        flex-direction: column;

        .top {
            display: flex;
            flex-direction: row;
            .van-tag {
                margin-right: 5px;
            }
        }

        .bottom {
            font-size: 14px;
            color: #999;
        }



    }

    .right {
        font-size: 20px;
        color: #84B585;
        //字体上下剧中
        align-self: center;
    }
}

</style>
