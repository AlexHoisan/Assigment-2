<template>
	<td>
	  <span>{{ cart[index].count }}</span>
	  <div class='add-remove-buttons'>
		<button class='plus-item' :data-name='cart[index].name' @click="addItemToCart(cart[index].name, 0, 1)">+</button>
		<button class='substract-item' :data-name='cart[index].name' @click="removeItemFromCart(cart[index].name)"> - </button>
	  </div>
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
			removeItemFromCart(name) {
				for (let i = 0; i < this.cart.length; i++) {
					if (this.cart[i].name === name) {
						this.cart[i].count--;
						if (this.cart[i].count == 0) {
							this.cart.splice(i, 1);
						}
						break;
					}
				}
			},
			addItemToCart(name, price, count) {
				for (var i in this.cart) {
					if (this.cart[i].name === name) {
						this.cart[i].count += count;
						return;
					}
				}
				this.cart.push(item);
			}
		}
	}
</script>