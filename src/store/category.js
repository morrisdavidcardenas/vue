import axios from 'axios';
let categoryUrl = 'https://63422eecba4478d47838d00e.mockapi.io/category';

export default {
	namespaced: true,
    state: {
        categoryList: []
    },
    getters: {
        getCategoryList(state) {
            return state.categoryList;
        }
    },
    mutations: {
        setCategoryList(state, payload) {
            state.categoryList = payload;
        }
    },
    actions: {
        async get({
            commit
        }) {
            await axios.get(categoryUrl).then((response) => {
                commit('changeState',{
					categoryList:response.data
				})
            })
        },
        async create({
            commit
        }, data) {
            await axios.post(categoryUrl,data).then((response) => {
                console.log('response.data',response.data);
            })
        },        
    },
    modules: {}
}