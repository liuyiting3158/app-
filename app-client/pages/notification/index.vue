<template>
	<u-cell-group>
		<u-cell-item :icon="icons[item.type]" v-for="(item,index) in tableData" :key="index" :title="item.data.title"
			:label="item.data.sub_title" :arrow="false" @click="viewInfo(item)">
			<u-badge v-show="item.read_at === null" :is-dot="true" :absolute="false" slot="right-icon"></u-badge>
		</u-cell-item>
	</u-cell-group>
</template>

<script>
	import {
		responseDataFormat,
		tableDefaultData
	} from '@/common/tableDataHandle.js'
	export default {
		data() {
			return {
				...tableDefaultData(),
				icons: {
					sys_notify: 'setting'
				}
			};
		},
		onPullDownRefresh() {
			this.queryParams.page = 1
			this.tableData = []
			this.getData()
		},
		onReachBottom() {
			if (this.queryParams.page >= this.pagination.lastPage) {
				this.$toast.message('已经到底了')
				return
			}
			this.queryParams.page += 1
			this.getData()
		},
		created() {
			this.queryParams.page = 1
			this.getData()
		},
		methods: {
			getData() {
				this.$u.api.getNotificationList({
					...this.queryParams,
				}).then(res => {
					uni.stopPullDownRefresh()
					responseDataFormat(res, this)
				})
			},
			viewInfo(row) {
				row.read_at = true
				uni.navigateTo({
					url: `/pages/notification/info?id=${row.id}`
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
