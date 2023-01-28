const getters = {
	user: state => state.user.user,
	user_token: state => state.user.user_token,
	cur_cashbook: state => state.user.cur_cashbook,
	unread_count: state => state.user.unread_count,
}
export default getters
