<template>
	<BillEditer :value="id" @submit="submit"></BillEditer>
</template>

<script>
	import BillEditer from '@/my-components/bill-editer/index.vue'
	export default {
		components: {
			BillEditer,
		},
		data() {
			return {
				id: null
			}
		},
		methods: {
			submit(data) {
				this.$u.api.updateCashflow(data).then(res => {
					if (res.code == 0) {
						uni.navigateBack()
					} else {
						this.$u.toast(res.message);
					}
				})
			}
		},
		onLoad(options) {
			if (options.id) {
				this.id = options.id
			}
		},
	}
</script>

<style lang="scss">

</style>
