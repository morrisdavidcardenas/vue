import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex-extensions'

import category from "./category";
import product from "./product";
import user from "./user";
import shoppingList from "./shoppingList";

Vue.use(Vuex)

export default createStore(Vuex.Store, {
	plugins: [],
	modules: {
		category,
		product,
		user,
		shoppingList
	},
	mixins: {
		mutations: {
			changeState: function (state, changed) {
				Object.entries(changed)
					.forEach(([name, value]) => {
						state[name] = value
					})
			}
		}
	}
})