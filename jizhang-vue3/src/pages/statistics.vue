<template>
    <van-nav-bar title="账单详情" left-text="返回" left-arrow>
        <template #right>
            <van-icon name="calendar-o" size="25" value="{{ date }}" bind:click="onDisplay"/>
            <van-calendar
                :show="show"
                @click-close-icon="show = false"
                @confirm="onConfirm"
                :show-confirm="false"
            />
        </template>
    </van-nav-bar>

    <div class="page-line-chart">
        <h4>简单折线图</h4>
        <ve-line :data="chartData"></ve-line>
    </div>
</template>


<script >
import {useRouter} from "vue-router";

export default {
    name: "Deal",
    data(){
        return {
            chartData: {
                columns: ['日期', '支出', '收入'],
                rows: [
                    {日期: '1/1', 支出: 100, 收入: 200},
                    {日期: '1/2', 支出: 200, 收入: 300},
                    {日期: '1/3', 支出: 300, 收入: 400},
                    {日期: '1/4', 支出: 400, 收入: 500},
                    {日期: '1/5', 支出: 500, 收入: 600},
                    {日期: '1/6', 支出: 600, 收入: 700},
                    {日期: '1/7', 支出: 700, 收入: 800},
                    {日期: '1/8', 支出: 800, 收入: 900},
                    {日期: '1/9', 支出: 900, 收入: 1000},
                    {日期: '1/10', 支出: 1000, 收入: 1100},
                    {日期: '1/11', 支出: 1100, 收入: 1200},
                    {日期: '1/12', 支出: 1200, 收入: 1300},
                    {日期: '1/13', 支出: 1300, 收入: 1400},
                    {日期: '1/14', 支出: 1400, 收入: 1500},
                    {日期: '1/15', 支出: 1500, 收入: 1600},
                    {日期: '1/16', 支出: 1600, 收入: 1700},
                    {日期: '1/17', 支出: 1700, 收入: 1800},
                    {日期: '1/18', 支出: 1800, 收入: 1900},
                    {日期: '1/19', 支出: 1900, 收入: 2000},
                    {日期: '1/20', 支出: 2000, 收入: 2100},
                    {日期: '1/21', 支出: 2100, 收入: 2200},
                    {日期: '1/22', 支出: 2200, 收入: 2300},
                    {日期: '1/23', 支出: 2300, 收入: 2400},
                    {日期: '1/24', 支出: 2400, 收入: 2500},
                    {日期: '1/25', 支出: 2500, 收入: 2600},
                    {日期: '1/26', 支出: 2600, 收入: 2700},
                    {日期: '1/27', 支出: 2700, 收入: 2800},
                    {日期: '1/28', 支出: 2800, 收入: 2900},
                    {日期: '1/29', 支出: 2900, 收入: 3000},
                    {日期: '1/30', 支出: 3000, 收入: 3100},
                    {日期: '1/31', 支出: 3100, 收入: 3200}
                ]
            },
            date: '2021-01-01',
            data: '',
            show: false,
            router: useRouter()
        }
    },
    inject: ["reload"], //注入reload方法
    created() {
    },
    mounted() {
        var that = this;
        // 监听浏览器是否关闭
        window.addEventListener('beforeunload', e => {
            localStorage.setItem('ref', 'yes');
        });
        let ref = localStorage.getItem("ref");
        if(ref == "yes") {
            that.browerStatus();
        }
    },
    methods: {
        toBack() {
            this.router.back();
        },
        onDisplay() {
            this.show = true;
        },
        formatDate(date) {
            date = new Date(date);
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(event) {
            this.show = false;
            this.date = `${this.formatDate(event.detail.start)} - ${this.formatDate(event.detail.end)}`;
        },
        onCancel() {
            this.show = false;
        },
        browerStatus() {
            localStorage.setItem('ref', 'no');
            this.reload();
        }
    }
}

</script>
<style lang="less" >
.page-line-chart {
    padding: 10px;
    h4 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
    }
}
.van-nav-bar {
    background-color: #84B585;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    .van-nav-bar__left {
        position: absolute;
        top: 0;
        left: 0;
        height: 44px;
        line-height: 44px;
        color: #000;
        font-size: 16px;
        .van-icon {
            margin-left: 10px;
        }
    }
    .van-nav-bar__title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .van-nav-bar__right {
        position: absolute;
        top: 0;
        right: 0;
        height: 44px;
        line-height: 44px;
        color: #000;
        font-size: 16px;
        .van-icon {
            margin-right: 5px;
        }
    }
}
</style>
