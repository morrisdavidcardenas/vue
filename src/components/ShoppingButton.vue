<template>
	<div>
		<div v-if="count <= 0">
			<button class="btn w-100 btn-success" @click="count++">
			COMPRAR <span class="fa-solid fa-cart-plus"></span>
			</button>
		</div>
		<div v-else class="d-flex justify-content-between align-items-center">
			<button class="btn w-25 btn-success" @click="buy(-1)">
				<span class="fa-solid fa-minus">-</span>
			</button>
			{{count}}
			<button class="btn w-25 btn-success" @click="buy(1)">
				<span class="fa-solid fa-plus">+</span>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {product: Object},
	data(){return {
		count:0
	}},
	computed:{
		shoppingList(){
			return this.$store.getters['shoppingList/get']
		},
	},
	methods: {
		buy(quantity) {
			this.count = this.count + quantity
			this.$emit('buy',{product:this.product,sum:this.count})
		}
	},
	watch:{
		count(value){
			this.$store.dispatch('shoppingList/update',{
				product:this.product,
				count:value
			})
		}
	},
	mounted(){
		this.count = this.$store.getters['shoppingList/getCount'](this.product.id)
	}
}
</script>

<style scoped>
</style>
