<template>
	<div class="border p-3">
		<p class="mb-0 bold">{{product.name}}</p>
		<div class="relative my-2">
			<img class="w-100 card-height" :src="product.name | url">
			<span class="sign px-2 py-1 bold">
				S/.{{product.price}}
			</span>
		</div>
		<ShoppingButton :product="product" @buy="$emit('buy',$event)" :shoppingList="shoppingList"/>
	</div>
</template>

<script>
import ShoppingButton from "./ShoppingButton";
export default {
	components: { ShoppingButton },
	props: {
		product: Object,
		shoppingList: Array,
	},
};
</script>

<style scoped>
.card-height {
	height: 150px;
}

.border {
	border-radius: 12px;
}
.sign{
	position: absolute;
	bottom: 10px;
	right: 10px;
	background-color: #9fff31;
	border-radius: 12px;
}
</style>