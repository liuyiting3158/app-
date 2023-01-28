<template>
	<view class="charts-box">
		<qiun-data-charts type="column" :chartData="chartData" :errorShow="true" :echartsApp="true"
			:errorReload="true" background="none" @complete="complete" />
	</view>
</template>

<script>
	//收支柱状图
	export default {
		data() {
			return {
				chartData: {
					"categories": [
						"2016",
						"2017",
						"2018",
						"2019",
						"2020",
						"2021",
						"2022",
						"2023",
						"2024",
					],
					"series": [{
							"name": "目标值",
							"data": [
								35,
								36,
								31,
								33,
								13,
								34,
								34, 34, 34,
							]
						},
						{
							"name": "完成量",
							"data": [
								18,
								27,
								21,
								24,
								6,
								28, 34, 34, 34,
							]
						}
					]
				}
			}
		},
		methods: {
			complete(e) {
				// console.log(e)
			}
		}
	}
</script>

<style>
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>
