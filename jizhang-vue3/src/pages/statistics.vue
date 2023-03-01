<template>
    <van-nav-bar title="账单详情" >
        <template #right>
            <van-icon name="calendar-o" size="25" :value="date" @click="show = true"/>
            <van-calendar 
                :show="show"
                type="range"
                @click-close-icon="show = false"
                @confirm="onConfirm"
                :show-confirm="false"
            />
        </template>
    </van-nav-bar>
    
    <div id="container1" style="width: 800px;height:500px;"></div>
    <div id="container2" style="width: 800px;height:500px;"></div>
    

</template>

<script >
import {useRouter} from "vue-router";
import * as echarts from "echarts";
export default {
    name: "Deal",
    data(){
         date: '2021-01-01 - 2021-01-31';
         show: false;
         router: useRouter()
    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('container1'));
        var myChart2 = echarts.init(document.getElementById('container2'));
        //绘制折线图
        myChart1.setOption({
            title: {
                text: '月支出'
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0', '5', '10', '15', '20', '25', '30']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
                }
            ]
        });
        //绘制饼状图
        myChart2.setOption({
            title: {
                text: '月支出分类',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series:[
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '餐饮' },
                        { value: 735, name: '日用品' },
                        { value: 580, name: '出行' },
                        { value: 484, name: '娱乐' },
                        { value: 300, name: '其他' }
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
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
.echartDiv{
    width: 100%;
    height:400px;
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
