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

    <div class="echarts-box">
        <div id="myEcharts" :style="{ width: '900px', height: '300px' }"></div>
    </div>
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
    setup() {
        /// 声明定义一下echart
        let echart = echarts;

        onMounted(() => {
            initChart();
        });

        onUnmounted(() => {
            echart.dispose;
        });
        function initChart() {
            let chart = echart.init(document.getElementById("myEcharts"), "dark");
      // 把配置和数据放这里
            chart.setOption({
                xAxis: {
                    type: "category",
                    data: [
                        "一月",
                        "二月",
                        "三月",
                        "四月",
                        "五月",
                        "六月",
                        "七月",
                        "八月",
                        "九月",
                        "十月",
                        "十一月",
                        "十二月"
                    ]

                },
                tooltip: {
                    trigger: "axis"
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        data: [
                            820,
                            932,
                            901,
                            934,
                            1290,
                            1330,
                            1320,
                            801,
                            102,
                            230,
                            4321,
                            4129
                        ],
                        type: "line",
                        smooth: true
                    }
                ]
            });
            window.onresize = function() {
            //自适应大小
                chart.resize();
            };
        }
        return {
            initChart
        }
    },
    // mounted() {
    //     var that = this;
    //     // 监听浏览器是否关闭
    //     window.addEventListener('beforeunload', e => {
    //         localStorage.setItem('ref', 'yes');
    //     });
    //     let ref = localStorage.getItem("ref");
    //     if(ref == "yes") {
    //         that.browerStatus();
    //     }
    // },
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
