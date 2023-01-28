<template>
	<BillEditer @submit="submit"></BillEditer>
</template>

<script>
	import BillEditer from '@/my-components/bill-editer/index.vue'
	export default {
		components: {
			BillEditer,
		},
		data() {
			return {

			}
		},
		methods: {
			submit(data) {
				this.$u.api.createCashFlow(data).then(res => {
					console.log(res)
					if (res.code == 0) {
						uni.switchTab({
							url: '/pages/index/index'
						})
					} else {
						this.$u.toast(res.message);
					}
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
