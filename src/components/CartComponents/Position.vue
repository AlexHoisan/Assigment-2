<template>
	<td>
	  <button class='delete-item' :data-name="cart[index].name" @click="removeItemFromCartAll(cart[index].name)">X</button>
	  <p>{{ index +1 }}</p>
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
		methods: {
			removeItemFromCartAll(name) {
				for (let i = 0; i < this.cart.length; i++) {
					if (this.cart[i].name === name) {
						this.cart.splice(i, 1);
						break;
					}
				}
			}
		}
	}
</script>