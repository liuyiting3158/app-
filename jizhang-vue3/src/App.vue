

<template>
    <!--主体内容:这里通过路由跳转页面-->
    <v-chart class="chart" :option="option" autoresize />
    <div class="content">
        <router-view v-if="isRouterAlive"></router-view>
    </div>

    <!--底部-->
    <van-tabbar v-model="active" >
        <van-tabbar-item icon="wap-home-o" name="index" to="/" >
            主页
        </van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" name="statistics" to="/statistics" >
            统计
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="mine" to="/user" >
            我的
        </van-tabbar-item>
    </van-tabbar>
</template>


<script  lang="ts">
import Home from "./pages/Home.vue";
import Statistics from "./pages/statistics.vue";
import User from "./pages/user.vue";
import {showToast} from "vant";
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'dark');

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});
export default {
    name: "App",
    data() {
        return {
            active: "index",
            isRouterAlive: true,
        }
    },
    components: {
        Index: Home,
        Statistics,
        User,
    },
    methods: {
        onClickLeft() {
            history.back();
        },
        onClickRight() {
            showToast('按钮');
        }
    },
    mounted() {

    }

}

</script>


<style scoped lang="less">
//背景颜色灰色
body {
    background-color: #aaa;
}
.chart {
  height: 100vh;
}
</style>

