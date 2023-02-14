<template>
    <!-- 使用 title 插槽来自定义标题 -->
    <van-swipe-cell>
        <template #left>
            <van-button square type="primary" text="编辑" class="edit" @click="onEdit"/>
        </template>
        <div class="bill">
            <div class="left">
                <div class="top">
                    <van-tag type="primary" v-for="(item,index) in type" :key="index">{{ item }}</van-tag>
                </div>
                <div class="bottom">备注：{{ remark }}</div>
            </div>
            <div class="right">
                <div class="top">
                    ¥{{ money }}元
                </div>
                <div class="bottom">商家：{{ store }}</div>
            </div>
        </div>
        <!-- 使用 right 插槽来自定义右侧内容 -->
        <template #right>
            <van-button square type="danger" text="删除" class="delete" @click="onDelete(index)"/>
        </template>
    </van-swipe-cell>

</template>

<script lang="ts">
import {useRouter} from "vue-router";

export default {
    name: "Bill",
    props: {
        type: {
            type: Array,
            default: () => ['吃饭', '购物', '交通', '住宿', '娱乐', '其他']
        },
        money: {
            type: Number,
            default: 10086
        },
        remark: {
            type: String,
            default: '吃了好多饭啊'
        },
        store: {
            type: String,
            default: '沙县小吃'
        }
    },
    data() {
        return {
            router: useRouter()
        }
    },
    methods: {
        onDelete() {
            console.log('删除')
        },
        onEdit() {
            console.log('编辑')
            this.router.push("/deal");
        }
    }
}


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
.delete {
    background-color: #f44;
    color: #fff;
    height: 100%;
    width: 50px;
    font-size: 14px;
}
.edit {
    background-color: #84B585;
    color: #fff;
    height: 100%;
    width: 50px;
    font-size: 14px;
}

</style>
