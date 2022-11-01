<template>
	<div>
		<div v-for="item,i in shoppingList" :key="i">
			<div class="d-flex flex-row w-100 border">
				<div class="col-4">
					{{item.product.name}}
				</div>
				<div class="col-4">
					<ShoppingButton class="w-50" :product="item.product" />
				</div>
				<div class="col-4 text-center">
					{{item.product.price*item.count}}
				</div>					
			</div>
		</div>
	</div>
</template>

<script>
import ShoppingButton from "@/components/ShoppingButton.vue";
export default {
	components:{
		ShoppingButton
	},
	data() {
		return {
			
		}
	},
	computed: {
		shoppingList(){
			return this.$store.getters['shoppingList/get']
		}
	},
	methods: {
		
	},
}
</script>

<style scoped>

</style>