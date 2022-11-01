export default {
	namespaced: true,
	state: {
		shoppingList:[],
	},
	getters: {
		get(state) {
			return state.shoppingList
		},
		getCount:(state)=>(productId)=> {
			let item = state.shoppingList.find(
				item => item.product.id == productId
			)
			return item ? item.count : 0
		},
	},
	mutations: {
		update(state,item) {
			const itemIndex = state.shoppingList.findIndex(i=>{
				return i.product.id == item.product.id
			})

			if (itemIndex == -1) {
				state.shoppingList.push({
					product: item.product,
					count: 1
				});
				return
			}

			state.shoppingList[itemIndex].count = item.count

			if (item.count <= 0) {
				state.shoppingCart.splice(itemIndex, 1)
			}
		},
	},
	actions: {
		async update({commit},item) {
			commit('update',item)
		},
	},
}