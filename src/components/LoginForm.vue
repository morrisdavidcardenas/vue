<template>
	<div class="fcc m-0">
		<form action="" @submit="checkForm">
			<FormItem v-if="errors.length">
				<b>Please correct the following error(s):</b>
					<div v-for="error in errors" :key="error">
						{{ error }}
					</div>
			</FormItem>
			<div class="fc my-3">
				<label for="inputEmail" class="form-label text-start">Email</label>
				<input type="text" class="form-control" id="inputEmail" placeholder="you@email.com" 
					v-model="email"/>
			</div>
			<div class="fc my-3">
				<label class="form-label text-start">Contraseña</label>
				<input type="password" class="form-control" v-model="password" required name="password">
			</div> 
			<button type="submit" class="btn btn-success">INGRESAR</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "LoginForm",
	components: {},	
	data() {
		return {
			errors: [],
			email: '',
			password: ''
	}},
	methods:{
		passwordValidator: function (value) {
			let res = true
			if (value.length > 8) {
				res = false
			}
			return res;
		},
		nameValidator: function (value) {
			let res = true
			if (!value.includes('@')) {
				res = false
			}
			if (!value.includes('.com')) {
				res = false
			}
			return res;
		},
		checkForm: function (e) {
			e.preventDefault();
			this.errors = [];
			if (!this.email) {
				this.errors.push("Email required.");
			} else if (!this.validateEmail(this.email)) {
				this.errors.push('Valid email required.');
			}
			if (this.password.length < 6) {
				this.errors.push("Password must have 6 characters.");
			}
			if (!this.errors.length) {
				this.validateLogin(this.email, this.password);
			}
		},
		validateEmail(email){
			var re = /\S+@\S+\.\S+/;
			if(email.match(re)) {
				return true;
			} else {
				return false;
			}
		},
		async validateLogin(email,password){
			let userList = await this.axios.get("https://63422eecba4478d47838d00e.mockapi.io/user");
			console.log(userList.data);
			let findUser = userList.data.find(x => x.email === email);
			if (findUser === undefined) {
				alert("usuario o password incorrectos");
			} else {
				if (findUser.password === password) {
					localStorage.isAdmin = findUser.isAdmin;
					if (findUser.isAdmin) {
						alert("eres admin")					
					}
					else {
						alert("no eres admin")					
					}
					this.$router.replace('/shoppingCart');
				} else {
					alert("usuario o password incorrectos");					
				}
			}
		},		
	},
};
</script>

<style scoped>
</style>
