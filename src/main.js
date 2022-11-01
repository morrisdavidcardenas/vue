import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueForm from 'vue-form'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import router from './router'
import './styles.css'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueForm)
//Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.filter('url', function (value) {
	// Convierte el nombre del producto en la url donde esta la imagen
	value = value.toLowerCase()
	value = value.trim()
	value = value.replace(/[\s/]/g,'-')
	return `/${value}.jpg`
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
