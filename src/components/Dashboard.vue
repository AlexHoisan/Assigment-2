<template>
	<div>
		<div>
			<i class="ion-android-cart cart-icon" data-toggle="modal" data-target=".modal-dashboard" @click="showCart"><span id="count-cart">X</span></i>
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
									<tbody id="show-cart">

									</tbody>
								</table>
								<div class="table-footer">
									<button id="clear-cart">Clear Cart</button>
									<div class="total">Total Cart: $ <span id="total-cart"></span></div>
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
			listCart() {
				let cartCopy = [];
				for (let i=0; i < this.cart.length; i++) {
					let item = [];
					item.push(this.cart[i]);
					let itemCopy = {};
					for (let p=0; p < item.length; p++) {
						itemCopy[p] = item[p];
						itemCopy[p].total = (itemCopy[p].price * itemCopy[p].count).toFixed(2);
					}
					
					cartCopy.push(itemCopy);
					console.log("itemCopy");
					console.log(itemCopy);
				}
				console.log("cartCopy");
				console.log(cartCopy);
				return cartCopy;
				
			},
			
			displayCart() {
				let cartArray = this.listCart();
				let output = "";
				let position = 1;
				console.log('merge');
				console.log(cartArray);
				for (let i = 0; i < cartArray.length; i++) {
					output += `
							  <tr>
								<td>
								  <button class='delete-item' data-name='"+cartArray[i].name+"'>X</button>
								  <p>${position}</p>
								</td>
								<td>
								  ${cartArray[i].name}
								</td>
								<td>
								  <span>${cartArray[i].count}</span>
								  <div class='add-remove-buttons'>
									<button class='plus-item' data-name='${cartArray[i].name}'>+</button>
									<button class='substract-item' data-name='${cartArray[i].name}'> - </button>
								  </div>
								</td>
								<td>
								  ${cartArray[i].price}
								</td>
								<td>
								  ${cartArray[i].total}
								</td>
							  </tr>
							`

					position++;
					console.log('for');
				}
			$("#show-cart").html(output);
//				$("#count-cart").html(shoppingCart.countCart())
//				$("#total-cart").html(shoppingCart.totalCart());
			},
			
			showCart() {
				this.listCart();
				this.displayCart();
				console.log(this.cartCopy);
			}
		}
	}
</script>