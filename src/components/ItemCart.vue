<template>
	<tbody id="show-cart">
		<tr v-for="(value, index) in cart"
			:cart="cart"
			:index="index"
			@cartChanged="cart = $event">		
			<app-position :cart="cart"
						  :index="index"
						  @cartChanged="cart = $event"
						  ></app-position>
			<app-item-name :cart="cart"
						   :index="index"
						   @cartChanged="cart = $event"
						   ></app-item-name>
			<app-item-count :cart="cart"
							:index="index"
							@cartChanged="cart = $event"
							></app-item-count>
			<app-item-price :cart="cart"
							:index="index"
							@cartChanged="cart = $event"
							></app-item-price>
			<app-item-total :cart="cart"
							:index="index"
							@cartChanged="cart = $event"
							></app-item-total>		
		  </tr>
	  </tbody>
</template>

<script>
	import Position from './CartComponents/Position.vue'
	import ItemName from './CartComponents/ItemName.vue'
	import ItemCount from './CartComponents/ItemCount.vue'
	import ItemPrice from './CartComponents/ItemPrice.vue'
	import ItemTotal from './CartComponents/ItemTotal.vue'
	import FoodModals from './FoodModals.vue'
	
	export default {
		props: {
			cart: {
				type: Array
			},
			index: {
				default: 0
			}
		}
	}
</script>