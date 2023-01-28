export function responseDataFormat(response, th) {
	th.tableData.push(...response.data)

	let meta = response.pagination
	th.pagination = {
		page: meta.page,
		page_size: meta.page_size,
		total: meta.total
	}
}

export const tableDefaultData = () => {
	return {
		queryParams: {},
		tableData: [],
		pagination: {
			page: 1,
			page_size: 10,
			total: 0
		}
	}
}
