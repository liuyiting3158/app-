<template>
    <!--头部    -->
    <van-nav-bar title="记账APP">
        <template #right>
            <van-icon name="search" @click="search"/>
        </template>
    </van-nav-bar>


    <!--    标题下方-->
    <div class="header">
        <div class="top">本月支出(元)</div>
        <div class="second">¥{{ expend }}元</div>
        <div class="third">
            <div class="left">
                本月收入: <span>¥{{ income }}元</span>
            </div>
            <div class="right">
                月结余: <span> ¥{{ balance }}元</span>
            </div>
        </div>
    </div>
    <div class="recent-bill">近日账单</div>


    <!--账单组件    -->
    <Bill v-for="item in billListTemp"
          :key="item.remark"
          :type="item.type"
          :money="item.money"
          :remark="item.remark"/>


    <!--    按钮-->
    <van-icon class="bottom-add" name="add" @click="goDeal"/>

</template>

<script>
import Bill from "../components/Bill.vue";
import {useRouter} from "vue-router";

export default {
    name: "Home",
    components: {
        Bill
    },
    data() {
        return {
            money: {
                income: 10286,
                expend: 2389,
            },
            router: useRouter(),
            billList: [
                {
                    type: ['吃饭'],
                    money: 10086,
                    remark: '吃了好多饭啊'
                },
                {
                    type: ['购物'],
                    money: 100826,
                    remark: '吃了好多饭啊'
                },
                {
                    type: ['交通'],
                    money: -1003286,
                    remark: '吃了好多饭啊'
                },
                {
                    type: ['住宿'],
                    money: -1003286,
                    remark: '吃了好多饭啊'
                },
                {
                    type: ['娱乐'],
                    money: 100816,
                    remark: '吃了好多饭啊'
                },
                {
                    type: ['其他'],
                    money: 1002186,
                    remark: '吃了好多饭啊'
                },
            ]

        }
    },
    methods: {
        search() {
            console.log("search");
            this.router.push("/search");
        },
        goDeal() {
            console.log("sb")
            this.router.push("/deal");
        }
    },
    computed: {
        balance() {
            return this.money.income - this.money.expend;
        },
        income() {
            let sum = 0;
            for (let i = 0; i < this.billList.length; i++) {
                if (this.billList[i].money > 0) {
                    sum += this.billList[i].money;
                }
            }
            return sum;
        },
        expend() {
            let sum = 0;
            for (let i = 0; i < this.billList.length; i++) {
                if (this.billList[i].money < 0) {
                    sum += this.billList[i].money;
                }
            }
            return sum;
        },
        billListTemp(){
            return this.billList.slice(0, 3);
        }
    }

}


</script>
<!--//#84B585-->

<style scoped lang="less">
.van-nav-bar {
    background-color: #84B585;
    color: #dedbdb;
    font-size: 20px;
    font-weight: bold;
}
//标题下方的样式开始
.header {
    background-color: #84B585;
    //字体灰色
    color: #dedbdb;
    padding: 10px 10px;

    .top {
        font-size: 12px;
        text-align: left;
        padding-top: 10px;
    }

    .second {
        //黑色字体
        color: #262626;
        font-size: 30px;
        font-weight: bold;
        text-align: left;
        margin-top: 5px;
    }

    .third { //横着的两个div
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;

        .left {
            text-align: left;
        }

        .right {
            text-align: right;
        }

        span {
            color: #262626;
            font-size: 10px;
            font-weight: bold;
        }

    }

}

//标题下方的样式结束


//底部按钮样式开始
.bottom-add {
    font-size: 50px;
    color: #84B585;
    position: fixed;
    //到屏幕右侧的距离10px
    right: 10px;
    //到屏幕底部的距离70px
    bottom: 70px;
    //大小
    width: 50px;
    height: 50px;


}

.recent-bill {
    font-size: 14px;
    margin-top: 10px;
    margin-left: 10px;
}

//底部按钮样式结束

</style>
