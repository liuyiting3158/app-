<template>
        <!-- 使用 title 插槽来自定义标题 -->
        <div  class="bill">
            <div class="left">
                <div class="top" >
                    <van-tag type="primary" v-for="(item,index) in type" :key="index">{{ item }}</van-tag>
                </div>
                <div class="bottom">备注：{{remark}}</div>
            </div>
            <div class="right">
                ¥{{money}}元
            </div>
        </div>

</template>

<script setup>

//向上传递数据props
const type=['吃饭','购物','交通','住宿','娱乐','其他']
const money=10089;
const remark='吃了好多饭'




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
