<template>
	<div>
		<div>
			<i class="ion-android-cart cart-icon" data-toggle="modal" data-target=".modal-dashboard"><span id="count-cart">{{ countCart() }}</span></i>
		</div>
		<div class="modal fade modal-dashboard" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-dashboard">
				<div class="modal-content modal-content-dashboard">
					<div class="row justify-content-end">
						<button type="button" class="close close-dashboard" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<section class="dashboard">
						<div class="container-fluid">
							<div class="row">
								<table>
									<thead>
										<tr>
											<th>Position</th>
											<th>Product</th>
											<th>Count</th>
											<th>Price / 1 Product ($)</th>
											<th>Total / Product ($)</th>
											<th> </th>
										</tr>
									</thead>
										<app-item-cart :cart="cart"></app-item-cart>
								</table>
								<div class="table-footer">
									<button id="clear-cart" @click="clearCart">Clear Cart</button>
									<div class="total">Total Cart: $ <span id="total-cart">{{ totalCart() }}</span></div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import FoodModals from './FoodModals.vue'
	import ItemCart from './ItemCart.vue'
	
	export default {
		props: {
			cart: {
			type: Array
			}
		},
		data: function() {
			return {
				dishes: [{
						img: './src/assets/img/1.jpg',
						name: 'Korean bibimbap with egg and vegetables',
						text: "Koreans believe it heals the body, releases energy and keeps illness away through the winter. 'We say it's Everything in a spoon!'",
						type: 'Second courses',
						price: 15.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/2.jpg',
						name: 'Simple italian pizza with cherry tomatoes',
						text: 'A variety of fresh tomatoes and herbs top this homemade Tomato-Ricotta Pizza, adding colorful appeal as well fresh flavor.',
						type: 'Second courses',
						price: 13.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/3.jpg',
						name: 'Chicken breast steak with vegetables',
						text: "Marinated to burst with flavour, chicken pieces are sizzled on a pan till they're cooked just right.",
						type: 'Second courses',
						price: 16.00,
						vegetarian: 'Non-Vegeterian products'
					},
					{
						img: './src/assets/img/4.jpg',
						name: 'Autumn pumpkin soup',
						text: 'Description',
						type: 'Entrees',
						price: 10.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/5.jpg',
						name: 'Paleo beef steak with vegetables',
						text: 'Description',
						type: 'Second courses',
						price: 35.00,
						vegetarian: 'Non-Vegeterian products'
					},
					{
						img: './src/assets/img/6.jpg',
						name: 'Healthy baguette with egg and vegetables',
						text: 'Description',
						type: 'Entrees',
						price: 9.00,
						vegetarian: 'Vegetarian products'
					},
					{
						img: './src/assets/img/7.jpg',
						name: 'Burger with cheddar and bacon',
						text: 'Description',
						type: 'Second courses',
						price: 13.00,
						vegetarian: 'Non-Vegeterian products'
					},
					{
						img: './src/assets/img/8.jpg',
						name: 'Granola with cherries and strawberries',
						text: 'Description',
						type: 'Salads',
						price: 8.00,
						vegetarian: 'Vegetarian products'
					}
				]
			}
		},
		methods: {
			clearCart() {
				this.cart = [];
			},
			totalCart() {
				let totalCost = 0;
				for (let i = 0; i < this.cart.length; i++) {
					totalCost += this.cart[i].price * this.cart[i].count;
				}
				return totalCost.toFixed(2);
			},
			countCart() {
				let totalCount = 0;
				for (let i = 0; i < this.cart.length; i++) {
					totalCount += this.cart[i].count;
				}
				return totalCount;
			}
		}
	}
</script>