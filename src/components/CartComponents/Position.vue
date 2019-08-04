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
				console.log('function');
				for (let i = 0; i < this.cart.length; i++) {
					console.log('for');
					if (this.cart[i].name === name) {
						console.log('if');
						this.cart.splice(i, 1);
						break;
					}
				}
			}
		}
	}
</script>