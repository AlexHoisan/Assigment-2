<template>
	<td>
	  {{ cart[index].price }}
	</td>
</template>

<script>
	import FoodModals from './../FoodModals.vue'
	import ItemCart from './../ItemCart.vue'
	
	export default {
		props: {
			cart: {
				type: Array
			},			
			index: {
				default: 0
			}
		},
	}
</script>