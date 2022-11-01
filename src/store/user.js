import axios from 'axios';
let userUrl = 'https://63422eecba4478d47838d00e.mockapi.io/user';

export default {
    namespaced: true,
    state: {
        userList: []
    },
    getters: {
        getUserList(state) {
            return state.userList
        }
    },
    mutations: {
        setUserList(state, payload) {
            state.users = payload
        }
    },
    actions: {
        async get({
            commit
        }) {
            await axios.get(userUrl).then((response) => {
                commit('changeState',{
					userList:response.data
				})
            })
        },
        async create({
            commit
        }, data) {
            await axios.post(userUrl,data).then((response) => {
                console.log('response.data',response.data);
            })
        },        
    },
    modules: {}
}