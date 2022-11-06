<template>
    <div class="container">
		<form action="" @submit="checkForm">
			<formItem v-if="errors.length">
				<b>Please correct the following error(s):</b>
					<div v-for="error in errors" :key="error">
						{{ error }}
					</div>
			</formItem>
			<br />
			<div class="row justify-content-center">
				<div class="col col-6">
					<p style="font-weight: bold; font-size:x-large">REGISTRO DE USUARIO</p>
					<label for="inputNombre" class="text-start">Name</label>
					<input type="text" class="form-control" id="inputNombre" placeholder="Name" 
					v-model="name"/>
					<br />
                    <label for="inputApellido" class="text-start">LastName</label>
					<input type="text" class="form-control" id="inputApellido" placeholder="LastName" 
					v-model="lastName"/>
					<br />
					<label for="inputEdad" class="form-label text-start">Age</label>
					<input type="number" class="form-control" id="inputEdad" placeholder="Age" 
					v-model="age" min="18" max="99"/>
					<br />
					<label for="inputEmail" class="form-label text-start">Email</label>
					<input type="email" class="form-control" id="inputEmail" placeholder="you@email.com" 
					v-model="email"/>
					<label for="inputPassword" class="form-label text-start">Password</label>
					<input type="password" class="form-control" id="inputPassword" placeholder="Password" 
					v-model="password"/>					
                    <br />
					<b-form-checkbox
						id="checkbox-1"
						v-model="isAdmin"
						name="checkbox-1"
						>
						Is Admin
					</b-form-checkbox>
					<br />
					<hr />
					<div class="row">
						<br />
						<div class="col-10"></div>
						<br />
						<div class="col-2">
							<input type="submit" class="btn btn-outline-warning btn-lg" value="AGREGAR" />
						</div>
					</div>
				</div>
			</div>
			<br />
		</form>
		<br />
	</div>
</template>

<script>
export default {
	name: "RegisterPage",
	components: {},
	data() {
		return {
			errors: [],
			people: [],			
			name: "",
			lastName: "",
			age:"",
			email: "",
			password: "",						
            isAdmin: false
		}
	},
    methods:{
		checkForm: async function (e) {
			e.preventDefault();
			this.errors = [];
			if (!this.name){
				this.errors.push("Name required.");
			}
			if (!this.lastName) {
				this.errors.push("LastName required.");
			}
			if (!this.age) {
				this.errors.push("Age required.");
			}
			if (!this.email) {
				this.errors.push("Email required.");
			} else if (!this.validateEmail(this.email)) {
				this.errors.push('Valid email required.');
			}
			if (!this.password) {
				this.errors.push("Password required.");
			}			
			if (!this.errors.length) {
				let user = {
					"name": this.name,
					"lastName": this.lastName,
					"age": this.age,
					"email": this.email,
					"password": this.password,					
					"isAdmin": this.isAdmin
				}
				await this.axios.post("https://63422eecba4478d47838d00e.mockapi.io/user", user);
				this.$router.replace('/login');
			}
		},
        cleanFields(){
			this.name = "";
			this.lastName = "";			
			this.age = 0;						
			this.email = "";
			this.password = "";			
        },
		validateEmail(email){
			var re = /\S+@\S+\.\S+/;
			if(email.match(re)) {
				return true;
			} else {
				return false;
			}
		},
        onReset(event) {
        event.preventDefault()
        this.form.checked = []
        }
    },
};
</script>

<style lang="scss" scoped>

</style>