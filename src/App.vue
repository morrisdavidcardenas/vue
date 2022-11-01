<template>
	<div id="app">
		<div class="d-flex flex-row">
			<div class="d-flex position-relative">
				<img class="flex-shrink-0 me-0" height="150" src="../public/lima_restaurant.png">
			</div>
				<div class="w-100">
					<div>
					<h1 class="bold text-center">
						Pedidos Lima Restaurant
					</h1>
			</div>
					<div class="container text-center p-3">
						<div class="row w-100">
							<div class="col-3">
								<router-link to="/purchaseCatalog">Purchase Catalog</router-link>
							</div>
							<div class="col-3">
								<router-link to="/login">Login</router-link>
							</div>	
							<div class="col-3">
								<router-link to="/registerPage">Register</router-link>
							</div>	
							<div class="col-3">
								<router-link to="/userList" v-if="!isAdmin">User</router-link>
							</div>	
							<div class="col-3">
								<router-link to="/shoppingCart">Shopping Cart</router-link>
							</div>								
						</div>			
					</div>
				</div>
		</div>
		<router-view></router-view>		
	</div>
</template>

<script>

import NavBar from "./components/NavBar.vue";

export default {
	name: "App",
	components: {
	},
	data() {
		return {
		};
	},
	computed:{
		isAdmin(){
			if (localStorage.isAdmin === undefined) {
				localStorage.isAdmin = false;
			}
			return localStorage.isAdmin
		}
	},	
};
</script>

<style scoped>
.border-green {
  border-top: 2px solid #9fff31;
}
.total-bouncer {
	border-radius: 48px;
	z-index: 99;
	color: #fff;
	font-weight: bold;
	font-size: 32px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: fit-content;
}
.tent-logo {
  width: 100px;
  border-radius: 12px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
