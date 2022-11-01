import axios from 'axios';
let productUrl = 'https://63422eecba4478d47838d00e.mockapi.io/product';

export default {
	namespaced: true,
	state: {
		productList: []
	},
	getters: {
		getProductList(state) {
			return state.productList;
		},
	},
	mutations: {
		setProductList(state, payload) {
			state.productList = payload
		},
	},
	actions: {
        async get({
            commit
        }) {
            await axios.get(productUrl).then((response) => {
                commit('changeState', {
					productList:response.data
				})
            })
        },
        async create({
            commit
        }, data) {
            await axios.post(productUrl,data).then((response) => {
                console.log('response.data',response.data);
            })
        },
	},
}