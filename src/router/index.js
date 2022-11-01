import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeIndex.vue')
	}, 
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginForm.vue')
	},
	{
		path: '/purchaseCatalog',
		name: 'purchaseCatalog',
		component: () => import('../views/PurchaseCatalog.vue')
	},
	{
		path: '/registerPage',
		name: 'registerPage',
		component: () => import('../views/RegisterPage.vue')
	},
	{
		path: '/userList',
		name: 'userList',
		component: () => import('../views/UserList.vue')
	},
	{
		path: '/shoppingCart',
		name: 'shoppingCart',
		component: () => import('../views/ShoppingCart.vue')
	},		
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router